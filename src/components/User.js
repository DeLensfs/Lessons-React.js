import React from 'react';
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";

function User({user}) {
    // console.log(key)
    return (
        <div className='user' >
            <IoCloseCircleSharp className="delete-icon"/>
            <IoHammerSharp className="edit-icon"/>

            <h3>{user.firstname} {user.lastname}</h3>
            <p>{user.bio}</p>
            <b>{user.isHappy ? "Счастлив :)" : "Не особо :("}</b>
        </div>
    );
}

export default User
