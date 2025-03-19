import React, { useEffect, useState } from "react";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/job/getAllJobs")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      {jobs.map((job) => (
        <HotJobCard key={job._id} job={job}></HotJobCard>
      ))}
    </div>
  );
};

export default HotJobs;
