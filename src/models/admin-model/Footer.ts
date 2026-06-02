import { model, models, Schema } from "mongoose";


const footerSchema = new Schema(
    {
        companyInfo: {
            logo: {
                type: String,
                required: true,
                trim: true,
            },
            logo_publicId: { type: String, required: true },
            description: {
                type: String,
                required: true,
                trim: true,
            },

            path: {
                type: String,
                required: true,
                trim: true,
            },
            altTag: {
                type: String,
                required: true,
                trim: true,
            },
        },

        tag: [
            {
                label: {
                    type: String,
                    required: true,
                    trim: true,
                },

                path: {
                    type: String,
                    required: true,
                    trim: true,
                },
            },
        ],

        quickLinks: [
            {
                label: {
                    type: String,
                    required: true,
                    trim: true,
                },

                path: {
                    type: String,
                    required: true,
                    trim: true,
                },
            },
        ],

        services: [
            {
                label: {
                    type: String,
                    required: true,
                    trim: true,
                },

                path: {
                    type: String,
                    required: true,
                    trim: true,
                },
            },
        ],

        // contactInfo: {
        //     address: [
        //         {
        //             label: {
        //                 type: String,
        //                 required: true,
        //                 trim: true,
        //             },

        //             path: {
        //                 type: String,
        //                 required: true,
        //                 trim: true,
        //             },
        //         },
        //     ],

        //     phone: [
        //         {
        //             label: {
        //                 type: String,
        //                 required: true,
        //                 trim: true,
        //             },

        //             path: {
        //                 type: String,
        //                 required: true,
        //                 trim: true,
        //             },
        //         },
        //     ],

        //     emails: [
        //         {
        //             label: {
        //                 type: String,
        //                 required: true,
        //                 trim: true,
        //             },

        //             path: {
        //                 type: String,
        //                 required: true,
        //                 trim: true,
        //             },
        //         },
        //     ],
        // },

        // socialLinks: [
        //     {
        //         platform: {
        //             type: String,
        //             required: true,
        //             trim: true,
        //         },

        //         url: {
        //             type: String,
        //             required: true,
        //             trim: true,
        //         },
        //     },
        // ],

        otherLinks: [
            {
                label: {
                    type: String,
                    required: true,
                    trim: true,
                },

                path: {
                    type: String,
                    required: true,
                    trim: true,
                },
            },
        ],

        copyrightText: {
            name: {
                type: String,
                required: true,
                trim: true,
            },

            website: {
                type: String,
                required: true,
                trim: true,
            },
            path: {
                type: String,
                required: true,
                trim: true,
            },
        },

        designedBy: {
            name: {
                type: String,
                required: true,
                trim: true,
            },
            website: {
                type: String,
                required: true,
                trim: true,
            },
            path: {
                type: String,
                required: true,
                trim: true,
            },
        },
    },
    {
        timestamps: true,
    }
);


export default models.Footer || model("Footer", footerSchema);