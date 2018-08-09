import React from 'react';

import './style.scss';

const Header = (props) => {
    return (
        <header className="container chocolate-grid-header">
            <nav className="nav-menu">
                <div className="nav-menu-logo">Chocolate.grid.js</div>

                <div className="nav-menu-container">
                    <div className="nav-menu-item">
                        <a href="https://github.com/DaniilSydorenko"
                           rel="noopener noreferrer" target="_blank">Look on GitHub</a>
                        <a className="icon-item" href="https://github.com/DaniilSydorenko"
                           rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-github" />
                        </a>
                    </div>
                    <div className="nav-menu-item">
                        <a href="https://github.com/DaniilSydorenko"
                           rel="noopener noreferrer" target="_blank">Try in Codepen</a>
                        <a className="icon-item" href="https://github.com/DaniilSydorenko"
                           rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-codepen" />
                        </a>
                    </div>
                </div>
            </nav>

            <div className="chocolate-grid-hero">
                <div className="chocolate-grid-animation">
                    <div className="cube cube-1" />
                    <div className="cube cube-2" />
                    <div className="cube cube-3" />
                    <div className="cube cube-4" />
                    <div className="hero-text">
                        <p>it's time to add some</p>
                        <p>Flexibility</p>
                        {/*<!--<h1 className='elegantshadow'>Chocolate grid</h1>-->*/}
                        {/*<!--<h1 className='deepshadow'>Chocolate grid</h1>-->*/}
                        {/*<!--<h1 className='retroshadow'>Chocolate grid</h1>-->*/}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
