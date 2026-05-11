export interface overview {
    _id?: string;
    title: string;
    description: string;
    keySteps: string[];
    image: string;
    image_public_Id: string | null ;
}


export interface overviewProps {
    overviewData: overview[]
}