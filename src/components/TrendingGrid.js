import React from "react";
import { gridItems } from "../data/Data";

const TrendigGrid = () => {
    return (
        <>
            <div className="w-10/12 m-auto">
                <div className="mt-32 grid lg:grid-cols-3 sm:grid-col-2 gap-12">
                    {gridItems.map((val, index) => (
                        <div key={index}>
                            <div className="">
                                <div className="">
                                    <img src={val.trending_img} alt="img" className="rounded-lg w-full h-full"/>
                                </div>
                                <div className="">
                                    <div className="flex gap-3">
                                        <p className="font-bold">{val.purpose}</p>
                                        <span className="text-gray-500">&#x2015; {val.date}</span>
                                    </div>

                                    <h2 className="text-xl font-bold my-3">{val.title}</h2>
                                    <p className="text-gray-500 mb-4 text-lg">{val.description}</p>

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
                        </div>
                    ))}    
                </div>        
            </div>
        </>
    )
}

export default TrendigGrid