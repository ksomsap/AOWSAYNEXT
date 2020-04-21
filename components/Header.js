import React, { Component } from "react";

class Header extends Component {
    render() {
        const style = { width: 400 }
        return (
            <div>
                <style jsx>{`
                    #topbar{
                        background-color:#E5E5E5;
                        background-image: url("/static/images/bg/cover0.png");
                        height:300px;
                        background-position: center;
                        background-size: cover;
                    }

                `}</style>
                <div id="topbar" className="container-fluid">

                    <div className="row">                        
                        <div className="col-lg-3 col-md-3 col-sm-3 text-left">
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 text-center" >

                        </div>
                    </div>

                </div> 
                <br/>                           
            </div>
        )
    }
}

export default Header;