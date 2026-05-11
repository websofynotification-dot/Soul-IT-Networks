import { Schema, model, models } from "mongoose";

const heroImageSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: { type: String, required: true },
  public_Id: { type: String, required: true },
},
  { timestamps: true }
)

export default models.HeroImage || model("HeroImage", heroImageSchema);