import { softwareDevelopmentMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = softwareDevelopmentMetaData;

export default function SoftwareDevelopmentLayout({
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



