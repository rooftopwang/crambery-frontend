import React from 'react'

const NavV = (props) => {
    return (
        <div className="nav-container">
            <nav className="nav-inner transparent">

                <div className="navbar">
                    <div className="container">
                        <div className="row">

                        <div className="brand">
                            <a href="index.html">Pure Mix</a>
                        </div>

                        <div className="navicon">
                            <div className="menu-container">

                            <div className="circle dark inline">
                                <i className="icon ion-navicon"></i>
                            </div>

                            <div className="list-menu">
                                <i className="icon ion-close-round close-iframe"></i>
                                <div className="intro-inner">
                                <ul id="nav-menu">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                                </div>
                            </div>

                            </div>
                        </div>

                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavV; 