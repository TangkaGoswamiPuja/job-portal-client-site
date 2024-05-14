import React from 'react';
import Swal from "sweetalert2";
const Rowmyjobs = ({row}) => {
    console.log(row)
    const{_id,jobTitle,jobCategory,email,user_name}=row;

    const handelDelete = _id =>{
        console.log(_id)
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


                fetch(`http://localhost:5000/allJobs/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                       
                    }
                })

        }
    })

        // const proceed = confirm('Are you sure you want to delete');
        // if (proceed){
        //    fetch(`http://localhost:5000/allJobs/${id}`,{
        //     method: 'DELETE'
           
        //    })
        //    .then(res=>res.json())
        //    .then(data=>{
        //     console.log(data);
        //    })
        // }
    };
    return (
        
             <tr>
        <th><button onClick={()=>handelDelete(_id)} className="btn btn-square btn-xs">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></th>
        <td>{jobTitle}</td>
        <td>{jobCategory}</td>
        <td>{user_name}</td>
        <td>{email}</td>
        
        <td>
            {/* <button  className="btn btn-outline bg-purple-500 btn-xs">update</button> */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-outline bg-purple-500 btn-xs" onClick={()=>document.getElementById('my_modal_3').showModal() } >update</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
        </td>
      </tr>
        
    );
};

export default Rowmyjobs;