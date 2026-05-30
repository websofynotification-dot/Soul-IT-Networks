import { surveillanceMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = surveillanceMetaData;

export default function CCTVSurveillanceSolutionsLayout({
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





