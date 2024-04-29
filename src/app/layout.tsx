import "./globals.css";

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
                {children}
            </body>
        </html>
    );
}
