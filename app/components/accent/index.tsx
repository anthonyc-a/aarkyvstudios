import styles from "./index.module.scss";

import React from "react";

const AccentHeaderOne = ({ text }: any) => {
  return (
    <div className={`${styles.header}`}>
      <p className={styles.headerInner}>{text}</p>
    </div>
  );
};

export default AccentHeaderOne;
