export const AUTH_LOGIN = "AUTH_LOGIN";

export function login(){
    return function(dispatch){
        dispatch({
            type: AUTH_LOGIN,
            payload: "Redux Store setup done"
        });
    }
}