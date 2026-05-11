import { model, models, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    category: {type:String, required : true},
    categoryType: {type:String, required : true},
  },
  { timestamps: true }
);

export default models.Category || model("Category", categorySchema);