import { model, models, Schema } from "mongoose";

export const projectsSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    project_year: { type: String, default: "" },
    project_category: { type: String, default: "" },
}, { timestamps: true });

export default models.Projects || model("Projects", projectsSchema);