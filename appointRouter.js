import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Appoint from '../models/appointModel.js';
import User from '../models/userModel.js';
import Doctor from '../models/doctorModel.js';
import { isAdmin, isAuth } from '../utils.js';

const appointRouter = express.Router();
appointRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const appoints = await Appoint.find({}).populate('user', 'name');
    res.send(appoints);
  })
);
appointRouter.get(
  '/summary',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const appoints = await Appoint.aggregate([
      {
        $group: {
          _id: null,
          numAppoints: { $sum: 1 },
          totalSales: { $sum: '$totalPrice' },
        },
      },
    ]);
    const users = await User.aggregate([
      {
        $group: {
          _id: null,
          numUsers: { $sum: 1 },
        },
      },
    ]);
    const dailyAppoints = await Appoint.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          appoints: { $sum: 1 },
          sales: { $sum: '$totalPrice' },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    const doctorCategories = await Doctor.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);
    res.send({ users, appoints, dailyAppoints, doctorCategories });
  })
);

appointRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const appoints = await Appoint.find({ user: req.user._id });
    res.send(appoints);
  })
);


appointRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.appointItems.length === 0) {
      res.status(400).send({ message: 'Pending is empty' });
    } else {
      const appoint = new Appoint({
        appointItems: req.body.appointItems,
        schedualAppointment: req.body.schedualAppointment,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createdAppoint = await appoint.save();
      res
        .status(201)
        .send({ message: 'New Appoint Created', appoint: createdAppoint });
    }
  })
);
appointRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const appoint = await Appoint.findById(req.params.id);
    if (appoint) {
      res.send(appoint);
    } else {
      res.status(404).send({ message: 'Appoint Not Found' });
    }
  })
);
appointRouter.put(
  '/:id/pay',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const appoint = await Appoint.findById(req.params.id);
    if (appoint) {
      appoint.isPaid = true;
      appoint.paidAt = Date.now();
      appoint.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updatedAppoint = await appoint.save();
      res.send({ message: 'Appoint Paid', appoint: updatedAppoint });
    } else {
      res.status(404).send({ message: 'Appoint Not Found' });
    }
  })
);
appointRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const appoint = await Appoint.findById(req.params.id);
    if (appoint) {
      const deleteAppoint = await appoint.remove();
      res.send({ message: 'Appointment Deleted Deleted', appoint: deleteAppoint });
    } else {
      res.status(404).send({ message: 'Appointment Not Found' });
    }
  })
);
appointRouter.put(
  '/:id/deliver',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const appoint = await Appoint.findById(req.params.id);
    if (appoint) {
      appoint.isDelivered = true;
      appoint.deliveredAt = Date.now();

      const updatedAppoint = await appoint.save();
      res.send({ message: 'Appointment Confirm', appoint: updatedAppoint });
    } else {
      res.status(404).send({ message: 'Appoint Not Found' });
    }
  })
);

export default appointRouter;