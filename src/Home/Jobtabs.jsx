import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Jobtabs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allJobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    const handleTabClick = (index) => {
        setActiveTab(index);
      };
    return (
        <div>
<Tabs>
  <TabList>
  <Tab onClick={() => handleTabClick(0)}>All Jobs</Tab>
        <Tab onClick={() => handleTabClick(1)}>On-Site Jobs</Tab>
        <Tab onClick={() => handleTabClick(2)}>Remote Jobs</Tab>
        <Tab onClick={() => handleTabClick(3)}>Hybrid Jobs</Tab>
        <Tab onClick={() => handleTabClick(4)}>Part-Time Jobs</Tab>
  </TabList>
  {/* Name who posted the job,
- Job Title
- Job Posting Date
- Application Deadline
- Salary range
- Job Applicants Number


job_category
"Remote"

job_category
"On Site"
job_category
"Hybrid"
job_category
"Part-Time"
*/}
  <TabPanel  >
    <div className='mx-auto grid grid-cols-2 gap-3 lg:grid-cols-3 '>
 {jobs.map(job=>
<div className="card w-96 bg-base-100 shadow-3xl border-4 border-purple-600">
  <div className="card-body">
    <h2 className="card-title text-3xl">{job.company_name}</h2>
    <p><span className='text-lg text-purple-600 font-bold'>Position : </span>{job.job_title}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Posting Date :</span>{job.job_posting_date}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Deadline :</span>{job.application_deadline}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Salary :</span>{job.salary_range}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Applicants Number :</span>{job.job_applicants_number}</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${job._id}`}>  <button  className="btn btn-outline bg-purple-500 btn-xl">Details</button></Link>
    </div>
  </div>
</div>
      
)}
</div>
  </TabPanel>
  <TabPanel>
  <div className=' mx-auto grid grid-cols-2 gap-3 lg:grid-cols-3 '>    {jobs.filter((job)=>job.job_category === "On Site").map((job,index)=>(
        <div key={index}>
     <div className="card w-96 bg-base-100 shadow-3xl border-4 border-purple-600">
  <div className="card-body">
    <h2 className="card-title text-3xl">{job.company_name}</h2>
    <p><span className='text-lg text-purple-600 font-bold'>Position : </span>{job.job_title}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Posting Date :</span>{job.job_posting_date}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Deadline :</span>{job.application_deadline}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Salary :</span>{job.salary_range}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Applicants Number :</span>{job.job_applicants_number}</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${job._id}`}>  <button  className="btn btn-outline bg-purple-500 btn-xl">Details</button></Link>
    </div>
  </div>
</div>
</div>
    ))}
    </div>
  </TabPanel>
  <TabPanel>
  <div className=' mx-auto grid grid-cols-2 gap-3 lg:grid-cols-3 '>    {jobs.filter((job)=>job.job_category === "Remote").map((job,index)=>(
        <div key={index}>
     <div className="card w-96 bg-base-100 shadow-3xl border-4 border-purple-600">
  <div className="card-body">
    <h2 className="card-title text-3xl">{job.company_name}</h2>
    <p><span className='text-lg text-purple-600 font-bold'>Position : </span>{job.job_title}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Posting Date :</span>{job.job_posting_date}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Deadline :</span>{job.application_deadline}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Salary :</span>{job.salary_range}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Applicants Number :</span>{job.job_applicants_number}</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${job._id}`}>  <button  className="btn btn-outline bg-purple-500 btn-xl">Details</button></Link>
    </div>
  </div>
</div>
</div>
    ))}
    </div>
  </TabPanel>
  <TabPanel>
  <div className=' mx-auto grid grid-cols-2 gap-3 lg:grid-cols-3 '>    {jobs.filter((job)=>job.job_category === "Hybrid").map((job,index)=>(
        <div key={index}>
     <div className="card w-96 bg-base-100 shadow-3xl border-4 border-purple-600">
  <div className="card-body">
    <h2 className="card-title text-3xl">{job.company_name}</h2>
    <p><span className='text-lg text-purple-600 font-bold'>Position : </span>{job.job_title}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Posting Date :</span>{job.job_posting_date}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Deadline :</span>{job.application_deadline}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Salary :</span>{job.salary_range}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Applicants Number :</span>{job.job_applicants_number}</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${job._id}`}>  <button  className="btn btn-outline bg-purple-500 btn-xl">Details</button></Link>
    </div>
  </div>
</div>
</div>
    ))}
    </div>
  </TabPanel>
  <TabPanel>
  <div className=' mx-auto grid grid-cols-2 gap-3 lg:grid-cols-3 '>    {jobs.filter((job)=>job.job_category === "Part-Time").map((job,index)=>(
        <div key={index}>
     <div className="card w-96 bg-base-100 shadow-3xl border-4 border-purple-600">
  <div className="card-body">
    <h2 className="card-title text-3xl">{job.company_name}</h2>
    <p><span className='text-lg text-purple-600 font-bold'>Position : </span>{job.job_title}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Posting Date :</span>{job.job_posting_date}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Deadline :</span>{job.application_deadline}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Salary :</span>{job.salary_range}</p>
    <p><span className='text-lg text-purple-600 font-bold'>Applicants Number :</span>{job.job_applicants_number}</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${job._id}`}>  <button  className="btn btn-outline bg-purple-500 btn-xl">Details</button></Link>
    </div>
  </div>
</div>
</div>
    ))}
    </div>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Jobtabs;