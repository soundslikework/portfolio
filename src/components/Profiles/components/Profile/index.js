import React from 'react';

import Fontawesome from 'react-fontawesome';

const Profile = (props) => {
    return (
        <div><Fontawesome name={props.data.class} /><a href={props.data.url} target="_blank">{props.data.network}</a></div>
    );
};

export default Profile;