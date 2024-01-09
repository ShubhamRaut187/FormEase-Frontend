import React,{useState,useEffect} from 'react';
import NoApplication from './NoApplication';
import ApplicationSlider from './ApplicationSlider';
import './Component Styles/UserApplications.css'
import { useSelector } from 'react-redux';

function UserApplications(props) {
    let [Applications,SetApplications] = useState([]);
    let Token = useSelector((store)=>{
        return store.User.Token;
    })
    let UserID = useSelector((store)=>{
        return store.User.User.UserID;
    })
    useEffect(()=>{
        let getData = async() => {
            try {
                let result = await fetch(`http://localhost:8000/application/v1/all/${UserID}`,{
                    headers:{
                        'authorization':`Bearer ${Token}`
                    }
                });
                let response = await result.json();
                SetApplications(response.Applications);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    },[Token,UserID])
    return (
        <div className='user_applications_main'>
            <ApplicationSlider Applications={Applications}/>
        </div>
    );
}

export default UserApplications;