import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
const {id} = useParams()


 const detail = details.find(detail => detail._id === id)
 console.log(detail)
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
      <button className="btn btn-outline btn-primary">Apply</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;