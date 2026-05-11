import { model, models, Schema } from "mongoose";

const whyChooseUsSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },

}, { timestamps: true });

export default models.WhyChooseUs || model("WhyChooseUs", whyChooseUsSchema);
