import React, { useState } from "react";
import Styles from "../_Styles_/SliderStyles.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import ContractorData from "./ContractorData";

const Contractor = () => {
  const [cardData, setCardData] = useState(ContractorData);
  return (
    <div className={Styles.Rack}>
      <h3 className={Styles.Rack_Title}>Contractors</h3>
      <Swiper
        speed={800}
        modules={[Navigation, FreeMode, Mousewheel]}
        grabCursor={true}
        loop
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        className={Styles.Swiper}
        breakpoints={{
          360: {
            width: 360,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          380: {
            width: 380,
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          480: {
            width: 480,
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1920: {
            width: 1920,
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
      >
        <div className={Styles.Tray}>
          {cardData.map((slide) => {
            const { id, Name, Image, Category, Description } = slide;

            return (
              <SwiperSlide className={Styles.Slide}>
                <div className={Styles.Card} key={id}>
                  <div className={Styles.Display_Image_Container}>
                    <img src={Image} alt="" className={Styles.Display_Image} />
                  </div>

                  <div className={Styles.Information_Box}>
                    <div className={Styles.Name__Category}>
                      <p className={Styles.NC_Text}>{Name}</p>
                      <p className={Styles.NC_Text}>{Category}</p>
                    </div>

                    <span className={Styles.Description}>{Description}</span>

                    <div className={Styles.Ratings__View}>
                      <div className={Styles.Ratings_Container}>
                        <div className={Styles.Rating}></div>
                        <div className={Styles.Rating}></div>
                        <div className={Styles.Rating}></div>
                      </div>

                      <button className={Styles.View_Button}>View</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Contractor;
