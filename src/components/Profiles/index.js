import React from 'react';

import Profile from './components/Profile';

import './style.css';

const Profiles = (props) => {
    return (
        <div className="profiles">
            <div className="container">
            { props.data.map((item, i) => {
                return <Profile key={`profile-${i}`} data={item} />
            })}
            </div>
        </div>
    );
};

export default Profiles;