import React, { Component } from 'react';
import Link from "./ActiveLink";

const NavMenu = () => {
    return (
        
        <div className="container-fulid shadow-sm rounded">
            <style jsx>{`
                font-family:  Impact, sans-serif;
                font-size: 20px;
                nav{
                    background-color:silver;
                }           
            `}</style>
            <nav className="navbar-expand-lg shadow-lg fixed-top">          
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 text-left text-danger ">                            
  
                        </div> 
                         
                        <div className="col-lg-4 col-md-4 col-sm-4">
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

                        <div className="col-lg-4 col-md-4 col-sm-4" />               
                    </div>      
                </div>             
            </nav>            
      </div>
    );
  }


export default NavMenu;