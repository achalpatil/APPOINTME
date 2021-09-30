import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { pendingReducer } from './reducers/pendingReducers';
import {
  appointCreateReducer,
  appointDeleteReducer,
  appointDeliverReducer,
  appointDetailsReducer,
  appointListReducer,
  appointMineListReducer,
  appointPayReducer,
  appointSummaryReducer,
} from './reducers/appointReducers';
import {
  doctorCreateReducer,
  doctorDeleteReducer,
  doctorDetailsReducer,
  doctorListReducer,
  doctorReviewCreateReducer,
  doctorUpdateReducer,
} from './reducers/doctorReducers';
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from './reducers/userReducers';
const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  pending: {
    pendingItems: localStorage.getItem('pendingItems')
      ? JSON.parse(localStorage.getItem('pendingItems'))
      : [],
      schedualAppointment: localStorage.getItem('schedualAppointment')
      ? JSON.parse(localStorage.getItem('schedualAppointment'))
      : {},
      paymentMethod: 'PayPal',
  },
};

const reducer = combineReducers({
  doctorList: doctorListReducer,
  doctorDetails: doctorDetailsReducer,
  pending : pendingReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  appointCreate: appointCreateReducer,
  appointDetails: appointDetailsReducer,
  appointPay: appointPayReducer,
  appointMineList: appointMineListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdate: userUpdateReducer,
  doctorCreate: doctorCreateReducer,
  doctorUpdate: doctorUpdateReducer,
  doctorDelete: doctorDeleteReducer,
  appointList: appointListReducer,
  appointDelete: appointDeleteReducer,
  appointDeliver: appointDeliverReducer,
  doctorReviewCreate: doctorReviewCreateReducer,
  appointSummary: appointSummaryReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
  
);

export default store;