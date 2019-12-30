import React, { Component } from "react";
import Link from "next/link";

class Detail extends Component{
    render(){
        const{
            title1 = "AOWSAY",
            titledet = "",
            img = "/static/images/products/1.png",
            blogpage = "",
            imgtype1 = "",
            imgtype2 = "",
            imgtype3 = "",
            imgtype4 = ""
        } = this.props;
        return(              
                <div className="col-lg-3 col-md-3 col-sm-3 pb-3 text-center">                
                    <Link className="" href={blogpage}><a>   
                    <style jsx>{`
                        img {
                            border-radius: 40px;
                            width:300px;
                            box-shadow: 0px 6px 10px black;                  
                        }
                        img:hover {
                            color: black;
                            transform: scale(1.03);
                            border-style: solid;
                            border-color: white;
                            box-shadow: 0px 10px 20px black;                        
                        }
                    `}</style>                 
                        <img src={img} className="img-fluid mb-3" />                          
                    </a>
                    </Link>
                    <div className="">
                        <h3 className="text-center mt-1">{title1}</h3>
                        <h5>{titledet}</h5>
                        <p className="text-right pr-5">
                        <style jsx>{`
                            img {
                                opacity: 0.6;                     
                            }
                        `}</style> 
                            <img src={imgtype4} style={{width:18}} className="img-fluid" />
                            <img src={imgtype3} style={{width:18}} className="img-fluid" />
                            <img src={imgtype2} style={{width:18}} className="img-fluid" />
                            <img src={imgtype1} style={{width:18}} className="img-fluid" />
                        </p>
                    </div>                
            </div>                     
        )
    }
}

export default Detail;