import React from 'react';
import './Component Styles/ApplicationCard.css'
import { useNavigate } from 'react-router-dom';

function ApplicationCard({elem}) {
    let {Name,_id} = elem;
    let Navigate = useNavigate();
    return (
        <div className='application_card_main'>
            <h2>Application ID:&nbsp;&nbsp;{_id}</h2>
            <p>{Name}</p>
            <button onClick={()=>{
                Navigate(`/application/${_id}`)
            }}>View</button>
        </div>
    );
}

export default ApplicationCard;