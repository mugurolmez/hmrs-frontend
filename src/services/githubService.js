import axios from "axios"

export default class GithubService{

addGithub(githubData){
   
    return axios.post("http://localhost:8080/api/github-address/add",githubData)
}
getGithubJobSeekerId(jobSeekerId) {
    return axios.get(`http://localhost:8080/api/github-address/${jobSeekerId}`)
}
}
