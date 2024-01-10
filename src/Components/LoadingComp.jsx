import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Component Styles/Loading.css'
function LoadingComp({Text}) {
    return (
        <div className='loading_main'>
            <CircularProgress/>
            <h1>{Text}</h1>
        </div>
    );
}

export default LoadingComp;