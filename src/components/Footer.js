import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return ( 
            <div className="footer">
                <div className="blog-footer">
                    <div className="container">                        
                        <div className="text-center">
                            <p className="small white">Copyright ©2018 EverTurf Inc.<br/> &nbsp;
                            <a href="/privacy-policy">Privacy Policy</a> &nbsp;  |  &nbsp; 
                            <a href="/terms-of-agreement">Terms of Agreement</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;