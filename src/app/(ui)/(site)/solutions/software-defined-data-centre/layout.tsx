import { sddcMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = sddcMetaData;

export default function SoftwareDefinedDatacentreLayout({
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





