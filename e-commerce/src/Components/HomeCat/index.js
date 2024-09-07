import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const HomeCat = () => {
  return (
    <section className="homeCat">
      <div className="container">
        <Swiper
          slidesPerView={10}
          spaceBetween={8}
          navigation={true}
          slidesPerGroup={1}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
              <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
              <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
              <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
              <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
              <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
              <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
              <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
              <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
              <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
              <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
              <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
              <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
              <h6>Red Apple</h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
