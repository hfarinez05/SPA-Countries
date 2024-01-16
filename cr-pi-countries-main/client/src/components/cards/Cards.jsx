/* eslint-disable react/prop-types */
import Card from "../card/Card";
import styles from "../cards/Cards.module.css";

const Cards = ({ allCountries }) => {
  return (
    <div className={styles.maincards}>
      {allCountries.map((country) => (
        <Card country={country} key={country.id} />
      ))}
    </div>
  );
};

export default Cards;
