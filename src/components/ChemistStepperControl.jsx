// src/components/ChemistStepperControl.jsx

import React, { useContext, useState } from 'react';
import ChemistContext from '../context/ChemistContext';
import {ValidateStep1} from './utilitie/validateStep1'
import {ValidateStep2} from './utilitie/validateStep2'


function ChemistStepperControl({ handleDirections, currentStep, steps }) {
  const { formData } = useContext(ChemistContext);
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    let stepErrors = {};

    if (currentStep === 1) {
      stepErrors = ValidateStep1(formData);
    }
    else if(currentStep === 2){
      stepErrors = ValidateStep2(formData);
    }

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      alert(`Please fix errors in Step ${currentStep} before continuing.`);
      return;
    }

    // No errors → clear previous errors and move on
    setErrors({});
    handleDirections(currentStep === steps.length ? 'Submit' : 'Next');
  };

  const handleBack = () => {
    setErrors({});
    handleDirections('');
  };

  return (
    <div className="flex flex-col items-center w-full container mt-10 p-5">
      {/* ─── Buttons ─── */}
      <div className="flex justify-around items-center w-full">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`px-4 py-2 uppercase text-white font-bold bg-blue-700 border-2 border-blue-800 rounded-xl hover:bg-blue-800 transition duration-200 ease-in-out ${
            currentStep === 1 ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
          }`}
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="py-2 px-4 uppercase text-white font-bold bg-blue-700 border-2 cursor-pointer border-blue-800 rounded-xl hover:bg-blue-800 transition duration-200 ease-in-out"
        >
          {currentStep === steps.length ? 'Submit' : 'Next'}
        </button>
      </div>

      {/* ─── Inline Errors for Each Step ─── */}
      <div className="mt-4 w-full text-left">
        {currentStep === 1 &&
          ['chemistName', 'licenseNumber', 'qualification', 'otherQualification', 'experience', 'gender', 'dateOfBirth'].map(
            (field) =>
              errors[field] && (
                <p key={field} className="text-red-500 text-sm">
                  {errors[field]}
                </p>
              )
          )}
        {currentStep === 2 &&
          ['shopName', 'shopAddress', 'city', 'state', 'pincode', 'servicesOffered', 'openHours', 'openDays'].map(
            (field) =>
              errors[field] && (
                <p key={field} className="text-red-500 text-sm">
                  {errors[field]}
                </p>
              )
          )}

        {currentStep === 3 &&
          ['chemistEmail', 'chemistPhone', 'alternatePhone', 'emergencyContact', 'contactPersonName', 'contactPersonRelation'].map(
            (field) =>
              errors[field] && (
                <p key={field} className="text-red-500 text-sm">
                  {errors[field]}
                </p>
              )
          )}

        {currentStep === 4 &&
          ['licenseCopy', 'idProof', 'addressProof', 'photo', 'qualificationCertificate'].map(
            (field) =>
              errors[field] && (
                <p key={field} className="text-red-500 text-sm">
                  {errors[field]}
                </p>
              )
          )}
      </div>
    </div>
  );
}

export default ChemistStepperControl;
