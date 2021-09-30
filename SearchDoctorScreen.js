import React from 'react';
import Doctor from '../components/Doctor';
import { useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listDoctors } from '../actions/doctorActions';



export default function SearchDoctorScreen() {
  const dispatch = useDispatch();
  const doctorList = useSelector((state) => state.doctorList);
  const { loading, error, doctors } = doctorList;

  useEffect(() => {
    dispatch(listDoctors());
  }, [dispatch]);
  
  return (
    <div>
       

<div className="doctorList"><h1><b>--Doctor List--</b></h1> </div>

        {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor}></Doctor>
            ))}
          </div>
        )}
      </div>

  );
}