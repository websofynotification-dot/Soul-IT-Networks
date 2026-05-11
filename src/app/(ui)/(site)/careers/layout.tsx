import { careersPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = careersPageMetaData;

export default function ContactLayout({
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
