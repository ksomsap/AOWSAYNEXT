import React, { Component } from "react";
import Layout from "../components/Layout";
import Detail from "./detail";

class Index extends Component{
    render(){
        return(
            <Layout>                
                <div className="container">

                    <div className="text-center">                       
                        <h1 className="text-center"><b>FEATURED GAMES</b></h1>
                    </div>                   
                    <div className="row d-flex justify-content-center">
                        <Detail 
                            title1 = "The Resume Game"
                            blogpage = "/blogs/theresume"
                            img = "/static/images/products/TheResume/theresume.png"
                            imgtype1 = "/static/images/type/web.png"
                        />
                        <Detail  
                            title1 = "Go Gaxy"
                            blogpage = "/blogs/gogaxy"
                            img = "/static/images/products/GoGaxy/gogaxy.png"
                            imgtype4 = "/static/images/type/web.png"
                            imgtype3 = "/static/images/type/window.png"
                            imgtype2 = "/static/images/type/apple.png"
                            imgtype1 = "/static/images/type/android.png"
                        />
                        <Detail title1 = "Coming Soon..." 
                            img = "/static/images/logo/logoaow2.png"
                        />
                        <Detail title1 = "Coming Soon..." 
                            img = "/static/images/logo/logoaow.png"
                        />
                        <Detail title1 = "Coming Soon..." 
                            img = "/static/images/logo/logoaow2.png"
                        />
                        <Detail title1 = "Coming Soon..." 
                            img = "/static/images/logo/logoaow.png"
                        /> 
                    </div>


                    <h1 className="text-center"><b>UPDATE NEWS...</b></h1>
                    <div> 
                                
                    </div>
                </div>          
            </Layout>               
        )
    }
}

export default Index;