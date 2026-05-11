import { aboutUsPageProductSchema } from "@/app/api/metaData";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Messaging & Collaboration | Soul IT Networks"
};

export default function EnterpriseMessagingCollaborationLayout({
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





