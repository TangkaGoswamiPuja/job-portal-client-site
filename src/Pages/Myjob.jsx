import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authfile/Auth';
import Rowmyjobs from './Rowmyjobs';

const MyJob = () => {
    const {user} = useContext(AuthContext)
    const [selectJodb , setMyJob]=useState([]);
    const url =`http://localhost:5000/allJobs?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => 
            setMyJob(data));
    },[])
    return (
        <div>
            s: {selectJodb.length}
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>job title</th>
        <th>catagory</th>
        <th>User name</th>
        <th>email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {selectJodb.map(row=><Rowmyjobs
     key={row._id}
     row={row}></Rowmyjobs>)}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyJob;