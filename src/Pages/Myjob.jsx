import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authfile/Auth';
import Rowmyjobs from './Rowmyjobs';
import Swal from "sweetalert2";

const MyJob = () => {

    const {user} = useContext(AuthContext)
    const [selectJodb , setMyJob]=useState([]);
    const url =`https://job-portal-server-site-kappa.vercel.app/alljobs?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => 
            setMyJob(data));
    },[])

    const handelDelete = _id =>{
      // console.log(_id)
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      })
      .then((result) => {
          if (result.isConfirmed) {


              fetch(`https://job-portal-server-site-kappa.vercel.app/alljobs/${_id}`, {
                  method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                  // console.log(data);
                  if (data.deletedCount > 0) {
                      Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                      )
                    const remaining =  selectJodb.filter(se=>se._id !== _id);
                    setMyJob(remaining)
                  }
              })

      }
  })

     
  };
    return (
        <div>
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
     row={row}
     handelDelete={handelDelete}></Rowmyjobs>)}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyJob;