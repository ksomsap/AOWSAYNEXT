import React from 'react';
import Link from "next/link";

const Footer = (props) => {
    return (
        <div>
            <style jsx>{`
                background-color:silver;
                img {
                    width:40px;                    
                }
                img:hover {
                    color: black;
                    opacity: 0.5;
                
                }
                #aaa{
                    border: 1px solid gray;
                    padding-left:10px;
                    padding-right:10px;
                    padding-top:5px;
                    padding-bottom:5px;
                    margin-left:5px;
                    margin-right:5px;
                    text-decoration: none;
                    color:black;
                }
                #aaa:hover
                {
                    background-color:#EBEBEB;
                    text-decoration: underline;
                    text-decoration: none
                }
                
            `}</style>
            <div className="shodow-lg container-fluid pt-3">                   
                <div className="container">                
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 pt-2 text-center" >
                                <p>© 2020 AOWSAY. All Rights Reserved.</p>                           
                        </div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 pb-3 text-center">
                        
                            <Link
                                href={'https://www.youtube.com/channel/UCTiawqM9Dokq3vm9snbKi9A'}
                                legacyBehavior>
                                <a className="mr-2" target="_blank"><img src="/static/images/social/youtube.png" alt="image" /></a>                                            
                            </Link>
                            <Link href="#" legacyBehavior>
                                <a className="mr-2"  target="_blank"><img src="/static/images/social/twitter.png" alt="image" /></a>                    
                            </Link>
                            <Link href={'https://www.facebook.com/AOWSAYstudio'} legacyBehavior>
                                <a className="mr-2"  target="_blank"><img src="/static/images/social/facebook.png" alt="image" /></a>                   
                            </Link>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 text-center pl-8 pt-2 pb-2 mb-3 d-flex justify-content-center">
                            <a id="aaa" href='/term' target="_blank">Terms of Service</a>  
                            <a id="aaa" href='/policy' target="_blank">Privacy Policy</a>
                        </div>                         
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default Footer;