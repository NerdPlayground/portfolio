import { ImageResponse } from 'next/og';
import { PortfolioPreview } from './lib/components';

export const contentType = 'image/png'
export const size={ width: 1200, height: 630 };
export const alt="Software Developer | Frontend 🎨 | Backend 🛠 | Fullstack 🤩";

export default async function Image(){
    return new ImageResponse(
        (<div style={{
            position: "relative",
            objectFit: "cover",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F5F5F5",
        }}>
            <PortfolioPreview/>
        </div>),
        {...size}
    );
}