"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // ✅ get current route
import { getHeader } from "./api-service";

export default function Header() {
    // const { logo, navLinks, cta,button } = global || {};
    // console.log("cta---", button);
    const [data, setData] = useState([]);

    const [activeItem, setActiveItem] = useState("home");
    const pathname = usePathname(); // current path
    

    useEffect(() => {
  
    (async () => {
      const dataNew = await getHeader();
      console.log("dataNew---", dataNew);

      setData(dataNew);
    })();
  }, []);
    return (
        <div>
            <div className="w-full px-4 py-4 navtext">
                <div className="max-w-[92%] lg:max-w-[84%] mx-auto flex items-center justify-between lg:h-28 lg:mt-8">
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-24 lg:w-1/3 ">
                        {data?.navLinks?.map((link, index) => {
                            const href = link.slug === "home" ? "/" : `/${link.slug}`;
                            const isActive = pathname === href; // check if active
                            return (

                                <div className="inline-block relative cursor-pointer group" key={index}>
                                    <Link
                                        href={href}
                                        className="text-gray-800 zoom-sm subpixel-antialiased  titleFont hover:text-gray-900 px-1 font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                    {isActive ? (
                                        <div className="h-1 bg-[#a9c1d9] rounded-md mt-0.5 w-full"></div>
                                    ) : (
                                        <div className="h-1 bg-[#a9c1d9] rounded-md mt-0.5 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-transform duration-300"></div>
                                    )}
                                </div>

                            )
                        })}
                    </nav>

                    {/* Logo */}
                    <div className="lg:flex lg:justify-center items-center lg:w-1/3  hidden relative cursor-pointer">
                        {/* <img src={getStrapiMedia(data.logo) || "logo.svg"} alt="logo" className="lg:w-[27%] w-16 h-auto" /> */}
                        {data?.logo?.url && (""
                            // <img src={getStrapiMedia(logo) || "logo.svg"} alt="logo" className="lg:w-[27%] w-16 h-auto" />
                        )}
                    </div>

                    {/* Right Side Buttons */}
                    <div className="flex items-center justify-end lg:w-1/3 space-x-4">
                        {/* Desktop Download Button */}
                        <div className="hidden lg:block">
                            <button
                                className="relative overflow-hidden rounded-full px-8 py-2.5 bg-[#2a324a] text-amber-50 font-medium zoom-md mac-zoom-lg titleFont cursor-pointer
                                    before:absolute before:top-1/2 before:left-1/2
                                    before:w-0 before:h-0 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2
                                    before:transition-all before:duration-700 before:bg-[radial-gradient(circle,#ff4e50,#8e2de2)]
                                    hover:before:w-[300%] hover:before:h-[300%] "
                            >
                                <span className="relative z-10">
                                    <a href="#" target="_blank">

                                        {"Download App"}
                                    </a>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="lg:hidden mt-4 p-2 space-y-4 origin-top"
                        >
                            <nav className="flex items-center justify-center gap-6 relative mt-7">

                                {data?.navLinks?.map((link, index) => {
                                    const href = link.slug === "home" ? "/" : `/${link.slug}`;
                                    const isActive = pathname === href; // check if active
                                    return (

                                        <div className="inline-block relative cursor-pointer group" key={index}>
                                            <Link
                                                href={href}
                                                className="text-gray-800 zoom-sm subpixel-antialiased  titleFont hover:text-gray-900 px-1 font-medium"
                                            >
                                                {link.label}
                                            </Link>
                                            {isActive ? (
                                                <div className="h-1 bg-[#a9c1d9] rounded-md mt-0.5 w-full"></div>
                                            ) : (
                                                <div className="h-1 bg-[#a9c1d9] rounded-md mt-0.5 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-transform duration-300"></div>
                                            )}
                                        </div>

                                    )
                                })}
                              

               
                            </nav>


                        </motion.div>
                    }
                </AnimatePresence>
            </div>

        </div>
    );
}
