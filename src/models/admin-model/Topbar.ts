import { model, models, Schema } from "mongoose";

const topbarSchema = new Schema({
    headOfficeLocation: { type: String, required: true, trim: true },
    branchOfficeLocation: { type: String, required: true, trim: true },
    contactDetails: {
        type: [{
            contctType: { type: String, required: true },
            contactUrl: { type: String, required: true }
        }], default: [], required: true
    },
    socialMedia: {
        type: [{
            socialMediaType: { type: String, required: true },
            socialMediaUrl: { type: String, required: true }
        }], default: [], required: true
    }
}, { timestamps: true });

export default models.Topbar || model("Topbar", topbarSchema);