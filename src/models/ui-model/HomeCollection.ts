import { model, models, Schema } from "mongoose";

const homeCollectionSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    city: { type: String, required: true },
    locality: { type: String, required: true },
    address: { type: String, required: true },
}, { timestamps: true });

export default models.HomeCollection || model("HomeCollection", homeCollectionSchema)