import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCountriesByName, getCountries } from "../../redux/actions";

import Cards from "../../components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";
import Page from "../../components/pages/Page";
import Sort from "../../components/sortOrder/sort";
import styles from "../home/Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  const numberCountries = useSelector((state) => state.filterCountries);
  const page = useSelector((state) => state.currentPage);
  const maxPage = Math.ceil(numberCountries.length / 10);

  const filters = useSelector((state) => state.filters);

  //const sortActiveAlfabetic = filters.sortAlfabetic !== null;
  //const sortPopulation = filters.sortPopulation !== null;

  const [searchString, setSearchString] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getCountriesByName(searchString));
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <div>
        <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />

        <Sort />
      </div>

      <div className={styles.mainhome}>
        {/* {sortActiveAlfabetic ? (
          <div className="">
            Sort Alphabetic Active: {filters.sortAlfabetic}
          </div>
        ) : (
          <div className="">Sort Alphabetic Inactive</div>
        )}

        <div>
          {sortPopulation ? (
            <div className="">
              Sort Population Active: {filters.sortPopulation}
            </div>
          ) : (
            <div className="">Sort Population Inactive</div>
          )}
        </div> */}
        <div className={styles.cardshome}>
          <Cards allCountries={allCountries} />
        </div>
        <Page page={page + 1} maxPage={maxPage} />
      </div>
    </>
  );
};

export default Home;
