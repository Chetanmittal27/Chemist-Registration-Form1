import React, { useContext, useEffect, useState } from "react";
import ChemistContext from "../context/ChemistContext";
import { State, City } from "country-state-city";

import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/outline';



function LocationServices() {
  const { formData, setFormData } = useContext(ChemistContext);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // Fetch states on component mount
  useEffect(() => {
    try {
      const fetchedStates = State.getStatesOfCountry("IN");
      if (Array.isArray(fetchedStates)) {
        setStates(fetchedStates);
      }
    } catch (error) {
      console.error("Failed to fetch states:", error);
    }
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (selectedState) {
      const fetchedCities = City.getCitiesOfState("IN", selectedState);
      if (Array.isArray(fetchedCities)) {
        setCities(fetchedCities);
      } else {
        setCities([]);
      }
    }
  }, [selectedState]);

  const updateFormDataSection = (section, newData) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...newData,
      }
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormDataSection("locationAndServices", { [name]: value });
  };

  const handleStateChange = (e) => {
    const value = e.target.value;
    setSelectedState(value);
    updateFormDataSection("locationAndServices", { state: value, city: "" });
  };

  const handleCityChange = (e) => {
    updateFormDataSection("locationAndServices", { city: e.target.value });
  };

  const handlePincodeChange = (e) => {
    const value = e.target.value;
    if (/^[1-9][0-9]{0,5}$/.test(value) || value === "") {
      updateFormDataSection("locationAndServices", { pincode: value });
    }
  };

  const handleOpenDaysChange = (day) => {
    const prevDays = formData.locationAndServices.openDays || [];
    const updatedDays = prevDays.includes(day)
      ? prevDays.filter(d => d !== day)
      : [...prevDays, day];
    updateFormDataSection("locationAndServices", { openDays: updatedDays });
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-md">
      <h1 className="text-blue-700 font-semibold pb-2 border-b mb-6 text-2xl flex gap-2 items-center">
        <GlobeAltIcon className="h-6 w-6 text-blue-700" />
        Location & Services
      </h1>

      <div className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
        <MapPinIcon className="h-6 w-6 text-blue-700 pr-1" />
        <h2>Location Details</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shop Name */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Shop Name</label>
          <input
            type="text"
            name="shopName"
            value={formData.locationAndServices?.shopName || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        {/* Shop Address */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Shop Address</label>
          <textarea
            name="shopAddress"
            value={formData.locationAndServices?.shopAddress || ""}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        {/* State */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">State</label>
          <select
            name="state"
            value={formData.locationAndServices?.state || ""}
            onChange={handleStateChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          >
            <option value="" disabled>Select State</option>
            {states.map(state => (
              <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">City</label>
          <select
            name="city"
            value={formData.locationAndServices?.city || ""}
            onChange={handleCityChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
            disabled={!selectedState}
          >
            <option value="" disabled>Select City</option>
            {cities.length > 0 ? (
              cities.map(city => (
                <option key={city.name} value={city.name}>{city.name}</option>
              ))
            ) : (
              <option disabled>{selectedState ? "Loading cities..." : "Select a state first"}</option>
            )}
          </select>
        </div>

        {/* Pincode */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.locationAndServices?.pincode || ""}
            onChange={handlePincodeChange}
            maxLength="6"
            placeholder="Enter 6-digit Pincode"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required/>
        </div>
      </div>

      {/* Services Section */}
      <h2 className="my-8 text-gray-700 text-xl font-medium"> 🛠️ Services Offered</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Open Hours */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Open Hours</label>
          <input
            type="number"
            name="openHours"
            value={formData.locationAndServices?.openHours || ""}
            onChange={handleChange}
            min="0"
            max="23"
            placeholder="Enter hours (0–23)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        {/* Open Days */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Open Days</label>
          <div className="flex flex-wrap gap-3">
            {daysOfWeek.map(day => (
              <label key={day} className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={formData.locationAndServices?.openDays?.includes(day)}
                  onChange={() => handleOpenDaysChange(day)}
                required/>
                {day}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationServices;
