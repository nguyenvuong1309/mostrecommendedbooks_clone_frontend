import { brands } from "@/constants";
import Image from "next/image";



const Brands = () => {
    return (
        <div className="mx-auto grid justify-center">
            <div className="mx-auto flex flex-wrap gap-5 justify-center ">
                {
                    brands.map((band, index) => (
                        <div key={index} className="w-fit">
                            <Image src={band.imgSrc} alt="image " />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Brands;