import axios from "axios";
import {
  GET_COUNTRIES,
  GET_BY_NAME,
  GET_BY_ID,
} from "../actionsType/actionsType";

export function getCountries() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/countries");

    return dispatch({
      type: GET_COUNTRIES,
      payload: response.data,
    });
  };
}

export function getCountriesByName(name) {
  return async function (dispatch) {
    const response = await axios(
      `http://localhost:3001/countries?name=${name}`
    );

    return dispatch({
      type: GET_BY_NAME,
      payload: response.data,
    });
  };
}

export function getCountriesById(id) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/countries/${id}`);

    return dispatch({
      type: GET_BY_ID,
      payload: response.data,
    });
  };
}
