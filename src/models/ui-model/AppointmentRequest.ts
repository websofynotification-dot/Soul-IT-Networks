import { model, models, Schema } from "mongoose";


const appointmentRequestSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true });

export default models.AppointmentRequest || model("AppointmentRequest", appointmentRequestSchema);