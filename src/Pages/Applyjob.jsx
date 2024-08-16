import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authfile/Auth';
import Select from 'react-select';

const options = [
  { value: 'On Site', label: 'On-Site Jobs' },
  { value: 'Remote', label: 'Remote Jobs' },
  { value: 'Hybrid', label: 'Hybrid Jobs' },
  { value: 'Part-Time', label: 'Part-Time Jobs' },
];
const Applyjob = () => {
  const { user } = useContext(AuthContext);
  const [applyHere, setMyJob] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);


  const url = `https://job-portal-server-site-kappa.vercel.app/apply?email=${user?.email}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMyJob(data);
        setFilteredJobs(data);

      });
  }, [url]);
  useEffect(() => {
    if (selectedOption) {
      const filtered = applyHere.filter(job => job.category === selectedOption.value);
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(applyHere);
    }
  }, [selectedOption, applyHere]);

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="select job category"
      />
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

            {filteredJobs.map((here, index) => (
              <tr className="bg-base-200" key={index}>

                <th></th>

                <td>{here.name}</td>
                <td>{here.email}</td>
                <td>{here.resumeLink}</td>
                <td>{here.category}</td>
                <th></th>
              </tr>))}

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Applyjob;



// q:can you explain the code?
// a: This is the Applyjob component. It is a functional component that uses the useContext and useState hooks from React. It imports the AuthContext from the Authfile/Auth file. The component fetches data from the server using the useEffect hook and stores it in the applyHere state using the useState hook. It then renders a table with the fetched data, displaying the user's name, email, resume link, and job category. The table is populated with data from the applyHere state using the map function. The component returns the table as the output.
// q:what is useEffect and useState?
// a: The useEffect hook is used to perform side effects in functional components. It allows you to perform data fetching, subscriptions, or manually changing the DOM in a functional component. The useEffect hook takes a function as its first argument, which will be executed after the component has rendered. It can also take a second argument, an array of dependencies, to control when the effect runs.