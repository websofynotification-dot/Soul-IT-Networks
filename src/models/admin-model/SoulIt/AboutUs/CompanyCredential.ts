import { model, models, Schema } from "mongoose";

const companyCredentialSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });


export default models.CompanyCredential || model("CompanyCredential", companyCredentialSchema);