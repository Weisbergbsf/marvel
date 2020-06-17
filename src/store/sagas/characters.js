import { put } from "redux-saga/effects";

import api from "../../utils/api";
import * as actions from "./../actions";
import * as type from "../types";
import { fetchStart, fetchError } from "../actions/utils/defaultMethods";
import {
  loadStorageCharacters,
  loadStorageFavorites,
  saveCharacter,
  FAVORITE,
  UPDATE,
} from "../../services/storageService";
import Character from "../../model/Character";

export function* fetchCharactersByNameSaga(action) {
  yield put(fetchStart(type.FETCH_CHARACTERS_BY_NAME_START));
  let characters = [];
  try {
    const response = yield api.get(`characters`, {
      params: {
        nameStartsWith: action.nameToSearch,
      },
    });
    response.data.data.results.map((obj) => {
      return characters.push({ value: obj.name, label: obj.name });
    });
    yield put(actions.fetchCharactersByNameSuccess(characters));
  } catch (error) {
    yield put(fetchError(type.FETCH_CHARACTERS_BY_NAME_FAIL, error));
  }
}

export function* fetchCharacterById(action) {
  try {
    const response = yield api.get(`characters/${action.characterId}`);
    const obj = response.data.data.results[0];

    let id = obj.id;
    let name = obj.name;
    let description = obj.description;
    let thumbnail = obj.thumbnail.path + "." + obj.thumbnail.extension;
    let isFavorite = false;
    let isUpdate = false;

    loadStorageCharacters().map((objStorage) => {
      if (objStorage.id === obj.id) {
        name = objStorage.name;
        description = objStorage.description;
        isFavorite = objStorage.isFavorite;
        isUpdate = objStorage.isUpdate;
      }
      return objStorage;
    });

    const character = new Character(
      id,
      name,
      description,
      thumbnail,
      isFavorite,
      isUpdate
    );
    yield put(actions.fetchCharacterByIdSuccess(character));
  } catch (error) {
    yield put(fetchError(type.FETCH_CHARACTER_BY_ID_FAIL, error));
  }
}

export function* fetchCharacters(action) {
  let characters = { total: 0, results: [] };

  yield put(fetchStart(type.FETCH_CHARACTERS_START));
  try {
    const response = yield api.get(`characters`, {
      params: {
        orderBy: action.orderBy,
        limit: action.limit,
        offset: action.offset,
        nameStartsWith: action.nameToSearch,
      },
    });

    characters.total = response.data.data.total;
    response.data.data.results.map((obj) => {
      let id = obj.id;
      let name = obj.name;
      let description = obj.description;
      let thumbnail = obj.thumbnail.path + "." + obj.thumbnail.extension;
      return characters.results.push(
        new Character(id, name, description, thumbnail, false, false)
      );
    });
    loadStorageCharacters().map((objStorage) => {
      return characters.results.map((obj) => {
        if (objStorage.id === obj.id) {
          obj.name = objStorage.name;
          obj.description = objStorage.description;
          obj.isUpdate = objStorage.isUpdate;
          obj.isFavorite = objStorage.isFavorite;
        }
        return obj;
      });
    });
    yield put(actions.fetchCharactersSuccess(characters));
  } catch (error) {
    yield put(fetchError(type.FETCH_CHARACTERS_FAIL, error));
  }
}

export function* fetchSeriesSaga(action) {
  let series = {
    total: 0,
    results: [],
  };
  yield put(fetchStart(type.FETCH_SERIES_START));
  try {
    const response = yield api.get(
      `characters/${action.id}/series?limit=${action.limit}&offset=${action.offset}`
    );

    series.total = response.data.data.total;
    response.data.data.results.map((obj) => {
      let id = obj.id;
      let name = obj.title;
      let thumbnail = obj.thumbnail.path + "." + obj.thumbnail.extension;
      return series.results.push(
        new Character(id, name, "", thumbnail, false, false)
      );
    });
    yield put(actions.fetchSeriesSuccess(series));
  } catch (error) {
    yield put(fetchError(type.FETCH_SERIES_FAIL, error));
  }
}

export function* toggleFavoriteSaga(action) {
  yield saveCharacter(
    new Character(
      action.character.id,
      action.character.name,
      action.character.description,
      action.character.thumbnail,
      !action.character.isFavorite,
      action.character.isUpdate
    ),
    FAVORITE
  );
  yield put(actions.toggleFavoriteSuccess(action.id));
  yield put(actions.fetchStorageCharacters());
}

export function* fetchStorageCharactersSaga() {
  const characters = yield loadStorageFavorites();
  yield put(actions.fetchStorageCharactersSuccess(characters));
}

export function* updateCharacterSaga(action) {
  yield saveCharacter(action.character, UPDATE);
  yield put(actions.updateCharacterSuccess(action.character));
}
