import React from 'react';
import './Component Styles/PageTitle.css'

function PageTitle({Title}) {
    return (
        <div className='pagetitle_main'>
            <h1>{Title}</h1>
        </div>
    );
}

export default PageTitle;