import { model, models, Schema } from "mongoose";

const menubarSchema = new Schema({
    primaryMenu: { type: String, required: true },
    href: { type: String, default: "#" },
    subMenu: { type: Boolean, default: false },
    secondaryMenu: {
        type: [
            {
                label: { type: String, default: "" },
                href: { type: String, default: "#" },
            }
        ], default: []
    }
}, { timestamps: true });

export default models.Menubar || model("Menubar", menubarSchema);