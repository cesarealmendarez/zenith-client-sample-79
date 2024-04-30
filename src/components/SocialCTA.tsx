import { socialCTAImages, socials } from "@/lib/constants";

import { Bungee, Gochi_Hand, Montserrat } from "next/font/google";

const bungee = Bungee({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["cyrillic"] });
const gochi = Gochi_Hand({ subsets: ["latin"], weight: "400" });

export default function SocialCTA() {
    return (
        <ul className="relative w-full flex flex-row items-center justify-start py-20 -space-x-2 bg-yellow-500">
            {/* <div className="absolute -top-20 left-0 w-full">
                <div className="max-w-5xl mx-auto flex flex-col items-center justify-center py-4 bg-orange-950 rounded-3xl">
                    <h1 className={`${gochi.className} text-center text-7xl text-white font-normal`}>
                        @joythaialhambra
                    </h1>
                </div>
            </div> */}

            {socialCTAImages.map((image, idx) => {
                return (
                    <li key={idx}>
                        <img
                            src={image.src}
                            className={`w-64 h-64 object-cover rounded-3xl border-8 ${((idx + 1) % 2 == 0) ? `border-orange-950 -rotate-12` : `border-white rotate-12`}`}
                        />
                    </li>
                );
            })}
        </ul>
    );
}