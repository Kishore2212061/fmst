import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import PersonalInfo from "../components/PersonalInfo";
import FamilyDetails from "../components/FamilyDetails";
import AddressDetails from "../components/AddressDetails";
import PermanentAddress from "../components/PermanentAddress";
import ContactInfo from "../components/ContactInfo";
import MedicalAndWork from "../components/MedicalAndWork";
import DesignationDetails from "../components/DesignationDetails";

const ProfileForm: React.FC = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [page, setPage] = useState(0);

  const sections = [
    { title: "Personal Info", component: <PersonalInfo register={register} watch={watch} setValue={setValue} /> },
    { title: "Family Details", component: <FamilyDetails register={register} /> },
    { title: "Address Details", component: <AddressDetails register={register} /> },
    { title: "Permanent Address", component: <PermanentAddress register={register} watch={watch} setValue={setValue} /> },
    { title: "Contact Info", component: <ContactInfo register={register} /> },
    { title: "Medical & Work", component: <MedicalAndWork register={register} /> },
    { title: "Designation", component: <DesignationDetails register={register} /> },
  ];

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 border rounded-xl shadow-lg w-full max-w-2xl mx-auto bg-white space-y-6"
    >
      {sections[page].component}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {page > 0 && (
          <button
            type="button"
            onClick={() => setPage((prev) => prev - 1)}
            className="px-5 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition"
          >
            Previous
          </button>
        )}
        {page < sections.length - 1 ? (
          <button
            type="button"
            onClick={() => setPage((prev) => prev + 1)}
            className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="px-5 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Submit
          </button>
        )}
      </div>

      {/* Numbered Navigation */}
      <div className="flex justify-center space-x-2 mt-6">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            type="button"
            className={`w-10 h-10 flex items-center justify-center font-semibold rounded-full shadow-md transition ${
              page === index ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </motion.form>
  );
};

export default ProfileForm;
