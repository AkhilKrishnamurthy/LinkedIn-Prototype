import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import signupreducer from "./signupreducer";
import jobResultsReducer from './jobResultsReducer';
import peopleSearchReducer from './peopleSearchReducer';
import jobSearchReducer from './jobSearchReducer'
import { reducer as formReducer } from "redux-form";
import jobsLandingPageReducer from './jobsLandingPageReducer';
import PostedjobReducer from './jobPostingHistoryReducer';
import viewApplicantResumeReducer from './viewApplicantResumeReducer';

const rootReducer = combineReducers({
  Login: LoginReducer,
  form: formReducer,
  signup: signupreducer,
  jobResultsStateStore : jobResultsReducer,
  jobSearchFieldsStateStore : jobSearchReducer,
  jobsLandingPageStateStore : jobsLandingPageReducer,
  peopleSearchFieldsStateStore : peopleSearchReducer
});

export default rootReducer;
