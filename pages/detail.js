import React, { Component } from "react";
import Link from "next/link";

class Detail extends Component{
    render(){
        const{
            title1 = "AOWSAY", 
            img = "/static/images/products/1.png",
            blogpage = "",
            imgtype1 = "",
            imgtype2 = "",
            imgtype3 = "",
            imgtype4 = ""
        } = this.props;
        return(              
                <div className="col-lg-3 col-md-3 col-sm-3 ml-2 mr-3  shadow-lg mb-5 pt-3 bg-dark rounded">
                <style jsx>{`
                    img {
                        border-radius:30px;                               
                    }
                `}</style>
                <Link href={blogpage}><a>                    
                    <img src={img} className="img-fluid mb-3" />                          
                </a>
                </Link>
                <h3 className="text-center">{title1}</h3>
                <p className="text-right">
                    <img src={imgtype4} style={{width:20}} className="img-fluid" />
                    <img src={imgtype3} style={{width:20}} className="img-fluid" />
                    <img src={imgtype2} style={{width:20}} className="img-fluid" />
                    <img src={imgtype1} style={{width:20}} className="img-fluid" />
                </p>
            </div>                     
        )
    }
}

export default Detail;