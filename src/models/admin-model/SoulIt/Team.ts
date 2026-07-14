import { model, models, Schema } from "mongoose";

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_public_Id: { type: String, required: true },
    socialMedia: {
      type: [
        {
          socialMediaType: { type: String, required: true },
          socialMediaUrl: { type: String, required: true },
        },
      ],
      default: [],
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export default models.Team || model("Team", teamSchema);
