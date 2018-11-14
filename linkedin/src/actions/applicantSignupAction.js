export const userActions = {
  applicantsignup
};

function applicantsignup(data) {
  console.log("inside applicant signup action ");
  return dispatch => {
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3001/traveller/signup", data)
      .then(response => {
        console.log("xresponse is ", response.data);
        var decoded = jwtDecode(response.data);
        var tid = decoded.user.type;
        var username = decoded.user._id;
        console.log("signup token username", username);
        localStorage.setItem("userType", tid);
        localStorage.setItem("userId", username);
        // localStorage.setItem("userId", response.data.user);
        dispatch(signupsuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}
