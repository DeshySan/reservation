import axios from "axios";
import React, { useState } from "react";
import { sweetSuccess } from "../../helpers/Alerts";

const NewArea = ({ closeNewModal }) => {
  //useState hooks only
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [maxCover, setMaxCover] = useState();
  const [active, setActive] = useState(false);
  const [errors, setErrors] = useState([]);

  //request to server
  const submitRequest = async (req, res) => {
    //frontend validation
    let error = [];
    if (name.length === 0) {
      error.push("Please Enter a Valid Name");
    } else if (!description.trim()) {
      error.push("Please enter description");
    } else if (!maxCover || maxCover <= 0) {
      error.push("Please enter valid maximum cover value");
    }
    if (error.length > 0) {
      setErrors(error);
      return;
    }
    try {
      console.log(error);
      const response = await axios.post(`/api/v1/restro/postAreas`, {
        name,
        description,
        maxCover,
        active,
      });
      if (response.data.success) {
        sweetSuccess(response.data.message);
        closeNewModal();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='fixed inset-0 bg-hDark bg-opacity-80 flex justify-center items-center'>
      <div className='w-1/2 bg-white p-6 rounded'>
        <h1 className='text-xl font-bold text-teal font-Roboto'>
          Enter the New Area
        </h1>
        <div>
          <label className='block text-sm font-semibold'>Name</label>
          <input
            type='text'
            name='name'
            className='border p-2 w-3/4 mb-4'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='description' className='text-lg font-medium  mb-2'>
            Description
          </label>
          <textarea
            name='description'
            className='border p-2 w-3/4 mb-4'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows='5'
            cols='5'></textarea>
        </div>
        <div className='flex items-center mb-4'>
          <label className='block text-sm font-semibold'>Active</label>
          <input
            type='checkbox'
            name='active'
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
            className='ml-2 rounded hover:cursor-pointer bg-pink text-teal h-4 w-4 appearance-none border border-pink bg-pink checked:bg-teal hover:cursor-pointer focus:ring-2 focus:ring-teal focus:outline-none '
          />
        </div>
        <div>
          <label className='block text-sm font-semibold'>Max Cover</label>
          <input
            type='number'
            name='maxCover'
            className='border p-2 w-1/4 mb-4 appearance-none'
            value={maxCover}
            onChange={(e) => setMaxCover(e.target.value)}
          />
        </div>
        <ul>
          {errors.map((item, index) => (
            <li className='text-pink' key={index}>
              {item}
            </li>
          ))}
        </ul>
        <div className='flex justify-between'>
          <button
            onClick={closeNewModal}
            className='bg-pink text-white px-4 py-2 rounded-lg mr-2'>
            Close
          </button>
          <button
            className='bg-teal text-white px-4 py-2 rounded-lg'
            onClick={submitRequest}>
            Save Area
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArea;
