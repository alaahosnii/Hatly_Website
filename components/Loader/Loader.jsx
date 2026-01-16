'use client';

import React from "react";
import styles from "./loader.module.css";
const loaderImage = "/images/logo CMYK-05.png";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.svgWrapper}>
       <img src={loaderImage} alt="Loading..." className={styles.loaderImg} />
      </div>
    </div>
  );
};

export default Loader;
