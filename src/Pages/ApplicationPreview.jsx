import React from 'react';
import PageTitle from '../Components/PageTitle';

import Preview from '../Components/Preview';

function ApplicationPreview(props) {
    return (
        <div>
            <PageTitle Title={'Preview'}/>
            <Preview/>
        </div>
    );
}

export default ApplicationPreview;