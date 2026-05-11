import { Schema, model, models } from "mongoose";

const deliverySchema = new Schema({
    title: { type: String, required: true },
    pageName: { type: String, required: true },
    description: { type: String, default: "" },
}, { timestamps: true });

export default models.Delivery || model("Delivery", deliverySchema);