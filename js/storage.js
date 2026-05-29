export function getUsers() {
    return     JSON.parse(localStorage.getItem("users"))||[];
}
export function saveUsers(users) {
    localStorage.setItem("users",JSON.stringify(users));
}
export function getJobs() {
    return     JSON.parse(localStorage.getItem("jobs"))||[];
}
export function saveJobs(jobs) {
    localStorage.setItem("jobs", JSON.stringify(jobs));
}
export function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"))||[];
}
export function saveCurrentUser(user) {
    localStorage.setItem("currentUser",JSON.stringify(user));
}
