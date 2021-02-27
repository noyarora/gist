import React from 'react';

const UserInfo = ({user}) => {
    const {avatar, username} = user;
    return (
        <div style={{display: 'flex', textTransform: 'capitalize', flexDirection: 'column', textAlign: 'center'}}>
            <img style={{width: '100px', borderRadius: '50%'}} src={avatar} alt={username} />
            <h2>{username}</h2>
        </div>
    );
}

export default UserInfo;