import React from "react";
import PropTypes from "prop-types";
import { SyncOutlined } from "@ant-design/icons";

import styles from "./styles";

const Backdrop = props =>
  props.show ? (
    <div style={styles.container} onClick={props.clicked}>
      {props.loading ? (
        <div style={styles.loadingCenter}>
          <SyncOutlined spin style={styles.spinner} />
        </div>
      ) : null}
    </div>
  ) : null;

Backdrop.defaultProps = {
  loading: true
};

Backdrop.propTypes = {
  show: PropTypes.bool,
  loading: PropTypes.bool
};

export default Backdrop;
