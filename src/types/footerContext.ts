interface ILinkItem {
    label: string;
    path: string;
}

interface ICompanyInfo {
    logo: string;
    logo_publicId: string;
    description: string;
    path: string;
    altTag: string;
}

interface IFooterInfo {
    name: string;
    website: string;
    path: string;
}

export interface footer {
    _id?: string;
    companyInfo: ICompanyInfo;
    tag: ILinkItem[];
    quickLinks: ILinkItem[];
    services: ILinkItem[];
    otherLinks: ILinkItem[];
    copyrightText: IFooterInfo;
    designedBy: IFooterInfo;
}

export interface footerProps {
    footerData: footer[]
}