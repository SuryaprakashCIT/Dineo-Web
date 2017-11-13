import axios from 'axios';

const contactUs = (userDetails) => {
    console.log("Recieved userdetails : ", userDetails.name);
    return (dispatch) =>{
         axios.post('http://www.dineo.in/newContact', userDetails)
         .then( (response) => {
             if(response.data === "Done"){
                 console.log("Success");
                 dispatch(postSuccess());
                 setTimeout(() => {
                    dispatch(closeSnack())
                  }, 2500);
             }
         }).catch( (exception) => {
            console.log(exception);
            dispatch(postFailure());
            setTimeout(() => {
                dispatch(closeSnack())
              }, 2500);
         })
        }
}
const postSuccess =() => {
    return { type: 'POST_SUCCESS', };
};
const closeSnack =() => {
    return { type: 'CLOSE_SNACK', };
};


const postFailure= () =>{
    return {
    type: 'POST_FAILURE',
    }
};

export {
    contactUs,
    postSuccess,
    postFailure,
};