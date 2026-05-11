import { aboutUsPageMetaData, aboutUsPageProductSchema } from "@/app/api/metaData";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:"Post Sales Support"
};

export default function AboutUsLayout({
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
