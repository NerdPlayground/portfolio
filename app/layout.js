import "@/app/ui/styles.scss";
import "@/app/ui/media-queries.scss";

export const metadata = {
    title: "",
    description: "",
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