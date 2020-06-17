import * as type from "../types";
import { fetchSuccess } from "./utils/defaultMethods";

export const fetchCharactersByNameSuccess = (characters) => {
  return fetchSuccess(type.FETCH_CHARACTERS_BY_NAME_SUCCSESS, characters);
};

export const fetchCharactersByName = (nameToSearch) => {
  return {
    type: type.FETCH_CHARACTERS_BY_NAME,
    nameToSearch: nameToSearch,
  };
};

export const fetchCharacterByIdSuccess = (character) => {
  return fetchSuccess(type.FETCH_CHARACTER_BY_ID_SUCCSESS, character);
};

export const fetchCharacterById = (characterId) => {
  return {
    type: type.FETCH_CHARACTER_BY_ID,
    characterId: characterId,
  };
};

export const fetchCharactersSuccess = (characters) => {
  return fetchSuccess(type.FETCH_CHARACTERS_SUCCSESS, characters);
};

export const fetchCharacters = (nameToSearch, orderBy, limit, offset) => {
  return {
    type: type.FETCH_CHARACTERS,
    nameToSearch: nameToSearch,
    orderBy: orderBy,
    limit: limit,
    offset: offset,
  };
};

export const fetchSeriesSuccess = (series) => {
  return fetchSuccess(type.FETCH_SERIES_SUCCSESS, series);
};

export const fetchCharactersSeries = (id, limit, offset) => {
  return {
    type: type.FETCH_SERIES,
    id: id,
    limit: limit,
    offset: offset,
  };
};

export const updateCharacterSuccess = (character) => {
  return fetchSuccess(type.FETCH_CHARACTER_UPDATE_SUCCSESS, character);
};

export const updateCharacter = (character) => {
  return {
    type: type.FETCH_CHARACTER_UPDATE,
    character: character,
  };
};

export const fetchStorageCharactersSuccess = (characters) => {
  return fetchSuccess(type.LOAD_FAVORITES_SUCCESS, characters);
};

export const fetchStorageCharacters = () => {
  return {
    type: type.LOAD_FAVORITES,
  };
};

export const toggleFavoriteSuccess = (id) => {
  return fetchSuccess(type.TOGGLE_FAVORITE_SUCCESS, id);
};

export const toggleFavorite = (id, character) => {
  return {
    type: type.TOGGLE_FAVORITE,
    id: id,
    character: character,
  };
};
