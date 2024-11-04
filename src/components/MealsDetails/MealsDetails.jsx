import { useLoaderData } from "react-router-dom";
import MealDetail from "../MealDetail/MealDetail";

const MealsDetails = () => {
  const { meals } = useLoaderData();
  console.log(meals);
  return (
    <div>
      <h1 className="text-3xl font-bold mt-3">This is the meal details</h1>
      <div>
        {meals.map((mealDtl) => (
          <MealDetail key={mealDtl.idMeal} mealDtl={mealDtl}></MealDetail>
        ))}
      </div>
    </div>
  );
};

export default MealsDetails;
