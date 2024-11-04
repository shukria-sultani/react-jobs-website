import React from "react";
import ListJob from "./ListJob";
import { useState, useEffect } from "react";
import Loader from "./Loader";
export default function JobsListing({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : '/api/jobs';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching the data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div
      className="container-fluid p-3 w-100 mt-5"
      style={{ backgroundColor: "#e5f6ff" }}
    >
      <h2
        className="text-center pt-5"
        style={{ color: "#8458B3", fontWeight: "900" }}
      >
        {isHome ? "Recent Jobs" : "Browse Jobs"}
      </h2>
   
        {loading ? (
            <Loader loading={loading}></Loader>
        ) : (
           <div className="d-lg-flex flex-lg-row align-items-center justify-content-center gap-5 flex-wrap mt-4">
            {jobs.map((job) => (
              <ListJob job={job} key={job.id}></ListJob>
            ))}
          </div>
        )}
    </div>
  );
}
