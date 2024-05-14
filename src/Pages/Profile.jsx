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

            <div className="card w-96 bg-base-100 border-4 border-purple-500 shadow-xl mx-auto mt-10 mb-10">
  <figure className="px-10 pt-10">
    <img src={user.
photoURL
} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user.
displayName
}</h2>
    <p>{user.email}</p>
    <div className="card-actions">
    <button className='btn btn-primary btn-outline' onClick={handleSignout}>Sign Out</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;