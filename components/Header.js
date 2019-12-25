import React, { Component } from "react";

class Header extends Component {
    render() {
        const style = { width: 400 }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <img style={{width:150}} src="/static/images/logo/icon.png" className="img-fluid" />
                        <h1 className="text-danger">                            
                            <b>AOWSAY Game Studio</b>
                        </h1>
                        <br/>
                    </div>
                    
                    <div className="col-md-4 text-right">

                    </div>
                </div>
            </div>
        )
    }
}

export default Header;