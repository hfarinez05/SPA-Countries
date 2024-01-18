/* eslint-disable no-case-declarations */
import {
  GET_COUNTRIES,
  GET_BY_NAME,
  GET_BY_ID,
  PAGES,
  ALFABETIC_SORT,
  SORT_POPULATION,
} from "../actionsType/actionsType";

const initialState = {
  allCountries: [],
  countriesCopy: [],
  countriesDetail: {},
  activities: [],
  filterCountries: [],
  currentPage: 0,
  filters: {
    sortAlfabetic: null,
    sortPopulation: null,
  },
};

function rootReducer(state = initialState, action) {
  const itemsPage = 10;

  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload.slice(0, itemsPage),
        countriesCopy: action.payload,
        filterCountries: action.payload,
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
    case PAGES: {
      const nextPage = state.currentPage + 1;
      const prevPage = state.currentPage - 1;

      const indexPage =
        action.payload === "next" ? nextPage * itemsPage : prevPage * itemsPage;

      if (
        action.payload === "next" &&
        indexPage >= state.filterCountries.length
      )
        return state;
      if (action.payload === "prev" && prevPage < 0) return state;

      const filterCountries =
        state.filterCountries.length > 0
          ? state.filterCountries
          : state.countriesCopy;

      return {
        ...state,
        allCountries: filterCountries.slice(indexPage, indexPage + itemsPage),
        currentPage: action.payload === "next" ? nextPage : prevPage,
      };
    }

    case ALFABETIC_SORT:
      const orderCountries = [...state.filterCountries];
      if (action.payload === "Asce") {
        orderCountries.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        orderCountries.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        allCountries: orderCountries.slice(0, itemsPage),
        filterCountries: orderCountries,
        currentPage: 0,
        filters: {
          ...state.filters,
          sortAlfabetic: action.payload,
        },
      };

    case SORT_POPULATION:
      const populationCountries = [...state.filterCountries];
      if (action.payload === "Mayor") {
        populationCountries.sort((a, b) => a.population - b.population);
      } else {
        populationCountries.sort((a, b) => b.population - a.population);
      }
      return {
        ...state,
        allCountries: populationCountries.slice(0, itemsPage),
        filterCountries: populationCountries,
        currentPage: 0,
        filters: {
          ...state.filters,
          sortPopulation: action.payload,
        },
      };

    default:
      return state;
  }
}

export default rootReducer;
