import { networkSecuritySolutionsMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = networkSecuritySolutionsMetaData;

export default function NetworkSecuritySolutionsLayout({
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





