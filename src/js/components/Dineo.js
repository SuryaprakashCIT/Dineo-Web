import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Snack from './Snack';
import Content from './Content';
import PropTypes from 'prop-types';
class Dineo extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            name: '',
            email: '',
            message: '',
            nameErrorText:'',
            emailErrorText:'',
            msgErrorText:'',
            submitEnabled: false
        };
            this.emailTyped = this.emailTyped.bind(this);
            this.nameTyped = this.nameTyped.bind(this);
            this.messageTyped = this.messageTyped.bind(this);
            this.submitAction = this.submitAction.bind(this);
            this.onSubmitClicked = this.onSubmitClicked.bind(this);
        };
    onSubmitClicked(){
        console.log("Submit was clicked");
        this.props.contactUs({
            name:this.state.name,
            email: this.state.email,
            message: this.state.message,
        });
        
    }
    submitAction(){
       if( this.state.msgErrorText === '' && this.state.emailErrorText === '' && this.state.nameErrorText === ''){
            this.setState({submitEnabled: true});
       }
   }
    emailTyped(event){
        var re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (re.test(event.target.value)) {
            this.setState({email : event.target.value, emailErrorText: 'Enter a valid E-Mail Id'});
        } else {
            this.setState({email : event.target.value, emailErrorText: ''});
        }
         this.submitAction();
        console.log(this.state.email);
    };
    // ^[a-zA-Z0-9_ ]*$
    nameTyped(event){
        var re = new RegExp(/^[a-zA-Z0-9_ ]*$/);
        if (re.test(event.target.value)) {
            this.setState({name : event.target.value, nameErrorText: 'Name is a required field'});
        } else {
            this.setState({name : event.target.value, nameErrorText: ''});
        }
         this.submitAction();
        console.log(this.state.name, "        ", this.state.email);
    }

    messageTyped(event){
        var re = new RegExp(/^[a-zA-Z0-9_ ]*$/);
        if (re.test(event.target.value)) {
            this.setState({message : event.target.value, msgErrorText: 'Name is a required field'});
        } else {
            this.setState({message : event.target.value, msgErrorText: ''});
        }
        this.submitAction();
        console.log(this.state.name, "        ", this.state.message, "        ", this.state.email);
    }

    render(){
        console.log('message=',this.props.snackBarMessage);
        return(
            <div>
                <Header 
                        contactUs={this.props.contactUs} 
                        emailTyped={this.emailTyped}
                        emailErrorText={this.state.emailErrorText}
                        msgErrorText={this.state.msgErrorText}
                        nameErrorText={this.state.nameErrorText}
                        messageTyped={this.messageTyped}
                        nameTyped={this.nameTyped}
                        submitEnabled={this.state.submitEnabled}
                        onSubmitClicked={this.onSubmitClicked}
                />
                <Content 
                    emailTyped={this.emailTyped}
                    emailErrorText={this.state.emailErrorText}
                    onSubmitClicked={this.onSubmitClicked} /> 
                <Footer />
                <Snack message={this.props.snackBarMessage} isSnackbarOpen={this.props.isSnackbarOpen}/>
                <div className="backDrop"></div>    
            </div>
        );
    }
};
Dineo.propTypes = {
    contactUs: PropTypes.func.isRequired,
    snackBarMessage: PropTypes.string.isRequired,
    isSnackbarOpen: PropTypes.bool.isRequired,
}

export default Dineo;
