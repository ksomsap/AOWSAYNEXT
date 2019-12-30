import React, { Component } from "react";

class Header extends Component {
    render() {
        const style = { width: 400 }
        return (
            <div>
                <style jsx>{`
                    background-color:#E5E5E5;
                `}</style>
                <div className="container-fluid">
                    <br/>
                    <div className="row">                        
                        <div className="col-lg-3 col-md-3 col-sm-3 text-center">
                        
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 text-center" >
                        <img style={{width:150}} src="/static/images/logo/icon.png" className="img-fluid" />
                        <h1 className="text-danger">                            
                            <b className="" > AOWSAY Game Studio </b>
                        </h1>
                        <br/>
                        </div>
                    </div>
                </div>                            
            </div>
        )
    }
}

export default Header;