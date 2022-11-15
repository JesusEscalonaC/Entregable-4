import React from 'react';

const UsersList = ({usersList, selectUser, deleteUser}) => {
    return (
        <div className='users'>
          {
            usersList?.map(user => (
                <div className='each-user' key ={user.id}>
                    <div className='text'>
                    <p><b><i className="fa-regular fa-user"></i> {user.first_name} {user.last_name}</b></p>
                    <p><i className="fa-regular fa-envelope"></i> {user.email}</p>
                    <p><i className="fa-solid fa-cake-candles"></i> {user.birthday}</p>
                    </div>

                    <div className='button-container'>
                    <button className='buttons' onClick={() => selectUser(user)}><i className="fa-solid fa-pen-clip"></i></button>
                    <button className='buttons' onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
                
            ))
           }
        </div>
    );
};

export default UsersList;