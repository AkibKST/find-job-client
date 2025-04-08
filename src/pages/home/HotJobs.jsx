import React, { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(
      "https://find-job-server-lxnesn19j-akibul-islams-projects.vercel.app/api/job/getAllJobs"
    )
      .then((response) => response.json())
      .then((data) => setJobs(data.data));
  }, []);
  return (
    <div>
      <h1 className="font-bold m-4 p-4 text-4xl text-center">Hot Jobs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
