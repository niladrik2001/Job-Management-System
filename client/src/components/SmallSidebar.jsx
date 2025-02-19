import React from 'react'
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';
import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';


const SmallSidebar = () => {
   const {showSidebar, toggleSidebar }= useDashboardContext();
   

  return (
  <Wrapper>
         <div 
         className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
         }>
          <div className="content">
            <button type="button" className="close-btn" onClick={toggleSidebar}>
              <FaTimes />
            </button>
            <header>
              <Logo />
            </header>
            <NavLinks />
          </div>
         </div>
  </Wrapper>
  );
};

export default SmallSidebar;