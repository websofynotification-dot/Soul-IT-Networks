import { campusWifiSolutionsMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = campusWifiSolutionsMetaData;

export default function CampusWideWiFiSolutionsLayout({
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





