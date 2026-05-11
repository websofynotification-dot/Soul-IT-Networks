export interface journey {
    _id?: string;
    title?: string;
    description?: string;
    journey_year?: string;
}

export interface journeyProps {
    journeyData: journey[]
}