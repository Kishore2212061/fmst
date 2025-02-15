import React, { useEffect } from "react";
import { create } from "zustand";
import axios from "axios";

interface DropdownStore {
  designations: { id: number; name: string }[];
  fetchDesignations: () => void;
}

const useDropdownStore = create<DropdownStore>((set) => ({
  designations: [],
  fetchDesignations: async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/designation");
      set({ designations: response.data || [] });
    } catch (error) {
      console.error("Error fetching designations:", error);
    }
  },
}));

const DesignationDetails: React.FC<{ register: any }> = ({ register }) => {
  const { designations, fetchDesignations } = useDropdownStore();

  useEffect(() => {
    fetchDesignations();
  }, []);

  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold">Designation</label>
      <select {...register("designation")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        {designations.map((designation) => (
          <option key={designation.id} value={designation.name}>
            {designation.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DesignationDetails;
