import React from 'react';

import './style.scss';

const Footer = (props) => {
    return (
        <footer className="container footer">
            <div className="row between-md middle-md">
                <div className="col-md-4 col-sm-6 col-xs-12 social-bar">
                    <ul>
                        <li>
                            <a className="linkedin" href="https://www.linkedin.com/in/dsydorenko"
                               rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </li>
                        <li>
                            <a className="facebook" href="https://www.facebook.com/daniil.sydorenko"
                               rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a className="twitter" href="https://twitter.com/dansydorenko"
                               rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-twitter" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12 copyright">
                    <p>by Daniil Sydorenko &copy; 2017</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
