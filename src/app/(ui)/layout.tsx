import NextTopLoader from "nextjs-toploader";
import Aoscompo from "@/lib/aos";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { DataProvider } from "../context/DataContext";
import { Header } from "./components/Layout/Header";
import { Topbars } from "./components/Layout/TopbarUi";


export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <DataProvider>
            <NextTopLoader color="#ffffff" showSpinner={false} />
            <Aoscompo />
            <Topbars />
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
        </DataProvider>
    );
}

