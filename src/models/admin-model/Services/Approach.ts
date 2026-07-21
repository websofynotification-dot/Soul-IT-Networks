import { model, models, Schema } from "mongoose";

const approachSchema = new Schema(
  {
    pageName: { type: String, required: true },
    keySteps: { type: [String], default: [], required: true },
  },
  { timestamps: true, versionKey: false },
);
export default models.Approach || model("Approach", approachSchema);
