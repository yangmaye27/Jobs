import React, { FC } from "react";
import styles from "./ImageNavigation.module.scss";
import { useNavigate } from "react-router-dom";

import image1 from "./images/image.png";

const images = [
  { src: image1, label: "功能 1", path: "/feature1" },
  { src: image1, label: "功能 2", path: "/feature2" },
  { src: image1, label: "功能 3", path: "/feature3" },
  { src: image1, label: "功能 4", path: "/feature4" },
  { src: image1, label: "功能 5", path: "/feature5" },
];

const ImageNavigation: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles["image-wrapper"]}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles["image-container"]}
            // onClick={() => nav(image.path)}
          >
            <img src={image.src} alt={image.label} className={styles.image} />
            <div className={styles.overlay}>
              <span className={styles.label}>{image.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageNavigation;
