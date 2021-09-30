import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
  docId: {
    type: ObjectId,
    ref: "Doctor",
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  patientId: {
    type: ObjectId,
    ref: "User", 
  },
});
const Appointment = mongoose.model("Appointment", appointmentSchema);
// module.exports = { Appointment };
export default Appointment;