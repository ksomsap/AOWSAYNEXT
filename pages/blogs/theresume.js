import React from "react";
import Layout from "../../components/Layout";

const Theresume = () => {
  return (
    <Layout title="The Resume Game | AOWSAY">
      <div className="container text-center">
        <h1>The Resume Game</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-10 container-fluid shadow-lg p-3 mb-5 bg-dark rounded">
            <iframe
              frameBorder="0"
              src="https://itch.io/embed-upload/1857824?color=333333"
              allowFullScreen
              width="100%"
              height="500"
              title="The Resume Game"
            >
              <a href="https://msomsap.itch.io/the-resume-game">Play The Resume Game on itch.io</a>
            </iframe>
          </div>
        </div>
        <h3>How To Play</h3>
        <h5>Press button on keyboard [W][A][S][D] to Move</h5>
        <h5>Press button on Left Mouse to Shoot</h5>
        <br />
      </div>
    </Layout>
  );
};

export default Theresume;
