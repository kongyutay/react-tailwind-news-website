import React, { useState } from "react";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { navbar } from "../data/Data"
import { Link } from "react-router-dom";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [dropDownMenuOpen, setDropDownMenuOpen] = useState(false);
    const navbarOpen = () => {
        setToggle(!toggle);
    }
    const toggleDropdown = (index) => {
        setDropDownMenuOpen(dropDownMenuOpen === index ? null : index);
    }

    return (
        <>
            <div className="header border-b py-6">
                <div className="w-10/12 m-auto">
                    <div className="sm:flex items-center justify-between">
                        <div className="relative">
                            <input type="text" placeholder="search..." className="border w-full px-8 rounded-3xl py-1 focus:outline-none"/>
                            <span className="absolute top-1/2 left-3 -translate-y-1/2">
                                <MdOutlineSearch className="text-gray-400" />
                            </span>
                        </div>

                        <div className="uppercase text-2xl font-semibold">
                            <Link to={"/"}>Megadesign</Link>
                        </div>

                        <div className="flex gap-4">
                            <BiLogoTwitter />
                            <BiLogoFacebook />
                            <BiLogoLinkedin />
                        </div>

                        <div className="text-4xl hamburger" onClick={navbarOpen}>
                            <RxHamburgerMenu />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`fixed w-1/5 right-0 top-0 h-full z-10 transform ${toggle ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out shadow-lg bg-white w-fullscreen768`}>
                <div className="bg-white">
                    <div className="absolute right-0 p-4" onClick={navbarOpen}>
                        <FaTimes />
                    </div>

                    <ul className="p-4 mt-2">
                        {navbar.map((link, i) => (
                            <li className="my-2 hover:text-red-500" key={i}>{link.cat ? (
                                <>
                                    <div className="hover:text-red-500 flex items-center gap-2" onClick={() => toggleDropdown(i)}>
                                        <Link>{link.nav}</Link>
                                        <button>
                                            {dropDownMenuOpen === i ? (<IoChevronUp />) : (<IoChevronDown />)}
                                        </button>
                                    </div>

                                    <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${dropDownMenuOpen === i ? "max-h-40" : "max-h-0"}`}>
                                        <ul>
                                            {link.cat.map((sublink) => (
                                                <li key={sublink.id} className="my-1">
                                                    <Link>{sublink.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <Link>{link.nav}</Link>
                            )}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header