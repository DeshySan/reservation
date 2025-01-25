import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet, Route, Routes } from 'react-router-dom';
import Reservation from './Reservation';

const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className="flex flex-row flex-1">
        <div className="w-64">
          <Sidebar />
        </div>
        <div className="flex-1 p-5">
          <Outlet /> {/* This renders the active route here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
