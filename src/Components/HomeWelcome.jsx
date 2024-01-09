import React from 'react';
import './Component Styles/HomeWelcome.css'
import { useNavigate } from 'react-router-dom';

function HomeWelcome(props) {
    let navigate = useNavigate();
    return (
        <div className='home_welcome_main'>
            <div className='home_welcome_message'>
                <h1>Welcome to FormEase...!</h1>
                <p>We're delighted to have you on board. FormEase simplifies your application process, providing an intuitive platform to fill out forms seamlessly. Dive in and start your journey with easy and efficient form submission. Should you have any questions or need assistance, our support team is ready to help. Start your form-filling journey today with FormEase. We're thrilled to be a part of your seamless application experience. Happy form-filling!</p>
                <button onClick={()=>{
                    navigate('/application')
                }}>Fill Application</button>
            </div>
            <div className='home_animation_div'>
                <img src="https://cdn.dribbble.com/users/5263864/screenshots/17280292/media/97209d8e34a69cb9a3cf6a9df0fafed6.gif" alt="gif" />
            </div>
        </div>
    );
}

export default HomeWelcome;