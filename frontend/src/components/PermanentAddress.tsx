import React, { useEffect } from "react";
import { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";

interface PermanentAddressProps {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
}

const PermanentAddress: React.FC<PermanentAddressProps> = ({ register, watch, setValue }) => {
  const sameAsCurrent = watch("sameAsCurrent");
  const currentAddress = watch("currentAddress");
  const country = watch("country");
  const state = watch("state");
  const district = watch("district");
  const taluk = watch("taluk");

  useEffect(() => {
    if (sameAsCurrent) {
      setValue("permanentAddress", currentAddress);
      setValue("permanentCountry", country);
      setValue("permanentState", state);
      setValue("permanentDistrict", district);
      setValue("permanentTaluk", taluk);
    } else {
      setValue("permanentAddress", "");
      setValue("permanentCountry", "");
      setValue("permanentState", "");
      setValue("permanentDistrict", "");
      setValue("permanentTaluk", "");
    }
  }, [sameAsCurrent, currentAddress, country, state, district, taluk, setValue]);

  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold">Permanent Address</label>
      <textarea
        {...register("permanentAddress")}
        className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"
        disabled={sameAsCurrent}
      />

      <label className="block text-lg font-semibold">Country</label>
      <select
        {...register("permanentCountry")}
        className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"
        disabled={sameAsCurrent}
      >
        <option value="">Select Country</option>
        <option value="India">India</option>
      </select>

      <label className="block text-lg font-semibold">State</label>
      <select
        {...register("permanentState")}
        className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"
        disabled={sameAsCurrent}
      >
        <option value="">Select State</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
      </select>

      <label className="block text-lg font-semibold">District</label>
      <input
        {...register("permanentDistrict")}
        className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"
        disabled={sameAsCurrent}
      />

      <label className="block text-lg font-semibold">Taluk</label>
      <input
        {...register("permanentTaluk")}
        className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"
        disabled={sameAsCurrent}
      />
    </div>
  );
};

export default PermanentAddress;
