import React from "react";

const PersonalInfo: React.FC<{ register: any; watch: any; setValue: any }> = ({ register }) => {
  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold">Salutation</label>
      <select {...register("salutation")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        <option value="Dr.">Dr.</option>
        <option value="Mr.">Mr.</option>
        <option value="Ms.">Ms.</option>
      </select> 

      <label className="block text-lg font-semibold">Name</label>
      <input {...register("name")} style={{ textTransform: "uppercase" }} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />

      <label className="block text-lg font-semibold">Gender</label>
      <select {...register("gender")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <label className="block text-lg font-semibold">Marital Status</label>
      <select {...register("maritalStatus")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        <option value="Single">Single</option>
        <option value="Married">Married</option>
      </select>

      <label className="block text-lg font-semibold">Date of Birth</label>
      <input type="date" {...register("dob")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />
    </div>
  );
};

export default PersonalInfo;