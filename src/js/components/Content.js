import React, {Component} from 'react';
import EarlyAccess from './EarlyAccess';
import PropTypes from 'prop-types';

class Content extends Component {
    render() {
        return (
            <div className="content-body">
                <span className="title">
                        <img src="../../../img/changing.png"/> 
                        <img src="../../../img/wedine.png"/> 
                    </span>
                <div className="banner">
                    <img src="../../../img/mobile_pics.png"/> 
                    <div className="backDrop"></div>
                </div>
                <div className="content">    
                    <div className="title">
                        <img src="../../../img/changing.png"/> 
                        <img src="../../../img/wedine.png"/> 
                    </div>
                    <div className="content-text">
                        <span>
                            It is a fast and hassle free way to Order and Pay at your favorite restaurant without waiting for a waiter anymore.
                        </span>
                        <span>
                            Browse a digital menu with beautiful dish photos and descriptioins, check dish reviews and ratings,customize your dishes and send
                            order directly from your phone
                        </span>
                    </div>
                    <EarlyAccess onSubmitClicked={this.props.onSubmitClicked} emailTyped={this.props.emailTyped}/> 
                    <div className="store"><div>
                        <img src="../../../img/app_store.png"/>
                        <img src="../../../img/play_store.png"/> </div>
                    </div>
                </div>
            </div>
        );
    }
}

Content.propTypes = {
    emailTyped:  PropTypes.func.isRequired,
    onSubmitClicked: PropTypes.func.isRequired,
}

export default Content;
