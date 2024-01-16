import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCountriesById } from "../../redux/actions/index";

import styles from "../detail/Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countriesDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountriesById(id));
  }, [dispatch, id]);

  return (
    <div className={styles.maindetail}>
      <span>Abreviatura: {country.id}</span>
      <span>Soy {country.name}</span>
      <br />
      <span>Mi capital es: {country.capital}</span>
      <br />
      <span>Me ubico en el continente de: {country.continents}</span>
      <br />
      <span>{country.subregion}</span>
      <br />
      <span>{country.area}</span>
      <br />
      <span>Somos {country.population} habitantes</span>
      <div className={styles.boximage}>
        <img src={country.image} alt="Bandera del pais" />
      </div>
    </div>
  );
};

export default Detail;
