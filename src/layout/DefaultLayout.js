import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import { routes } from "../routes/routes";
import Navigation from "./Navigation";
import marvel from "../assets/marvel.svg";
import styles from "./styles";
const { Header, Content } = Layout;

const DefaultLayout = () => {
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      return (
        <Route
          key={key}
          path={prop.path}
          component={prop.component}
          exact={prop.exact}
        />
      );
    });
  };

  return (
    <Layout style={styles.layout}>
      <Header style={styles.header}>
        <div style={styles.logo}>
          <img src={marvel} alt="Marvel" />
        </div>
        <Navigation />
      </Header>
      <Content style={styles.content}>
        <Switch>{getRoutes(routes)}</Switch>
      </Content>
    </Layout>
  );
};

export default DefaultLayout;
