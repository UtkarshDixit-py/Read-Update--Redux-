import {FETCH_USER_SUCCESS, UPDATE_USERNAME} from "./action-types"

const initialState={
    users:[],
}


export default function userReducer(state = initialState, action){
    switch(action.type){
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                users:[...state.users,...action.payload],
            };
          
        case UPDATE_USERNAME:
            return{
              users: state.users.map((user)=>{
                    if(user.id===action.payload.id){
                        // user.username = action.payload.username;
                        return {
                            ...user,
                            username: action.payload.username
                        }
                    } else {
                        return user
                    }
                })
             };

            default:
                return state;
    }
   
}

