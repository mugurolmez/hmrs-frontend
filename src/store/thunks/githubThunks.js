import GithubService from "../../services/githubService"
import { addGithubError, addGithubSucces, getJobSeekerGithubError, getJobSeekerGithubSuccess } from "../actions/githubActions"





export const addGithub = (values) => {
    return async (dispatch) => {
    try {
        const response = await new GithubService().addGithub(values)
        dispatch(addGithubSucces(response.data))
        console.log(response.data.message)
        console.log(response.data.success)


    } catch (error) {
        dispatch(addGithubError(error))
        console.log("kayıt hatası", error)
    }
}}

export const getJobSeekerGithub=(jobSeekerId)=>{
    return async(dispatch)=>{
        try{
            const response =await new GithubService().getGithubJobSeekerId(jobSeekerId)
            dispatch(getJobSeekerGithubSuccess(response.data.data))
            console.log(response.data.message)
            console.log(response.data.success)
        }catch(error){
            dispatch(getJobSeekerGithubError(error))
            console.log("Getirme hatası", error)
        }
    }
}