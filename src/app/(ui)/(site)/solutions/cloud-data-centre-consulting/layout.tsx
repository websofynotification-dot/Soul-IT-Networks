import { cloudConsultingMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = cloudConsultingMetaData;

export default function CloudDatacentreConsultingLayout({
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





