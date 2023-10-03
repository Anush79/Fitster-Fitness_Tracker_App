import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoalsForm } from "../components/GoalForm";
import { deleteGoal, getGoals } from "../redux/actions";
import { boxStyle } from "../utils/constants";
import { Loader } from "../components/Loader";
import createDate from '../utils/ultilityFunctions.js'
export default function Goals() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const goals = useSelector((state) => state?.goals);
  const loading = useSelector((state) => state?.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoals());
  }, [dispatch]);
  return (
    <div>
      <h1>
        <span>Goals <TrackChangesIcon /></span> <button onClick={handleOpen}>Add New Goal</button>{" "}
      </h1>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="goalsContainer">
            {goals?.map((item) => (
              <TargetBox obj={item} dispatch={dispatch} />
            ))}
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={boxStyle}>
              <GoalsForm onClose={handleClose} />
            </Box>
          </Modal>
        </>
      )}{" "}
    </div>
  );
}

function TargetBox({ obj, dispatch }) {
  const date = createDate(obj?.targetDate)
  return (
    <div className="containerBox" key={obj._id}>
      <h2>
        {obj?.name}{" "}
        <DeleteOutlineIcon
          onClick={() => {
            dispatch(deleteGoal(obj._id));
          }}
        />
      </h2>
      {obj.description && <p>Description : {obj.description}</p>}
      <p>Target Date : {date}</p>
      <p>Target Calories : {obj?.targetCalories}</p>
    </div>
  );
}
