import { model, models, Schema } from "mongoose";

const featureJobSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

export default models.FeatureJob || model("FeatureJob", featureJobSchema);