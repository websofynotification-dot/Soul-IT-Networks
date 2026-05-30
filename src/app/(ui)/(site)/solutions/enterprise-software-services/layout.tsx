import { enterpriseSoftwareMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = enterpriseSoftwareMetaData;

export default function EnterpriseSoftwareServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}





