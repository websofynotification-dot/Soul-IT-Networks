import { websiteDevelopmentMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = websiteDevelopmentMetaData;

export default function WebsiteDevelopmentLayout({
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





