import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/main_strapi_web_fa797dee45/main_strapi_web_fa797dee45.png"
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/static_web_Forever_New_AND_and_more_b62fcda2ba/static_web_Forever_New_AND_and_more_b62fcda2ba.png"
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/static_web_Biba_Global_Desi_and_more_a0e91c950b/static_web_Biba_Global_Desi_and_more_a0e91c950b.png"
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/static_web_YSL_Burberry_and_more_a8595e6940/static_web_YSL_Burberry_and_more_a8595e6940.png"
            className="w-100"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
