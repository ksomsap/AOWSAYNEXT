import React, { Component } from 'react';
import Link from "./ActiveLink";

const NavMenu = () => {
    return (
        
        <div className="container-fulid shadow-sm rounded">
            <style jsx>{`
                a
                {
                    font-family:  Impact, sans-serif;
                    font-size: 18px;
                    color: gray;
                }
                a:hover, a.active, a.current {
                    color: crimson;
                    font-size:20px;
                }
                p
                {
                    font-size: 10px;
                    text-decoration: underline overline;
                }               
                nav{
                    background-color:silver;
                }           
            `}</style>
            <nav className="navbar-expand-lg shadow-lg fixed-top">          
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 text-left">                           
                        </div> 
                         
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="d-flex justify-content-center">                                                     
                                <Link activeClassName="active" href="/">
                                    <a className="nav-item nav-link">HOME</a>
                                </Link>
                                <Link activeClassName="active" href="/about">
                                    <a className="nav-item nav-link" >ABOUT</a>
                                </Link>
                                <Link href="">
                                    <a className="nav-item nav-link" >PATREON</a>
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