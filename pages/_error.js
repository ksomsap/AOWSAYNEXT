import React, { Component } from "react";
import Layout from "../components/Layout";

class Error extends Component{
    static getInitialProps({ res, err})
    {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return {statusCode};
    }
    render(){
        return (
            <Layout>
                <div className="container">
                    <div className="text-center">
                        <br/>
                        <h1 style={{fontSize:80}} >Opps!! Error</h1>
                        <h1 style={{fontSize:200}} >{this.props.statusCode}</h1>
                        <h3>This page could not be found.</h3>
                        <h3>
                            {this.props.statusCode ?
                                'An error occured on server' :
                                'An error occured on client'
                            } 
                        </h3>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Error;