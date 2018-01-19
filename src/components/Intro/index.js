import React from 'react';

import './style.css';

const Intro = (props) => {
    const summary = props.data.summary;

    return (
        <div className="intro">
            <div className="container">
            { summary.map((p, i) => {
                return <p key={`intro-${i}`}>{p}</p>;
            })}
            </div>
        </div>
    );
};

export default Intro;