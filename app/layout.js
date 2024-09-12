import "@/app/ui/styles.scss";
import "@/app/ui/media-queries.scss";

export const metadata = {
    title: "George Mobisa",
    description: "Get to know a little bit more about the man behind the name",
    keywords:[
        "web development","freelance web developer",
        "frontend developer","Next.js web development",
        "backend developer","RESTful API development",
    ]
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