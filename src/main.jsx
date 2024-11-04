import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Meals from "./components/Meals/Meals.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import Contact from "./components/Contact/Contact.jsx";
import MealsDetails from "./components/MealsDetails/MealsDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorMessage></ErrorMessage>,
    children: [
      {
        path: "/meals",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=A"),
        element: <Meals></Meals>,
      },
      {
        path: "/meal/:mealId",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
          ),
        element: <MealsDetails></MealsDetails>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
