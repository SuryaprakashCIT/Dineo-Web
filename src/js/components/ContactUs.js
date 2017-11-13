import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

export default class ContactUs extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
   handleSubmit = () => {
     this.props.onSubmitClicked();
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={!this.props.submitEnabled}
        onClick={this.handleSubmit}
      />
    ];

    return (
      <div className="contactUs">
        <FlatButton label="Contact Us" onClick={this.handleOpen} />
        <Dialog
          title="Contact Us"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
            Your Name<br />
            <TextField id="tbName" className="textField" hintText="Name" onChange={this.props.nameTyped} errorText={this.props.nameErrorText}/><br /><br />
            Your Email<br />
            <TextField id="tbEmailId" hintText="Mail Id" className="textField" onChange={this.props.emailTyped}  errorText={this.props.emailErrorText}/><br /><br />
            Your Message<br />
            <TextField id="tbMessage" hintText="Message" className="textField" multiLine onChange={this.props.messageTyped} errorText={this.props.errorText} /><br /><br />
        </Dialog>
      </div>
    );
  }
}


ContactUs.propTypes = {
    emailTyped: PropTypes.func.isRequired,
    nameTyped: PropTypes.func.isRequired,
    messageTyped: PropTypes.func.isRequired,
    emailErrorText:PropTypes.string.isRequired, 
    msgErrorText:PropTypes.string.isRequired, 
    nameErrorText: PropTypes.string.isRequired, 
    submitEnabled: PropTypes.bool.isRequired,
    onSubmitClicked: PropTypes.func.isRequired, 
}