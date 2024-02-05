

import { tweets } from "@/constants"
import Image from "next/image"

export const LoveNotes = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap  justify-center gap-10 max-w-[1180px]">
                {tweets.map((tweet, index) => (
                    <div className="flex justify-center" key={index}>
                        <Image src={tweet.imgSrc} alt="image" className="w-[260px] h-[158px] flex justify-center" />
                    </div>
                ))}
            </div>
        </div>
    )
}