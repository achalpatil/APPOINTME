import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createAppoint } from '../actions/appointActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { APPOINT_CREATE_RESET } from '../constants/appointConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import axios from 'axios';

export default function PlaceAppointScreen(props) {
  const pending = useSelector((state) => state.pending);
  if (!pending.paymentMethod) {
    props.history.push('/payment');
  }
   const appointCreate = useSelector((state) => state.appointCreate);
  const { loading, success, error, appoint } = appointCreate;
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  pending.itemsPrice = toPrice(
    pending.pendingItems.reduce((a, c) => a + c.qty * c.fees, 0)
  );
  pending.shippingPrice = pending.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  pending.taxPrice = toPrice(0.15 * pending.itemsPrice);
  pending.totalPrice = pending.itemsPrice + pending.shippingPrice + pending.taxPrice;
  const dispatch = useDispatch();
  const placeAppointHandler = () => {
    dispatch(createAppoint({ ...pending, appointItems: pending.pendingItems }));
  };
   useEffect(() => {
    if (success) {
      props.history.push(`/appoint/${appoint._id}`);
      dispatch({ type: APPOINT_CREATE_RESET });
    }
  }, [dispatch, appoint, props.history, success]);
  const [time,setTime] = useState("")
  useEffect(()=>{
    const timeid = localStorage.getItem("timeid")
    axios.get(`api/getslotinfo/${timeid}`)
    .then(res=>{
      if(res.data.error){
        return alert(res.data.error)
      }
      console.log("TIME>>",res.data.time)
      return setTime(res.data.time)
    }).catch(err=>console.log(err))
  },[])

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Patient Details</h2>
                <p>
                  <strong>Name:</strong> {pending.schedualAppointment.fullName} <br />
                  <strong>Address: </strong> {pending.schedualAppointment.address},
                  {pending.schedualAppointment.city}, {pending.schedualAppointment.postalCode}
                  ,{pending.schedualAppointment.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {pending.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Appointment Details</h2>
                <ul>
                  {pending.pendingItems.map((item) => (
                    <li key={item.doctor}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/doctor/${item.doctor}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                           Rs.{item.qty * item.fees} <br />
                           <strong>Date:</strong> {pending.schedualAppointment.date} <br />
                           {console.log("RENDER>>>",pending.schedualAppointment)}
                           <strong>Time:</strong> {time} <br />
                        </div>
                      </div>
                    </li>
                    // Patient ID kuthe ahe 
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Appointment Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Fees</div>
                  <div>Rs.{pending.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Extra charges</div>
                  <div>Rs.{pending.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>Rs.{pending.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong>Total</strong>
                  </div>
                  <div>
                    <strong>Rs.{pending.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={placeAppointHandler}
                  className="primary block"
                  disabled={pending.pendingItems.length === 0}
                >
                  Confirm Appointment
                </button>
              </li>
               {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}