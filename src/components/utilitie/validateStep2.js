export const ValidateStep2 = (formData) => {
  const errors = {};
  const data = formData.locationAndServices || {};

  // Shop Name
  if (!data.shopName || data.shopName.trim() === "") {
    errors.shopName = "Shop name is required.";
  }

  // Shop Address
  if (!data.shopAddress || data.shopAddress.trim() === "") {
    errors.shopAddress = "Shop address is required.";
  }

  // State
  if (!data.state) {
    errors.state = "Please select a state.";
  }

  // City
  if (!data.city) {
    errors.city = "Please select a city.";
  }

  // Pincode (must be a 6-digit number not starting with 0)
  if (!/^[1-9][0-9]{5}$/.test(data.pincode)) {
    errors.pincode = "Enter a valid 6-digit pincode.";
  }
  else if(!data.pincode){
    errors.pincode = "PinCode is required";
  }

  // Open Hours (must be a number between 0 and 23)
  if (
    data.openHours === undefined ||
    data.openHours === "" ||
    isNaN(data.openHours) ||
    data.openHours < 0 ||
    data.openHours > 23
  ) {
    errors.openHours = "Enter valid open hours (0–23).";
  }

  // Open Days (at least one selected)
  if (!Array.isArray(data.openDays) || data.openDays.length === 0) {
    errors.openDays = "Select at least one open day.";
  }

  return errors;
};
