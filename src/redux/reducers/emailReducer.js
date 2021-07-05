
import { EMAIL_GET_FAIL, EMAIL_GET_REQUEST, EMAIL_GET_SUCCESS, EMAIL_POST_FAIL, EMAIL_POST_REQUEST, EMAIL_POST_SUCCESS } from '../constants/types';



export const emailListReducer = (state = {email:[]}, action)=>{

    switch(action.type){
        case EMAIL_GET_REQUEST:
            return {loading: true, email:[]}
        case EMAIL_GET_SUCCESS: 
            return {loading: false, email: action.payload}
        case EMAIL_GET_FAIL:
            return {loading: false, error:  action.payload}
        default:
            return state
    }


}

export const addEmailInfoReducer = (state = {} , action)=>{

    switch(action.type){

        case EMAIL_POST_REQUEST: 
        return {
            loading: true
        }
        case EMAIL_POST_SUCCESS:
            return{
             loading: false, emailInfo: action.payload
            }
        case EMAIL_POST_FAIL:
            return {
                loading: false, error: action.payload
            }
       
        
        default:
            return state
    }


};