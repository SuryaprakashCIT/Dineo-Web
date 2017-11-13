import React, {Component} from 'react';
import ContactUs from './ContactUs';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

export class Snack extends Component{
    constructor(props) {
        super(props);
        this.state = {
            autoHideDuration: 4000,
            message:this.props.message,
            open: this.props.isSnackbarOpen,
        };
    }
    componentWillRececiveProps(){
        this.setState({
            message: this.props.message,
            open: this.props.isSnackbarOpen,
        });
    }
    handleTouchTap = () => {
        this.setState({
        open: true,
        });
    };
    handleRequestClose = () => {
        this.setState({
        open: false,
        });
    };

    render() {
        return (
        <Snackbar
            open={this.props.isSnackbarOpen}
            message={this.props.message}
            autoHideDuration={this.state.autoHideDuration}
        />
        );
    };
}

Snack.propTypes ={
    message: PropTypes.string.isRequired,
    isSnackbarOpen: PropTypes.bool.isRequired,
};

export default Snack;