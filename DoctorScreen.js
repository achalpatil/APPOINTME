import React from 'react';
import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReview, detailsDoctor } from '../actions/doctorActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { DOCTOR_REVIEW_CREATE_RESET } from '../constants/doctorConstants';


export default function DoctorScreen(props) {
  const dispatch = useDispatch();
  const doctorId = props.match.params.id;
  
  const doctorDetails = useSelector((state) => state.doctorDetails);
  const { loading, error, doctor } = doctorDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const doctorReviewCreate = useSelector((state) => state.doctorReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = doctorReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  useEffect(() => {
    if (successReviewCreate) {
      window.alert('Review Submitted Successfully');
      setRating('');
      setComment('');
      dispatch({ type: DOCTOR_REVIEW_CREATE_RESET });
    }
    dispatch(detailsDoctor(doctorId));
}, [dispatch, doctorId, successReviewCreate]);

  const addToPendingHandler = () => {
    props.history.push(`/pending/${doctorId}?`);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(doctorId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert('Please enter comment and rating');
    }
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="medium" src={doctor.image} alt={doctor.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1 className="dName"><b>{doctor.name}</b></h1>
            </li>
            <li>
            <li>
              <h1 className=" dCat">{doctor.category}</h1>
            </li>
              <h1 className=" dQual" >
              
                  {doctor.qualification}</h1>
            </li>
            
            <li>
                
              <h1 className="addPhone">Address:- {doctor.address}</h1>
            </li>
            <li>
            
              <h1 className="addPhone">Phone Number:- {doctor.phone}</h1>
            </li>
            <li>
              <Rating
                rating={doctor.rating}
                numReviews={doctor.numReviews}
              ></Rating>
            </li>
            <li className="fees">FEES : ${doctor.fees}</li>
            <li>

            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div className="price">FEES:</div>
                  <div className="price">RS.{doctor.fees}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {doctor.countInStock > 0 ? (
                      <span className="success">Available</span>
                    ) : (
                      <span className="danger">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              {doctor.countInStock > 0 && (
              <li>
                <button onClick={addToPendingHandler} className="primary block">Book Appointment</button>
              </li>
               )}
            </ul>

          </div>
        </div>
        </div>
        <div>
            <h2 id="reviews">Reviews</h2>
            {doctor.reviews.length === 0 && (
              <MessageBox>There is no review</MessageBox>
            )}
            <ul>
              {doctor.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating rating={review.rating} caption=" "></Rating>
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
              <li>
                {userInfo ? (
                  <form className="form" onSubmit={submitHandler}>
                    <div>
                      <h2>Write a customer review</h2>
                    </div>
                    <div>
                      <label htmlFor="rating">Rating</label>
                      <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1- Poor</option>
                        <option value="2">2- Fair</option>
                        <option value="3">3- Good</option>
                        <option value="4">4- Very good</option>
                        <option value="5">5- Excelent</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label />
                      <button className="primary" type="submit">
                        Submit
                      </button>
                    </div>
                    <div>
                      {loadingReviewCreate && <LoadingBox></LoadingBox>}
                      {errorReviewCreate && (
                        <MessageBox variant="danger">
                          {errorReviewCreate}
                        </MessageBox>
                      )}
                    </div>
                  </form>
                ) : (
                  <MessageBox>
                    Please <Link to="/signin">Sign In</Link> to write a review
                  </MessageBox>
                )}
              </li>
            </ul>
          </div>
       </div>
        )}
    </div>
  );
}