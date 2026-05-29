import "./theme.js";
import {getJobs } from "./storage.js";
const jobsContainer=document.getElementById("jobsContainer");
const jobs=getJobs();
if(jobs.length===0){
    const sampleJobs=[
        {
            id:1,
            title:"Frontend Developer",
            company:"Tech Hub",
            location:"Abuja",
            salary:"#350,000",
            category:"Development",
            description:"Build amazing ui"
        },
        {
            id:2,
            title:"UI Designer",
            company:"Creative Studio",
            location:"Lagos",
            salary:"#250,000",
            category:"Design Interface"
        }
    ];
    localStorage.setItem("jobs", JSON.stringify(sampleJobs));
    renderJobs(sampleJobs);
}else{
    renderJobs(jobs);
}
function renderJobs(data) {
    jobsContainer.innerHTML="";
    data.forEach(job=>{
        const card=document.createElement("div");
        card.className="job-card";
        card.innerHTML=`
        <h3>${job.title}</h3>
        <p><strong>Company:</strong>${job.company}</p>
        <p><strong>Location:</strong>${job.location}</p>
        <p><strong>Salary:</strong>${job.salary}</p>
        <button>Apply Now</button>
        `
        ;
        jobsContainer.appendChild(card);
    });
}
const searchForm=document.getElementById("searchForm");
if(searchForm){
    searchForm.addEventListener("submit",e=>{
        e.preventDefault();
        const value=document.getElementById("searchInput").value.toLowerCase();
        const filteredJobs=getJobs().filter(job=>           job.title.toLowerCase().includes(value));
        renderJobs(filteredJobs);
    });
}