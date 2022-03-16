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

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export const fetchUserSuccess = users =>({
    type:FETCH_USER_SUCCESS,
    payload : users
});

export const  UPDATE_USERNAME = 'UPDATE_USERNAME';


export const updateUsername = user =>({
    type: UPDATE_USERNAME,
    // payload: {
    //     id:user.id,
    //     username :user.username,
    // }
    payload:user,
 
});