import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

class EarlyAccess extends Component{
    render(){
        return (
            <div className="inputDetails">
                <TextField className="textField" id="quickAccessEmail" onChange={this.props.emailTyped} hintText="E-Mail Address" />
                <div> <FlatButton id="quickAccess" className="requestButton" onClick={this.props.onSubmitClicked} label="Request for Early Access" /></div>
            </div>
    )
    };
}
EarlyAccess.propTypes = {
    emailTyped:  PropTypes.func.isRequired,
    onSubmitClicked: PropTypes.func.isRequired,
}

export default EarlyAccess;