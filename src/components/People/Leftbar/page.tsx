


"use client"
import { peopleCategories } from "@/constants"
import { useState } from "react"


export const LeftBar = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    console.log(activeIndex)
    return (
        <div>
            <div className="w-[283px] p-4 border border-slate-200 rounded-lg ">
                <div className="font-bold">Categories</div>
                <div className="grid justify-start mt-4 ">
                    {
                        peopleCategories.map((item, index) => (
                            <div key={index}
                                onClick={() => {
                                    activeIndex === item.index ? setActiveIndex(null) : setActiveIndex(item.index)
                                }}
                                className={`${activeIndex === item.index ? "text-[#4455b4] ml-4" : ""}`}
                            >{item.cat}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
