import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddExerciseForm } from "../components/ExerciseForm";
import { deleteExercise, getExercises } from "../redux/actions";
import { boxStyle } from '../utils/constants';
import { Loader } from '../components/Loader';


export default function Exercise() {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state?.exercises);
  const loading = useSelector((state) => state?.loading);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getExercises());
  }, [exercises]);

  return (
    <div>
      <h1>Exercises <FitnessCenterIcon /></h1>
{/* {
  loading && <Loader/>
} */}
      <div className="exerciseContainer">
        {exercises?.map((item) => (
          <ExerciseBox obj={item} key={item._id} dispatch={dispatch} />
        ))}
      </div>
      <button onClick={handleOpen}>Add New Exercise</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <AddExerciseForm  onClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}

function ExerciseBox({obj,dispatch}) {
  return <div className="containerBox" key={obj._id}>
    <h2>{obj?.name}<DeleteOutlineIcon onClick= {()=>{dispatch(deleteExercise(obj._id))}}/></h2>
    <p>Duration : {obj?.duration}</p>
    <p>Total Calories burned: {obj?.totalCalories}</p>
  </div>;
};
