import { model, models, Schema } from "mongoose";

const serviceSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    buttonName: { type: String, required: true },
    buttonUrl: { type: String, required: true },
}, { timestamps: true });

export default models.Service || model("Service", serviceSchema);