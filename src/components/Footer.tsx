import { socials } from "@/lib/constants";

import { Bungee, Montserrat } from "next/font/google";

const bungee = Bungee({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function Footer() {
    return (
        <footer className="w-full bg-orange-950 py-12">
            <div className="max-w-7xl mx-auto flex flex-col space-y-12">
                <div id="footer-socials" className="w-full grid grid-cols-2">
                    <div className="col-span-1 flex flex-row items-center justify-start">
                        <h1 className={`${bungee.className} text-left text-5xl text-white font-normal`}>
                            Follow Us:
                        </h1>
                    </div>

                    <div className="col-span-1 flex flex-row items-center justify-end">
                        <ul className="w-full flex flex-row items-center justify-end space-x-8">
                            {socials.map((social, idx) => {
                                return (
                                    <li key={idx}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            className=""
                                        >
                                            {social.icon}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div id="footer-links" className="w-full grid grid-cols-9 border-y-2 border-solid border-white py-8">
                    <div className="col-span-3 flex flex-col items-start justify-start space-y-4">
                        <h1 className={`${bungee.className} text-left text-xl text-white`}>
                            Joy Thai
                        </h1>

                        <div className={`${montserrat.className} w-full flex flex-col items-start justify-start space-y-2`}>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-left text-base text-white font-normal">
                                    1900 W Valley Blvd, Alhambra, CA 91803
                                </p>
                            </a>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-left text-base text-white font-normal">
                                    +1 (323) 736-1188
                                </p>
                            </a>
                        </div>
                    </div>

                    <div className="col-span-2 flex flex-col items-end justify-start space-y-4">
                        <h1 className={`${bungee.className} text-right text-xl text-white`}>
                            Site Map
                        </h1>

                        <div className={`${montserrat.className} w-full flex flex-col items-end justify-start space-y-2`}>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-right text-base text-white font-normal">
                                    Homepage
                                </p>
                            </a>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-right text-base text-white font-normal">
                                    About Us
                                </p>
                            </a>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-right text-base text-white font-normal">
                                    What's On the Menu
                                </p>
                            </a>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-right text-base text-white font-normal">
                                    Wonderful Reviews
                                </p>
                            </a>
                        </div>
                    </div>

                    <div className="col-span-2 flex flex-col items-end justify-start space-y-4">
                        <h1 className={`${bungee.className} text-right text-xl text-white`}>
                            Helpful Links
                        </h1>

                        <div className={`${montserrat.className} w-full flex flex-col items-end justify-start space-y-2`}>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-right text-base text-white font-normal">
                                    Homepage
                                </p>
                            </a>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-right text-base text-white font-normal">
                                    About Us
                                </p>
                            </a>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-right text-base text-white font-normal">
                                    What's On the Menu
                                </p>
                            </a>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-right text-base text-white font-normal">
                                    Wonderful Reviews
                                </p>
                            </a>
                        </div>
                    </div>

                    <div className="col-span-2 flex flex-col items-end justify-start space-y-4">
                        <h1 className={`${bungee.className} text-right text-xl text-white`}>
                            Our Socials
                        </h1>

                        <div className={`${montserrat.className} w-full flex flex-col items-end justify-start space-y-2`}>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-right text-base text-white font-normal">
                                    Homepage
                                </p>
                            </a>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-right text-base text-white font-normal">
                                    About Us
                                </p>
                            </a>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-right text-base text-white font-normal">
                                    What's On the Menu
                                </p>
                            </a>
                            <a
                                href="#"
                                target="#"
                                className=""
                            >
                                <p className="text-right text-base text-white font-normal">
                                    Wonderful Reviews
                                </p>
                            </a>
                        </div>
                    </div>
                </div>


                <div id="footer-copyright" className={`${montserrat.className} w-full grid grid-cols-2`}>
                    <div className="col-span-1 flex flex-row items-center justify-start">
                        <p className="text-left text-base text-white font-normal">
                            All Rights Reserved
                        </p>
                    </div>

                    <div className="col-span-1 flex flex-row items-center justify-end">
                        <p className="text-right text-base text-white font-normal">
                            Joy Thai 2024&nbsp;&copy;
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}