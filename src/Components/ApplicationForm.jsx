import React,{useState} from 'react';
import './Component Styles/ApplicationForm.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoadingComp from './LoadingComp';

function ApplicationForm(props) {
   let [Name,SetName] = useState('');
   let [DOB,SetDOB] = useState('');
   let [Address,SetAddress] = useState('');
   let [Photo,SetPhoto] = useState('');
   let [Loading,SetLoading] = useState(false);

   let Navigate = useNavigate();
   let Token = useSelector((store)=>{
    return store.User.Token;
   })
   let UserID = useSelector((store)=>{
    return store.User.User.UserID
   })

   let calulateage = (url) => {
    let birth = new Date(DOB);
    let difference = Date.now() - birth.getTime();
    let agedate = new Date(difference);
    let age = Math.abs(agedate.getUTCFullYear() - 1970);
    postform(url,age)
   }

   let postform = async(url,age) => {
    // console.log(Age);    
    try {
            let result = await fetch('https://formeaseserver.onrender.com/application/v1/create',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'authorization':`Bearer ${Token}`
                },
                body:JSON.stringify({
                    Name,
                    DOB,
                    Address,
                    Photo:url,
                    UserID,
                    Age:age
                })
            });
            let response = await result.json();
            alert(response.Message);
            // SetLoading(false);
            Navigate('/profile')
        } catch (error) {
            console.log(error);
            // SetLoading(false)
        }
   }

   let submitapplication = (e) => {
    e.preventDefault();
    SetLoading(true)
    if(!Photo || !Name || !DOB || !Address){
        return alert('All feilds required')
        SetLoading(false)
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
        calulateage(response.url);
        SetLoading(false)
        
    }).catch((error)=>{
        console.log(error);
        SetLoading(false)
    })


   }
   
   return (
        <div className='applicationform_main'> 
            <h1>Application Form.</h1>
            {
                Loading ? <LoadingComp Text={'Submitting Application'}/> : <form className='application_form' onSubmit={submitapplication}>
                <label>Name *</label>
                <input type="text" placeholder='Name' className='application_form_input' onChange={(e)=>{
                    SetName(e.target.value);
                }}/>
                <label>Date of Birth</label>
                <input type="date" className='application_form_input' onChange={(e)=>{
                    SetDOB(e.target.value);
                }}/>
                <label>Address</label>
                <textarea className='application_form_input_address' cols="30" rows="10" placeholder='Address' onChange={(e)=>{
                    SetAddress(e.target.value)
                }}></textarea>
                <label>Photo *</label>
                <input type="file" className='application_for_input_image' accept='image/png' onChange={(e)=>{
                    SetPhoto(e.target.files[0]);
                }}/>
                <input type="submit" value='Submit' className='application_form_submit_btn'/>
            </form>
            }
        </div>
    );
} 
 
export default ApplicationForm;