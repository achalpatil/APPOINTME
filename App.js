import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PendingScreen from "./screens/PendingScreen";

import HomeScreen from "./screens/HomeScreen";
import SearchDoctorScreen from "./screens/SearchDoctorScreen";
import AppointHistoryScreen from "./screens/AppointHistoryScreen";
import AppointScreen from "./screens/AppointScreen";
import DoctorScreen from "./screens/DoctorScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PlaceAppointScreen from "./screens/PlaceAppointScreen";
import DoctorListScreen from "./screens/DoctorListScreen";
import SchedualAppointScreen from "./screens/SchedualAppointScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";

import { signout } from "./actions/userActions";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import DoctorEditScreen from "./screens/DoctorEditScreen";
import AppointListScreen from "./screens/AppointListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import DashboardScreen from "./screens/DashboardScreen";
import SupportScreen from "./screens/SupportScreen";
import ChatBox from "./components/ChatBox";
import CovidScreen from "./screens/CovidScreen";
import Createslot from "./screens/Createslot";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              AppointMe
            </Link>
          </div>

          <div>
          <Link to="/searchdoctor">Doctor List</Link>
           
            <Link to="/pending">Pending</Link>
            <Link to="/covid">Covid Updates</Link>
           

            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/appointhistory">User History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/doctorlist">Doctors</Link>
                  </li>
                  <li>
                    <Link to="/appointlist">Appointments</Link>
                  </li>
                  <li>
                    <Link to="/createslot">Create Slot</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">Support</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/pending/:id?" component={PendingScreen}></Route>
          <Route path="/doctor/:id" component={DoctorScreen} exact></Route>
          <Route
            path="/doctor/:id/edit"
            component={DoctorEditScreen}
            exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/schedual" component={SchedualAppointScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeappoint" component={PlaceAppointScreen}></Route>
          <Route path="/searchdoctor" component={SearchDoctorScreen}></Route>
          <Route path="/appoint/:id" component={AppointScreen}></Route>
          <Route
            path="/appointhistory"
            component={AppointHistoryScreen}
          ></Route>
          <Route path="/covid" component={CovidScreen}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/doctorlist"
            component={DoctorListScreen}
          ></AdminRoute>
          <AdminRoute
            path="/appointlist"
            component={AppointListScreen}
          ></AdminRoute>{" "}
          <AdminRoute path="/createslot" component={Createslot}></AdminRoute>
          <AdminRoute
            path="/dashboard"
            component={DashboardScreen}
          ></AdminRoute>
          <AdminRoute path="/support" component={SupportScreen}></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">
          {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
          <div>All right reserved</div>{" "}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
