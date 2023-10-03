import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../redux/actions";

export function FoodForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    protein: "",
    calories: "",
    fat: "",
    carbohydrate: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addFood(formData));
    setFormData({
      name: "",
      protein: "",
      calories: "",
      fat: "",
      carbohydrate: "",
    });
    onClose();
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <hr></hr>
        <label htmlFor="name">Food name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={onChangeHandler}
          value={formData.name}
        />

        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          id="calories"
          name="calories"
          required
          onChange={onChangeHandler}
          value={formData.calories}
        />

        <label htmlFor="protein">Protein:</label>
        <input
          type="number"
          id="protein"
          name="protein"
          required
          onChange={onChangeHandler}
          value={formData.protein}
        />

        <label htmlFor="carbohydrate">Carbohydrate:</label>
        <input
          type="number"
          id="carbohydrate"
          name="carbohydrate"
          required
          onChange={onChangeHandler}
          value={formData.carbohydrate}
        />

        <label htmlFor="fat">Fat:</label>
        <input
          type="number"
          id="fat"
          name="fat"
          required
          onChange={onChangeHandler}
          value={formData.fat}
        />

        <button>Add meal</button>
        <hr></hr>
      </form>
    </>
  );
}
