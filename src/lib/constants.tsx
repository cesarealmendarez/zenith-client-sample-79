import { CookingPot, CookingPotIcon } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaYelp } from "react-icons/fa";

export const socials = [
    {
        id: 0,
        href: "#",
        icon: <FaInstagram className="text-right text-white" size={50} />
    },
    {
        id: 1,
        href: "#",
        icon: <FaTiktok className="text-right text-white" size={50} />
    },
    {
        id: 2,
        href: "#",
        icon: <FaFacebook className="text-right text-white" size={50} />
    },
    {
        id: 3,
        href: "#",
        icon: <FaYelp className="text-right text-white" size={50} />
    },
];

export const socialCTAImages = [
    {
        id: 0,
        src: "/social-cta-images/social-cta-image-1.jpeg"
    },
    {
        id: 1,
        src: "/social-cta-images/social-cta-image-2.jpeg"
    },
    {
        id: 2,
        src: "/social-cta-images/social-cta-image-3.jpeg"
    },
    {
        id: 3,
        src: "/social-cta-images/social-cta-image-4.jpeg"
    },
    {
        id: 4,
        src: "/social-cta-images/social-cta-image-5.jpeg"
    },
    {
        id: 5,
        src: "/social-cta-images/social-cta-image-6.jpeg"
    },
];

export const navigationBarLinks = [
    {
        id: 0,
        type: "regular",
        name: "Menu",
        href: "/menu",
        target: "_self",
        icon: null
    },
    {
        id: 1,
        type: "regular",
        name: "Our Story",
        href: "/about",
        target: "_self",
        icon: null
    },
    {
        id: 2,
        type: "regular",
        name: "Reviews",
        href: "/reviews",
        target: "_self",
        icon: null
    },
    {
        id: 3,
        type: "bold",
        name: "Place Order",
        href: "#",
        target: "_blank",
        icon: CookingPotIcon
    },
];