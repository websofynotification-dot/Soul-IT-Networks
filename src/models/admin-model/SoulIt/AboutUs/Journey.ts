import { model, models, Schema } from "mongoose";

const journeySchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    journey_year: { type: String, required: true }
}, { timestamps: true });

export default models.Journey || model("Journey", journeySchema);
