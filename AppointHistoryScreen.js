import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listAppointMine } from '../actions/appointActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function AppointHistoryScreen(props) {
  const appointMineList = useSelector((state) => state.appointMineList);
  const { loading, error, appoints } = appointMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAppointMine());
  }, [dispatch]);
  return (
    <div>
      <h1>Appointment History</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE OF BOOKING</th>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}