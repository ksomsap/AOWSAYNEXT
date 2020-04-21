import React, { Component } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
const About = () => {
    return (
        <Layout title = "About | AOWSAY">
            <br/>
            <div className="container-fluid text-center">            
                <div className="text-center">
                    {/* Start row */}
                    <div className="row text-center">
                        <style jsx>{`
                            h1 {
                                font-family:  Impact, sans-serif;
                                font-size: 35px;
                                margin-top:10px;
                                margin-bottom:20px; 
                                text-decoration: underline overline;
                            }
                        `}</style>

                        {/* DIV ABOUT 3-6-3 */}                        
                        <div className="col-lg-3 col-md-3 col-sm-3" />
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <h1><b>ABOUT US</b></h1>
                            <p className="text-center" >
                                AOWSAY creates amazing games that make an happiness impact on gamers around the world!</p>
                            <p className="text-center">
                                Making a Game may seem like a few simple lines of code,
                                 but for these game development to deliver results, 
                                 you need skilled specialists who go beyond just coding. 
                                 This is where the first step in, 
                                 providing a complete range of innovative new game products 
                                 that make an emotional impact on gamers around the world!. 
                                 We believe that our most important game is delivering happiness 
                                 and shocking to everyone who enjoyed the game.
                            </p>
                            <br/>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3" /> 
                    </div>   
                    {/* End row */}  

                    <div className="container-fluid">                     
                            <div>                    
                                <style jsx>{`                        
                                        h1 {
                                            font-family:  Impact, sans-serif;
                                            font-size: 35px;
                                            padding-top:30px;
                                            margin-bottom:20px; 
                                            text-decoration: underline overline;
                                        }
                                    `}</style>
                                    <h1><b>THE TEAM</b></h1>
                            </div>
                        <div className="row pb-10">
                            <div className="col-lg-3 col-md-3 col-sm-3" />
                            <div className="col-lg-2 col-md-2 col-sm-2 text-center pb-3">
                                <img style={{width:250}} src="/static/images/theteam/theteam-me.png" className="img-fluid" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 text-left">
                                <style jsx>{`
                                    img {
                                        width:27px;                    
                                    }
                                    img:hover {
                                        color: black;
                                        opacity: 0.5;                                
                                    }
                                `}</style>
                                <h2 className="mb-3"><b>KEITTISAK PHASOMSAP</b></h2>
                                <h3 className="mb-3">Owner | Web Developer | Game Developer</h3>
                                <h4 className="mb-3">
                                    Keittisak Phasomsap has an interesting in Game Development.<br/>
                                    And his free time is learning new technology and making a game.<br/>
                                    In 2019, He's became a Developer in AOWSAY Game Studio.<br/>
                                    He's just announced the resume game to find new job opportunities to support his interesting.
                                </h4>
                                <h4>
                                    Contacts...
                                </h4>
                                <Link href="https://www.linkedin.com/in/keittisak-phasomsap-72491413b/">
                                    <a className="mr-2" target="_blank"><img src="/static/images/social/linkedin.png" alt="image" /></a>                    
                                </Link>
                                <Link href={`mailto:keittisakcpm@gmail.com`}>
                                    <a className="mr-2" target="_top"><img src="/static/images/social/mail.png" alt="image" /></a>                                            
                                </Link>                                                        
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3"></div>
                        </div>                    
                        <br/>
                    </div>
                </div>
            </div>                
        </Layout>        
    )
}

export default About;