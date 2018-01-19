import React from 'react';

const WorkItem = (props) => {
    return (
        <div className="work-item">
            {props.data.company}
        </div>
    );
};

export default WorkItem;