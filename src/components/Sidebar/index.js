import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaProductHunt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";




const Sidebar = () => {
    return (
        <>
         <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">
                    <Button className='w-100'>
                        <span className='icon'><MdDashboard /></span>
                           Dashboard
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                    <Button className='w-100'>
                        <span className='icon'><FaProductHunt /></span>
                           Products
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                    <Button className='w-100'>
                        <span className='icon'><FaCartArrowDown /></span>
                           Orders
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                    <Button className='w-100'>
                        <span className='icon'><MdMessage /></span>
                           Messages
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                    <Button className='w-100'>
                        <span className='icon'><IoMdNotifications /></span>
                           Notifications
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                    <Button className='w-100'>
                        <span className='icon'><IoMdSettings /></span>
                           Settings
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    </Link>
                </li>
            </ul>
         </div>
        </>
    )
}

export default Sidebar;