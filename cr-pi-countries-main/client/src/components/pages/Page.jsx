/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { paginate } from "../../redux/actions";

const Pages = ({ page, maxPage }) => {
  const dispatch = useDispatch();

  const handlePrev = () => {
    dispatch(paginate("prev"));
  };

  const handleNext = () => {
    dispatch(paginate("next"));
  };
  return (
    <div>
      <button name="prev" onClick={handlePrev}>
        prev
      </button>
      <div>
        {page} - {maxPage}
      </div>
      <button name="next" onClick={handleNext}>
        next
      </button>
    </div>
  );
};

export default Pages;
