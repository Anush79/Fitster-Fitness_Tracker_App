import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../redux/actions";
import { EXERCISEDATA } from "../utils/constants";

export const AddExerciseForm = ({ onClose}) => {
  const [formData, setData] = useState({
    name: "",
    duration: "",
    exerciseType: {
      exercise: "",
      caloriesPerMinute: "",
    },
  });
  const dispatch = useDispatch();

  const handleformInput = (e) => {
    const { value, name } = e.target;
    if (name === "exerciseType") {
      setData({
        ...formData,
        exerciseType: EXERCISEDATA.find((item) => item.exercise === value),
      });
    } else setData({ ...formData, [name]: value });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addExercise(formData));
    setData({
      name: "",
      duration: "",
      exerciseType: {
        exercise: ""
      }
    });
    onClose()
  }
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="">Name of the Exercise :
        <input
          type="text"
          name="name"
          id=""
          placeholder="Pull ups"
          value={formData.name}
          onChange={handleformInput}
          required
        /></label>
        <br />{" "}
        <label htmlFor="duration">Duration : 
        <input
          type="number"
          name="duration"
          id="duration"
          min={1}
          placeholder="Duration in minutes"
          value={formData.duration}
          onChange={handleformInput}
          required
        /></label>
        <br />{" "}
        <label htmlFor="">
          Exercise Type :
          <select
            name="exerciseType"
            id=""
            onChange={handleformInput}
            required
          >
            <option value="">Select Exercise Type</option>
            {EXERCISEDATA.map((item) => {
              return <option value={item.exercise}>{item.exercise}</option>;
            })}
          </select>
        </label>
        <button >
          Add Exercise
        </button>
      </form>
    </>
  );
};
