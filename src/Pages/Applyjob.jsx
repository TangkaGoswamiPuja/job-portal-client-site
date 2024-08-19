import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Authfile/Auth';
import Select from 'react-select';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';


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
  const tableRef = useRef(null);


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


 
const downloadPDF = () => {
  const input = tableRef.current;
  html2canvas (input).then((canvas) => {
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4', true); const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 30;
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth, ratio, imgHeight * ratio); pdf.save('invoice.pdf');
  });
};

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="select job category"
      />
        
       

      <div className="overflow-x-auto"  >
        <table className="table"  ref={tableRef}>
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
      <button onClick={downloadPDF} className="btn btn-primary my-4">
        Download Table as PDF
      </button>
    </div>
  );
};

export default Applyjob;



