import { advancedSecurityMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = advancedSecurityMetaData;

export default function AdvancedSecuritySolutionsLayout({
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





