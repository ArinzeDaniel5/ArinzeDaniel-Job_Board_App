import "./theme.js";
import {getUsers, saveUsers, saveCurrentUser} from "./storage.js";
const registerForm=document.getElementById("registerForm");
const loginForm=document.getElementById("loginForm");
if(registerForm){
    registerForm.addEventListener("submit",e=>{
        e.preventDefault();
        const users=getUsers();
        const user={
            id:Date.now(),
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            role:document.getElementById("role").value
        };
        const exists=users.find(item=>item.email===user.email);
        if(exists){
            alert("User already exists");
            return;
        }
        users.push(user);
        saveUsers(users);
        alert("Registration Successful");
        window.location.href="login.html";
    });
}
if(loginForm){
    loginForm.addEventListener("submit",e=>{
        e.preventDefault();
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;
        const users=getUsers();
        const user=users.find(item=>item.email===email && item.password===password);
        if(!user){
            alert("Invalid credentials");
            return;
        }
        saveCurrentUser(user);
        alert("Login Successful!");
        window.location.href="dashboard.html";
    });
}
