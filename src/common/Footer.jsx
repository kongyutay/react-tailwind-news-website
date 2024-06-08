import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="my-32 text-center">
                <div className="flex justify-center gap-4">
                    <div className="border p-4 rounded-2xl bg-gray-300 hover:scale-110 transition-all hover:bg-yellow-600 hover:text-white hover:shadow-2xl">
                        <FaFacebook />
                    </div>
                    <div className="border p-4 rounded-2xl bg-gray-300 hover:scale-110 transition-all hover:bg-yellow-600 hover:text-white hover:shadow-2xl">
                        <FaInstagram />
                    </div>
                    <div className="border p-4 rounded-2xl bg-gray-300 hover:scale-110 transition-all hover:bg-yellow-600 hover:text-white hover:shadow-2xl">
                        <FaLinkedin />
                    </div>
                    <div className="border p-4 rounded-2xl bg-gray-300 hover:scale-110 transition-all hover:bg-yellow-600 hover:text-white hover:shadow-2xl">
                        <FaTwitter />
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-xl">
                        Copyright &copy; 2024 All rights reserved. Made By{" "} 
                        <Link className="font-bold text-green-950 hover:text-yellow-600">John Doe</Link>
                    
                        <div className="mt-4">
                            <Link className="hover:text-yellow-600">Terms & Conditions</Link>
                            {"/"}
                            <Link className="hover:text-yellow-600">Privacy & Policy</Link>
                        </div>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer