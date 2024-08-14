import { commonApi } from "./commonApi"
import {serviceurl} from './serviceurl'




//signin
export const signinApi=async(reqBody)=>{
    return await commonApi('POST',`${serviceurl}/signin`,reqBody,"")
}
//signup
export const signupApi=async(reqBody)=>{
    return await commonApi('POST',`${serviceurl}/signup`,reqBody,"")
}