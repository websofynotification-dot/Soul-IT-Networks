import { endUserComputingMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = endUserComputingMetaData;

export default function EndUserComputingLayout({
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





