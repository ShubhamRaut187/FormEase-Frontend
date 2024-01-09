import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {handlelogout} from '../Redux/actions'
import './Component Styles/MyProfile.css'

function MyProfile(props) {
    let User = useSelector((store)=>{
        return store.User
    })
    let dispatch = useDispatch();
    return (
        <div className='my_profile_main'>
            <h1>{User.User.Name}</h1>
            <h3>{User.User.Email}</h3>
            <button onClick={()=>{
                dispatch(handlelogout(null));
                
            }}>Logout</button>
        </div>
    );
}

export default MyProfile;