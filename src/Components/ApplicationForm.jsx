import React,{useState} from 'react';
import './Component Styles/ApplicationForm.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ApplicationForm(props) {
   let [Name,SetName] = useState('');
   let [Date,SetDate] = useState('');
   let [Address,SetAddress] = useState('');
   let [Photo,SetPhoto] = useState('');
   let [Image,SetImage] = useState('');
   let Navigate = useNavigate();
   let Token = useSelector((store)=>{
    return store.User.Token;
   })
   let UserID = useSelector((store)=>{
    return store.User.User.UserID
   })


   let postform = async(url) => {
        try {
            let result = await fetch('http://localhost:8000/application/v1/create',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'authorization':`Bearer ${Token}`
                },
                body:JSON.stringify({
                    Name,
                    DOB:Date,
                    Address,
                    Photo:url,
                    UserID
                })
            });
            let response = await result.json();
            alert(response.Message);
            Navigate('/profile')
        } catch (error) {
            console.log(error);
        }
   }

   let submitapplication = (e) => {
    e.preventDefault();
    if(!Photo || !Name || !Date || !Address){
        return alert('All feilds required')
    }
    let data = new FormData();
    data.append('file',Photo);
    data.append('upload_preset','formease');
    data.append('cloud_name','dakxdcwzr');

    fetch('https://api.cloudinary.com/v1_1/dakxdcwzr/image/upload',{
        method:'POST',
        body:data,
       
    }).then((response)=>{
        if(!response.ok){
            throw new Error('Response was not ok')
        }
        return response.json();
        
    }).then((response)=>{
        // SetImage(response.url);
        postform(response.url);
        
    }).catch((error)=>{
        console.log(error);
    })


   }
   
   return (
        <div className='applicationform_main'> 
            <h1>Application Form.</h1>
            <form className='application_form' onSubmit={submitapplication}>
                <label>Name *</label>
                <input type="text" placeholder='Name' className='application_form_input' onChange={(e)=>{
                    SetName(e.target.value);
                }}/>
                <label>Date of Birth</label>
                <input type="date" className='application_form_input' onChange={(e)=>{
                    SetDate(e.target.value);
                }}/>
                <label>Address</label>
                <textarea className='application_form_input_address' cols="30" rows="10" placeholder='Address' onChange={(e)=>{
                    SetAddress(e.target.value)
                }}></textarea>
                <label>Photo *</label>
                <input type="file" className='application_for_input_image' onChange={(e)=>{
                    SetPhoto(e.target.files[0]);
                }}/>
                <input type="submit" value='Submit' className='application_form_submit_btn'/>
            </form>
        </div>
    );
} 
 
export default ApplicationForm;