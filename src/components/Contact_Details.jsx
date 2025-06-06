import React from 'react'
import { useContext } from 'react'
import ChemistContext from '../context/ChemistContext'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { PhoneIcon } from '@heroicons/react/24/outline';



function Contact_Details() {

  const {formData , setFormData} = useContext(ChemistContext);


  const updateFormSectionData = (section , newData) => {
    setFormData(prev => ({
      ...prev,
      [section] : {
        ...prev[section],
        ...newData,
      }
    }))
  }

  const handleChange = (e) => {
    const {name , value} = e.target;
    updateFormSectionData("contactDetails" , {[name] : value});
  }
  return (
    <div className='bg-gray-50 p-6 shadow-md rounded-xl'>
      <h1 className='text-blue-700 mb-6 pb-2 border-b font-medium text-2xl flex items-center gap-2'>
        {/* <FontAwesomeIcon icon={faPhone} className="text-white bg-blue-700 p-1" /> */}
        <PhoneIcon className="h-6 w-6 text-blue-600" />
        Contact Details
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <label className='text-gray-700 mb-1 block font-medium'>Person Name</label>
          <input type='text' name='contactPersonName' value={formData.contactDetails.contactPersonName} onChange={handleChange} className='px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'required/>
        </div>

        <div>
          <label className='text-gray-700 mb-1 block font-medium'>Phone Number</label>
          <input type='tel' name='chemistPhone' value={formData.contactDetails.chemistPhone} pattern="^[6-9]\d{9}$" onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} onChange={handleChange} placeholder='Enter a 10-digit number' className='px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'required/>
        </div>

        <div>
          <label className='text-gray-700 mb-1 block font-medium'>Alternate Phone Number</label>
          <input type='tel' name='alternatePhone' value={formData.contactDetails.alternatePhone} pattern="^[6-9]\d{9}$" onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} onChange={handleChange} placeholder='Enter a 10-digit number' className='px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'required/>
        </div>

        <div>
          <label className='text-gray-700 mb-1 block font-medium'>Emergency Contact Number</label>
          <input type='tel' name='emergencyContact' value={formData.contactDetails.emergencyContact} pattern="^[6-9]\d{9}$" onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} onChange={handleChange} placeholder='Enter a 10-digit number' className='px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none' required/>
        </div>

        <div>
          <label className='text-gray-700 mb-1 block font-medium'>Email Address</label>
          <input type='email' name='chemistEmail' value={formData.contactDetails.chemistEmail} pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" onChange={handleChange} placeholder='Enter email address' className='px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none' required/>
        </div>
      </div>
    </div>
  )
}

export default Contact_Details