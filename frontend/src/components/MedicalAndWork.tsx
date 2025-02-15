import React from "react";

const MedicalAndWork: React.FC<{ register: any }> = ({ register }) => {
  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold">Blood Group</label>
      <select {...register("bloodGroup")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        <option value="A+">A+</option>
        <option value="B+">B+</option>
        <option value="O+">O+</option>
      </select>
    </div>
  );
};

export default MedicalAndWork;