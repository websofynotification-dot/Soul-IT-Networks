export interface foundation {
    _id?: string;
    title?: string;
    description?: string;
    foundationStep?: string[];
}

export interface foundationProps {
    foundationData: foundation[]
}