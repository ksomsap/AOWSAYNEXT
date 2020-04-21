import React, { Component } from "react";
import Layout from "../components/Layout";
import Detail from "./detail";

class Index extends Component{
    render(){
        return(
            <Layout>                
                <div className="container">
                    <style jsx>{`
                        h1{
                            font-family:  Impact, sans-serif;
                            font-size: 40px;
                            margin-top:10px;
                            margin-bottom:20px;
                        }
                        h1:hover{                         
                        }                            
                                   
                        `}</style>
                    <div className="text-center">                                           
                        <h1 className="text-center"><b>FEATURED GAMES</b></h1>
                    </div>                   
                    <div className="row d-flex justify-content-center">
                        <Detail title1 = "10Day Earth" 
                            img = "/static/images/products/EEarth/eearth.png"
                            titledet = "The Earth's going down to broken."
                            blogpage = "/blogs/eearth"
                            imgtype3 = "/static/images/type/web.png"                            
                            imgtype2 = "/static/images/type/apple.png"
                            imgtype1 = "/static/images/type/android.png"
                        />                        
                        <Detail  
                            title1 = "Go Gaxy"
                            titledet = "Please leave the wall"
                            blogpage = "/blogs/gogaxy"
                            img = "/static/images/products/GoGaxy/gogaxy.png"
                            imgtype3 = "/static/images/type/web.png"
                            imgtype2 = "/static/images/type/apple.png"
                            imgtype1 = "/static/images/type/android.png"
                        />
                        <Detail 
                            title1 = "The Resume Game"
                            titledet = "Fight with monsters to find the treasure."
                            blogpage = "/blogs/theresume"
                            img = "/static/images/products/TheResume/theresume.png"
                            imgtype1 = "/static/images/type/web.png"
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


                    <h1 className="text-center"><b></b></h1>
                    <div className="bg-light">
                        
                    </div>                      
                </div>          
            </Layout>               
        )
    }
}

export default Index;