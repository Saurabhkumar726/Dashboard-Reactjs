import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaProductHunt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { useState } from 'react';
import { IoMdLogOut } from "react-icons/io";





const Sidebar = () => {


    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubMenu, setIsToggleSubMenu] = useState(false);

    const isOpenSubMenu=(index)=>{
        setActiveTab(index);
        setIsToggleSubMenu(!isToggleSubMenu);

    }
    return (
        <>
         <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">
                    <Button className={`w-100 ${activeTab===0 ? 'active' : ''}`} onClick={() => isOpenSubMenu(0)}>
                        <span className='icon'><MdDashboard /></span>
                           Dashboard
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    </Link>
                </li>

                <li>
                    <Button className={`w-100 ${activeTab===1  && isToggleSubMenu ===true ? 'active' : ''}`} onClick={() => isOpenSubMenu(1)}>
                        <span className='icon'><FaProductHunt /></span>
                           Products
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>


                    <div className={`submenuWrapper ${activeTab===1 && isToggleSubMenu===true ? 'colapse' : 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Product List</Link></li>
                            <li><Link to="#">Product View</Link></li>
                            <li><Link to="#">Product Upload</Link></li>
                        </ul>
                    </div> 

                </li>

                <li>
                    <Link to="/">
                    <Button className={`w-100 ${activeTab===2 ? 'active' : ''}`} onClick={() => isOpenSubMenu(2)}>
                        <span className='icon'><FaCartArrowDown /></span>
                           Orders
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                    <Button className={`w-100 ${activeTab===3 ? 'active' : ''}`} onClick={() => isOpenSubMenu(3)}>
                        <span className='icon'><MdMessage /></span>
                           Messages
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                    <Button className={`w-100 ${activeTab===4 ? 'active' : ''}`} onClick={() => isOpenSubMenu(4)}>
                        <span className='icon'><IoMdNotifications /></span>
                           Notifications
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                    <Button className={`w-100 ${activeTab===5 ? 'active' : ''}`} onClick={() => isOpenSubMenu(5)}>
                        <span className='icon'><IoMdSettings /></span>
                           Settings
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    </Link>
                </li>

                {/* for example */}
                <li>
                    <Button className='w-100'>
                        <span className='icon'><MdDashboard /></span>
                        Dashboard
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                </li>

                <li>
                    <Button className='w-100'>
                        <span className='icon'><FaProductHunt /></span>
                           Products
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                </li>

                <li>
                    <Button className='w-100'>
                        <span className='icon'><FaCartArrowDown /></span>
                           Orders
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                </li>

                <li>
                    <Button className='w-100'>
                        <span className='icon'><MdMessage /></span>
                           Messages
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                </li>

                <li>
                    <Button className='w-100'>
                        <span className='icon'><IoMdNotifications /></span>
                        Notifications
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                </li>

                <li>
                    <Button className='w-100'>
                        <span className='icon'><IoMdSettings /></span>
                        Settings
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                </li>
            </ul>

            <br/>

            <div className="logoutWrapper">
                <div className="logoutBox">
                  <Button variant="contained"><IoMdLogOut /> Logout</Button>
                </div>
            </div>

         </div>
        </>
    )
}

export default Sidebar;