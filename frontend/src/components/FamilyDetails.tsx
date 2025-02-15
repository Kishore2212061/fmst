import React, { useEffect } from "react";
import { create } from "zustand";
import axios from "axios";

interface DropdownStore {
  religions: { id: number; name: string }[];
  fetchReligions: () => void;
}

const useDropdownStore = create<DropdownStore>((set) => ({
  religions: [],
  fetchReligions: async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/religion");
      set({ religions: response.data || [] });
    } catch (error) {
      console.error("Error fetching religions:", error);
    }
  },
}));

const FamilyDetails: React.FC<{ register: any }> = ({ register }) => {
  const { religions, fetchReligions } = useDropdownStore();

  useEffect(() => {
    fetchReligions();
  }, []);

  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold">Father's Name</label>
      <input {...register("fatherName")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />

      <label className="block text-lg font-semibold">Mother's Name</label>
      <input {...register("motherName")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />

      <label className="block text-lg font-semibold">Religion</label>
      <select {...register("religion")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        {religions.map((religion) => (
          <option key={religion.id} value={religion.name}>
            {religion.name}
          </option>
        ))}
      </select>

      <label className="block text-lg font-semibold">Community</label>
      <input {...register("community")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />

      <label className="block text-lg font-semibold">Caste</label>
      <input {...register("caste")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />
    </div>
  );
};

export default FamilyDetails;
