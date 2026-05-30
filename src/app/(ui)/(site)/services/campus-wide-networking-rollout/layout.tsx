import { campusNetworkingMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = campusNetworkingMetaData;

export default function CampusWideNetworkingRolloutLayout({
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



