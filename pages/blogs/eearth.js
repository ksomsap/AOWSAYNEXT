import React, { Component } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
class Eearth extends Component {

    render() {
        return (           
            <Layout title = "10Day Earth | AOWSAY">                                            
                <div className="container text-center">
                    <h1>10Day Earth</h1>
                    <div className="row d-flex justify-content-center">                        
                        <div className="col-10 container-fluid shadow-lg p-3 mb-5 bg-dark rounded">
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/MoZ2i-CW-Yw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <h3>Already Supported</h3>
                        <div>
                            <Link className="" href="https://apps.apple.com/us/app/10dayearth/id1495275950"><a target="_blank"><img src="/static/images/logo/ios.png" style={{width:200}} className="img-fluid m-3 ml-3" /></a></Link>
                            <Link className="" href="https://play.google.com/store/apps/details?id=com.aowsay.EEarth"><a target="_blank"><img src="/static/images/logo/goo.png" style={{width:200}} className="img-fluid m-3 ml-3" /></a></Link>
                        </div>
                        <div>
                            <Link className="" href="https://aowsay.itch.io/10day-earth"><a target="_blank"><img src="/static/images/logo/itch.png" style={{width:200}} className="img-fluid m-3 ml-3" /></a></Link>
                        </div>
                    <br/>
                    <br/>
                    <br />
                </div>          
            </Layout>
        )
    }
}

export default Eearth;