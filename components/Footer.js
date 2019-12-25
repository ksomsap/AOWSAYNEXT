import React from 'react';
import Link from "next/link";

const Footer = (props) => {
    return(
        <div className="container-fluid bg-dark pb-2 pt-4">
            <style jsx>{`
                    img {
                        width:27px;                    
                    }
                    img:hover {
                        color: black;
                        opacity: 0.5;
                    
                    }
                `}</style>
            <div className="container">                
                <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 text-center" >
                        <p>© 2019 AOWSAY. All Rights Reserved.</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-center" />
                <div className="col-lg-3 col-md-3 col-sm-3 text-center" />
                <div className="col-lg-3 col-md-3 col-sm-3 mb-3 text-center">
                
                    <Link href={'https://www.youtube.com/channel/UCTiawqM9Dokq3vm9snbKi9A'}>
                        <a className="mr-2" target="_blank"><img src="/static/images/social/youtube.png" alt="image" /></a>                                            
                    </Link>
                    <Link href="#">
                        <a className="mr-2"  target="_blank"><img src="/static/images/social/twitter.png" alt="image" /></a>                    
                    </Link>
                    <Link  href={'https://www.facebook.com/AOWSAYstudio'}>
                        <a className="mr-2"  target="_blank"><img src="/static/images/social/facebook.png" alt="image" /></a>                   
                    </Link>
                </div>
                </div>
            </div>
        </div>  


        
    )
}

export default Footer;