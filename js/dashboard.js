import "./theme.js";
import {getJobs, saveJobs,  getCurrentUser} from "./storage.js";
const dashboardJobs=document.getElementById("dashboardJobs");
const jobForm=document.getElementById("jobForm");
const currentUser=getCurrentUser();
if(dashboardJobs && currentUser){
    const jobs=getJobs();
    const employerJobs=jobs.filter(job=>job.employerId===currentUser.id);
    if(employerJobs.length===0){
        dashboardJobs.innerHTML="<h2>No jobs posted yet</h2>";
    }else{
        employerJobs.forEach(job=>{
            const card=document.createElement("div");
            card.className="job-card";
            card.innerHTML=`
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>
            <button data-id="${job.id}">Delete</button>
            `
            ;
            dashboardJobs.appendChild(card);
        });
    }
    dashboardJobs.addEventListener("click",e=>{
        if(e.target.tagName==="BUTTON"){
            const id=Number(e.target.dataset.id);
            const updatedJobs=getJobs().filter(job=>job.id !==id);
            saveJobs(updatedJobs);
            location.reload();
        }
    });
}
if(jobForm){
    jobForm.addEventListener("submit",e=>{
        e.preventDefault();
        const jobs=getJobs();
        const newJob={
            id:Date.now(),
            title: document.getElementById("title").value,
            company: document.getElementById("company").value,
            location: document.getElementById("location").value,
            salary: document.getElementById("salary").value,
            category: document.getElementById("category").value,
            description: document.getElementById("category").value,
            employerId: currentUser?.id || null
        };
        jobs.push(newJob);
        saveJobs(jobs);
        alert("Job posted successfully");
        window.location.href="dashboard.html";
    });
}
