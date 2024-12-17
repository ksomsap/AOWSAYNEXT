import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

const Eearth = () => {
  return (
    <Layout title="10Day Earth | AOWSAY">
      <div className="container text-center">
        <h1>10Day Earth</h1>
        <section className="video-section">
          <div className="row d-flex justify-content-center">
            <div className="col-10 container-fluid shadow-lg p-3 mb-5 bg-dark rounded">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/MoZ2i-CW-Yw"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="10Day Earth Video"
              ></iframe>
            </div>
          </div>
        </section>
        <section className="support-section">
          <h3>Already Supported</h3>
          <div className="d-flex justify-content-center">
            <Link href="https://apps.apple.com/us/app/10dayearth/id1495275950">
              <img 
                src="/static/images/logo/ios.png" 
                className="img-fluid logo m-3"
                alt="iOS Logo" 
                style={{ width: 200 }}
              />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.aowsay.EEarth">
              <img 
                src="/static/images/logo/goo.png" 
                className="img-fluid logo m-3"
                alt="Google Play Logo" 
                style={{ width: 200 }}
              />
            </Link>
            <Link href="https://aowsay.itch.io/10day-earth">
              <img 
                src="/static/images/logo/itch.png" 
                className="img-fluid logo m-3"
                alt="Itch.io Logo" 
                style={{ width: 200 }}
              />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Eearth;
