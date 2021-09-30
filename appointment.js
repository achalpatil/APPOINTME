import express from "express";
import Appointment from "../models/appointmentModel.js";

const router = express.Router();
router.post("/createslot/:docId", (req, res) => {
  const { docId } = req.params;
  const { time } = req.body;
  let appointment = new Appointment({ time, docId });
  appointment.save((err, appoint) => {
    if (err || !appoint) {
      console.log(err);
      return res.json({ error: "Unable to create the time slot" });
    }
    return res.json(appoint);
  });
});
router.get("/getslot/:docId", (req, res) => {
  const { docId } = req.params;
  Appointment.find({ docId: docId, isBooked: false }).exec((err, slots) => {
    if (err || !slots || slots.length === 0) {
      console.log(err);
      return res.json({ error: "Sorry the doctor is unavailable to day" });
    }
    return res.json(slots);
  });
});
router.get("/getslotpatient/:patientId", (req, res) => {
  const { patientId } = req.params;
  Appointment.find({ patientId: patientId, isBooked: true }).exec(
    (err, slots) => {
      if (err || !slots || slots.length === 0) {
        console.log(err);
        return res.json({ error: "found no solts for you" });
      }
      return res.json(slots);
    }
  );
});
router.get("/getslotinfo/:slotId", (req, res) => {
  const { slotId } = req.params;
  console.log("SLOTID>>",slotId);
  Appointment.findById(slotId).exec(
    (err, slots) => {
      if (err  ) {
        console.log(err);
        return res.json({ error: "Something went wrong " });
      }
      if (!slots) {
        console.log(err);
        return res.json({ error: "No Solt find" });
      }
      console.log("SLOT>",slots)
      return res.json(slots);
    }
  );
});

router.patch("/:patientId/updateslot/:slotId", (req, res) => {
  const { patientId, slotId } = req.params;

  Appointment.find({ patientId: patientId, isBooked: true }).exec(
    (err, slots) => {
      if (slots.length !== 0) {
        return res.json({
          error: "Looks like you already have booked the slot",
        });
      }
      Appointment.findByIdAndUpdate(
        { _id: slotId },
        { $set: { patientId: patientId, isBooked: req.body.isBooked } },
        { new: true, useFindAndModify: false },
        (err, slot) => {
          if (err || !slot) {
            console.log(err);
            return res.json({ error: "Sorry unable to book the appointment" });
          }
          return res.json(slot);
        }
      );
    }
  );
});

export default router;
