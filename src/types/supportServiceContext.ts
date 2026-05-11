export interface supportService {
    _id?: string;
    title?: string;
    description?: string;
    supportStep?: string[];
}

export interface supportServiceProps {
    supportServiceData: supportService[]
}