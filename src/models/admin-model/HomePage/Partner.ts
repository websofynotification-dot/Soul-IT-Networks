import { model, models, Schema } from "mongoose";

const partnerSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    partner_type: { type: String, required: true },
    image_publicId: { type: String, required: true }
}, { timestamps: true });

export default models.Partner || model("Partner", partnerSchema);
