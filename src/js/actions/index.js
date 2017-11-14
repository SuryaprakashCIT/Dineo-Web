import axios from 'axios';

const slackWebhook = (message) => {
    return (dispatch) =>{
        axios.post('https://hooks.slack.com/services/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', message)
        .then( (response) => {
            if(response.data === "Done"){
                console.log("Success");
            }
        }).catch( (exception) => {
           setTimeout(() => {
               dispatch(closeSnack())
             }, 2500);
       })
   }
}

const contactUs = (userDetails) => {
    return (dispatch) =>{
         axios.post('http://www.dineo.in/newContact', userDetails)
         .then( (response) => {
             if(response.data === "Done"){
                 console.log("Success");
                 dispatch(postSuccess());
                if(userDetails.name !== ''){
                    dispatch(slackWebhook(
                        {
                            "text": "*"+userDetails.name+"* wants to get in touch with us. \n Says "+userDetails.message+"\n *Contact details :* "+userDetails.email,
                        }
                    ));
                } else {
                    dispatch(slackWebhook(
                        {
                            "text": "A new user is interested in us : *"+userDetails.email+"*",
                        }
                    ));
                }
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