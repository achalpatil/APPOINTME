import Axios from 'axios';
import {
  DOCTOR_CREATE_FAIL,
  DOCTOR_CREATE_REQUEST,
  DOCTOR_CREATE_SUCCESS,
  DOCTOR_DETAILS_FAIL,
  DOCTOR_DETAILS_REQUEST,
  DOCTOR_DETAILS_SUCCESS,
  DOCTOR_LIST_FAIL,
  DOCTOR_LIST_REQUEST,
  DOCTOR_LIST_SUCCESS,
  DOCTOR_UPDATE_REQUEST,
  DOCTOR_UPDATE_SUCCESS,
  DOCTOR_UPDATE_FAIL,
  DOCTOR_DELETE_REQUEST,
  DOCTOR_DELETE_FAIL,
  DOCTOR_DELETE_SUCCESS,
  DOCTOR_REVIEW_CREATE_REQUEST,
  DOCTOR_REVIEW_CREATE_SUCCESS,
  DOCTOR_REVIEW_CREATE_FAIL,
} from '../constants/doctorConstants';

export const listDoctors = () => async (dispatch) => {
    dispatch({
      type: DOCTOR_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get('/api/doctors');
      dispatch({ type: DOCTOR_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DOCTOR_LIST_FAIL, payload: error.message });
    }
};

  export const detailsDoctor = (doctorId) => async (dispatch) => {
    dispatch({ type: DOCTOR_DETAILS_REQUEST, payload: doctorId });
    try {
      const { data } = await Axios.get(`/api/doctors/${doctorId}`);
      dispatch({ type: DOCTOR_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: DOCTOR_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  export const createDoctor = () => async (dispatch, getState) => {
    dispatch({ type: DOCTOR_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        '/api/doctors',
        {},
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: DOCTOR_CREATE_SUCCESS,
        payload: data.doctor,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DOCTOR_CREATE_FAIL, payload: message });
    }
  };
  export const updateDoctor = (doctor) => async (dispatch, getState) => {
    dispatch({ type: DOCTOR_UPDATE_REQUEST, payload: doctor });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(`/api/doctors/${doctor._id}`, doctor, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: DOCTOR_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DOCTOR_UPDATE_FAIL, error: message });
    }
  };
  export const deleteDoctor = (doctorId) => async (dispatch, getState) => {
    dispatch({ type: DOCTOR_DELETE_REQUEST, payload: doctorId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = Axios.delete(`/api/doctors/${doctorId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: DOCTOR_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DOCTOR_DELETE_FAIL, payload: message });
    }
  };
  export const createReview = (doctorId, review) => async (
    dispatch,
    getState
  ) => {
    dispatch({ type: DOCTOR_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `/api/doctors/${doctorId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: DOCTOR_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DOCTOR_REVIEW_CREATE_FAIL, payload: message });
    }
  };