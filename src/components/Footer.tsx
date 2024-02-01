


import Image from "next/image"
import logo from "../../public/logo.png"
import { footerHelper, footerLinks, footerState } from "@/constants"


const Footer = () => {
    return (
        <div className="py-10 bg-[#f6f6f6]">

            <div className="flex justify-center">
                <div className="max-w-[1300px] w-full px-5 py-16 flex flex-col items-center gap-10 lg:flex lg:flex-row lg:justify-between border-b border-slate-400">

                    <div className="w-full  lg:w-auto">
                        <div className="w-[210px] h-[44px]">
                            <Image src={logo} className="w-[210px] h-[44px]" alt="log of website" />
                        </div>
                    </div>

                    <div className="flex flex-col flex-wrap w-auto justify-center items-center gap-10 lg:flex lg:flex-row font-bold">
                        {footerLinks.map((item, index) => (
                            <div key={index}>{item.label}</div>
                        ))}
                    </div>

                    <div>
                        <div className="font-bold text-xl">Made by <span className="text-blue-500">Richard</span> and <span className="text-blue-500">Anurag</span></div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="max-w-[1300px] w-full px-10 flex flex-wrap justify-center gap-14 gap-y-5 my-6 border-b border-slate-400 pb-5">
                    {
                        footerHelper.map((helperItem, index) => (
                            <div key={index}>{helperItem.label}</div>
                        ))
                    }
                </div>
            </div>

            <div className="flex justify-center">
                <div className="max-w-[1300px] px-5 lg:px-32 flex flex-wrap justify-center gap-1  border-b border-slate-400 pb-5">
                    {
                        footerState?.[0].split(' ').map((word, index) => (
                            <div key={index}>{word}</div>
                        ))
                    }
                </div>
            </div>

            <div className="flex  justify-center">
                <div className="max-w-[1300px] pt-5 px-5">
                    © 2024 Most Recommended Books. All rights reserved.
                </div>
            </div>

        </div>
    )
}

export default Footer