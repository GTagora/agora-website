import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Paige Allen";
  const credit = "";
  const title = "Forever Yours";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/forever-yours.webp"
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
          <div className="font-serif text-sm md:text-lg leading-[200%] whitespace-pre-line space-y-4">
            <p>
              The tape peeled back slowly, resisting at first, clinging to my
              skin as though reluctant to let go. I drew in a sharp breath,
              bracing myself, praying the sting would be brief. As I tilted my
              head up, setting the template beside scattered markers, I caught
              my reflection. An unguarded smile spread across my face following
              chuckles of relief. My hand reached instinctively for my phone,
              and I sent the photo of a small purple teddy bear tattooed on my
              hip to a man with scruffy hair and soft eyes. I watched the screen
              glow in dim lighting until his reply appeared.
            </p>
            <p>“I love that you’re mine :)” -Teddy</p>
            <p>
              I then lowered my gaze to the mark I placed and touched it,
              admiring the deepened love and meaning behind the bear. With my
              lover, it felt enough simply to know it was there — steady,
              comforting and familiar knowing that I was his, and he was mine.
            </p>
            <p>
              For a time, I moved through the days with the quiet awareness of
              it — a hidden weight beneath fabric, a small certainty carried
              just out of sight. And each time I undressed and stood amidst my
              reflection, I could see it, and I could be gently reminded of who
              I belonged to.
            </p>
            <hr className="border-t-1 border-black" />
            <p>
              At first it was barely noticeable, a slight blurring as though
              steam had brushed too closely against it during my showers. The
              lines lost their sharpness, the color thinning at the corners like
              watercolor left too long in the rain. I found myself lingering
              longer in front of mirrors, tilting toward the light, watching the
              slow undoing while I shifted my posture.
            </p>
            <p>
              When it nearly vanished, I moved quickly — the clatter of markers,
              the familiar stencil pressed back against warm skin, the careful
              tracing of lines I already knew by heart, the brief agony upon
              removal. The ink returned, darker again, certain again, and the
              tightness in my chest loosened just enough to breathe.
            </p>
            <p>And everything was fine.</p>
            <p>Until it wasn't.</p>
            <p>
              The fading came faster this time, the edges softening before I
              could forget to look. My hands grew stained in faint streaks of
              purple, smudges along my fingers, the scent of ink lingering long
              after I’d capped the pens. A small panic rose quietly, like water
              filling a room.
            </p>
            <p>Reapply.</p>
            <p>Again.</p>
            <p>And Again.</p>
            <p>And Again.</p>
            <p>
              What had once been occasional became constant — careful tracing
              turning hurried, the lines growing uneven beneath unsteady hands.
              The bear returned in shorter and shorter cycles, its certainty
              slipping further each time as I was desperate to prevent its
              disappearance.
            </p>
            <p>
              I searched drawers, surfaces, and the floor beside my bed for any
              indication of ink, but none were left, and there was nothing left
              for me to react to.
            </p>
            <p>
              The last traces faded until only the faintest shadow remained,
              then nothing at all — just skin, unmarked, as though it had never
              been there. My eyes had grown dim and I carried a weary heart,
              anxious for a sign—any sign—of my teddy bear. I checked Whatsapp
              for the first time in months.
            </p>
            <p>Nothing.</p>
            <p>I no longer was his, and he was not mine.</p>
            <p>
              For a while, I stood there with nothing to look at but my own
              reflection. I kept tracing the space absentmindedly, as though the
              shape might return if I waited long enough, if I remembered it
              clearly enough. The place where the bear had once rested felt
              strangely unfamiliar, bare in a way that made me realize it had
              become an identity. Without it, I felt lost. Forsaken.
            </p>
            <p className="italic">
              For if I am no longer claimed by him, who do I belong to now?
            </p>
            <p>
              I kept trying to anchor my identity in things that felt steady at
              heart– relationships that made me feel chosen, friendships that
              made me feel understood, achievements that gave me a sense of
              significance, and hobbies that helped describe who I was. Yet,
              each of these, no matter how much I invested, faded just as easily
              as the ink on my skin.
            </p>
            <p>
              Through these circumstances, I began to understand something
              deeper about the way we search for identity. People in our culture
              are looking for two things: purpose and a connection beyond
              themselves. In other words:
            </p>
            <ol className="list-decimal ml-10 text-lg">
              <li>How do I define myself?</li>
              <li>To what do I belong to?</li>
            </ol>
            <p>
              While we often try to answer the first on our own, we tend to look
              outward to answer the second. That desire for belonging is not
              wrong. In fact, it reflects something true about how we were made.
              But when we place the entirety of our identity on things that
              cannot last — people, labels, objects — those things begin to
              carry a weight they were never meant to hold.
            </p>
            <p>
              Community for example can shape us, support us, and walk alongside
              us, but is not meant to define us completely. The marks we place
              on ourselves, whether visible or hidden, become attempts to anchor
              our identity somewhere permanent within a world that is constantly
              changing.
            </p>
            <p className="text-center font-medium text-lg">
              “For everything there is a season, and a time for every matter
              under heaven” – Ecclesiastes 3:1
            </p>
            <p>
              Life moves in seasons uncontrollable, shifting, and never
              intending to stay. Yet, we still try to etch things eternally in
              our hearts. The world was never meant to work that way. We were
              never meant to hold ourselves to what is temporary. When I look at
              the old stencils that once held my identities, I see my evidence
              of human longing for permanence in this world.
            </p>
            <p>
              As time passed and I experienced several grievances, I had to
              swallow a hard truth. God never promised us a life where
              everything stays the same, where things don’t fade. But what he
              does promise is His presence within every season.
            </p>
            <p className="italic text-lg">Immanuel</p>
            <p className="text-lg">It means God with us.</p>
            <p>
              This name given to Jesus was not simply a comforting idea. It was
              a promise. A declaration of God’s heart toward what is His first.
              First spoken by the prophet Isaiah in a time of uncertainty,
              fulfilled in Christ as a living reality. He stepped into fragility
              to give us guidance on our identity and where we truly belong.
            </p>
            <p>So Immanuel.</p>
            <p className="italic">God with us.</p>
            <p>
              Not distant. Not fading. Not something I have to hold together.
            </p>
            <p>
              For so long, I believed belonging was something I could preserve
              if I just tried hard enough. I hoped if I kept reapplying things I
              held dear to me like the ink on my skin, that it would just stay,
              and my identity would stay. I was wrong.
            </p>
            <p>
              Instead, one of the most heart-warming truths is this: my identity
              had already been given.
            </p>
            <p>
              In Ephesians 1:13, we are reminded that our identity is not
              self-made but sealed by God Himself, for “when you believed, you
              were marked in Him with a seal, the promised Holy Spirit.”
            </p>
            <p>
              God had already marked me. Where I feared being unclaimed, he had
              already spoken about my belonging. And as an everlasting, constant
              Father, his seal never fades. He is eternal, steady, secure. By
              His grace, we are already known. Long before we searched for a
              place to belong, to secure ourselves in something that feels
              certain, we are already held in his love, which cannot be shaken.
            </p>
            <p>
              {" "}
              “. . . I have called you by name, and you are mine.” – Isaiah 43:1
            </p>
            <p>
              This identity does not blur or thin with time. It does not
              disappear under circumstances. When I look back now, I see that
              even in the moments when I felt most alone, I was never truly
              unclaimed. God had already written my belonging into something far
              more permanent than anything I could create for myself. And how do
              I know?
            </p>
            <p className="text-center text-lg">
              “See, I have engraved you on the palms of my hands; your walls are
              ever before me” –Isaiah 49:16
            </p>
            <p>Engraved. Where my marks fade, His remain.</p>
            <p>Where my efforts fall short, His promise endures.</p>
            <p>
              Where I once searched for security in the temporary, I now find
              rest in the assurance that I am held by the One whose love is
              everlasting. Because in a world where everything eventually fades,
              our identity in Christ remains unshaken. So reader, I encourage
              you to remind yourself who you belong to, for I now look up to
              heaven with confidence and say,
            </p>
            <p className="italic">Lord, I am forever yours.</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
