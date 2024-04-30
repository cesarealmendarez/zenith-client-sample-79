import NavigationBar from "@/components/NavigationBar";
import "./globals.css";
import Footer from "@/components/Footer";
import SocialCTA from "@/components/SocialCTA";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="google" content="notranslate" />
                <meta name="google" content="nositelinkssearchbox" />
            </head>

            <body>
                <NavigationBar />
                {children}
                <SocialCTA />
                <Footer />
            </body>
        </html>
    );
}
