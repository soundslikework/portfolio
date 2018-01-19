import React from 'react';

import WorkItem from './components/WorkItem';

const Work = (props) => {
    return (
        <div className="work">
            <div className="container">
            { props.data.map((job, i) => {
                return <WorkItem key={`job-${i}`} data={job} />;
            })}
            </div>
        </div>
    );
};

export default Work;