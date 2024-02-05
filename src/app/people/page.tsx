import { LeftBar } from "@/components/People/Leftbar/page";
import { SocialLink } from "@/components/People/SocialLink/page";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoLinkSharp } from "react-icons/io5";



const People = () => {
    return (
        <div>
            <div className="flex justify-center mt-20">
                <div className="text-[40px] text-[#1c1c1c] font-bold">People</div>
            </div>
            <div className="grid justify-center text-[18px] text-[#4d4d4d] mb-20">
                <div className="flex justify-center">Here you'll find all our experts.</div>
                <div className="flex justify-center">Feel free to browse around!</div>
            </div>
            <div className="flex justify-center mb-36">
                <div className="flex justify-between max-w-[1280px] w-full">
                    <div className="flex justify-center gap-4">
                        <span>{"Home > "}</span>
                        <span className="font-bold">People</span>
                    </div>
                    <div>
                        <div><SocialLink /></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid max-w-[1280px] w-full justify-start">
                    <div className=""><LeftBar /></div>
                </div>
            </div>
            <div className="grid justify-center my-36">
                <div className="font-bold flex justify-center my-5">Share this page</div>
                <div className="flex justify-center gap-8">
                    <FaFacebookF className="text-[#fc63ff] scale-125" />
                    <FaTwitter className="text-[#fc63ff]  scale-125" />
                    <HiMail className="text-[#fc63ff] scale-150" />
                    <IoLinkSharp className="text-[#fc63ff] scale-150" />
                </div>
            </div>
        </div>
    )
}

export default People;