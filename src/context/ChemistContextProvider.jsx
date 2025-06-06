import React, { useState } from 'react';
import ChemistContext from './ChemistContext';

const ChemistContextProvider = ({ children }) => {
  const [formData , setFormData] = useState({
    chemistInfo: {
      chemistName: '',
      licenseNumber: '',
      qualification: '',
      otherQualification: '',
      experience: '',
      gender: '',
      dateOfBirth: '',
    },
    locationAndServices: {
      shopName: '',
      shopAddress: '',
      city: '',
      state: '',
      pincode: '',
      servicesOffered: [],
      openHours: '',
      openDays: [],
    },
    contactDetails: {
      chemistEmail: '',
      chemistPhone: '',
      alternatePhone: '',
      emergencyContact: '',
      contactPersonName: '',
    },
    documentUploads: {
      licenseCopy: null,
      idProof: null,
      addressProof: null,
      photo: null,
      qualificationCertificate: null,
      gstCertificate: null,
    }
  });



  return (
    <ChemistContext.Provider value={{ formData, setFormData }}>
      {children}
    </ChemistContext.Provider>
  );
};

export default ChemistContextProvider;
