import { websiteDevelopmentSolutionsMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = websiteDevelopmentSolutionsMetaData;

export default function WebsiteDevelopmentSolutionsLayout({
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





