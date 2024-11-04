import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const MealDetail = ({ mealDtl }) => {
  const { strCategory, strInstructions } = mealDtl;
  //   console.log(mealDtl);

  const navigate = useNavigate();

  const handleBackBtn = () => {
    // navigate('/meals')
    navigate(-1)
  }

  return (
    <div className="border-2 p-5 rounded-lg">
      <h1 className="font-bold text-6xl">{strCategory}</h1>
      <p>{strInstructions}</p>
      <Link to="/meals" className="underline font-bold">
        Go back
      </Link>{" "}
      <br />
      <button onClick={handleBackBtn} className="bg-violet-500 text-white px-5 py-2 rounded-md">
        Go Back
      </button>
    </div>
  );
};

MealDetail.propTypes = {
  mealDtl: PropTypes.object,
};

export default MealDetail;
