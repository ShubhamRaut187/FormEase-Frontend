import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css'

function Navbar(props) {
    let [active,SetActive] = useState("nav_menu")
    let [toggleIcon,Settoggleicon] = useState("nav_toggler")
    let Navigate = useNavigate();
    let LoginRouteConfig = useSelector((store)=>{
        return store.LoginRouteConfig;
    })
    // console.log(LoginRouteConfig);
    let navToggle = ()=>{
        active === "nav_menu" ? SetActive("nav_menu nav_active") : SetActive("nav_menu");
        toggleIcon === "nav_toggler" ? Settoggleicon("nav_toggler toggle") : Settoggleicon("nav_toggler");
    }
    let returnhome=()=>{
        Navigate('/')
    }
    
    return (
        <div className='nav'>
           <div className='brand' onClick={returnhome}>
                <h1>FormEase</h1>
            </div>
            <ul className={active}>
                <li className='nav_item'><Link to='/' className='nav_link'>Home</Link></li>
                <li className='nav_item'><Link to='/application' className='nav_link'>Application</Link></li>
                <li className='nav_item'><Link to={LoginRouteConfig.path} className='nav_link'>{LoginRouteConfig.name}</Link></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </div>
    );
}

export default Navbar;