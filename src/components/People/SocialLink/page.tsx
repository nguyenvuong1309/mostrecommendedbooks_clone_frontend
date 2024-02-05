

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoLinkSharp } from "react-icons/io5";


export const SocialLink = () => {
    return (
        <div>
            <div className="flex gap-8">
                <FaFacebookF className="hover:text-[#fc63ff] scale-125" />
                <FaTwitter className="hover:text-[#fc63ff]  scale-125" />
                <HiMail className="hover:text-[#fc63ff] scale-150" />
                <IoLinkSharp className="hover:text-[#fc63ff] scale-150" />
            </div>
        </div>
    )
}