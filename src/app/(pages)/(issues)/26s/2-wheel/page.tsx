import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Edison Hong";
  const credit = "Photo by Name";
  const title = "Wheel";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/wheel.webp"
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
            <div>Scroll.</div>
            <div>Refresh.</div>
            <br />
            <div>Again. </div>
            <div>Faster. </div>
            <br />
            <div>Again.</div>
            <div>Faster. </div>
            <br />
            <div>The wheel does not sleep. </div>
            <div>It does not ask why. </div>
            <br />
            <div>It turns. </div>
            <div>It spins. </div>
            <div>And turns again. </div>
            <br />
            <div>I run beside it -- </div>
            <div>Palms open wide, </div>
            <div>Eyes open wide, </div>
            <div>They BURN. </div>
            <br />
            <div>I swallow dust. </div>
            <div>I choke on air.</div>
            <br />
            <div>And still, </div>
            <div>I keep pace. </div>
            <br />
            <div>I chase what will not stay. </div>
            <div>I chase what kills me. </div>
            <br />
            <div>And still &mdash;</div>
            <div>I love it. </div>
            <br />
            <div>But at the edge of my sight</div>
            <div>A familiar shape --</div>
            <br />
            <div>Stone.</div>
            <div>Wood. </div>
            <div>A hand</div>
            <br />
            <div>Unmoving. </div>
            <br />
            <div>The wheel shudders. </div>
            <div>He does not. </div>
            <br />
            <div>The lights thin to nothing. </div>
            <div>He does not. </div>
            <br />
            <div>Only a glimpse --</div>
            <br />
            <div>And it is enough </div>
            <div>To make me stop spinning</div>
            <br />
            <div>I reach for ink </div>
            <br />
            <div>My hand steadies </div>
            <div>My pulse slows </div>
            <div>My eyes calm</div>
            <br />
            <div>I do not tremble </div>
            <br />
            <div>Ink falls. </div>
            <div>The ink moves.</div>
            <div>I am no longer burning. </div>
            <br />
            <div>The ink moves. </div>
            <div>I am no longer running.</div>
            <br />
            <div>This is not noise. </div>
            <div>This is prayer. </div>
            <br />
            <div>Black into white. </div>
            <div>Breath into silence. </div>
            <br />
            <div>I remember &mdash;</div>
            <br />
            <div>He knelt once</div>
            <div>And wrote in dust. </div>
            <br />
            <div>I remember &mdash;</div>
            <div>I loved the wheel</div>
            <div>And it loved nothing.</div>
            <br />
            <div>He stretched out His hands </div>
            <div>He did not pull back. </div>
            <br />
            <div>So I let the ink fall </div>
            <br />
            <div>Slow &mdash;</div>
            <div>Like mercy </div>
            <br />
            <div>Slow &mdash;</div>
            <div>Like blood</div>
            <div>Not chasing, </div>
            <div>Not burning, </div>
            <br />
            <div>Only</div>
            <div>Remaining. </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
