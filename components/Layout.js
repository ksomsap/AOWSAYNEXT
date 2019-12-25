import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import NavMenu from "./NavMenu";

class Layout extends Component{
    render(){
        const{children, title = "AOWSAY"} = this.props;
        return(
            <div>
                <NavMenu/>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no*" />
        
                    <link rel = "icon" href = "/static/images/logo/icon.png" type = "image/x-icon" /> 
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/static/css/style.css" />
                </Head>
                <Header />
                    {children}
                <Footer />
            </div>
        )
    }
}

export default Layout;
