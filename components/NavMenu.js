import React, { Component } from 'react';
import Link from "./ActiveLink";

const NavMenu = () => {
    return (
        
        <div className="container-fulid shadow-sm rounded">
            <style jsx>{`
                font-family:  Impact, sans-serif;
                font-size: 18px;             
            `}</style>

            <nav className="navbar-expand-lg bg-dark fixed-top">
                <div className="container text-center">
                    <div className="d-flex justify-content-center">
                        <Link activeClassName="active" href="/">
                            <a className="nav-item nav-link">HOME</a>
                        </Link>
                        <Link activeClassName="active" href="/about">
                            <a className="nav-item nav-link" >ABOUT</a>
                        </Link>
                        <Link href="https://www.patreon.com/aowsay">
                            <a className="nav-item nav-link" target="_blank" >PATREON</a>
                        </Link>                                                
                    </div>  
                </div>             
            </nav>











            
      </div>
    );
  }


export default NavMenu;