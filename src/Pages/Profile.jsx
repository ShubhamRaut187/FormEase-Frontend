import React from 'react';
import PageTitle from '../Components/PageTitle';
import MyProfile from '../Components/MyProfile';
import UserApplications from '../Components/UserApplications';
import './PageStyles/Profile.css'

function Profile(props) {
    return (
        <div>
            <PageTitle Title={'My Profile'}/>
            <div className='profile_main'>
                <MyProfile/>
                <UserApplications/>
            </div>
        </div>
    );
}

export default Profile;<h1>Profile</h1>