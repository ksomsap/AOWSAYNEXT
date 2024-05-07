import React, { Component } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
class Theresume extends Component {

    render() {
        return (
            <Layout title = "Go Gaxy | AOWSAY">                                            
                <div className="container text-center">
                    <h1>Go Gaxy</h1>
                    <div className="row d-flex justify-content-center">                        
                        <div className="col-10 container-fluid shadow-lg p-3 mb-5 bg-dark rounded">
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/vMp7aj9Mxwc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                        </div>
                    </div>
                    <h3>Already Supported</h3>
                        <div>
                            <Link className="" target="_blank" legacyBehavior><img src="/static/images/logo/ios.png" style={{width:200}} className="img-fluid m-3 ml-3" /></Link>
                            <Link
                                className=""
                                href="https://play.google.com/store/apps/details?id=com.aowsay.GoGaxy"
                                target="_blank"
                                legacyBehavior><img src="/static/images/logo/goo.png" style={{width:200}} className="img-fluid m-3 ml-3" /></Link>
                        </div>
                        <div>
                            <Link
                                className=""
                                href="https://aowsay.itch.io/gogaxy"
                                target="_blank"
                                legacyBehavior><img src="/static/images/logo/itch.png" style={{width:200}} className="img-fluid m-3 ml-3" /></Link>
                        </div>
                    <br/>
                    <br/>
                    <br />
                </div>          
            </Layout>
        );
    }
}

export default Theresume;