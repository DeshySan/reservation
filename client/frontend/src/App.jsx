

import Dashboard from './admin/Dashboard'
import Header from './admin/Header'
import Reservation from './admin/Reservation'
import Sidebar from './admin/Sidebar'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <Routes>
  
      <Route path="/" element={<Dashboard />} >
      <Route path="/reservation" element={<Reservation />} />
      </Route>
      </Routes>
  
</>
  )
}

export default App
