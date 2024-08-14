import { PropsWithChildren } from "react";
import RootLayout from "./RootLayout";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/large-ui/Navbar";
import Footer from "@/Components/large-ui/Footer";

interface GuestLayoutProps {
    children: React.ReactNode;
    head: string;
    description?: string;
}
export default function GuestLayout({
    children,
    head,
    description,
}: GuestLayoutProps) {
    return (
        <RootLayout>
            <Head>
                <title>{head}</title>
                <meta name="description" content={description} />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </RootLayout>
    );
}
