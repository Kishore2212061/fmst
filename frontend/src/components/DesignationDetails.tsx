import React from "react";

const DesignationDetails: React.FC<{ register: any }> = ({ register }) => {
  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold">Designation</label>
      <select {...register("designation")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        <optgroup label="Teaching Staff">
          <option value="Professor">Professor</option>
          <option value="Assistant Professor">Assistant Professor</option>
          <option value="HOD">Head of Department</option>
        </optgroup>
        <optgroup label="Administrative Staff">
          <option value="Principal">Principal</option>
          <option value="Vice Principal">Vice Principal</option>
        </optgroup>
        <optgroup label="Non-Teaching Staff">
          <option value="Librarian">Librarian</option>
          <option value="Lab Assistant">Lab Assistant</option>
        </optgroup>
      </select>
    </div>
  );
};

export default DesignationDetails;