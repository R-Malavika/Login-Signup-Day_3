import React from 'react';
import * as FaIcons from 'react-icons/fa';
//import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dash',
    icon: <FaIcons.FaChartPie />,
    cName: 'nav-text'
  },
  {
    title: 'Employees',
    path: '/pro',
    icon: <FaIcons.FaUserTie />,
    cName: 'nav-text'
  },
  {
    title: 'Tasks',
    path: '/tasks',
    icon: <FaIcons.FaTasks />,
    cName: 'nav-text'
  },
  {
    title: 'Calender',
    path: '/cal',
    icon: <FaIcons.FaCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'Collaborate',
    path: '/collab',
    icon: <FaIcons.FaComments />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/contact',
    icon: <IoIcons.IoMdContacts />,
    cName: 'nav-text'
  }
];