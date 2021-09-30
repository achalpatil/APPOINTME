import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createDoctor,
    deleteDoctor,
    listDoctors,
  } from '../actions/doctorActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
    DOCTOR_CREATE_RESET,
    DOCTOR_DELETE_RESET,
  } from '../constants/doctorConstants';
  

export default function DoctorListScreen(props) {
  const doctorList = useSelector((state) => state.doctorList);
  const { loading, error, doctors } = doctorList;
  const doctorCreate = useSelector((state) => state.doctorCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    doctor: createdDoctor,
  } = doctorCreate;

  const doctorDelete = useSelector((state) => state.doctorDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = doctorDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
        dispatch({ type: DOCTOR_CREATE_RESET });
        props.history.push(`/doctor/${createdDoctor._id}/edit`);
      }
      if (successDelete) {
        dispatch({ type: DOCTOR_DELETE_RESET });
      }
    dispatch(listDoctors());
}, [createdDoctor, dispatch, props.history, successCreate, successDelete]);

const deleteHandler = (doctor) => {
  if (window.confirm('Are you sure to delete?')) {
    dispatch(deleteDoctor(doctor._id));
  }
  };
  const createHandler = () => {
    dispatch(createDoctor());
  };
  return (
    <div>
      <div className="row">
        <h1>Doctors</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Add Doctor
        </button>
      </div>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>FEES</th>
              <th>PHONE</th>
              <th>QUALIFICATION</th>
              <th>ADDRESS</th>
              <th>CATEGORY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor._id}>
                <td>{doctor._id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.fees}</td>
                <td>{doctor.phone}</td>
                <td>{doctor.qualification}</td>
                <td>{doctor.address}</td>
                <td>{doctor.category}</td>
               
                
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() =>
                      props.history.push(`/doctor/${doctor._id}/edit`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(doctor)}
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