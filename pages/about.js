import React, { Component } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
const About = () => {
    return (
        <Layout title = "About | AOWSAY">
            <div className="container text- center">
                <div className="text-center">
                    <div className="row text-center">
                        <div className="col-lg-2 col-md-2 col-sm-2" />
                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <h1 style={{color:'green'}}><b>ABOUT US</b></h1>
                            <p>AOWSAY creates amazing games that make an happiness impact on gamers around the world!</p>
                            <p className="text-center">
                            Making a Game may seem like a few simple lines of code, but for these game development to deliver results, you need skilled specialists who go beyond just coding. This is where the first step in, providing a complete range of innovative new game products that make an emotional impact on gamers around the world!. We believe that our most important game is delivering happiness and shocking to everyone who enjoyed the game.
                            </p>
                            <br/>
                            <hr/>
                        </div>
                    </div>                    
                    <div className="col-lg-2 col-md-2 col-sm-2" />                   
                    <br/>
                    <h1 style={{color:'green'}}><b>THE TEAM</b></h1>
                    <br/>
                    <div className="row pb-10">
                        <div className="col-lg-2 col-md-2 col-sm-2 text-center" />
                        <div className="col-lg-3 col-md-3 col-sm-3 text-center pb-3">
                            <img src="/static/images/theteam/theteam-me.png" className="img-fluid" />
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5 text-left">
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
                            <h3 className="mb-3">Owner & Developer</h3>
                            <h4 className="mb-3">
                                Keittisak Phasomsap has an interesting in Game Development.<br/>
                                And his free time is learning new technology and making a game.<br/>
                                In 2019, He's became a Developer in AOWSAY Game Studio.<br/>
                                He's just announced the resume game to find new job opportunities to support his interesting.
                            </h4>
                            <Link href="https://www.linkedin.com/in/keittisak-phasomsap-72491413b/">
                                <a className="mr-2" target="_blank"><img src="/static/images/social/linkedin.png" alt="image" /></a>                    
                            </Link>
                            <Link href={`mailto:keittisakcpm@gmail.com`}>
                                <a className="mr-2" target="_top"><img src="/static/images/social/mail.png" alt="image" /></a>                                            
                            </Link>                                                        
                        </div>
                    </div>                    
                    <br/>
                </div>
            </div>                
        </Layout>        
    )
}

export default About;