import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
    const author = "Ansley Cheng";
    const credit = "Illustration by Kyra Andrews";
    const title = "vision check: a sonnet";
    const date = "December 06, 2025";

    return (
        <div>
            <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
                <div className="mt-[100px] w-full md:mt-0">
                    <Image
                        className="w-full h-auto object-contain md:object-contain my-3 md:max-h-[70vh]"
                        src="/issues/25f/vision-check.webp"
                        width={600}
                        height={600}
                        alt="article image"
                    />
                    <p className="text-[9pt] font-sans tracking-wide text-center opacity-70 mb-10">
                        {credit}
                    </p>
                    <h1 className="font-playfair font-medium text-[30pt] md:text-[40pt] my-5 md:my-10">
                        {title}
                    </h1>
                    <h2 className="font-cormorant font-semibold text-xl mb-1 uppercase">
                        BY {author}
                    </h2>
                    <h3 className="font-normal text-md mb-8 text-neutral-500">{date}</h3>
                    <div className="font-serif text-sm md:text-lg leading-8 whitespace-pre-line space-y-8">
                        <div>
                            <p>don&rsquo;t let me let the autumn slip away.</p>
                            <p>the breeze on my cheeks like a cold soft kiss -</p>

                            <p>i pull my coat close, push on through the day -</p>
                            <p>this unforgivable forgetfulness.</p>
                        </div>
                        <div>
                            <p>how often i slight the sunset-scarlet</p>
                            <p>of leaves beneath my reckless rushing feet!</p>
                            <p>You made each one, and You made each starlit</p>
                            <p>night i&rsquo;ve missed, each unseen face on the street.</p>
                        </div>
                        <div>
                            <p>this season grows shadowed with each deadline,</p>
                            <p>each month goes dark with penciled things to do.</p>
                            <p>help me, my Healer, i&rsquo;m stumbling blind,</p>
                            <p>light up my eyes - i just want to see You.</p>
                        </div>
                        <div>
                            <p>Your presence alone brings me space this fall.</p>
                            <p>so be Thou my vision, my all in all.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}
