import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-family: 'Dancing Script', cursive;
  font-size: 40px;
  color:white;  
  padding-bottom: 25px;
  margin-right: 1100px;
  color: white;
  cursor: pointer;
`;
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
/*<div className='log-pro'><FaIcons.FaStar /></div>*/

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
          <StyledDiv>
          <a href="/tasks" style={{"text-decoration":"none"}} className='custom-link'>Stellar</a>
        </StyledDiv>
          
          
          
          
          <div className='butl'>
            <Link to='/'>   
          <button className='logb' style={{"fontFamily":"cursive"}}>Logout</button>
          </Link>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <p className='p1'>{item.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;