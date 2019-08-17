import axios from '../axios/config';
import { restURL, URL } from '../baseURL';

//----- USER -----
export const loginUser = ( user ) => axios.post(`${restURL}${URL.LOGIN}`,  user );
export const createUser = ( user ) => axios.post(`${restURL}${URL.USER}`,  user );
export const userLogout = (refreshToken) =>  axios.delete(`${restURL}${URL.LOGOUT}`, {data: { refreshToken }});

export const getUser = () =>  axios.get(`${restURL}${URL.USER}`);


// ----- ADMIN -----
export const getAllUser = () =>  axios.get(`${restURL}${URL.ALL_USER}`);
export const banUserById = (userId, isBanned) => axios.put(`${restURL}${URL.USER}/${userId}`, { isBanned });
