"use client"

import { navigationBarLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { Bungee } from "next/font/google";

const bungee = Bungee({ subsets: ["latin"], weight: "400" });

export default function NavigationBar() {
    const pathname = usePathname();

    return (
        <nav className={`${bungee.className} max-w-7xl mx-auto flex flex-row items-center justify-start pt-24`}>
            <div className="flex flex-row items-center justify-start">
                <a
                    href="/"
                    target="_self"
                    className="flex flex-row items-center justify-start"
                >
                    <h1 className="text-left text-4xl text-orange-950 font-normal">
                        Joy Thai
                    </h1>
                </a>
            </div>

            <ul className="flex flex-row grow items-center justify-end space-x-6">
                {navigationBarLinks.map((link, idx) => {
                    return (
                        <li key={idx}>
                            {link.type == "bold" ?
                                <a
                                    href={link.href}
                                    target={link.target}
                                    className="flex flex-row items-center jusitfy-center px-6 py-2 bg-orange-950 border-2 border-solid border-orange-950 rounded-full space-x-4"
                                >
                                    <p className="text-center text-lg text-white font-normal">
                                        {link.name}
                                    </p>

                                    {link.icon && <link.icon className="text-white" />}
                                </a>
                                :
                                <>
                                    {link.href == pathname ?
                                        <a
                                            href={link.href}
                                            target={link.target}
                                            className="flex flex-row items-center jusitfy-center px-6 py-2 bg-yellow-500 border-2 border-solid border-yellow-500 rounded-full space-x-4"
                                        >
                                            <p className="text-center text-lg text-orange-950 font-normal">
                                                {link.name}
                                            </p>
                                        </a>
                                        :
                                        <a
                                            href={link.href}
                                            target={link.target}
                                            className="flex flex-row items-center jusitfy-center px-6 py-2 border-2 border-solid border-orange-950 rounded-full space-x-4"
                                        >
                                            <p className="text-center text-lg text-orange-950 font-normal">
                                                {link.name}
                                            </p>
                                        </a>
                                    }
                                </>
                            }
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

