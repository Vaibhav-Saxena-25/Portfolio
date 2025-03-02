import React ,{useState}from 'react'
import './MobileNav.css'
import { IoMdMenu } from "react-icons/io";
import { FcHome,FcAbout,FcPortraitMode,FcBiotech,FcReading,FcBusinessContact  } from "react-icons/fc";
import { RiMenuUnfold4Line2 } from "react-icons/ri";
import { BsProjector } from "react-icons/bs";
import { Link } from 'react-scroll';
const MobileNav = () => {
    const[open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(!open);
    }
    const handleMenuClick = () =>{
        setOpen(false);
    }
  return (
    <>
      <div className = 'mobile-nav'>
        <div className = 'mobile-nav-header'>
           {open ? (<RiMenuUnfold4Line2 size = {30} className='mobile-nav-icon' onClick={handleOpen}/>):( <IoMdMenu size = {30} className='mobile-nav-icon' onClick={handleOpen}/> )}
          
           <span className='mobile-nav-title'>My portfolio App</span>
        </div>
        {open && (   <div className='mobile-nav-menu'>
        <div className = "nav-items">
            <div className="nav-item">
                <div className="nav-link">
                    <Link to = "home" spy={true} smooth = {true} offset={-100} duration={100} onClick={handleMenuClick} >
                      <FcHome/>
                      Home
                    </Link>
                 
                </div>
                <div className="nav-link">
                <Link to = "about" spy={true} smooth = {true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcAbout/>
                    About
                </Link>
                </div>
                <div className="nav-link">
                <Link to = "education" spy={true} smooth = {true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcReading/>
                    Education
                </Link>
                </div>
               
                <div className="nav-link">
                <Link to = "techstack" spy={true} smooth = {true} offset={-100} duration={100} onClick={handleMenuClick} >
                    <FcBiotech />
                    Tech Stack
                </Link>    
                </div>
             
                <div className="nav-link">
                <Link to = "projects" spy={true} smooth = {true} offset={-100} duration={100} onClick={handleMenuClick} >
                    <BsProjector/>
                    Projects
                </Link>
                </div>
                <div className="nav-link">
                <Link to = "workexp" spy={true} smooth = {true} offset={-100} duration={100} onClick={handleMenuClick} >
                    <FcPortraitMode/>
                    Work Experience
                </Link>
                </div>
             
                <div className="nav-link">
                <Link to = "contact" spy={true} smooth = {true} offset={-100} duration={100} onClick={handleMenuClick}>
                    <FcBusinessContact/>
                    Contact
                </Link>
                </div>
            </div>
        </div>
        </div>
    )}
     

      </div>
    </>
  )
}

export default MobileNav
