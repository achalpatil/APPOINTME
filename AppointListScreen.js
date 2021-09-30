import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAppoint, listAppoints } from '../actions/appointActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { APPOINT_DELETE_RESET } from '../constants/appointConstants';

export default function AppointListScreen(props) {
  const appointList = useSelector((state) => state.appointList);
  const { loading, error, appoints } = appointList;
  const appointDelete = useSelector((state) => state.appointDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = appointDelete;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: APPOINT_DELETE_RESET });
    dispatch(listAppoints());
}, [dispatch, successDelete]);
  const deleteHandler = (appoint) => {
    if (window.confirm('Are you sure to delete?')) {
        dispatch(deleteAppoint(appoint._id));
      }
  };
  return (
    <div>
      <h1>Appointments</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
             
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>BOOKED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {appoints.map((appoint) => (
              <tr key={appoint._id}>
                <td>{appoint._id}</td>
               
                <td>{appoint.createdAt.substring(0, 10)}</td>
                <td>{appoint.totalPrice.toFixed(2)}</td>
                <td>{appoint.isPaid ? appoint.paidAt.substring(0, 10) : 'No'}</td>
                <td>
                  {appoint.isDelivered
                    ? appoint.deliveredAt.substring(0, 10)
                    : 'No'}
                </td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/appoint/${appoint._id}`);
                    }}
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(appoint)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}