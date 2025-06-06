export function ValidateStep1(formData) {
  const errs = {};
  const ci = formData.chemistInfo;

  // Chemist Name: required, letters & spaces only
  if (!ci.chemistName.trim()) {
    errs.chemistName = 'Chemist Name is required';
  } else if (!/^[A-Za-z\s]+$/.test(ci.chemistName.trim())) {
    errs.chemistName = 'Only letters and spaces allowed.';
  }

  // License Number: required, numeric only
  if (!ci.licenseNumber || !ci.licenseNumber.toString().trim()) {
    errs.licenseNumber = 'License Number is required';
  } else if (!/^\d+$/.test(ci.licenseNumber.toString().trim())) {
    errs.licenseNumber = 'License Number must be numeric';
  }

  // Qualification: required
  if (!ci.qualification) {
    errs.qualification = 'Please select a qualification';
  } else if (
    ci.qualification === 'Others' &&
    (!ci.otherQualification || !ci.otherQualification.trim())
  ) {
    errs.otherQualification = 'Specify your other qualification';
  }

  // Experience: required, integer between 0 and 50
  if (ci.experience === '' || ci.experience === null || ci.experience === undefined) {
    errs.experience = 'Experience is required';
  } else {
    const exp = Number(ci.experience);
    if (!Number.isInteger(exp) || exp < 0 || exp > 50) {
      errs.experience = 'Enter a whole number between 0 and 50';
    }
  }

  // Gender: required
  if (!ci.gender) {
    errs.gender = 'Please select gender.';
  }

  // Date of Birth: optional, must not be future
  if (ci.dateOfBirth) {
    const dob = new Date(ci.dateOfBirth);
    const today = new Date();
    if (dob > today) {
      errs.dateOfBirth = 'Date of birth cannot be in the future.';
    }
  }

  return errs;
}
