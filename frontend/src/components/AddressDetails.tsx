import React from "react";

const AddressDetails: React.FC<{ register: any }> = ({ register }) => {
  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold">Current Address</label>
      <textarea {...register("currentAddress")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"></textarea>

      <label className="block text-lg font-semibold">Country</label>
      <select {...register("country")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        <option value="India">India</option>
      </select>

      <label className="block text-lg font-semibold">State</label>
      <select {...register("state")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        <option value="Tamil Nadu">Tamil Nadu</option>
      </select>

      <label className="block text-lg font-semibold">District</label>
      <input {...register("district")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />

      <label className="block text-lg font-semibold">Taluk</label>
      <input {...register("taluk")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />

      <label className="flex items-center space-x-2">
        <input type="checkbox" {...register("sameAsCurrent")} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-400" />
        <span className="text-lg font-semibold">Permanent Address same as Current</span>
      </label>
    </div>
  );
};

export default AddressDetails;