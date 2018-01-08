import React from 'react';

import Profile from './components/Profile';

const Profiles = (props) => {
    return (
        <div>
            { props.data.map((item, i) => {
                return <Profile key={`profile-${i}`} data={item} />
            })}
        </div>
    );
};

export default Profiles;