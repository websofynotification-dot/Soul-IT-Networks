import { aboutUsPageProductSchema } from "@/app/api/metaData";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Network Security Solutions | Soul IT Networks"
};

export default function NetworkSecuritySolutionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Script id="about-us-product-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutUsPageProductSchema) }}
            />
            {children}
        </>
    );
}





