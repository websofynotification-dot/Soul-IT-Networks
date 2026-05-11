import { model, models, Schema } from "mongoose";

const supportAddOnSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
}, { timestamps: true });

export default models.SupportAddOn || model("SupportAddOn", supportAddOnSchema);