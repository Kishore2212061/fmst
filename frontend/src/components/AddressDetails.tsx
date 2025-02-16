import React, { useEffect, useState } from "react";
import Select from "react-select";
import { create } from "zustand";

interface AddressState {
  states: { id: string; name: string }[];
  districts: { id: string; name: string }[];
  taluks: { id: string; name: string }[];
  fetchStates: () => Promise<void>;
  fetchDistricts: (stateId: string) => Promise<void>;
  fetchTaluks: (districtId: string) => Promise<void>;
}

const useAddressStore = create<AddressState>((set) => ({
  states: [],
  districts: [],
  taluks: [],

  fetchStates: async () => {
    try {
      const response = await fetch("http://localhost:5000/api/states");
      if (!response.ok) throw new Error("Failed to fetch states");
      const data = await response.json();
      set({ states: data.map((s: any) => ({ id: s.id, name: s.name })) });
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  },

  fetchDistricts: async (stateId) => {
    if (!stateId) return;
    try {
      const response = await fetch(`http://localhost:5000/api/districts/${stateId}`);
      if (!response.ok) throw new Error("Failed to fetch districts");
      const data = await response.json();
      set({ districts: data.map((d: any) => ({ id: d.id, name: d.name })), taluks: [] });
    } catch (error) {
      console.error(`Error fetching districts for state ${stateId}:`, error);
    }
  },

  fetchTaluks: async (districtId) => {
    if (!districtId) return;
    try {
      const response = await fetch(`http://localhost:5000/api/taluks/${districtId}`);
      if (!response.ok) throw new Error("Failed to fetch taluks");
      const data = await response.json();
      set({ taluks: data.map((t: any) => ({ id: t.id, name: t.name })) });
    } catch (error) {
      console.error(`Error fetching taluks for district ${districtId}:`, error);
    }
  },
}));

const AddressDetails: React.FC<{ register: any }> = ({ register }) => {
  const { states, districts, taluks, fetchStates, fetchDistricts, fetchTaluks } = useAddressStore();
  const [selectedState, setSelectedState] = useState<{ id: string; name: string } | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<{ id: string; name: string } | null>(null);

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchDistricts(selectedState.id);
      setSelectedDistrict(null); // Reset district selection
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedDistrict) {
      fetchTaluks(selectedDistrict.id);
    }
  }, [selectedDistrict]);

  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold">Current Address</label>
      <textarea {...register("currentAddress")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"></textarea>

      <label className="block text-lg font-semibold">Country</label>
      <select {...register("country")} className="border p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400">
        <option value="India">India</option>
      </select>

      <label className="block text-lg font-semibold">State</label>
      <Select
        options={states.map((state) => ({ value: state.id, label: state.name }))}
        onChange={(selected) => setSelectedState({ id: selected?.value ?? "", name: selected?.label ?? "" })}
        placeholder="Select State"
        isClearable
      />

      <label className="block text-lg font-semibold">District</label>
      <Select
        options={districts.map((district) => ({ value: district.id, label: district.name }))}
        onChange={(selected) => setSelectedDistrict({ id: selected?.value ?? "", name: selected?.label ?? "" })}
        placeholder="Select District"
        isDisabled={!selectedState}
        isClearable
      />

      <label className="block text-lg font-semibold">Taluk</label>
      <Select
        options={taluks.map((taluk) => ({ value: taluk.id, label: taluk.name }))}
        placeholder="Select Taluk"
        isDisabled={!selectedDistrict}
        isClearable
      />
    </div>
  );
};

export default AddressDetails;
