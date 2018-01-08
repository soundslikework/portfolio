import React from 'react';

const Intro = (props) => {
    const summary = props.data.basics.summary;
    const work = props.data.work;

    return (
        <div className="intro">
            <p>{summary}</p>
            <p>Currently, I work at {work[0].company}.</p>
        </div>
    );
};

export default Intro;