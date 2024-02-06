import { GET_USERS_SUCCESS } from "../actions/actions"


function myFirstReducer (state={users:[]}, action){
    switch(action.type){
        case GET_USERS_SUCCESS:
            return {...state, users:action.users}
        default:
            return state
    }
}

export default myFirstReducer


// actions -> trigger
// saga -> listen , put(t)
// reducer -> listen success or error -> it will store the data
// selector -> retrive the data