import Home from "../views/Home/Home";
import Favorites from "../views/Favorites/Favorites";
import CharacterDetails from "../views/CharacterDetails/CharacterDetails";

import { HomeOutlined, HeartTwoTone } from "@ant-design/icons";

export const routes = [
  {
    path: "/",
    name: "Characters",
    exact: true,
    component: Home,
    icon: HomeOutlined
  },
  {
    path: "/favorites",
    name: "Favorites",
    exact: true,
    component: Favorites,
    icon: HeartTwoTone
  },
  {
    path: "/details/:id",
    exact: true,
    component: CharacterDetails
  }
];
