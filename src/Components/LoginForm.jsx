import React,{useState} from 'react';
import './Component Styles/LoginForm.css'
import { useDispatch } from 'react-redux';
import {handlelogin} from '../Redux/actions'
import { useNavigate } from 'react-router-dom';
import LoadingComp from './LoadingComp';

function LoginForm({SetPage}) {
    let [Email,SetEmail] = useState('');
    let [Password,SetPassword] = useState('');
    let [Loading,SetLoading] = useState(false);
    let dispatch = useDispatch();
    let Navigate = useNavigate();

    let validateuser = async(e) => {
        e.preventDefault();
        SetLoading(true);
        // console.log(Email,Password);
        if(!Email || !Password){
            SetLoading(false);
            return alert('Please fill all fields...!');
        }
        fetch('https://formeaseserver.onrender.com/auth/v1/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    Email,
                    Password
                })
            }).then((response)=>{
                return response.json();
            }).then((response)=>{
                if(response.Message === 'Login Successfull.'){
                    dispatch(handlelogin(response))
                    alert(response.Message);
                    SetLoading(false);
                    Navigate('/')
                }
                else{
                    alert(response.Message);
                    SetLoading(false);
                }
                // console.log(response);
            }).catch((error)=>{
                console.log(error);
                SetLoading(true);
            })
            
        
    }
    
    return (
        <div className='loginform_main'>
            <div className='login_message_div'>
                <h1>Welcome Back !</h1>
                <p>Welcome back to FormEase! We're thrilled to see you again. Your presence brightens our digital space, and we're eager to assist you on your journey. As you log in, envision a seamless experience tailored just for you. Your input and engagement are the driving forces behind FormEase, and we're here to make every interaction meaningful. Let's continue this journey together – enter your credentials, and let the FormEase magic unfold. Thank you for choosing us once again!</p>
            </div>
            <div className='login_form_div'>
                <h2>Login to your account.</h2>
                <p>Kindly enter your registered email and password to access your FormEase account.</p>
                {
                    Loading ? <LoadingComp Text={'Logging in...!'}/> : <form className='login_form' onSubmit={validateuser}>
                    <label>Email *</label>
                    <input className='login_form_input' type="email"  placeholder='Email'onChange={(e)=>{
                        SetEmail(e.target.value);
                    }}/>
                    <label>Password *</label>
                    <input className='login_form_input' type="password" placeholder='Password' onChange={(e)=>{
                        SetPassword(e.target.value);
                    }}/>
                    <input className='login_form_submit_btn' type="submit" value='Login'/>
                </form>
                }
                <p className='login_signup_text' onClick={()=>{
                    SetPage({
                        Title:'Signup',
                        Comp:false
                    })
                }}>Don't have a account, click to create one...!</p>
            </div>
        </div>
    );
}

export default LoginForm;