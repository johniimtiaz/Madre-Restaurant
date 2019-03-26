
import axios from 'axios'
import {apiUrl} from './config'


export const createUser = (user) => {

	const url = `${apiUrl}/users`
    return axios.post(url, user);
}


export const register = (email = null, password = null) => {
	const url = `${apiUrl}../Register/register`
    return axios.post(url, {
    	email: email,
    	password: password
    });
}