import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Authfile/Auth';
import { useForm } from 'react-hook-form';

const Details = () => {
const { user } = useContext(AuthContext)
  const details = useLoaderData()
  const { id } = useParams()
const {
    picture_url, job_title,
    job_description,
    salary_range,
    job_applicants_number,
    job_category
  } = details || {}
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const onSubmit = data => {
   console.log(data);
  console.log(errors);
  const apply = {
    ...data
    
  }

  fetch("https://job-portal-server-site-kappa.vercel.app/apply", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(apply)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data.insertedId) {
           alert("you applied the job")
                
               reset();
            }
        })
      }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={picture_url} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{job_title}</h1>
            <p className="py-6">{job_description}</p>
            <p> <span className='text-2xl font-bold'>salary :</span> {salary_range}</p>
            <p>  <span className='text-2xl font-bold'>applicants :</span> {job_applicants_number}</p>
            <p>  <span className='text-2xl font-bold'>category :</span> {job_category}</p>

            <button className="btn btn-outline btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Apply</button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-xl ">Apply here</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="block">
                    <span className="text-gray-700">Name:</span><br></br>

                    <input type="text" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs" default value={user.
                      displayName
                    } {...register("name")} />
                  </label>

                  <label className="block mt-4">
                    <span className="text-gray-700">Email:</span><br></br>

                    <input type="text" placeholder="email" className="input input-bordered input-primary w-full max-w-xs" default value={user.email
                    }  {...register("email")} />
                  </label>

                  <label className="block mt-4">
                    <span className="text-gray-700">Job Category</span><br></br>
                     <input type="text" placeholder="category" className="input input-bordered input-primary w-full max-w-xs" default value={job_category
                    }  {...register("category")} />
                  </label>


                  <label className="block mt-4">
                    <span className="text-gray-700">Resume Link:</span><br></br>
 <input type="text" placeholder="Resume Link" className="input input-bordered input-primary w-full max-w-xs" {...register("resumeLink")} />
                  </label>
                  <button type="submit" className="btn btn-primary mt-4" >Submit Application</button>
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