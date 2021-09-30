 import Axios from 'axios';
import { PENDING_EMPTY } from '../constants/pendingConstants';
import {
  APPOINT_CREATE_FAIL,
  APPOINT_CREATE_REQUEST,
  APPOINT_CREATE_SUCCESS,
  APPOINT_DETAILS_FAIL,
  APPOINT_DETAILS_REQUEST,
  APPOINT_DETAILS_SUCCESS,
  APPOINT_PAY_REQUEST,
  APPOINT_PAY_FAIL,
  APPOINT_PAY_SUCCESS,
  APPOINT_MINE_LIST_REQUEST,
  APPOINT_MINE_LIST_FAIL,
  APPOINT_MINE_LIST_SUCCESS,
  APPOINT_LIST_REQUEST,
  APPOINT_LIST_SUCCESS,
  APPOINT_LIST_FAIL,
  APPOINT_DELETE_REQUEST,
  APPOINT_DELETE_SUCCESS,
  APPOINT_DELETE_FAIL,
  APPOINT_DELIVER_REQUEST,
  APPOINT_DELIVER_SUCCESS,
  APPOINT_DELIVER_FAIL,
  APPOINT_SUMMARY_REQUEST,
  APPOINT_SUMMARY_SUCCESS,
} from '../constants/appointConstants';

export const createAppoint = (appoint) => async (dispatch, getState) => {
  dispatch({ type: APPOINT_CREATE_REQUEST, payload: appoint });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.post('/api/appoints', appoint, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: APPOINT_CREATE_SUCCESS, payload: data.appoint });
    dispatch({ type: PENDING_EMPTY });
    localStorage.removeItem('pendingItems');
  } catch (error) {
    dispatch({
      type: APPOINT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const detailsAppoint = (appointId) => async (dispatch, getState) => {
  dispatch({ type: APPOINT_DETAILS_REQUEST, payload: appointId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/appoints/${appointId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: APPOINT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: APPOINT_DETAILS_FAIL, payload: message });
  }
};
export const payAppoint = (appoint, paymentResult) => async (
  dispatch,
  getState
) => {
  dispatch({ type: APPOINT_PAY_REQUEST, payload: { appoint, paymentResult } });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.put(`/api/appoints/${appoint._id}/pay`, paymentResult, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: APPOINT_PAY_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: APPOINT_PAY_FAIL, payload: message });
  }
};
export const listAppointMine = () => async (dispatch, getState) => {
  dispatch({ type: APPOINT_MINE_LIST_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get('/api/appoints/mine', {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: APPOINT_MINE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: APPOINT_MINE_LIST_FAIL, payload: message });
  }
};
export const listAppoints = () => async (dispatch, getState) => {
  dispatch({ type: APPOINT_LIST_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get('/api/appoints', {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    console.log(data);
    dispatch({ type: APPOINT_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: APPOINT_LIST_FAIL, payload: message });
  }
};
export const deleteAppoint = (appointId) => async (dispatch, getState) => {
  dispatch({ type: APPOINT_DELETE_REQUEST, payload: appointId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/appoints/${appointId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: APPOINT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: APPOINT_DELETE_FAIL, payload: message });
  }
};
export const deliverAppoint = (appointId) => async (dispatch, getState) => {
  dispatch({ type: APPOINT_DELIVER_REQUEST, payload: appointId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.put(
      `/api/appoints/${appointId}/deliver`,
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: APPOINT_DELIVER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: APPOINT_DELIVER_FAIL, payload: message });
  }
};
export const summaryAppoint = () => async (dispatch, getState) => {
  dispatch({ type: APPOINT_SUMMARY_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get('/api/appoints/summary', {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: APPOINT_SUMMARY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: APPOINT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};