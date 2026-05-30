import { campusNetworkingSolutionsMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = campusNetworkingSolutionsMetaData;

export default function CampusWideNetworkingSolutionsLayout({
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





