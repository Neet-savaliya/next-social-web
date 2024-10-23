"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import News from "./News";
export default function RightSidebar() {
    const [searchTerm, SetSearchTerm] = useState(null);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchTerm) return;
        router.push(`/search/${searchTerm}`);
    };

    return (
      <>        <div className="">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="bg-gray-100 border border-gray-200  focus:text-black rounded-2xl outline-none text-center text-sm w-full px-4 py-2 "
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => SetSearchTerm(e.target.value)}
                />
            </form>
        </div>
        <News />
        </>
    );
}
