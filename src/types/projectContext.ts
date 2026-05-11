export interface project {
    _id?: string;
    title?: string;
    project_year?: string;
    project_category?: string;
    description?: string;
}

export interface projectProps {
    projectData: project[]
}