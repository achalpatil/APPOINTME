import Axios from 'axios';
import {
  PENDING_ADD_ITEM,
  PENDING_REMOVE_ITEM,
  PENDING_SAVE_SHIPPING_ADDRESS,
  PENDING_SAVE_PAYMENT_METHOD,
} from '../constants/pendingConstants';
export const addToPending = (doctorId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/doctors/${doctorId}`);
  dispatch({
    type: PENDING_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
    fees: data.fees,
      countInStock: data.countInStock,
      doctor: data._id,
      qty,
    },
  });
  localStorage.setItem('pendingItems', JSON.stringify(getState().pending.pendingItems));
};

export const removeFromPending = (doctorId) => (dispatch, getState) => {
  dispatch({ type: PENDING_REMOVE_ITEM, payload: doctorId });
  localStorage.setItem('pendingItems', JSON.stringify(getState().pending.pendingItems));
};

export const saveSchedualAppoint = (data) => (dispatch) => {
  dispatch({ type: PENDING_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem('schedualAppointment', JSON.stringify(data));
};
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: PENDING_SAVE_PAYMENT_METHOD, payload: data });
};