import { model, models, Schema } from "mongoose";

const approachSchema = new Schema({
    title: { type: String, required: true },
    pageName: { type: String, required: true },
    description: { type: String, default: "" }
}, { timestamps: true })
export default models.Approach || model("Approach", approachSchema)