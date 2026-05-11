import { model, models, Schema } from "mongoose";

const rmlInfoCtaCardSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    redirectUrl: { type: String, required: true },
}, { timestamps: true });

export default models.RmlInfoCtaCard || model("RmlInfoCtaCard", rmlInfoCtaCardSchema);