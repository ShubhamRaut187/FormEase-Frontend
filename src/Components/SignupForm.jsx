import React,{useState} from 'react';
import './Component Styles/SignupForm.css'
import LoadingComp from './LoadingComp';


function SignupForm({SetPage}) {
    let [Email,SetEmail] = useState('');
    let [Password,SetPassword] = useState('');
    let [Name,SetName] = useState('');
    let [Loading,SetLoading] = useState(false);

    const createuser = async(e) => {
        e.preventDefault();
        SetLoading(true);
        if(!Email || !Password || !Name){
            return alert('Fill all fields.')
        }
        fetch('https://formeaseserver.onrender.com/auth/v1/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Name,
                Email,
                Password
            })
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response);
            if (response.Message === 'Signup Successfull...!') {
                alert(response.Message);
                SetPage({
                    Title:'Login',
                    Comp:true
                })
            }
            else{
                alert(response.Message);
            }
            SetLoading(false);
        }).catch((error)=>{
            console.log(error);
            SetLoading(false);
        })
    }
    
    return (
        <div className='signupform_main'>
             <div className='signup_message_div'>
                <h1>Welcome to FormEase !</h1>
                <p>Welcome to FormEase! We are delighted to have you join our community. Your decision to sign up marks the beginning of a streamlined and effortless experience. As you embark on this journey with FormEase, we're here to empower and assist you every step of the way. Your account awaits – let's create something amazing together!</p>
            </div>
            <div className='signup_form_div'>
                <h2>Signup to your account.</h2>
                <p>Password must be atleast 8 character long, must have a one uppercase, one lowercase letter, a number and a special character.</p>
                {
                    Loading ? <LoadingComp Text={'Signing in...'}/> : <form className='signup_form' onSubmit={createuser}>
                    <label>Name *</label>
                    <input type="text" className='signup_form_input' placeholder='Name' onChange={(e)=>{
                        SetName(e.target.value);
                    }}/>
                    <label>Email *</label>
                    <input className='signup_form_input' type="email"  placeholder='Email'onChange={(e)=>{
                        SetEmail(e.target.value);
                    }}/>
                    <label>Password *</label>
                    <input className='signup_form_input' type="password" placeholder='Password' onChange={(e)=>{
                        SetPassword(e.target.value);
                    }}/>
                    <input className='signup_form_submit_btn' type="submit" value='Signup'/>
                </form>
                }
                <p className='signup_signup_text' onClick={()=>{
                    SetPage({
                        Title:'Login',
                        Comp:true
                    })
                }}>Already have a account, click to Login...!</p>
            </div>
        </div>
    );
}

export default SignupForm;