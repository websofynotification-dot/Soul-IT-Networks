
export interface topbar {
    _id?: string,
    contactDetails: { contctType: string, contactUrl: string, _id?: string }[],
    socialMedia: { socialMediaType: string, socialMediaUrl: string, _id?: string }[],
    headOfficeLocation:string
    branchOfficeLocation:string
}

export interface topbarProps {
    topbarData: topbar[]
}