import { customersPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = customersPageMetaData;

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
