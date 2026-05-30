import { governmentTenderMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = governmentTenderMetaData;

export default function GovernmentITTendersLayout({
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





