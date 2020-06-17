import * as type from "../types";

const initialState = {
  charactersFavorites: [],
  characters: [],
  character: null,
  loading: false,
  charactersForSelect: [],
  loadingForSelect: false,
  series: [],
  loadingSeries: false,
  errors: null,
  message: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case type.FETCH_CHARACTERS_START:
      return {
        ...state,
        loading: true,
      };

    case type.FETCH_SERIES_START:
      return {
        ...state,
        loadingSeries: true,
      };

    case type.FETCH_CHARACTERS_BY_NAME_START:
      return {
        ...state,
        loadingForSelect: true,
      };

    case type.FETCH_CHARACTERS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case type.FETCH_SERIES_FAIL:
      return {
        ...state,
        error: action.error,
        loadingSeries: false,
      };

    case type.FETCH_CHARACTERS_BY_NAME_FAIL:
      return {
        ...state,
        error: action.error,
        loadingForSelect: false,
      };

    case type.FETCH_CHARACTERS_SUCCSESS:
      return {
        ...state,
        characters: action.payload,
        errors: null,
        loading: false,
      };
    case type.FETCH_CHARACTER_BY_ID_SUCCSESS:
      return {
        ...state,
        character: action.payload,
        errors: null,
        loading: false,
      };

    case type.FETCH_SERIES_SUCCSESS:
      return {
        ...state,
        series: action.payload,
        errors: null,
        loadingSeries: false,
      };

    case type.FETCH_CHARACTERS_BY_NAME_SUCCSESS:
      return {
        ...state,
        charactersForSelect: action.payload,
        errors: null,
        loadingForSelect: false,
      };

    case type.FETCH_CHARACTER_UPDATE_SUCCSESS:
      const obj = action.payload;
      const index = state.characters.results.findIndex(
        (character) => character.id === obj.id
      );
      const newName = (state.characters.results[index].name = obj.name);
      const newDescription = (state.characters.results[index].description =
        obj.description);
      const updateCharacters = [...state.characters.results];
      updateCharacters[index] = {
        ...state.characters.results[index],
        name: newName,
        description: newDescription,
      };
      return {
        ...state,
        loading: false,
        characters: { ...state.characters, results: updateCharacters },
        character: obj,
      };

    case type.TOGGLE_FAVORITE_SUCCESS:
      const chaIndex = state.characters.results.findIndex(
        (character) => character.id === action.payload
      );
      if (chaIndex >= 0) {
        const newFavStatus = !state.characters.results[chaIndex].isFavorite;
        const updateFavorite = [...state.characters.results];
        updateFavorite[chaIndex] = {
          ...state.characters.results[chaIndex],
          isFavorite: newFavStatus,
        };
        return {
          ...state,
          characters: { ...state.characters, results: updateFavorite },
          character: updateFavorite[chaIndex],
        };
      } else {
        return state;
      }

    case type.LOAD_FAVORITES_SUCCESS:
      return {
        ...state,
        charactersFavorites: action.payload,
      };

    default:
      return state;
  }
}
