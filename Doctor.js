import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Doctor(props) {
  const { doctor } = props;
  return (
         <div key={doctor._id} className="card" >
           <Link to={`/doctor/${doctor._id}`}>
            <img class="medium" src={doctor.image} alt={doctor.name}/> </Link>
            <div className="card-body">
              <Link to={'/doctor/${doctor._id'}>
                <h2>{doctor.name}</h2>
              </Link>
              <p className="category"><b>{doctor.category}</b></p>
              <Rating
          rating={doctor.rating}
          numReviews={doctor.numReviews}>
          </Rating>
          <div className="fees">Rs.{doctor.fees}</div>
            </div>
          </div>
          );
  }