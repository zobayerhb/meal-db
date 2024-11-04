import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const { meals } = useLoaderData();
//   console.log(meals);

  return (
    <div>
      <h1 className="text-3xl font-bold mt-4">Meals length: {meals.length}</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
