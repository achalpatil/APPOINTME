import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deliverAppoint, detailsAppoint, payAppoint } from '../actions/appointActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
    APPOINT_DELIVER_RESET,
    APPOINT_PAY_RESET,
  } from '../constants/appointConstants';
import axios from 'axios';

  

export default function AppointScreen(props) {
  const appointId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const appointDetails = useSelector((state) => state.appointDetails);
  const { appoint, loading, error } = appointDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const appointPay = useSelector((state) => state.appointPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = appointPay;
  const pending = useSelector((state) => state.pending);
  if (!pending.paymentMethod) {
    props.history.push('/payment');
  }
  const appointDeliver = useSelector((state) => state.appointDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = appointDeliver;
  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
        const { data } = await Axios.get('/api/config/paypal');
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
        script.async = true;
        script.onload = () => {
          setSdkReady(true);
        };
        document.body.appendChild(script);
      };
      if (
        !appoint ||
        successPay ||
        successDeliver ||
        (appoint && appoint._id !== appointId)
      ) {
            dispatch({ type: APPOINT_PAY_RESET });
            dispatch({ type: APPOINT_DELIVER_RESET });
        dispatch(detailsAppoint(appointId));
      } else {
        if (!appoint.isPaid) {
          if (!window.paypal) {
            addPayPalScript();
          } else {
            setSdkReady(true);
          }
        }
      }
    }, [dispatch, appointId, sdkReady, successPay, successDeliver, appoint]);
    
    const [time,setTime] = useState("")
    useEffect(()=>{
      const timeid = localStorage.getItem("timeid")
      // alert(timeid)
      axios.get(`http://localhost:8000/api/getslotinfo/${timeid}`)
      .then(res=>{
        if(res.data.error){
          return alert(res.data.error)
        }
        console.log("TIME>>",res.data.time)
        return setTime(res.data.time)
      }).catch(err=>console.log(err))
    },[])
const successPaymentHandler = (paymentResult) => {
    dispatch(payAppoint(appoint, paymentResult));
    };
  const deliverHandler = () => {
    dispatch(deliverAppoint(appoint._id));
  };
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Appoint {appoint._id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Patient Details</h2>
                <p>
                  <strong>Name:</strong> {appoint.schedualAppointment.fullName} <br />
                  <strong>Address: </strong> {appoint.schedualAppointment.address},
                  {appoint.schedualAppointment.city},{' '}
                  {appoint.schedualAppointment.postalCode},
                  {appoint.schedualAppointment.country}
                </p>
                {appoint.isDelivered ? (
                  <MessageBox variant="success">
                    Booked {appoint.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Booked</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {appoint.paymentMethod}
                </p>
                {appoint.isPaid ? (
                  <MessageBox variant="success">
                    Paid at {appoint.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Paid</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Appointment Details</h2>
                <ul>
                  {appoint.appointItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                        Rs.{item.qty * item.fees} <br />
                           <strong>Date:</strong> {pending.schedualAppointment.date} <br />
                           <strong>Time:</strong> {time} <br />
                        </div>
                      </div>
                    </li>
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
                  <div>Rs.{appoint.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Extra charges</div>
                  <div>Rs.{appoint.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>Rs.{appoint.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong>Total</strong>
                  </div>
                  <div>
                    <strong>Rs.{appoint.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              {!appoint.isPaid && (
                <li>
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
                    
                    <>
                    {errorPay && (
                      <MessageBox variant="danger">{errorPay}</MessageBox>
                    )}
                    {loadingPay && <LoadingBox></LoadingBox>}

                    <PayPalButton
                      amount={appoint.totalPrice}
                      onSuccess={successPaymentHandler}
                    ></PayPalButton>
                  </>
                  )}
                </li>
              )}
               {userInfo.isAdmin && appoint.isPaid && !appoint.isDelivered && (
                <li>
                  {loadingDeliver && <LoadingBox></LoadingBox>}
                  {errorDeliver && (
                    <MessageBox variant="danger">{errorDeliver}</MessageBox>
                  )}
                  <button
                    type="button"
                    className="primary block"
                    onClick={deliverHandler}
                  >
                    Deliver Appoint
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}