export interface service {
    _id?: string;
    title?: string;
    pageName?: string;
    description?: string;
    keySteps?: string[];
    image?: string;
    image_public_Id?: string | null;
}

export interface serviceProps {
    serviceData: service[]
}