export interface job {
    _id?: string;
    title: string;
    subTitle: string;
    category: string;
    type: string;
    experience: string;
    location: string;
    content: string;
    slug: string;
    schemaMarkup: Record<string, unknown>;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
}

export interface jobProps {
    jobData: job[];
}