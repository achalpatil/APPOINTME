
import React, { useEffect } from 'react';
import { addToPending, removeFromPending } from '../actions/pendingActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';

export default function PendingScreen(props) {
  const doctorId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const pending = useSelector((state) => state.pending);
  const { pendingItems } = pending;
  const dispatch = useDispatch();
  useEffect(() => {
    if (doctorId) {
      dispatch(addToPending(doctorId,qty ));
    }
  }, [dispatch, doctorId,qty]);

  const removeFromPendingHandler = (id) => {
    // delete action
    dispatch(removeFromPending(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=schedual');
  };
 
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Fees Payment</h1>
        {pendingItems.length === 0 ? (
          <MessageBox>
            No bookings yet. <Link to="/">Book now</Link>
          </MessageBox>
        ) : (
          <ul>
            {pendingItems.map((item) => (
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
                    <Link to={`/doctor/${item.doctor}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToPending(item.doctor, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={ 1} value={ 1}>
                          { 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>Rs.{item.fees}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromPendingHandler(item.doctor)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal  : Rs.
                {pendingItems.reduce((a, c) => a + c.fees * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={pendingItems.length === 0}
              >
                Proceed 
              </button>
            </li>
          </ul>
        </div>
      </div>
   </div>   
      );
            }