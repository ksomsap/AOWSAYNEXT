import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

const GoGaxy = () => {
  return (
    <Layout title="Go Gaxy | AOWSAY">
      <div className="container text-center">
        <h1>Go Gaxy</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-10 container-fluid shadow-lg p-3 mb-5 bg-dark rounded">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/vMp7aj9Mxwc"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Go Gaxy Video"
            ></iframe>
          </div>
        </div>
        <h3>Already Supported</h3>
        <div className="d-flex justify-content-center">
          <Link href="https://apps.apple.com/us/app/10dayearth/id1495275950" passHref legacyBehavior>
            <a target="_blank" className="m-3">
              <img
                src="/static/images/logo/ios.png"
                style={{ width: 200 }}
                className="img-fluid"
                alt="iOS Logo"
              />
            </a>
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.aowsay.GoGaxy" passHref legacyBehavior>
            <a target="_blank" className="m-3">
              <img
                src="/static/images/logo/goo.png"
                style={{ width: 200 }}
                className="img-fluid"
                alt="Google Play Logo"
              />
            </a>
          </Link>
          <Link href="https://aowsay.itch.io/gogaxy" passHref legacyBehavior>
            <a target="_blank" className="m-3">
              <img
                src="/static/images/logo/itch.png"
                style={{ width: 200 }}
                className="img-fluid"
                alt="Itch.io Logo"
              />
            </a>
          </Link>
        </div>
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
};

export default GoGaxy;
