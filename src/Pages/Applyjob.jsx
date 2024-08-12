import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authfile/Auth';

const Applyjob = () => {
    const {user} = useContext(AuthContext)
    const [applyHere , setMyJob]=useState([]);
    const url =`https://job-portal-server-site-kappa.vercel.app/apply?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => 
            setMyJob(data));
    },[])  

    return (
        <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
    <tr>
        <th></th>
        
        <th>User name</th>
        <th>email</th>
        <th>Resume link</th>
        <th>Job category</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {applyHere.map(here=>
      <tr className="bg-base-200">

        <th></th>
       
        <td>{here.name}</td>
        <td>{here.email}</td>
        <td>{here.resumeLink}</td>
        <td>{here.category}</td>
        <th></th>
      </tr>)}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Applyjob;