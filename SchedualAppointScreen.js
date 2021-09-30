import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { saveSchedualAppoint } from "../actions/pendingActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function SchedualAppointScreen(props) {
  // NOTE currently setting the hard id later on make this fetch dynamically
  const docId = "60d5f431950dac32006f2ab2 "; // fetch the doctor id dynamycally here

  const [slots, setSlots] = useState([]);

  useEffect(() => {
    Axios.get(`/api/getslot/${docId}`)
      .then((res) => {
        if (res.data.error) {
          return alert(res.data.error);
        }
        const val = res.data;
        setSlots(val.reverse());
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log(err);
      });
  }, []);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const pending = useSelector((state) => state.pending);
  const { schedualAppointment } = pending;
  if (!userInfo) {
    props.history.push("/signin");
  }
  const [fullName, setFullName] = useState(schedualAppointment.fullName);
  const [address, setAddress] = useState(schedualAppointment.address);
  const [city, setCity] = useState(schedualAppointment.city);
  const [postalCode, setPostalCode] = useState(schedualAppointment.postalCode);
  const [date, setDate] = useState(schedualAppointment.date);
  const [time, setTime] = useState(schedualAppointment.time);
  const [country, setCountry] = useState(schedualAppointment.country);
  const dispatch = useDispatch();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveSchedualAppoint({
        fullName,
        address,
        city,
        postalCode,
        date,
        time,
        country,
      })
    );
    props.history.push("/payment");
  };
  const { _id } = JSON.parse(localStorage.getItem("userInfo"));
  // http://localhost:8000/api/getslotpatient/60d44bd1e4410136d04af7a2
  const handelSubmit = () => {
    console.log("click");
    const data = { isBooked: true };
    Axios.patch(`/api/${_id}/updateslot/${time}`, data)
      .then((res) => {
        if (res.data.error) {
          return alert(res.data.error);
        }
        localStorage.setItem("timeid",res.data._id)
       
      })
      .catch((err) => {
        alert("Something went wrong i failed");
        console.log(err);
      });
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Patient Details</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="date">Appointment Date</label>
          <input
            type="date"
            id="date"
            placeholder="Enter Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="time">Appointment Time</label>
          <div className="">
            <select
              name="n1"
              id="box_g1"
              className="custom-select"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            >
              {slots.map((slot, idx) => (
                <option value={slot._id}>{slot.time}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit" onClick={handelSubmit}>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
