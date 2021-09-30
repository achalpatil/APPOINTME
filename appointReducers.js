import {
  APPOINT_CREATE_FAIL,
  APPOINT_CREATE_REQUEST,
  APPOINT_CREATE_RESET,
  APPOINT_CREATE_SUCCESS,
  APPOINT_DETAILS_FAIL,
  APPOINT_DETAILS_REQUEST,
  APPOINT_DETAILS_SUCCESS,
  APPOINT_MINE_LIST_FAIL,
  APPOINT_MINE_LIST_REQUEST,
  APPOINT_MINE_LIST_SUCCESS,
  APPOINT_PAY_FAIL,
  APPOINT_PAY_REQUEST,
  APPOINT_PAY_RESET,
  APPOINT_PAY_SUCCESS,
  APPOINT_LIST_REQUEST,
  APPOINT_LIST_SUCCESS,
  APPOINT_LIST_FAIL,
  APPOINT_DELETE_REQUEST,
  APPOINT_DELETE_SUCCESS,
  APPOINT_DELETE_FAIL,
  APPOINT_DELETE_RESET,
  APPOINT_DELIVER_REQUEST,
  APPOINT_DELIVER_SUCCESS,
  APPOINT_DELIVER_FAIL,
  APPOINT_DELIVER_RESET,
  APPOINT_SUMMARY_REQUEST,
  APPOINT_SUMMARY_SUCCESS,
  APPOINT_SUMMARY_FAIL,
} from '../constants/appointConstants';

export const appointCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case APPOINT_CREATE_REQUEST:
      return { loading: true };
    case APPOINT_CREATE_SUCCESS:
      return { loading: false, success: true, appoint: action.payload };
    case APPOINT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case APPOINT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const appointDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case APPOINT_DETAILS_REQUEST:
      return { loading: true };
    case APPOINT_DETAILS_SUCCESS:
      return { loading: false, appoint: action.payload };
    case APPOINT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const appointPayReducer = (state = {}, action) => {
  switch (action.type) {
    case APPOINT_PAY_REQUEST:
      return { loading: true };
    case APPOINT_PAY_SUCCESS:
      return { loading: false, success: true };
    case APPOINT_PAY_FAIL:
      return { loading: false, error: action.payload };
    case APPOINT_PAY_RESET:
      return {};
    default:
      return state;
  }
};
export const appointMineListReducer = (state = { appoints: [] }, action) => {
  switch (action.type) {
    case APPOINT_MINE_LIST_REQUEST:
      return { loading: true };
    case APPOINT_MINE_LIST_SUCCESS:
      return { loading: false, appoints: action.payload };
    case APPOINT_MINE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const appointListReducer = (state = { appoints: [] }, action) => {
  switch (action.type) {
    case APPOINT_LIST_REQUEST:
      return { loading: true };
    case APPOINT_LIST_SUCCESS:
      return { loading: false, appoints: action.payload };
    case APPOINT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const appointDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case APPOINT_DELETE_REQUEST:
      return { loading: true };
    case APPOINT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case APPOINT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case APPOINT_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
export const appointDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case APPOINT_DELIVER_REQUEST:
      return { loading: true };
    case APPOINT_DELIVER_SUCCESS:
      return { loading: false, success: true };
    case APPOINT_DELIVER_FAIL:
      return { loading: false, error: action.payload };
    case APPOINT_DELIVER_RESET:
      return {};
    default:
      return state;
  }
};
export const appointSummaryReducer = (
  state = { loading: true, summary: {} },
  action
) => {
  switch (action.type) {
    case APPOINT_SUMMARY_REQUEST:
      return { loading: true };
    case APPOINT_SUMMARY_SUCCESS:
      return { loading: false, summary: action.payload };
    case APPOINT_SUMMARY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};