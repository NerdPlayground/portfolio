import "@/app/ui/styles.scss";
import "@/app/ui/media-queries.scss";

export const metadata = {
    title: "George Mobisa",
    description: "Software Developer | Frontend 🎨 | Backend 🛠 | Full Stack 🤩 - Developing optimized applications to make your life easier",
    metadataBase: process.env.WEBSITE_URL,
    keywords:[
        "web development","freelance web developer",
        "frontend developer","Next.js web development",
        "backend developer","RESTful API development",
    ],
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