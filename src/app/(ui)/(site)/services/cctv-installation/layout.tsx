import { cctvInstallationMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = cctvInstallationMetaData;

export default function CCTVInstallationLayout({
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





