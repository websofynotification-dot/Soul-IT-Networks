import { enterpriseMessagingMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = enterpriseMessagingMetaData;

export default function EnterpriseMessagingCollaborationLayout({
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





