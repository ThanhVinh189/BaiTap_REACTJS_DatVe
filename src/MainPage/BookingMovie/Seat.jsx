import "./style.scss";
import { useState } from "react";
import { setSeatSelected } from "./slice";
import { useDispatch } from "react-redux";

export default function Seat({ seat }) {
  const dispatch = useDispatch();
  const [isChoosing, setIsChoosing] = useState(false);

  return (
    <button
      onClick={() => {
        setIsChoosing(!isChoosing);
        dispatch(setSeatSelected(seat));
      }}
      disabled={seat.daDat}
      className={`ghe ${seat.daDat ? "gheDuocChon" : ""} ${
        isChoosing ? "gheDangChon" : ""
      }`}
    >
      {seat.soGhe}
    </button>
  );
}
