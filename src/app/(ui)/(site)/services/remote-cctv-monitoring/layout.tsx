import { remoteCctvMetaData } from "@/app/api/metaData";
import { Metadata } from "next";

export const metadata: Metadata = remoteCctvMetaData;

export default function RemoteCCTVMonitoringLayout({
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





