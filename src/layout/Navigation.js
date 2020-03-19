import React, { useState, useEffect, useCallback } from "react";

import { Link, useLocation } from "react-router-dom";

import { Menu } from "antd";
import { routes } from "../routes/routes";
import styles from "./styles";

const Navigation = () => {
  const [current, setCurrent] = useState("/");
  const location = useLocation();

  const checkLocation = useCallback(() => {
    return routes.map(prop => {
      return location.pathname === prop.path ? setCurrent(prop.path) : "/";
    });
  }, [location.pathname]);

  useEffect(() => {
    checkLocation();
  }, [checkLocation]);

  const menu = () => {
    return routes.map(prop => {
      return (
        <Menu.Item key={prop.path} style={styles.titleMenu}>
          {prop.icon && <prop.icon />}
          <span>{prop.name}</span>
          <Link to={prop.path} />
        </Menu.Item>
      );
    });
  };

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={styles.containerMenu}
      selectedKeys={[current]}
      defaultSelectedKeys={[current]}
      onClick={handleClick}
    >
      {menu()}
    </Menu>
  );
};

export default Navigation;
