
import React from "react";
import Slider from "react-slick";

const HomeBanner = ()=>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };

    return(
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://img.freepik.com/free-psd/banner-fashion-store-template_23-2148675207.jpg?w=1380&t=st=1725358618~exp=1725359218~hmac=93022f4ab90af2f7eac08e112e0cbd4f14ffc85ba82bde06bb6cde7a45b5e2ea" 
                    className="w-100"/>

                </div>
                <div className="item">
                    <img src="https://img.freepik.com/free-psd/new-season-male-fashion-banner-template_23-2148772389.jpg?w=1380&t=st=1725358757~exp=1725359357~hmac=16f691b3862a546039285a74546588ee09a27bdbbabdebd3273d964fe733755d" 
                    className="w-100"/>

                </div>
                <div className="item">
                    <img src="https://img.freepik.com/premium-vector/fashion-sale-social-media-facebook-cover-banner-template_623011-55.jpg?w=1060" 
                    className="w-100"/>

                </div>
                <div className="item">
                    <img src="https://img.freepik.com/free-psd/clothing-store-concept-banner-template_23-2148722604.jpg?w=1380&t=st=1725358981~exp=1725359581~hmac=5a4a7148aef2c6680c4d2de4dd493060cae8a6a6b6e8ad4f637ddafab46798b0" 
                    className="w-100"/>
                </div>
            </Slider>
        </div>
    )
}

export default HomeBanner

