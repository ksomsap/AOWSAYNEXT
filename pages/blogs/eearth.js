import React, { Component } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

class Eearth extends Component {
    render() {
        return (
            <Layout title="10Day Earth | AOWSAY">
                <div className="container text-center">
                    <h1>10Day Earth</h1>
                    <div className="row d-flex justify-content-center">
                        <div className="col-10 container-fluid shadow-lg p-3 mb-5 bg-dark rounded">
                            <iframe
                                width="100%"
                                height="500"
                                src="https://www.youtube.com/embed/MoZ2i-CW-Yw"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <h3>Already Supported</h3>
                    <div className="d-flex justify-content-center">
                        <Link href="https://apps.apple.com/us/app/10dayearth/id1495275950" passHref>
                            <a className="m-3">
                                <img src="/static/images/logo/ios.png" style={{ width: 200 }} className="img-fluid" />
                            </a>
                        </Link>
                        <Link href="https://play.google.com/store/apps/details?id=com.aowsay.EEarth" passHref>
                            <a className="m-3">
                                <img src="/static/images/logo/goo.png" style={{ width: 200 }} className="img-fluid" />
                            </a>
                        </Link>
                        <Link href="https://aowsay.itch.io/10day-earth" passHref>
                            <a className="m-3">
                                <img src="/static/images/logo/itch.png" style={{ width: 200 }} className="img-fluid" />
                            </a>
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Eearth;
