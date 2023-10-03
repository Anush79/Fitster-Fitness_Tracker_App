import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddExerciseForm } from "../components/ExerciseForm";
import { Loader } from "../components/Loader";
import { deleteExercise, getExercises } from "../redux/actions";
import { boxStyle } from "../utils/constants";

export default function Exercise() {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state?.exercises);
  const loading = useSelector((state) => state?.loading);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getExercises());
  }, [dispatch]);

  return (
    <div>
      <h1>
        <span>
          {" "}
          Exercises <FitnessCenterIcon />
        </span>{" "}
        <button onClick={handleOpen}>Add New Exercise</button>
      </h1>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="exerciseContainer">
            {exercises?.map((item) => (
              <ExerciseBox obj={item} key={item._id} dispatch={dispatch} />
            ))}
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={boxStyle}>
              <AddExerciseForm onClose={handleClose} />
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
}

function ExerciseBox({ obj, dispatch }) {
  return (
    <div className="containerBox" key={obj._id}>
      <h2>
        {obj?.name}
        <DeleteOutlineIcon
          onClick={() => {
            dispatch(deleteExercise(obj._id));
          }}
        />
      </h2>
      <p>Duration : {obj?.duration}</p>
      <p>Total Calories burned: {obj?.totalCalories}</p>
    </div>
  );
}
