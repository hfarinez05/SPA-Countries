import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCountriesByName, getCountries } from "../../redux/actions";

import Cards from "../../components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";
import styles from "../home/Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const [searchString, setSearchString] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getCountriesByName(searchString));
  }

  // const [filter, setFilter] = useState(allCountries);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const filtered = allCountries.filter((country) =>
  //     country.name.includes(searchString)
  //   );
  //   setFilter(filtered);
  // }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={styles.mainhome}>
      <h1>Home</h1>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className={styles.cardshome}>
        <Cards allCountries={allCountries} />
      </div>
    </div>
  );
};

export default Home;
