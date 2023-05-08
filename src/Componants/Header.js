import React from "react";

function Header() {
    return (
        <>
            <div className="row">
                <header id="header" className="fixed-top d-flex align-items-center">
                    <div className="container d-flex align-items-center">
                        <a href="/" className="logo me-auto" ><img src="/img/Axis_infoline_Logo.png" alt="" /></a>

                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>
                                <div class="dropdown">
                                    <button class="dropbtn">Home<i class="fa fa-caret-down"></i></button>
                                    <div class="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                                <li><a className="nav-link" href="/Abouts">About Us</a></li>
                                <li><a className="nav-link" href="/Services">How It Work</a></li>
                                <li><a className="nav-link" href="/Contact">Contact Us</a></li>
                                <div class="dropdown"><i class="fa">&#xf0ac;</i>
                                    <button class="dropbtn">IND<i class="fa fa-caret-down"></i></button>
                                    <div class="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </ul>
                        </nav>
                        <button href="/Login" type="button" className="button1">Login</button>
                        <button type="/Ragister" className="button1">Ragister</button>
                    </div>
                </header>
            </div>

        </>
    );
}
export default Header;