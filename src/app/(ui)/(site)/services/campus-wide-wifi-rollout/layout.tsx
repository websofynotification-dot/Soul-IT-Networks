import { campusWifiMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = campusWifiMetaData;

export default function CampusWideWiFiRolloutLayout({
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



