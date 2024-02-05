

import Image from "next/image"
import logo from "../../public/logo.png"
import { FaBars } from "react-icons/fa";
import { headherLinks } from "@/constants/index"
import { Input } from "@/components/ui/input"
import { FaSearch } from 'react-icons/fa'
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-center">
            <div className="flex justify-between w-full m-4 border-b border-slate-200 pb-10 min-[1350px]:max-w-[1300px]">
                <Link href="/" className="w-[210px] h-[44px]">
                    <Image src={logo} className="w-[210px] h-[44px]" alt="log of website" />
                </Link>
                <div className="hidden lg:flex lg:justify-between lg:items-center gap-10 font-bold">
                    {
                        headherLinks.map((item, index) => (
                            <div key={index}>{item.label}</div>
                        ))
                    }
                </div>
                <div className="w-10 flex justify-center items-center lg:hidden">
                    <FaBars className="w-full" />
                </div>
                <div className="hidden lg:flex">
                    <div className="w-fit flex justify-center items-center border border-slate-800 p-2 rounded-2xl bg-slate-100 gap-4">
                        <FaSearch />
                        <input type="string" placeholder="Search books or experts" className=" outline-none bg-transparent" />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Header