import { models, model, Schema } from "mongoose";

const whoWeAreSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    image: { type: String, required: true },
    image_publicId: { type: String, required: true }
}, { timestamps: true });

export default models.WhoWeAre || model("WhoWeAre", whoWeAreSchema);