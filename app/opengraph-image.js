import { ImageResponse } from 'next/og'

export const contentType = 'image/png'
export const size={ width: 500, height: 250 };
export const alt="Software Developer | Frontend 🎨 | Backend 🛠 | Full Stack 🤩";

export default async function Image(){
    return new ImageResponse(
        <Image
            alt={alt} fill={true}
            src="/opengraph/developer-activity-amico.svg"
        />,
        {...size}
    );
}