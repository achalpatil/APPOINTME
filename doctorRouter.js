import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Doctor from '../models/doctorModel.js';
import { isAdmin, isAuth } from '../utils.js';

const doctorRouter = express.Router();

doctorRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const doctors = await Doctor.find({});
    res.send(doctors);
  })
);

doctorRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await Doctor.remove({});
    const createdDoctors = await Doctor.insertMany(data.doctors);
    res.send({ createdDoctors });
  })
);

doctorRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const doctor = await Doctor.findById(req.params.id);
    if (doctor) {
      res.send(doctor);
    } else {
      res.status(404).send({ message: 'Doctor Not Found' });
    }
  })
);
doctorRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const doctor = new Doctor({
      name: 'sample name ' + Date.now(),
      image: '/images/p1.jpg',
      fees: 0,
      category: 'sample category',
      qualification: 'sample brand',
      phone: 0,
      countInStock: 0,
      rating: 0,
      numReviews: 0,
      address: 'sample description',
   
    });
    const createdDoctor = await doctor.save();
    res.send({ message: 'Doctor Created', doctor: createdDoctor });
  })
);
doctorRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const doctorId = req.params.id;
    const doctor = await Doctor.findById(doctorId);
    if (doctor) {
      doctor.name = req.body.name;
      doctor.price = req.body.price;
      doctor.image = req.body.image;
      doctor.category = req.body.category;
      doctor.brand = req.body.brand;
      doctor.countInStock = req.body.countInStock;
      doctor.description = req.body.description;
      const updatedDoctor = await doctor.save();
      res.send({ message: 'Doctor Updated', doctor: updatedDoctor });
    } else {
      res.status(404).send({ message: 'Doctor Not Found' });
    }
  })
);
doctorRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const doctor = await Doctor.findById(req.params.id);
    if (doctor) {
      const deleteDoctor = await doctor.remove();
      res.send({ message: 'Doctor Deleted', doctor: deleteDoctor });
    } else {
      res.status(404).send({ message: 'Doctor Not Found' });
    }
  })
);
doctorRouter.post(
  '/:id/reviews',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const doctorId = req.params.id;
    const doctor = await Doctor.findById(doctorId);
    if (doctor) {
      if (doctor.reviews.find((x) => x.name === req.user.name)) {
        return res
          .status(400)
          .send({ message: 'You already submitted a review' });
      }
      const review = {
        name: req.user.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      doctor.reviews.push(review);
      doctor.numReviews = doctor.reviews.length;
      doctor.rating =
        doctor.reviews.reduce((a, c) => c.rating + a, 0) /
        doctor.reviews.length;
      const updatedDoctor = await doctor.save();
      res.status(201).send({
        message: 'Review Created',
        review: updatedDoctor.reviews[updatedDoctor.reviews.length - 1],
      });
    } else {
      res.status(404).send({ message: 'Doctor Not Found' });
    }
  })
);

export default doctorRouter;