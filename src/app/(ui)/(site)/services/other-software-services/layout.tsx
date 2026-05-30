import { otherSoftwareServicesMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = otherSoftwareServicesMetaData;

export default function OtherSoftwareServicesLayout({
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





