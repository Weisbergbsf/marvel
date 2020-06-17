import * as type from "../types";
import { fetchStart, fetchSuccess, fetchError } from "./utils/defaultMethods";

export const fetchCharactersByNameStart = () => {
  return fetchStart(type.FETCH_CHARACTERS_BY_NAME_START);
};

export const fetchCharactersByNameSuccess = (characters) => {
  return fetchSuccess(type.FETCH_CHARACTERS_BY_NAME_SUCCSESS, characters);
};

export const fetchCharactersByNameError = (error) => {
  return fetchError(type.FETCH_CHARACTERS_BY_NAME_FAIL, error);
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
    type: type.FETCH_CHARACTERS_BY_ID,
    characterId: characterId,
  };
};

export const fetchCharactersStart = () => {
  return fetchStart(type.FETCH_CHARACTERS_START);
};

export const fetchCharactersSuccess = (characters) => {
  return fetchSuccess(type.FETCH_CHARACTERS_SUCCSESS, characters);
};

export const fetchCharactersError = (error) => {
  return fetchError(type.FETCH_CHARACTERS_FAIL, error);
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

export const fetchSeriesStart = () => {
  return fetchStart(type.FETCH_SERIES_START);
};

export const fetchSeriesSuccess = (series) => {
  return fetchSuccess(type.FETCH_SERIES_SUCCSESS, series);
};

export const fetchSeriesError = (error) => {
  return fetchError(type.FETCH_SERIES_FAIL, error);
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
