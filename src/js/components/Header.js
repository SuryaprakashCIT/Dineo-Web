import React, {Component} from 'react';
import ContactUs from './ContactUs';
import PropTypes from 'prop-types';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src="../../../img/entire_logo.png"/> 
                <div className="navbar">
                    <ContactUs
                        emailTyped={this.props.emailTyped}
                        messageTyped={this.props.messageTyped}
                        nameTyped={this.props.nameTyped}
                        emailErrorText={this.props.emailErrorText}
                        msgErrorText={this.props.msgErrorText}
                        nameErrorText={this.props.nameErrorText}
                        submitEnabled={this.props.submitEnabled}
                        onSubmitClicked={this.props.onSubmitClicked}
                    />
                </div>
            </div>
        );
    }
}
Header.propTypes = {
    contactUs: PropTypes.func.isRequired,
    emailTyped: PropTypes.func.isRequired,
    nameTyped: PropTypes.func.isRequired,
    messageTyped: PropTypes.func.isRequired,
    submitEnabled: PropTypes.bool.isRequired,
    onSubmitClicked: PropTypes.func.isRequired, 
    emailErrorText:PropTypes.string.isRequired, 
    msgErrorText:PropTypes.string.isRequired, 
    nameErrorText: PropTypes.string.isRequired, 

    
}
export default Header;