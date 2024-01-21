import axios from "axios";
import {
  GET_COUNTRIES,
  GET_BY_NAME,
  GET_BY_ID,
  PAGES,
  ALFABETIC_SORT,
  SORT_POPULATION,
} from "../actionsType/actionsType";

export function getCountries() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/countries");

      dispatch({
        type: GET_COUNTRIES,
        payload: response.data,
      });
    } catch (error) {
      alert(`Error:${error.response.data.error}`);
    }
  };
}

export function getCountriesByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/countries?name=${name}`
      );

      dispatch({
        type: GET_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      alert(`Error:${error.response.data.error}`);
    }
  };
}

export function getCountriesById(id) {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/countries/${id}`);

      dispatch({
        type: GET_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      alert(`Error:${error.response.data.error}`);
    }
  };
}

export function postActivity(state) {
  return async function () {
    try {
      await axios.post("http://localhost:3001/activities", state);
      alert("The activity has been created");
    } catch (error) {
      alert(`Error:${error.response.data.error}`);
    }
  };
}

export function alfabeticSort(order) {
  return function (dispatch) {
    dispatch({
      type: ALFABETIC_SORT,
      payload: order,
    });
  };
}

export function populationSort(order) {
  return function (dispatch) {
    dispatch({
      type: SORT_POPULATION,
      payload: order,
    });
  };
}

export function paginate(order) {
  return function (dispatch) {
    dispatch({
      type: PAGES,
      payload: order,
    });
  };
}
