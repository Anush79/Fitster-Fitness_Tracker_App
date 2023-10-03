import { useDispatch } from "react-redux";
import { useState } from "react";
import { addGoal } from "../redux/actions";

export function GoalsForm({ onClose}) {
  const [formData, setData] = useState({
    name: "",
    description: "",
    targetDate: "",
    targetCalories: "",
    status: "In Progress",
  });
  const dispatch = useDispatch();

  const handleformInput = (e) => {
    const { value, name } = e.target;
     setData({ ...formData, [name]: value });
  
  };
  function onSubmitHandler(e) {
    e.preventDefault();
    console.log(formData)
    dispatch(addGoal(formData))
    setData({
      name: "",
      description: "",
      targetDate: "",
      targetCalories: "",
      status: "",
    });
    onClose()
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="">
          Name:
          <input type="text" placeholder="Lose weight"name="name" id="" onChange={handleformInput} value={formData.name} required/>
        </label>
        <label htmlFor="">
          Description:
          <input type="text" placeholder="I will lose 10 kgs using diet plan" name="description" id="" onChange={handleformInput} value={formData.description}/>
        </label>
        <label htmlFor="">
          Target Date:
          <input type="date" name="targetDate" min="2023-10-01" id="" onChange={handleformInput} value={formData.targetDate} required/>
        </label>
        <label htmlFor="">
          Target Calories to burn:
          <input type="number" min={10} name="targetCalories" id=""onChange={handleformInput} value={formData.targetCalories}  required/>
        </label>
        <label htmlFor="">
          Status:
          <select name="status" id=""onChange={handleformInput} required>
            <option value={"In Progress"}>In progress</option>
            <option value={"Achieved"}>Achieved</option>
            <option value={"Abandoned"}>Abandoned</option>
          </select>
        </label>
        <button>Add new goal</button>
      </form>
    </>
  );
}
