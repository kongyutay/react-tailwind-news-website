import React from "react";

const NewsLetter = () => {
    return (
        <>
            <div className="bg-gray-200 mt-32 py-16">
                <div className="w-10/12 m-auto">
                    <h1 className="text-4xl font-bold mt-4 mb-6">Most Popular Posts</h1>

                    <div className="md:flex">
                        <div className="w-9/12 mb-4 w-fullscreen768">
                            <input type="text" placeholder="Enter your email here..." className="border focus:outline-none rounded-xl px-8 py-3 w-full" />
                        </div>

                        <div className="w-1/4 w-fullscreen768">
                            <button className="border px-8 py-3 w-full text-white bg-ye3llow-600 rounded-full text-base hover:bg-white hover:shadow-lg hover:text-black font-semibold">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default NewsLetter