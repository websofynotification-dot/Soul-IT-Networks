import { supportPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = supportPageMetaData;

export default function AboutUsLayout({
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
