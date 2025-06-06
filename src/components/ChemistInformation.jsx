import React from 'react'
import { useContext } from 'react'
import ChemistContext from '../context/ChemistContext'

// import { BeakerIcon } from '@heroicons/react/24/outline';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCapsules, faPills, faPrescriptionBottle } from '@fortawesome/free-solid-svg-icons';
import { UserIcon } from '@heroicons/react/24/outline';



function ChemistInformation() {

  const {formData , setFormData} = useContext(ChemistContext);

  const updateFormDataSection = (section , newData) => {
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
    updateFormDataSection('chemistInfo' , {[name] : value});
  }

  return (
    <div className='bg-gray-50 p-6 rounded-xl shadow-md'>
      <h1 className='text-blue-700 font-semibold text-2xl mb-6 pb-2 border-b flex gap-2 items-center'>
        {/* <BeakerIcon className="h-6 w-6 text-blue-600" /> */}
        <UserIcon className="h-8 w-8 text-blue-500" />
        {/* <FontAwesomeIcon icon={faCapsules} size="2x" color="green" /> */}
        {/* <FontAwesomeIcon icon={faPills} size="2x" color="blue" /> */}
        {/* <FontAwesomeIcon icon={faPrescriptionBottle} size="2x" color="purple" /> */}

        Chemist Information
        </h1>


      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

        {/* Chemist Name */}
        <div>
          <label className='mb-1 text-gray-700 font-medium block'>Chemist Name</label>
          <input type='text' name='chemistName' pattern="[A-Za-z]+" value={formData.chemistInfo.chemistName} onChange={handleChange} className='px-4 py-2 border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none rounded-lg' required/>
        </div>

        {/* License Number */}
        <div>
          <label className='text-gray-700 font-medium block mb-1'>License Number</label>
          <input type='number' name='licenseNumber' value={formData.chemistInfo.licenseNumber} onChange={handleChange} className='px-4 py-2 w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none rounded-lg' required/>
        </div>

        {/* Qualification */}
        <div>
          <label className='text-gray-700 font-medium block mb-1'>Qualification</label>
          <select name='qualification' value={formData.chemistInfo.qualification} onChange={handleChange} className='px-4 py-2 w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none rounded-lg' required>
            <option value="" disabled>
              Select Qualification
            </option>
            <option value="D.Pharm">D.Pharm</option>
            <option value="B.Pharm">B.Pharm</option>
            <option value="M.Pharm">M.Pharm</option>
            <option value="Pharm.D">Pharm.D</option>
            <option value="Others">Others</option>
          </select>
          {formData.chemistInfo.qualification === "Others" && (
            <input type='text' name='otherQualification' placeholder='Please Specify' onChange={handleChange} value={formData.chemistInfo.otherQualification || "" }
            className='border-b p-2 mb-2 block w-full' />
          )}
        </div>

        {/* Experience */}
        <div>
          <label className='text-gray-700 font-medium block mb-1'>Experience</label>
          <input type='number' name='experience' min='0' max='50' value={formData.chemistInfo.experience} onChange={handleChange} placeholder="Enter years of experience"className='w-full py-2 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none' required/>
        </div>
 
        {/* Gender  */}
        <div className='flex gap-6 items-center'>
          <legend className='text-gray-700 font-medium'>Gender:</legend>
          <label className='flex items-center gap-2'>
            <input
              type='radio'
              name='gender'
              value='Male'
              checked={formData.chemistInfo.gender === "Male"}
              onChange={handleChange}
            /> Male
          </label>
          <label className='flex items-center gap-2'>
            <input
              type='radio'
              name='gender'
              value='Female'
              checked={formData.chemistInfo.gender === "Female"}
              onChange={handleChange}
            /> Female
          </label>
        </div>

        {/* Date of Birth  */}
        <div>
          <label className='text-gray-700 block mb-1 font-medium'>Date Of Birth</label>
          <input type='date' name='dateOfBirth' value={formData.chemistInfo.dateOfBirth} onChange={handleChange} className='w-full py-2 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none' required/>
        </div>
      </div>
    </div>
  )
}

export default ChemistInformation