import React, { useContext } from 'react';
import { AuthContext } from '../Authfile/Auth';

const Profile = () => {
    const {user , logOut} = useContext (AuthContext)

    const handleSignout = () => {
        logOut()
          .then()
          .catch()
    
      }
    return (
        <div>
            userrrr profile :{user.email}
            <button className='btn btn-primary btn-outline' onClick={handleSignout}>Sign Out</button>
        </div>
    );
};

export default Profile;