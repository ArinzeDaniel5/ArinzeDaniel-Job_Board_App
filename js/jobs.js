import "./theme.js";
import {getJobs} from "./storage.js";
const jobsContainer=document.getElementById("jobsContainer");
const searchInput=document.getElementById("searchJobs");
const categoryFilter=document.getElementById("categoryFilter");
function renderJobs(jobs) {
    jobsContainer.innerHTML="";
    if(jobs.length===0){
        jobsContainer.innerHTML="<h2>No jobs found</h2> ";
        return;
    }
    jobs.forEach(job=>{
        const card=document.createElement("div");
        card.classList.add="job-card";
        card.innerHTML=`
        <h3>${job.title}</h3>
        <p>${job.company}</p>
        <p>${job.location}</p>
        <p>${job.salary}</p>
        <button>Apply</button>
        `
        ;
        jobsContainer.appendChild(card);
    });
}
function filterJobs() {
    const search=searchInput.value.toLowerCase();
    const category=categoryFilter.value;
    let jobs=getJobs();
    jobs=jobs.filter(job=>{
        const matchesSearch=job.title.toLowerCase().includes(search);
        const matchesCategory=category==="all"||jobs.category===category;
        return 
        matchesSearch && matchesCategory;
    });
    renderJobs(jobs);
}
searchInput.addEventListener("input",filterJobs);
categoryFilter.addEventListener("change",filterJobs);
