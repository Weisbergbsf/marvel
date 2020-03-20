import React from "react";
import { Provider } from "react-redux";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CustomCard from "../components/Card/CustomCard";
import configureStore from "redux-mock-store";

import data from "./mock/dummy-data";
configure({ adapter: new Adapter() });
const mockStore = configureStore();
let store = mockStore(data);
const character = {
  id: 1009144,
  name: "A.I.M.",
  description: "AIM is a terrorist organization bent on destroying the world.",
  thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec.jpg",
  isFavorite: false,
  isUpdate: true
};

describe("<CustomCard />", () => {
  it("name must be equal.", () => {
    let wrapper = shallow(
      <Provider store={store}>
        <CustomCard name={character.name} />
      </Provider>
    ).dive();
    expect(wrapper.props().name).toEqual("A.I.M.");
  });
});

describe("<CustomCard />", () => {
  it("isFavorite must be false.", () => {
    let wrapper = shallow(
      <Provider store={store}>
        <CustomCard name={character.name} isFavorite={character.isFavorite} />
      </Provider>
    ).dive();
    expect(wrapper.props().isFavorite).toEqual(false);
  });
});

describe("<CustomCard />", () => {
  it("image must be equal.", () => {
    let wrapper = shallow(
      <Provider store={store}>
        <CustomCard name={character.name} imageUrl={character.thumbnail} />
      </Provider>
    ).dive();
    expect(wrapper.props().imageUrl).toEqual(
      "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec.jpg"
    );
  });
});
