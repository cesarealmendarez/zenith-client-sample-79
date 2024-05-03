import { socialCTAImages } from "@/lib/constants";

export default function SocialCTA() {
    return (
        <ul className="relative w-full flex flex-row items-center justify-start py-20 -space-x-2 bg-yellow-500 overflow-x-hidden">
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