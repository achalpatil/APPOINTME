import Axios from "axios";
import React, { useState } from "react";
import "../appointment.css";
const slotArray = [
  "11:00am - 12:00pm",
  "12:00pm - 1:00pm",
  "1:00pm - 2:00pm",
  "2:00pm - 3:00pm",
  "3:00pm - 4:00pm",
  "4:00pm - 5:00pm",

  // NOTE The more slots can be add here directly
];

const Createslot = () => {
  const [slotTime, setSlotTime] = useState("");
  const adminId = JSON.parse(localStorage.getItem("userInfo"))._id;
  const token = JSON.parse(localStorage.getItem("userInfo")).token;

  const handelAddSlot = () => {
    const data = { time: slotTime };

    Axios.post(`/api/createslot/${adminId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => alert("Slot created"))
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <div className="formContainer">
      <h1>Creation of the slots goes here</h1>
      <div>
        <select
          className="select-form"
          value={slotTime}
          onChange={(e) => setSlotTime(e.target.value)}
        >
          <option className="hidden" selected disabled value="none">
            Please select your time slot
          </option>
          {slotArray.map((slot, idx) => (
            <option key={idx} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        <button
          className="soltButt"
          onClick={() => {
            slotTime !== "" ? handelAddSlot() : alert("Select time");
          }}
        >
          Create Slot
        </button>
      </div>
    </div>
  );
};

export default Createslot;
