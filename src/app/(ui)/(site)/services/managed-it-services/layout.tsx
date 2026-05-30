import { managedITServicesMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = managedITServicesMetaData;

export default function ManagedITServicesLayout({
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



