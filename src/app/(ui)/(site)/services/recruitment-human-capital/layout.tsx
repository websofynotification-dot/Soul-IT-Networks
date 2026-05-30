import { recruitmentMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = recruitmentMetaData;

export default function RecruitmentHumanCapitalSolutionsLayout({
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





