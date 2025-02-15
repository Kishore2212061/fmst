import React, { useEffect, useState } from "react";
import { create } from "zustand";
import axios from "axios";

interface DropdownStore {
  salutations: { id: number; name: string }[];
  genders: { id: number; name: string }[];
  maritalStatuses: { id: number; name: string }[];
  fetchDropdowns: () => void;
}

const useDropdownStore = create<DropdownStore>((set) => ({
  salutations: [],
  genders: [],
  maritalStatuses: [],
  fetchDropdowns: async () => {
    try {
      const [salutationsRes, gendersRes, maritalStatusesRes] = await Promise.all([
        axios.get("http://localhost:5000/api/salutations"),
        axios.get("http://localhost:5000/api/genders"),
        axios.get("http://localhost:5000/api/marital-statuses"),
      ]);
      set({
        salutations: salutationsRes.data || [],
        genders: gendersRes.data || [],
        maritalStatuses: maritalStatusesRes.data || [],
      });
    } catch (error) {
      console.error("Error fetching dropdowns:", error);
    }
  },
}));

const PersonalInfo: React.FC<{ register: any; watch: any; setValue: any }> = ({ register, watch }) => {
  const { salutations, genders, maritalStatuses, fetchDropdowns } = useDropdownStore();
  const [filteredGenders, setFilteredGenders] = useState<{ id: number; name: string }[]>([]);
  const [selectedSalutation, setSelectedSalutation] = useState<string>("");

  useEffect(() => {
    fetchDropdowns();
  }, []);

  // Track salutation changes properly
  useEffect(() => {
    const subscription = watch((data:any) => {
      setSelectedSalutation(data.salutation);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // Filter gender list based on selected salutation
  useEffect(() => {
    if (!genders.length) return;

    if (selectedSalutation === "Mr.") {
      setFilteredGenders(genders.filter((g) => g.name === "Male"));
    } else {
      setFilteredGenders(genders);
    }
  }, [selectedSalutation, genders]);

  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold">Salutation</label>
      <select {...register("salutation")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        {salutations.map((salutation) => (
          <option key={salutation.id} value={salutation.name}>
            {salutation.name}
          </option>
        ))}
      </select>

      <label className="block text-lg font-semibold">Name</label>
      <input {...register("name")} style={{ textTransform: "uppercase" }} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />

      <label className="block text-lg font-semibold">Gender</label>
      <select {...register("gender")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        {filteredGenders.map((gender) => (
          <option key={gender.id} value={gender.name}>
            {gender.name}
          </option>
        ))}
      </select>

      <label className="block text-lg font-semibold">Marital Status</label>
      <select {...register("maritalStatus")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        {maritalStatuses.map((status) => (
          <option key={status.id} value={status.name}>
            {status.name}
          </option>
        ))}
      </select>

      <label className="block text-lg font-semibold">Date of Birth</label>
      <input type="date" {...register("dob")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />
    </div>
  );
};

export default PersonalInfo;
