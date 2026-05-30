import { businessContinuityMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = businessContinuityMetaData;

export default function BusinessContinuityDRLayout({
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





