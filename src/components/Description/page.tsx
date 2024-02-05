



const Description = () => {
    return (
        <div className="flex justify-center">
            <div className="mx-auto grid justify-center max-w-[580px] text-[14px] gap-3">
                <div className="text-[30px] font-[700] flex justify-center">About our little book site...</div>
                <div className="flex justify-center ">
                    <div className="max-w-[400px] flex justify-center text-[#1c1c1c] text-[16px]">Our story is simple: we want to become the best destination for book recommendations in the world.</div>
                </div>
                <div className="mt-4">
                    To achieve this, we add every book resource into one place and divided our site into 3 sections; <span className="font-bold">experts, lists, and series.</span>
                </div>
                <div>
                    Experts will show you the books some of the most influential people in the world have mentioned, or are reading.
                </div>
                <div>
                    Lists will show you the best books (new or old) in a category.
                </div>
                <div>
                    Series will show you every book published in a series.
                </div>
                <div>
                    {"We've been doing this for years and we still spend all our time making improvements, adding more book lists, and finding novel ways to enhance people's love for books."}
                </div>
                <div className="font-bold underline underline-offset-1 mt-10">
                    {"Oh, and we're 100% free!"}
                </div>
                <div>
                    {"People can donate to us or buy via our Amazon referral links as many times as they want (it's a sign we're being helpful to them) but they can visit the entire site without spending a cent :)"}
                </div>
            </div>
        </div>
    )
}

export default Description;