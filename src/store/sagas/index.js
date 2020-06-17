import { takeEvery, all } from "redux-saga/effects";

import * as types from "../types";
import {
  fetchCharactersByNameSaga,
  fetchCharacterById,
  fetchCharacters,
  fetchSeriesSaga,
  toggleFavoriteSaga,
  fetchStorageCharactersSaga,
  updateCharacterSaga,
} from "./characters";

export function* whatchCharacters() {
  yield all([
    takeEvery(types.FETCH_CHARACTERS_BY_NAME, fetchCharactersByNameSaga),
    takeEvery(types.FETCH_CHARACTER_BY_ID, fetchCharacterById),
    takeEvery(types.FETCH_CHARACTERS, fetchCharacters),
    takeEvery(types.FETCH_SERIES, fetchSeriesSaga),
    takeEvery(types.TOGGLE_FAVORITE, toggleFavoriteSaga),
    takeEvery(types.LOAD_FAVORITES, fetchStorageCharactersSaga),
    takeEvery(types.FETCH_CHARACTER_UPDATE, updateCharacterSaga),
  ]);
}
