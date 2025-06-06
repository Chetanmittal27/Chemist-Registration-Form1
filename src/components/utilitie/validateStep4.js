export const ValidateStep4 = (formData) => {
  const errors = {};

  const requiredDocs = [
    "licenseCopy",
    "idProof",
    "qualificationCertificate",
    "addressProof",
    "gstCertificate"
  ];

  requiredDocs.forEach((docKey) => {
    if (!formData[docKey]) {
      errors[docKey] = "This document is required.";
    }
  });

  return errors;
};

