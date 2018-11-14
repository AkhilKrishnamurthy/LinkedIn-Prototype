import * as UserConstants from "../../src/Constants/UserConstants";

const initialState = {
  isApplicantSignedUp: false,
  isRecruiterSignedUp: false,
  username: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UserConstants.APPLICANT_SIGNUP_SUCCESS:
      return {
        ...state,
        isApplicantSignedUp: true,
        isRecruiterSignedUp: false
      };
    case UserConstants.RECRUITER_SIGNUP_SUCCESS:
      return {
        ...state,
        isRecruiterSignedUp: true,
        isApplicantSignedUp: false,
        username: action.message
      };
  }
  return state;
};
export default reducer;
