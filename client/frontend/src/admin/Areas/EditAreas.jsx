// EditArea.js

import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { sweetSuccess } from '../../helpers/Alerts';

const EditArea = ({ area, closeModal, onSave }) => {
  const [editedArea, setEditedArea] = useState(area)
  const descriptionRef = useRef(null);

  //handle all the input
  const handleInputChange=(e)=>{
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setEditedArea({ ...editedArea, [name]: checked }); // For checkbox
    } else {
      setEditedArea({ ...editedArea, [name]: value }); // For text, number, etc.
    }
  }
  //update the Area
  const handleSave=async()=>{
    try{
const response=await axios.put(`/api/v1/restro/putAreas/${editedArea._id}`,editedArea);
if(response.data.success){
    sweetSuccess(response.data.message)
}
    }catch(error){
        console.log(error)
    }
  }

  //handle the close modal
  return (
    <div className='fixed inset-0 bg-hDark bg-opacity-80 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-lg w-1/3'>
        <h2 className='font-bold text-xl mb-4'>Edit Area</h2>
        <div>
          <label className='block text-sm font-semibold'>Name</label>
          <input
            type='text'
            name='name'
            className='border p-2 w-3/4 mb-4'  
            value={editedArea.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium  mb-2">Description</label>
<textarea      
name="description"
value={editedArea.description}
onChange={handleInputChange} 
className='border p-2 w-3/4 mb-4' rows='5' cols='5'></textarea>
        </div>

        <div>
          <label className='block text-sm font-semibold'>Max Cover</label>
          <input
            type='number'
            name='maxCover'
            className='border p-2 w-3/4 mb-4' 
            value={editedArea.maxCover}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center mb-4">
          <label className='block text-sm font-semibold'>Active</label>
          <input
            type="checkbox"
            name="active"
            className='ml-2'
            checked={editedArea.active} // Bind the checkbox state to 'active'
            onChange={handleInputChange} // Update 'active' when the checkbox is toggled
          />
        </div>
        <div className='flex justify-between'>
          <button className='bg-pink text-white px-4 py-2 rounded-lg mr-2' onClick={closeModal}>
            Close
          </button>
          <button className='bg-teal text-white px-4 py-2 rounded-lg' onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditArea
