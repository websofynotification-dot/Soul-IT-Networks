import { outsourcingPlacementMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = outsourcingPlacementMetaData;

export default function OutsourcingPlacementServicesLayout({
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





