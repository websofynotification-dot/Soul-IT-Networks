import {projectsPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = projectsPageMetaData;

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
