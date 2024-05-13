import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Authfile/Auth';

const Details = () => {
    const {user} = useContext(AuthContext)
    const details = useLoaderData()
const {id} = useParams()


 const detail = details.find(detail => detail._id === id)

 const {
    picture_url, job_title,
    job_description,
    salary_range,
    
job_applicants_number
    
    

    } = detail
    return (
        <div>
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={ picture_url} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{job_title}</h1>
      <p className="py-6">{ job_description}</p>
      <p>{salary_range}</p>
      <p>{job_applicants_number}</p>
<button className="btn btn-outline btn-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>Apply</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-xl ">Apply here</h3>
   
    <form>
                                <label className="block">
                                    <span className="text-gray-700">Name:</span><br></br>
                                  
<input type="text"placeholder="Your Name"className="input input-bordered input-primary w-full max-w-xs" default value={user.
displayName
} />
                                </label>
                                <label className="block mt-4">
                                    <span className="text-gray-700">Email:</span><br></br>
                                   
                                    <input type="text"placeholder="email"className="input input-bordered input-primary w-full max-w-xs" default value={user.email
} />
                                </label>
                                <label className="block mt-4">
                                    <span className="text-gray-700">Resume Link:</span><br></br>
                                   

                                    <input type="text"placeholder="Resume Link"className="input input-bordered input-primary w-full max-w-xs" />
                                </label>
                                <button type="submit" className="btn btn-primary mt-4">Submit Application</button>
                            </form>
  </div>
</dialog>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;