import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  // console.log(meal);
  const { idMeal, strMealThumb, strMeal, strArea } = meal;

  return (
    <div className="flex flex-col border-2 border-yellow-600 rounded-lg text-center">
      <div className="p-5 flex-grow">
        <img className="rounded-xl" src={strMealThumb} alt="" />
        <h1 className="text-5xl font-bold">{strMeal}</h1>
        <p className="font-bold text-2xl">{strArea}</p>
      </div>
      <Link to={`/meal/${idMeal}`} className="bg-blue-500 font-bold">
        Show details
      </Link>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.object,
};

export default Meal;
