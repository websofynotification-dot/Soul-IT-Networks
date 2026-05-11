import { Schema, model, models } from "mongoose";

const jobOpeningSchema = new Schema({
  title: { type: String, required: true, trim: true },
  subTitle: { type: String, required: true, trim: true },
  category: { type: String, required: true, index: true },
  type: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true, },
  schemaMarkup: { type: Schema.Types.Mixed, default: {}, required: true },
  metaTitle: { type: String, required: true },
  metaDescription: { type: String, required: true },
  metaKeywords: { type: [String], default: [], required: true },
},
  { timestamps: true }
)

export default models.JobOpening || model("JobOpening", jobOpeningSchema);
