import React from 'react';
import './PageStyles/Application.css'
import PageTitle from '../Components/PageTitle'
import ApplicationForm from '../Components/ApplicationForm';

function Application(props) {
    return (
        <div>
            <PageTitle Title={'Application Form'}/>
            <div className='application_main'>
                <ApplicationForm/>
            </div>
        </div>
    );
}

export default Application;<h1>Application</h1>