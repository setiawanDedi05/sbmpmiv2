import React from "react";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <FaIcons.FaHome  size={24}/>,
  },
  {
    title: "Pencatatan Alert",
    icon: <FaIcons.FaUsers  size={24}/>,
    childrens: [
      {
        title: "All",
        path: "/admin/pencatatan_alert/all",
        icon: <FaIcons.FaBriefcase  size={24}/>,
      },
      {
        title: "New",
        path: "/admin/pencatatan_alert/new",
        icon: <FaIcons.FaNewspaper  size={24}/>,
      },
      {
        title: "True",
        path: "/admin/pencatatan_alert/true",
        icon: <FaIcons.FaCheck  size={24}/>,
      },
      {
        title: "False",
        path: "/admin/pencatatan_alert/false",
        icon: <FaIcons.FaTimes  size={24}/>,
      },
      {
          title: "Belum Terkonfirmasi",
          path: '/admin/pencatatan_alert/belumTerkonfirmasi',
          icon: <FaIcons.FaTimesCircle  size={24}/>
      },
      {
          title: 'Positif',
          path: '/admin/pencatatan_alert/positif',
          icon: <FaIcons.FaPlusCircle  size={24}/>
      },
      {
          title: 'Negatif',
          path: '/admin/pencatatan_alert/negatif',
          icon: <FaIcons.FaMinusCircle  size={24}/>
      }
    ],
  },
  {
    title: "History Kenaikan Kasus",
    icon: <FaIcons.FaTasks  size={24}/>,
    childrens: [
      {
        title: "Manusia",
        icon: <FaIcons.FaUser />,
        path: '/admin/history/manusia'
      },
      {
        title: "Hewan",
        icon: <FaIcons.FaBriefcase />,
        path: '/admin/history/hewan'
      },
      {
        title: "Event",
        icon: <FaIcons.FaEvernote />,
        path: '/admin/history/event'
      }
    ]
  },
  {
    title: "Pengaturan",
    icon: <FaIcons.FaCogs  size={24}/>,
    childrens: [
      {
        title: 'Users',
        path: '/admin/users',
        icon: <FaIcons.FaUserFriends />
      }
    ]
  },
  {
    title: "Data Master",
    path: "/admin/dashboard",
    icon: <FaIcons.FaDatabase size={24}/>,
  },
];
