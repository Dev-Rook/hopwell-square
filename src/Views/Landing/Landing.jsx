import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "./Styles/Landing.module.css";

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

import Featured from "../../Components/Sliders/Featured/Featured";
import Contractor from "../../Components/Sliders/Contactors/Contractor";
import Business from "../../Components/Sliders/Business/Business";

const Landing = () => {
  const [loacationData, setLocationData] = useState({});

  const url = `dogwater`;

  const getLocationData = () => {
    axios.get(url).then((res) => {
      setLocationData(res.data);
    });
  };

  return (
    <div className={Styles.Landing}>
      <div className={Styles.Hero_Board}>
        <img
          src={require("../../Assets/Images/RoundHill.jpeg")}
          alt=""
          className={Styles.Hero_Image}
        />
      </div>

      <div className={Styles.Title__WeatherBox}>
        <h1 className={Styles.Brand}>Hopewell Square</h1>

        <div className={Styles.Weather_Box}>
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Lobster%20Trapp&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
      <Featured />
      <Contractor />
      <Business />
    </div>
  );
};

export default Landing;
