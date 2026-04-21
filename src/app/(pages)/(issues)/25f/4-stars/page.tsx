import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Eddy Huang";
  const credit = "Photo by Matthew Lai";
  const title = "Stars";
  const date = "December 6, 2025";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-3 md:max-h-[70vh]"
            src="/issues/25f/stars.webp"
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
          <div className="font-serif text-sm md:text-lg leading-[200%] whitespace-pre-line">
            <p>
              God didn’t plant these dreams for nothing,
              <br />
              nor whisper them like idle breeze
              <br />
              Each spark, each vision, each quiet pull
              <br />
              is a star He placed for you to reach
            </p>
            <br />
            <p>
              He set them there when your strength was weak
              <br />
              when your heart was unsure,
              <br />
              trusting that the gravity of faith
              <br />
              would draw you to what was written
            </p>
            <br />
            <p>
              When the climb feels like a distant sun,
              <br />
              when nights stretch silent and long
              <br />
              Remember, this galaxy above
              <br />
              was first a thought He planned for you
            </p>
            <br />
            <p>
              So hold your dreams like constellations,
              <br />
              burning bright against the dark,
              <br />
              For if God thought you could,
              <br />
              then step by step,
              <br />
              you will.
            </p>
            <br />
            <p>
              <em>
                Inspirations from Jeremiah 29:11, Ephesians 2:10, and Romans
                8:28{" "}
              </em>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
