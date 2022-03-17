import {FETCH_USER_SUCCESS,UPDATE_USERNAME} from './action-types';

export const fetchUsers = () => {
    try {
        return fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
    
    } catch (error) {
        console.log(error)
    }           
}

function handelErrors(response){
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
}

export const fetchUserSuccess = users =>({
    type:FETCH_USER_SUCCESS,
    payload : users
});

export const updateUsername = user =>({
    type: UPDATE_USERNAME,
    payload:user,
 
});