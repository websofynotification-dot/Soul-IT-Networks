import { model, models, Schema } from "mongoose";

const overviewSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    pageName: { type: String, required: true },
    keySteps: { type: [String], default: [], required: true },
    image: { type: String, required: true },
    image_public_Id: { type: String, required: true },
}, { timestamps: true, versionKey:false });

export default models.Overview || model("Overview", overviewSchema);
