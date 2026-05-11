export interface card {
    _id?: string;
    title?: string;
    image?: string;
    image_publicId?: string | null;
    description?: string;
    buttonName?: string;
    buttonUrl?: string;
    partner_type?:string;
}

export interface cardProps {
    cardData: card[]
}