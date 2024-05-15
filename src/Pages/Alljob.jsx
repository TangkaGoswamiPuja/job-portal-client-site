import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Alljob = () => {
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('')
    // console.log(search);

    useEffect(() => {
        fetch('https://job-portal-server-site-kappa.vercel.app/alljobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className='mt-10' >

            <div className='border-4 border-purple-800 max-w-7xl mx-auto mb-10'>
                <div className='mt-5 max-w-4xl  mx-auto'>
                    <label className="input input-bordered border-purple-500 flex items-center gap-2">
                        <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-lg text-black'>
                            <tr>

                                <th>Job Title</th>
                                <th>Job Posting <br></br> Date</th>
                                <th>Application Deadline</th>
                                <th>Salary range</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* row  */}
                            {jobs.filter((job) => {
                                return search.toLowerCase() === '' ? job : job.job_title.toLowerCase().includes(search)
                            }).map(job =>
                                <tr className="hover" key={job._id}>

                                    <td>{job.
                                        job_title}</td>
                                    <td>{job.
                                        job_posting_date}</td>
                                    <td>{job.
                                        application_deadline
                                    }</td>
                                    <td>{job.
                                        salary_range
                                    }</td>
                                    <th>
                                     <Link to={`/details/${job._id}`}>  <button  className="btn btn-outline bg-purple-500 btn-xs">Details</button></Link>
                                    </th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default Alljob;