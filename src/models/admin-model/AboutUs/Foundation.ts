import { model, models, Schema } from "mongoose";

const foundationSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    foundationStep: { type: [String], defualt: [] }
}, { timestamps: true });

export default models.Foundation || model("Foundation", foundationSchema);