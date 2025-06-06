export const ValidateStep3 = (formData) => {
  const errors = {};
  const data = formData.contactDetails || {};

  // Helper: Phone number regex
  const phoneRegex = /^[6-9]\d{9}$/;
  // Helper: Email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
;

  // Contact Person Name
  if (!data.contactPersonName || data.contactPersonName.trim() === "") {
    errors.contactPersonName = "Contact person name is required.";
  }

  // Chemist Phone
  if (!data.chemistPhone || data.chemistPhone.trim() === "") {
    errors.chemistPhone = "Phone number is required.";
  } else if (!phoneRegex.test(data.chemistPhone)) {
    errors.chemistPhone = "Enter a valid 10-digit phone number.";
  }

  // Alternate Phone
  if (!data.alternatePhone || data.alternatePhone.trim() === "") {
    errors.alternatePhone = "Alternate phone number is required.";
  } else if (!phoneRegex.test(data.alternatePhone)) {
    errors.alternatePhone = "Enter a valid 10-digit alternate phone number.";
  }

  // Emergency Contact
  if (!data.emergencyContact || data.emergencyContact.trim() === "") {
    errors.emergencyContact = "Emergency contact number is required.";
  } else if (!phoneRegex.test(data.emergencyContact)) {
    errors.emergencyContact = "Enter a valid 10-digit emergency contact number.";
  }

  // Chemist Email
  if (!data.chemistEmail || data.chemistEmail.trim() === "") {
    errors.chemistEmail = "Email address is required.";
  } else if (!emailRegex.test(data.chemistEmail)) {
    errors.chemistEmail = "Enter a valid email address.";
  }

  return errors;
};
