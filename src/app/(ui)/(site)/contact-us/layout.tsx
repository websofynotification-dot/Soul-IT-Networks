import { contactPageSchema, contactPageMetaData } from "@/app/api/metaData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = contactPageMetaData;

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Script id="contactUs-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
            />
            {children}
        </>
    );
}
