import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function App() {
  const url = "https://course-api.com/react-tabs-project";

  const [jobsApi, stJobsApi] = useState([]);
  const [value, setValue] = useState({})
  const [jobsTitles, setJobsTitles] = useState([]);

  const fetchJobs = async () => {
   try{
     const response = await fetch(url);
     const newJobs = await response.json();
     // set a state with all jobs form api
     stJobsApi(newJobs);
     // set the job i will show in a state with the first job from jobsApi
     setValue(newJobs[0]);
    // set all the titles in the api jobs in a state to just render it once
    const jobTitle = newJobs.map((job) => {
      return job.title;
    });
    setJobsTitles(jobTitle);
   }
   catch(err) {
    console.log(err);
   }
  }

  useEffect(() => {
    fetchJobs();
  }, []);


  function hangeJob(title) {
    const newJob = jobsApi.filter((job) => job.title === title);
    setValue(...newJob);
  }

  console.log("render");
  console.log(jobsTitles);
  return (
    <>
      <h1>JOBS</h1>
      <div>
        {jobsTitles.map((title) => {
          return (
            <button
              onClick={() => hangeJob(title)}
              key={title}
              style={{ margin: "1rem" }}
            >
              {title}
            </button>
          );
        })}
      </div>
      <div>
        <h1>{value.title}</h1>
        <div>{value.company}</div>
        <p>{value.dates}</p>
        <ul>
          {value?.duties?.map((dutie, index) => {

            return (
              <li key={index} style={{ margin: "1rem" }}>
                {dutie}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
