import { ImageResponse } from 'next/og';

export const contentType = 'image/png'
export const size={ width: 1200, height: 630 };
export const alt="Software Developer | Frontend 🎨 | Backend 🛠 | Fullstack 🤩";

export default async function Image(){
    return new ImageResponse(
        (<div style={{
            background: "#F5F5F5",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${process.env.WEBSITE_URL}/opengraph/developer-activity-amico.svg)`,
        }}>
        </div>),
        {...size}
    );
}
// -AqE1FrAuGNGJap5-8ZZx
// vh8WYeeF5_zN4HdZE-ZKg
// <a href="https://storyset.com/work">Work illustrations by Storyset</a>