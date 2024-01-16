import {
  GET_COUNTRIES,
  GET_BY_NAME,
  GET_BY_ID,
} from "../actionsType/actionsType";

const initialState = {
  allCountries: [],
  countriesCopy: [],
  countriesDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        countriesCopy: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allCountries: action.payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        countriesDetail: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
