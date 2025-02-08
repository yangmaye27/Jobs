import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img src="/logo.png" alt="" />
      </Link>
    </div>
  );
};

export default Logo;
