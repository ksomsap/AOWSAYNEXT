import React, { Component } from "react";
import Layout from "../../components/Layout";

class Gogaxy extends Component {

    render() {
        return (
            <Layout title = "Go Gaxy | AOWSAY">                                            
                <div className="container text-center">
                    <h1>Go Gaxy</h1>
                    <div className="row d-flex justify-content-center">                        
                        <div className="col-10 container-fluid shadow-lg p-3 mb-5 bg-dark rounded">
                            <iframe 
                                frameborder="0" 
                                src="https://itch.io/embed-upload/1859418?color=333333" 
                                allowfullscreen=""
                                width="100%"
                                height="500"
                                >
                                <a href="https://aowsay.itch.io/go-gaxy">Play Go Gaxy on itch.io</a>
                            </iframe>
                        </div>
                    </div>                   
                    <h3>How To Play</h3>
                    <h5>Drag Left Mouse Slide Up and Down to left the wall</h5>
                    <br />
                </div>          
            </Layout>
        )
    }
}

export default Gogaxy;