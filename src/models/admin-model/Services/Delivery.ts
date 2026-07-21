import { Schema, model, models } from "mongoose";

const deliverySchema = new Schema({
    pageName: { type: String, required: true },
    keySteps: { type: [String], default:[], required: true },
}, { timestamps: true, versionKey:false });

export default models.Delivery || model("Delivery", deliverySchema);