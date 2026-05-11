import { model, models, Schema } from "mongoose";

const sectorSchema = new Schema({
    title: { type: String, required: true },
    description: { type: [String], default: [], required: true }
}, { timestamps: true });

export default models.Sector || model("Sector", sectorSchema);
