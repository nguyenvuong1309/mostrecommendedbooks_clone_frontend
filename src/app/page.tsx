import Image from "next/image";
import welcomebannerformobile from "../../public/welcomebannermobile.webp"
import welcomebannerleft from "../../public/welcomebannerleft@1x.webp"
import welcomebannerright from "../../public/welcomebannerright@1x.webp"
import Brands from "@/components/BrandList/Brands";
import Donate from "@/components/Donate/page";
import Description from "@/components/Description/page";
import { LoveNotes } from "@/components/LoveNotes/LoveNotes";
import PopularExpert from "@/components/PopularExprerts/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-5">

      <div className="flex justify-center">
        <Image src={welcomebannerformobile} alt="welcome banner for mobile" className="md:hidden" />
      </div>

      <div className="flex justify-center">
        {/* <div className="flex flex-wrap justify-center font-bold text-[30px] px-14 gap-2 max-w-2xl md:text-[50px] md:max-w-[913px]"> */}
        <div className="flex flex-wrap justify-center gap-x-2 text-gray-900 font-[BonaNova] text-[30px] gap-y-0 font-bold  max-w-[490px] md:text-[50px] md:max-w-[760px]">
          {
            "Discover books recommended by the world's most influential people."
              .split(' ').map((word, index) => (
                <div key={index} className="h-min">{word}</div>
              ))
          }
        </div>
      </div>

      <div className="grid justify-center pt-10">
        <div className="flex flex-wrap justify-center font-bold text-[20px] gap-1 text-[#4d4d4d]">
          {
            "600+ experts. 1000+ lists. 2000+ series."
              .split(' ').map((word, index) => (
                <div key={index}>{word}</div>
              ))
          }
        </div>
        <div className="flex flex-wrap justify-center font-bold text-[20px] gap-1 text-[#4d4d4d]">
          {
            "100% verified recommendations (with more added every month!)"
              .split(' ').map((word, index) => (
                <div key={index}>{word}</div>
              ))
          }
        </div>
      </div>


      <div className="grid justify-center pt-7">
        <div className="flex justify-center">
          <Donate />
        </div>
        <div className="text-[12px]">(100% of the proceeds will go towards caffeinating the team)</div>
      </div>

      <div className="hidden md:flex md:justify-around -mt-7 lg:-mt-28 xl:-mt-40">
        <Image src={welcomebannerleft} alt="welcome banner left" className="w-[160px] h-[130px] lg:w-[240px] lg:h-[200px] xl:w-[330px] xl:h-[266px]" />
        <div />
        <div />
        <div />
        <Image src={welcomebannerright} alt="welcome banner right" className="w-[160px] h-[130px] lg:w-[240px] lg:h-[200px] xl:w-[330px] xl:h-[266px]" />
      </div>


      <div className="flex justify-center uppercase text-slate-300 mt-10">
        <div>feature in</div>
      </div>
      <Brands />


      <div className="grid items-center justify-center bg-slate-50 mt-20 min-h-[500px]">
        <div className="max-w-[300px] h-min text-[35px] font-[700] flex flex-wrap gap-y-0 justify-center gap-x-2  font-bona font-serif">
          {
            "Some of our popular experts".split(' ').map((word, index) => (
              <div key={index} className="h-[40px] ">{word}</div>
            ))
          }
        </div>

        <div>
          <PopularExpert />
        </div>

        <Link className="flex justify-center text-[#4455b4] text-[18px] hover:gap-4 hover:underline hover:underline-offset-4" href="/people">
          View All
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5625 5.25L19.3125 12L12.5625 18.75" stroke="#4455B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.375 12H4.6875" stroke="#4455B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </Link>
      </div>


      <div className="flex justify-center my-10 text-[30px] font-bold">
        <div className="flex justify-center items-center gap-5">
          <div className="text-[40px]  origin-center rotate-[-7deg]">💌</div>
          <div>
            Love notes
          </div>
        </div>
      </div>

      <LoveNotes />

      <div className="mt-28" />

      <Description />

      <div className="flex justify-center mt-10 mb-28">
        <Donate />
      </div>
    </div>
  );
}
