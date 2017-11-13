const defaultState = {
   message: '',
   isSnackbarOpen: false,
};

const  SnackBarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'POST_SUCCESS':
            return Object.assign({}, state, {
                message: "Thanks for showing intrest in our product.We will get back to you soon",
                isSnackbarOpen:true,
            });

        case 'POST_FAILURE':
         return Object.assign({}, state, {
                message: "Something went wrong . Please try again.",
                isSnackbarOpen:true,
        });

        case 'CLOSE_SNACK' :
            return Object.assign({}, state, {
                message: "",
                isSnackbarOpen: false,
            });

    }
    return state;
}

export default SnackBarReducer;