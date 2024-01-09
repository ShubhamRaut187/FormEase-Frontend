import React,{useState} from 'react';

// Components
import PageTitle from '../Components/PageTitle';
import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';

function SignupLogin(props) {
    let [Page,SetPage]=useState({
        Title:'Login Account',
        Comp:true
    })
    return (
        <div>
           <PageTitle Title={Page.Title}/>
           {
            Page.Comp ? <LoginForm SetPage={SetPage}/> : <SignupForm SetPage={SetPage}/>
           }
        </div>
    );
}

export default SignupLogin;