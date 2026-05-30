import { partnersPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = partnersPageMetaData;

export default function PartnersLayout({
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
