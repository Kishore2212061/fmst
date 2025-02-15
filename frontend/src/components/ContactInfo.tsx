import React from "react";

const ContactInfo: React.FC<{ register: any }> = ({ register }) => {
  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold">Mobile Number</label>
      <input type="tel" {...register("mobile")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />

      <label className="block text-lg font-semibold">Email ID</label>
      <input type="email" {...register("email")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400" />
    </div>
  );
};

export default ContactInfo;