import React,{useState} from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.webp';
import profileImg from '../../assets/images/githubprofile.jpeg';
import Button from '@mui/material/Button';
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Divider } from '@mui/material';




const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpennotificationDrop);
  
  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const handleOpennotificationsDrop = () => {
    setisOpennotificationDrop(true)
 }

  const handleClosenotificationsDrop = () => {
     setisOpennotificationDrop(false)
  }
  

       return(
        <>

          <header className="d-flex align-items-center">
            <div className="container-fluid w-100">
              <div className="now d-flex align-items-center w-100">
                {/* Logo Wrapper */}
                <div className="col-sm-2 part1">
                  <Link to="/" className="d-flex align-items-center logo">
                    <img src={logo} />
                    <span className="ms-2">HOTRIX</span>
                  </Link>
                </div>

                <div className="col-sm-3 d-flex align-items-center part2 pl-4"> 
                       <Button className="rounded-circle me-3"><MdMenuOpen/></Button>
                       <SearchBox/>
                </div>
                
                <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                        <Button className="rounded-circle me-3"><MdOutlineLightMode/></Button>
                        <Button className="rounded-circle me-3"><FiShoppingCart/></Button>
                        <Button className="rounded-circle me-3"><IoMailOutline/></Button>


                        <div className='dropdownwrapper position-relative'>
                        <Button className="rounded-circle me-3" onClick={handleOpennotificationsDrop}><MdOutlineNotifications/></Button>

                              <Menu
                                        anchorEl={isOpennotificationDrop}
                                        className='notifications dropdown_list'
                                        id="notifications"
                                        open={openNotifications}
                                        onClose={handleClosenotificationsDrop}
                                        onClick={handleClosenotificationsDrop}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                      >

                                        <div className='head ps-3 pb-0'>
                                            <h4>Notifications (12)</h4>
                                        </div>

                                        <Divider className='mb-1'/>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                               <div>
                                                 <div className="userImg">
                                                  <span className="rounded-circle">
                                                    <img src={profileImg} />
                                                  </span>
                                                 </div>
                                               </div>

                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                                
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                               <div>
                                                 <div className="userImg">
                                                  <span className="rounded-circle">
                                                    <img src={profileImg} />
                                                  </span>
                                                 </div>
                                               </div>

                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                                
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                               <div>
                                                 <div className="userImg">
                                                  <span className="rounded-circle">
                                                    <img src={profileImg} />
                                                  </span>
                                                 </div>
                                               </div>

                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                                
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                               <div>
                                                 <div className="userImg">
                                                  <span className="rounded-circle">
                                                    <img src={profileImg} />
                                                  </span>
                                                 </div>
                                               </div>

                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                                
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                               <div>
                                                 <div className="userImg">
                                                  <span className="rounded-circle">
                                                    <img src={profileImg} />
                                                  </span>
                                                 </div>
                                               </div>

                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                                
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                               <div>
                                                 <div className="userImg">
                                                  <span className="rounded-circle">
                                                    <img src={profileImg} />
                                                  </span>
                                                 </div>
                                               </div>

                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                                
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className='d-flex'>
                                               <div>
                                                 <div className="userImg">
                                                  <span className="rounded-circle">
                                                    <img src={profileImg} />
                                                  </span>
                                                 </div>
                                               </div>

                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                                
                                            </div>
                                        </MenuItem>
                              </Menu>
                        </div>


                        <div className="myAccWrapper">
                          <Button className="myAcc d-flex align-items-center"onClick={handleOpenMyAccDrop}>
                            <div className="userImg">
                              <span className="rounded-circle">
                                 <img src={profileImg} />
                              </span>
                            </div>
                            
                            <div className="userInfo">
                              <h4>Saurabh</h4>
                              <p className="mb-0">@Saurabh8</p>
                            </div>

                          </Button>

                            <Menu
                                  anchorEl={anchorEl}
                                  id="account-menu"
                                  open={openMyAcc}
                                  onClose={handleCloseMyAccDrop}
                                  onClick={handleCloseMyAccDrop}
                                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                      
                                  <MenuItem onClick={handleCloseMyAccDrop}>
                                    <ListItemIcon>
                                      <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    My Account
                                  </MenuItem>
                                  <MenuItem onClick={handleCloseMyAccDrop}>
                                    <ListItemIcon>
                                      <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Reset Password
                                  </MenuItem>
                                  <MenuItem onClick={handleCloseMyAccDrop}>
                                    <ListItemIcon>
                                      <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                  </MenuItem>
                            </Menu>
                        </div>
                </div>

              </div>
            </div>
          </header>


        </>
       )
}

export default Header;