import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import EditAreas from './EditAreas'

const Areas = () => {
    //useStates
const [areas,setAreas]=useState()
const [openArea,setOpenArea]=useState()
const [isModalOpen,setIsModalOpen]=useState(false)
// function to handle fetch information from the DB
const fetch=async()=>{
try{
    const {data}=await axios.get(`/api/v1/restro/getAreas`)
 if(data.success){
setAreas(data.areas)
 }
}catch(error){
    console.log(error.message)
}
}

const handleEdit=async(item)=>{
    try{
        setOpenArea(item);
        setIsModalOpen(true)
    }catch(error){
        console.log(error)
    }
}

const closeModal=async()=>{
    setIsModalOpen(false)
}

//useEffect hooks
useEffect(()=>{fetch()},[])
  return (
    <div>
        <div>
            <h1 className='font-Roboto font-bold text-xl font-uppercase'>Restaurant Areas</h1>
          <p className='text-teal'>  <NavLink className="mr-2">Admin</NavLink>/ <NavLink className="ml-2">Restaurant Areas</NavLink></p>
        </div>
        <div className='overflow-x-auto'>
        <table className="table-auto w-full p-4 md:p-2 lg:p-1 xl:p-1 bg-white shadow-xl mt-4">
        <thead className="bg-orang text-white">
          <tr>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Max Cover</th>
            <th className="py-3 px-6 text-left">Total Cover</th>
            <th className="py-3 px-6 text-left">Actions</th>

          </tr>
        </thead>
        <tbody className="text-gray-700">
            {areas?.map((item)=>(
          <tr className="hover:bg-gray-100 ">
          <td className="py-3 px-6"><span className='bg-teal  w-4 h-4 rounded-full inline-block'></span></td>
          <td className="py-3 px-6">{item.name}</td>
          <td className="py-3 px-6">{item.description}</td>
          <td className="py-3 px-6">{item.maxCover}</td>
          <td className="py-3 px-6">{item.totalCover}</td>
          <td className="py-2 md:px-3 lg:px-3 xl:ox-3">
          <div className="flex flex-wrap justify-start gap-2">
                    <button
                    onClick={()=>handleEdit(item)}
                    className="text-white bg-pink px-3 py-1 lg:px-4 lg:py-2 hover:scale-110 rounded transition-transform w-full sm:w-auto">
                      Edit
                    </button>
                    <button className="text-white bg-teal px-3 py-1 lg:px-4 lg:py-2 rounded hover:scale-110 transition-transform w-full sm:w-auto">
                      Delete
                    </button>
                  </div>          </td>
        </tr>
            ))}


        </tbody>
      </table>
        </div>
        {isModalOpen && (
            <EditAreas area={openArea} closeModal={closeModal}/>
        )}
    </div>
  )
}

export default Areas