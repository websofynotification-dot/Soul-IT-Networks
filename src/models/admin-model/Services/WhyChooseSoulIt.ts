import { model, models, Schema } from "mongoose";

const whyChooseSoulItSchema = new Schema({
    pageName: { type: String, required: true },
    keySteps: { type: [String], default:[], required: true },
}, { timestamps: true, versionKey:false });

export default models.WhyChooseSoulIt || model("WhyChooseSoulIt", whyChooseSoulItSchema);   