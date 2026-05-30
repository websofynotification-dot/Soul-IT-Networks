import { softwareDevelopmentSolutionsMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = softwareDevelopmentSolutionsMetaData;

export default function SoftwareDevelopmentSolutionsLayout({
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





