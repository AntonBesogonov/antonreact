import * as axios from "axios";

const instance = axios.create({
 withCredentials: true,
 headers: { "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3" },
 baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const userAPI = {
 getUsers (currentPage = 1, pageSize = 10 ) {
  return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`, { withCredentials: true }).then(response => {
   return response.data;
  } );
 }
}

export const getUsers = (currentPage = 1, pageSize = 10 ) => {
 return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`, { withCredentials: true }).then(response => {
  return response.data;
 } );
}

export default getUsers;