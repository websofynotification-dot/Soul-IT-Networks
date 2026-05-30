import { cloudDatacenterMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = cloudDatacenterMetaData;

export default function CloudDatacentreSolutionsLayout({
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



