import React from "react";
import { gridItems } from "../data/Data";
import { Link } from "react-router-dom";

const News = () => {
    return (
        <>
            <div className="w-10/12 m-auto">
                <div className="mt-32">
                    <div className="flex justify-around mb-12">
                        <h1 className="text-center text-4xl font-bold mt-4 mb-6">Sports</h1>
                        <h1 className="text-center text-4xl font-bold mt-4 mb-6">Business</h1>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {gridItems.map((val, index) => (
                            <div key={index}>
                                <Link to={'singleProduct'}>
                                    <div className="lg:flex gap-8 items-start">
                                        <div className="lg:w-1/3">
                                            <img src={val.trending_img} alt="img" className="rounded-lg w-full h-full"/>
                                        </div>
                                        <div className="lg:w-2/3">
                                            <div className="flex gap-3">
                                                <p className="font-bold">{val.purpose}</p>
                                                <span className="text-gray-500">&#x2015; {val.date}</span>
                                            </div>

                                            <h2 className="text-xl font-bold my-3">{val.title}</h2>
                                            

                                            <div className="flex gap-4">
                                                <div className="h-12 w-12">
                                                    <img src={val.logo} alt="logo" className="rounded-full w-full h-full"/>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold">{val.name}</h4>
                                                    <p className="text-gray-500">{val.designation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default News