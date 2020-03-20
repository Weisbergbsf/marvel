import charactersReducer from "../store/reducers/charactersReducer";
import * as type from "../store/types";
import data from "./mock/dummy-data";

test("should set default state", () => {
  const state = charactersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    charactersFavorites: [],
    characters: [],
    loading: false,
    charactersForSelect: [],
    loadingForSelect: false,
    series: [],
    loadingSeries: false,
    errors: null,
    message: null
  });
});

test("the loading variable must be true when start", () => {
  const state = charactersReducer(undefined, {
    type: type.FETCH_CHARACTERS_START
  });
  expect(state.loading).toBe(true);
});

test("the loading variable must be false when fail", () => {
  const state = charactersReducer(undefined, {
    type: type.FETCH_CHARACTERS_FAIL
  });
  expect(state.loading).toBe(false);
});

test("the loading variable must be false when success", () => {
  const state = charactersReducer(undefined, {
    type: type.FETCH_CHARACTERS_SUCCSESS
  });
  expect(state.loading).toBe(false);
});

test("should toggle favorites true", () => {
  const isFavorite = true;
  const action = {
    type: type.TOGGLE_FAVORITES,
    id: 1011334,
    isFavorite: (data.characters.results[0].isFavorite = isFavorite)
  };
  const state = charactersReducer(data, action);
  expect(state.characters.results[0].isFavorite).toBe(isFavorite);
});

test("should toggle favorites false", () => {
  const isFavorite = false;
  const action = {
    type: type.TOGGLE_FAVORITES,
    id: 1017100,
    isFavorite: (data.characters.results[1].isFavorite = isFavorite)
  };
  const state = charactersReducer(data, action);
  expect(state.characters.results[1].isFavorite).toBe(isFavorite);
});
