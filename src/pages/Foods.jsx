import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { boxStyle } from "../utils/constants";
import { useEffect, useState } from "react";
import { FoodForm } from "../components/FoodForm";
import { getFoods, deleteFood } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";


export default function Foods() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const foods = useSelector((state) => state?.foods);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoods());
  }, [foods]);
  return (
    <div>
      <h1>Daily Calorie intake</h1>
      <div className="foodsContainer">
        {foods?.map((item) => (
          <FoodsBox key={item._id} obj={item} dispatch={dispatch} />
        ))}
      </div>
      <button onClick={handleOpen}>Add New Food</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <FoodForm  onClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}

function FoodsBox({ obj, dispatch }) {
  return (
    <div className="containerBox" key={obj._id}>
      <h2>
        {obj?.name}
        <DeleteOutlineIcon
          onClick={() => {
            dispatch(deleteFood(obj._id));
          }}
        />
      </h2>

      <p>Carbohydrate : {obj?.carbohydrate}</p>
      <p>Fat : {obj?.fat}</p>
      <p>Protein : {obj?.protein}</p>
      <p>Calories : {obj?.calories}</p>
    </div>
  );
}
