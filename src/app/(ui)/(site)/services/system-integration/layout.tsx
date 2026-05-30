import { systemIntegrationMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = systemIntegrationMetaData;

export default function SystemIntegrationLayout({
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



