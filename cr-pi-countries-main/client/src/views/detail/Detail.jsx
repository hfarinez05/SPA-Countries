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
    <div className={styles.box}>
      <div className={styles.maindetail}>
        <h5>Abreviatura: {country.id}</h5>

        <h5>Capital: {country.capital}</h5>

        <h5>Continents: {country.continents}</h5>

        <h5>Subregion: {country.subregion}</h5>

        <h5>Area: {country.area}</h5>

        <h5>Population: {country.population} </h5>

        <div className={styles.boximage}>
          <h2>Name: {country.name}</h2>
          <img src={country.image} alt="Bandera del pais" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
