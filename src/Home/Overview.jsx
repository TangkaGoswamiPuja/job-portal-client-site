import React from 'react';

const Overview = () => {
    return (
        <div>
           
           
            <div className="hero min-h-screen bg-base-200 border-4 border-purple-950">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/F7gdpJZ/pexels-skylar-kang-6045373.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      
<div>
<header className="bg-purple-500 text-white py-4 px-8">
        <h1 className="text-3xl font-semibold">JOB HUNTER</h1>
        <p className="text-sm">Connecting job seekers with employers</p>
      </header>
      <p className="text-gray-800">
            Job Hunter is a digital platform connecting job seekers with employers, serving as hubs for job opportunities across various industries and locations. Users can search for positions based on specific criteria like job title, location, and experience level, with filters to refine their search.
          </p>
          <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-800">
            <li>Search for positions based on criteria</li>
            <li>Tools for resume upload and profile creation</li>
            <li>Track applications and receive notifications</li>
            <li>Engage in networking activities</li>
            <li>Access valuable resources like interview tips and career development articles</li>
            <li>Employer services for posting job listings and managing recruitment campaigns</li>
            <li>Access insights on hiring trends</li>
          </ul>
        </section>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Overview;