import { takeEvery } from "redux-saga/effects";

import * as types from "../types";
import {
  fetchCharactersByNameSaga,
  fetchCharacterById,
  fetchCharacters,
  fetchSeriesSaga,
  toggleFavoriteSaga,
  fetchStorageCharactersSaga,
  updateCharacterSaga
} from "./characters";

export function* whatchCharacters() {
  yield takeEvery(types.FETCH_CHARACTERS_BY_NAME, fetchCharactersByNameSaga);
  yield takeEvery(types.FETCH_CHARACTER_BY_ID, fetchCharacterById);
  yield takeEvery(types.FETCH_CHARACTERS, fetchCharacters);
  yield takeEvery(types.FETCH_SERIES, fetchSeriesSaga);
  yield takeEvery(types.TOGGLE_FAVORITE, toggleFavoriteSaga);
  yield takeEvery(types.LOAD_FAVORITES, fetchStorageCharactersSaga);
  yield takeEvery(types.FETCH_CHARACTER_UPDATE, updateCharacterSaga);
}
