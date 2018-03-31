import React from 'react'

const Header = () => {
    return (
        <header className="main-header">

            <a className="logo">

                <span className="logo-mini"><b>A</b>LT</span>

                <span className="logo-lg">CPANEL</span>
            </a>

            <nav className="navbar navbar-static-top">

                <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                </a>
            </nav>
        </header>
    )
};

export default Header;