import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExercises, getFoods, getGoals } from "../redux/actions";

export default function Home() {
  const exercises = useSelector((state) => state?.exercises);
  const goals = useSelector((state) => state?.goals);
  const foods = useSelector((state) => state?.foods);

  const totalCaloriesConsumed = foods?.reduce(
    (acc, curr) => curr.calories + acc,
    0
  );
  const caloriesBurned = exercises?.reduce(
    (acc, curr) => curr.totalCalories + acc,
    0
  );
  const totalCaloriesGoal = goals?.reduce(
    (acc, curr) => curr?.targetCalories || 0 + acc,
    0
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoals());
    dispatch(getFoods());
    dispatch(getExercises());
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="containerBox">
        <h3>Total Calories intake : {totalCaloriesConsumed}</h3>
      </div>
      <div className="containerBox">
        <h3>Total Calories burned : {caloriesBurned}</h3>
      </div>

      <div className="containerBox">
        {" "}
        <h3>Total Calories Goal : {totalCaloriesGoal}</h3>
      </div>
      <div className="containerBox">
        {" "}
        <h3>
          Total Calories remaining :{" "}
          {totalCaloriesGoal + totalCaloriesConsumed - caloriesBurned}
        </h3>
      </div>

      <br></br>
    </div>
  );
}
