import React, {useState} from 'react';
import AddUser from "./AddUser";
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";

function User({user, onDelete,onEdit}) {
    // console.log(key)
    const [editForm, changeEditForm] = useState(false);

    return (
        <div className='user'>
            <IoCloseCircleSharp onClick={() => onDelete(user.id)} className="delete-icon"/>
            <IoHammerSharp className="edit-icon" onClick={() => {
                changeEditForm((prevEditForm) => !prevEditForm)
            }}/>

            <h3>{user.firstname} {user.lastname}</h3>
            <p>{user.age}</p>
            <p>{user.bio}</p>
            <b>{user.isHappy ? "Счастлив :)" : "Не особо :("}</b>

            {editForm && <AddUser user={user} onAdd={onEdit}/>}
        </div>
    );
}

export default User
