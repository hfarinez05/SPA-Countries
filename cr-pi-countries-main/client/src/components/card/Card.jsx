/* eslint-disable react/prop-types */

import styles from "../card/Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ country }) => {
  const { id, image, name, continents, capital } = country;

  return (
    <div className={styles.maincard}>
      <div className={styles.onlycard}>
        <div>
          <div className={styles.imagebox}>
            <Link to={`/detail/${id}`}>
              <span>
                <img src={image} alt="Bandera del pais" />
              </span>
            </Link>
          </div>
          <h6>{continents} </h6>
          <h5>{capital} </h5>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
