import "@/app/ui/styles.scss";
import "@/app/ui/media-queries.scss";

export const metadata = {
    title: "George Mobisa",
    description: "Get to know a little bit more about the man behind the name",
    metadataBase: process.env.WEBSITE_URL,
    keywords:[
        "web development","freelance web developer",
        "frontend developer","Next.js web development",
        "backend developer","RESTful API development",
    ],
    openGraph:{
        url: process.env.WEBSITE_URL,
        siteName: "George Mobisa's Portfolio",
    }
};
  
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="root">
                    {children}
                </div>
            </body>
        </html>
    );
}