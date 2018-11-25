export const SAVE_SAVED_JOBS_TO_STORE = "SAVE_SAVED_JOBS_TO_STORE";

export function saveSavedJobsToStore(data){
    return function(dispatch){
        console.log('Inside saveSavedJobsToStore action: ', data);
        dispatch({
            type: SAVE_SAVED_JOBS_TO_STORE,
            payload: data
        });        
    }
}