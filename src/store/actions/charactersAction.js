import api from "../../utils/api";
import * as type from "../types";
import { fetchStart, fetchSuccess, fetchError } from "./utils/defaultMethods";
import {
  loadStorageCharacters,
  storageToFavorites,
  UPDATE,
  FAVORITE
} from "../../services/storageService";
import Character from "../../model/Character";

export const fetchCharactersByName = nameToSearch => dispatch => {
  dispatch(fetchStart(type.FETCH_CHARACTERS_BY_NAME_START));
  let characters = [];
  api
    .get(`characters?nameStartsWith=${nameToSearch}`)
    .then(res => {
      res.data.data.results.map(obj => {
        return characters.push({ value: obj.name, label: obj.name });
      });
      dispatch(
        fetchSuccess(type.FETCH_CHARACTERS_BY_NAME_SUCCSESS, characters)
      );
    })
    .catch(error => {
      dispatch(fetchError(type.FETCH_CHARACTERS_BY_NAME_FAIL, error));
    });
};

export const fetchCharacters = (characterId, nameToSearch, orderBy,limit, offset) => dispatch => {
  let id = "";
  let filter = "";
  let name = "";
  if (characterId) {
    id = `/${characterId}`;
  } else {
    if (orderBy) {
      filter = `?orderBy=${orderBy}&limit=${limit}&offset=${offset}`;
    }
    if (nameToSearch) {
      name = `&nameStartsWith=${nameToSearch}`;
    }
  }
  let characters = {
    total: 0,
    results: []
  };

  dispatch(fetchStart(type.FETCH_CHARACTERS_START));
  api
    .get(`characters${id}${filter}${name}`)
    .then(res => {
      characters.total = res.data.data.total;
      res.data.data.results.map(obj => {
        let id = obj.id;
        let name = obj.name;
        let description = obj.description;
        let thumbnail = obj.thumbnail.path + "." + obj.thumbnail.extension;
        return characters.results.push(
          new Character(id, name, description, thumbnail, false, false)
        );
      });
      loadStorageCharacters().map(objStorage => {
        return characters.results.map(obj => {
          if (objStorage.id === obj.id) {
            obj.name = objStorage.name;
            obj.description = objStorage.description;
            obj.isUpdate = objStorage.isUpdate;
            obj.isFavorite = objStorage.isFavorite;
          }
          return obj;
        });
      });
      dispatch(fetchSuccess(type.FETCH_CHARACTERS_SUCCSESS, characters));
    })
    .catch(error => {
      dispatch(fetchError(type.FETCH_CHARACTERS_FAIL, error));
    });
};

export const fetchCharactersSeries = (id, limit, offset) => dispatch => {
  let series = {
    total: 0,
    results: []
  };
  dispatch(fetchStart(type.FETCH_SERIES_START));
  api
    .get(`characters/${id}/series?limit=${limit}&offset=${offset}`)
    .then(res => {
      series.total = res.data.data.total;
      res.data.data.results.map(obj => {
        let id = obj.id;
        let name = obj.title;
        let thumbnail = obj.thumbnail.path + "." + obj.thumbnail.extension;
        return series.results.push(
          new Character(id, name, "", thumbnail, false, false)
        );
      });
      dispatch(fetchSuccess(type.FETCH_SERIES_SUCCSESS, series));
    })
    .catch(error => {
      dispatch(fetchError(type.FETCH_SERIES_FAIL, error));
    });
};

export const updateCharacter = character => async dispatch => {
  storageToFavorites(character, UPDATE);
  dispatch(fetchSuccess(type.FETCH_CHARACTER_UPDATE_SUCCSESS, character));
};

export const fetchStorageCharacters = () => dispatch => {
  const characters = loadStorageCharacters();
  dispatch(fetchSuccess(type.LOAD_FAVORITES, characters));
};

export const toggleFavorite = (id, character) => async dispatch => {
  storageToFavorites(
    new Character(
      character.id,
      character.name,
      character.description,
      character.thumbnail,
      !character.isFavorite,
      character.isUpdate
    ),
    FAVORITE
  );
  await dispatch(fetchSuccess(type.TOGGLE_FAVORITES, id));
  dispatch(fetchStorageCharacters());
};
