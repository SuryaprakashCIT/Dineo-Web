import React, {Component} from 'react';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="links">
                    <span> Follow us on : </span>
                    <a href="#"><img src="../../../img/insta_icon.png"/></a>
                    <a href="#"><img src="../../../img/twitter_icon.png"/></a>
                    <a href="#"><img src="../../../img/fb_icon.png"/></a>
                </div>
                <span className="note">
                       Made with ♥ in India.All rights reserved @ Dineo.
                </span>
             </div>
        );
    }
}

export default Footer;