import { model, models, Schema } from "mongoose";

const useCaseSchema = new Schema({
    pageName: { type: String, required: true },
    useCaseStep: { type: [String], default: [], required: true},
}, { timestamps: true });

export default models.UseCase || model("UseCase", useCaseSchema);   
