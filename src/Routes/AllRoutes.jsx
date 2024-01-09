import React from 'react';
import { Route,Routes } from 'react-router-dom';

// Pages
import Home from '../Pages/Home';
import Application from '../Pages/Application';
import Profile from '../Pages/Profile';
import SignupLogin from '../Pages/SignupLogin';
import ApplicationPreview from '../Pages/ApplicationPreview';

//Private Route
import PrivateRoutes from './PrivateRoutes'; 

function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/signuplogin' element={<SignupLogin/>}/>
                <Route path='/application' element={<PrivateRoutes><Application/></PrivateRoutes>}/>
                <Route path='/profile' element={<PrivateRoutes><Profile/></PrivateRoutes>}/>
                <Route path='/application/:id' element={<PrivateRoutes><ApplicationPreview/></PrivateRoutes>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;