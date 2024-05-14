import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2'
import { AuthContext } from '../Authfile/Auth';

const Add = () => {

    const {user} = useContext(AuthContext)
    // const [startDate, setStartDate] = useState(new Date());
    const [postingDate, setPostingDate] = useState(new Date());
   
    const [deadline, setDeadline] = useState(new Date());
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();
   
    const onSubmit = (data) => {
      console.log(data); 
      console.log(errors);
      const updateData = {
        ...data,
        postingDate,
        deadline
      }
     console.log(updateData)
      console.log(postingDate, "posting date value")
      console.log(deadline, "dead date value")
      fetch("http://localhost:5000/allJobs", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(updateData)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'You Added A Place',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
                // reset();
            }
        })
      
    };
    // const handlePostingDateChange = (date) => {
    //     setPostingDate(date);
    //     setValue('postingDate', date); 
    //   };
    //   const handleDeadlineChange = (date) => {
    //     setDeadline(date);
    //     setValue('deadline', date); 
    //   };
    return (

<div>
<div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control" >

                                <h2 className='text-3xl font-bold bg-purple-200 rounded-lg p-3 mt-3 mb-3'>Add A Job</h2>
                                <div className='grid gap-3 grid-cols-2 lg:grid-cols-3 grid-rows-3'>



      <div> <label htmlFor="image">Job Image URL:</label><br />
         <input className="input input-bordered input-primary w-full max-w-xs" type="text" id="image" {...register("image", { required: true })} /> </div>

        <div> <label htmlFor="jobTitle">Job Title:</label><br />
     <input className="input input-bordered input-primary w-full max-w-xs" type="text" id="jobTitle" {...register("jobTitle", { required: true })} />
     {errors.jobTitle && <span>This field is required</span>}</div>

      <div>
    <label htmlFor="jobCategory">Job Category:</label><br />
                                        
 <select className="select select-primary w-full max-w-xs" id="jobCategory" {...register("jobCategory", { required: true })}>
<option disabled selected>Pick a category</option>
                                            <option>On Site</option>
                                            <option>Remote</option>
                                            <option>Part-Time</option>
                                            <option>Hybrid</option>
                                            

                                        </select></div>

  <div>  <label htmlFor="description">Short Description:</label><br />
                <textarea className="textarea textarea-primary" id="description" {...register("description", { required: true })}></textarea>
                         </div>

                <div><label htmlFor="salaryRange">Salary Range:</label><br />
             <input className="input input-bordered input-primary w-full max-w-xs" type="text" id="salaryRange" {...register("salaryRange", { required: true })} /></div>

            <div><label htmlFor="postingDate">Job Posting Date:</label><br />
            <DatePicker
                  selected={postingDate} 
                  onChange={date => setPostingDate(date)}
                  className="input input-bordered input-primary w-full max-w-xs"
                  id="postingDate"
                //   {...register('postingDate')} 
               /></div>

<div><label htmlFor="deadline">Application Deadline:</label><br />
  <DatePicker  selected={deadline} onChange={date => setDeadline(date)} className="input input-bordered input-primary w-full max-w-xs" id="deadLine"
//   {...register('deadLine')} 
  />
          
             </div>

                                    <div><label htmlFor="job_applicants_number:">Job Applicants Number:</label><br />
        <input className="input input-bordered input-primary w-full max-w-xs" type="number" defaultValue={0} id="applicantsNumber" {...register("applicantsNumber", { required: true })} /></div>

                                    <div><label htmlFor="email">User Email:</label><br />
                                        <input className="input input-bordered input-primary w-full max-w-xs" type="email" id="email" defaultValue={user.email}{...register("email", { required: true })} /></div>

                                    <div><label htmlFor="user_name">User Name:</label><br />
                                        <input className="input input-bordered input-primary w-full max-w-xs" type="text" id="user_name" defaultValue={user.displayName} {...register("user_name", { required: true })} /></div>

                                </div>



                                <div className='mt-3'> <button className='btn btn-primary btn-outline' type="submit">Add</button></div>




                            </div>

                        </form>
                    </div>
                </div>
            </div>
</div>

);
};

export default Add;