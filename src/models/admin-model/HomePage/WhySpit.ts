import { model, models, Schema } from "mongoose";

const whySpitSchema = new Schema({
    title: { type: String, default:""},
    description: { type: String, required: true },
}, { timestamps: true });

export default models.WhySPIT || model("WhySPIT", whySpitSchema);