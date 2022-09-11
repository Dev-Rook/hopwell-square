import React, { useState } from "react";
import Styles from "./Styles/Landing.module.css";

import Featured from "../../Components/Sliders/Featured/Featured";
import Contractor from "../../Components/Sliders/Contactors/Contractor";
import Business from "../../Components/Sliders/Business/Business";

const Landing = () => {
  return (
    <div className={Styles.Landing}>
      <Featured />
      <Contractor />
      <Business />
    </div>
  );
};

export default Landing;
