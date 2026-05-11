import { model, models, Schema } from "mongoose";

const supportServiceSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    supportStep: { type: [String], required: true },
}, { timestamps: true });

export default models.SupportService || model("SupportService", supportServiceSchema);