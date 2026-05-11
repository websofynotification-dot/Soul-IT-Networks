import { model, models, Schema } from "mongoose";

const whyChooseSoulItSchema = new Schema({
    title: { type: String, required: true },
    pageName: { type: String, required: true },
    description: { type: String, default: "" },
}, { timestamps: true });

export default models.WhyChooseSoulIt || model("WhyChooseSoulIt", whyChooseSoulItSchema);   