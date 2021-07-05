import axios from 'axios';

import { EMAIL_GET_FAIL, EMAIL_GET_REQUEST, EMAIL_GET_SUCCESS, EMAIL_POST_FAIL, EMAIL_POST_REQUEST, EMAIL_POST_SUCCESS } from '../constants/types';

export const listEmail = () => async(dispatch) => {
    try {
        dispatch({type: EMAIL_GET_REQUEST})

        const {data} = await axios.get('/api/email')

        console.log(data);

       

        dispatch({
            type: EMAIL_GET_SUCCESS,
            payload: data
        })




    } catch (error) {

        dispatch({
            type: EMAIL_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
    }
};


export const addEmail =  (firstName, lastName, domainAddress) => async (dispatch) => {
    try {
        dispatch({
            type: EMAIL_POST_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',

            }
        }

        const  {data} =  await axios.post('/api/email', {firstName, lastName, domainAddress}, config)

        dispatch({
            type: EMAIL_POST_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: EMAIL_POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
};

