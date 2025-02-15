import React, { useEffect } from "react";
import { create } from "zustand";
import axios from "axios";

interface DropdownStore {
  bloodGroups: { id: number; name: string }[];
  fetchBloodGroups: () => void;
}

const useDropdownStore = create<DropdownStore>((set) => ({
  bloodGroups: [],
  fetchBloodGroups: async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/blood-groups");
      set({ bloodGroups: response.data || [] });
    } catch (error) {
      console.error("Error fetching blood groups:", error);
    }
  },
}));

const MedicalAndWork: React.FC<{ register: any }> = ({ register }) => {
  const { bloodGroups, fetchBloodGroups } = useDropdownStore();

  useEffect(() => {
    fetchBloodGroups();
  }, []);

  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold">Blood Group</label>
      <select {...register("bloodGroup")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        {bloodGroups.map((group) => (
          <option key={group.id} value={group.name}>
            {group.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MedicalAndWork;
