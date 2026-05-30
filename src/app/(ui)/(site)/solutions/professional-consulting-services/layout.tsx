import { consultingServicesMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = consultingServicesMetaData;

export default function ProfessionalConsultingServicesLayout({
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





