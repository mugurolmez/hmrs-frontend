import axios from "axios"

export default class JobSeekerService{
getJobSeekers(){
    return axios.get("http://localhost:8080/api/jobSeekers/getall");
}
AddJobSeeker(jobSeekerData) {
    return axios.post("http://localhost:8080/api/jobSeekers/add",jobSeekerData)
}

}