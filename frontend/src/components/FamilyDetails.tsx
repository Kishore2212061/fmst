import React from "react";

const FamilyDetails: React.FC<{ register: any }> = ({ register }) => {
  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold">Father's Name</label>
      <input {...register("fatherName")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />

      <label className="block text-lg font-semibold">Mother's Name</label>
      <input {...register("motherName")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />

      <label className="block text-lg font-semibold">Religion</label>
      <select {...register("religion")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        <option value="Hindu">Hindu</option>
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
      </select>

      <label className="block text-lg font-semibold">Community</label>
      <input {...register("community")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />

      <label className="block text-lg font-semibold">Caste</label>
      <input {...register("caste")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />
    </div>
  );
};

export default FamilyDetails;