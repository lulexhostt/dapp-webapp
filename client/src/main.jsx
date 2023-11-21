import React from 'react';
import { createRoot, ReactDOM, } from "react-dom/client";
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Front from './pages/Front';
// import Dashboardd from "./pages/Dashboardd";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import ProfileDetails from "./pages/ProfileDetails";
import CampaignDetails from "./pages/CampaignDetails";

import { StateContextProvider } from './context';
import App from './App';
import { Sidebar, Navbar } from './components';

import './index.css';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  
  <ThirdwebProvider desiredChainId={ChainId.Mumbai}> 
    <BrowserRouter>
    
    
      <Routes>
        <Route index element={<App />} />
        <Route path="app" element={<Front />} />
        {/* <Route path="dashboardd" element={<Dashboardd />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Transactions" element={<Transactions />} />
        <Route path="profile-details/:id" element={<ProfileDetails />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          {/* <StateContextProvider> */}
        
          {/* </StateContextProvider> */}
          
      </Routes>
    </BrowserRouter>
  </ThirdwebProvider> 

  
)