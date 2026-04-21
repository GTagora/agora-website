"use client";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
  const author = "Esther Shen";
  const credit = "Illustration by Jenny Chen";
  const title = "Midnight";
  const date = "December 06, 2025";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-contain md:object-contain my-3 md:max-h-[70vh]"
            src="/issues/25f/midnight.webp"
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
          <div className="font-serif text-sm md:text-lg leading-8 whitespace-pre-line">
            <p>When I walk through the door</p>
            <p>Without you</p>
            <p>This place no longer feels like home.</p>
            <p>I sink listlessly, lost in a haze</p>
            <p>Drowning but too feeble to fight for the surface.</p>
            <p>Nothing is right.</p>
            <p>My world has been tainted</p>
            <p>With a stagnant, foggy darkness.</p>
            <p>Sounds of laughter arouse a bitter taste.</p>
            <p>How much longer will this last?</p>
            <p>How many more long lonely nights?</p>
            <p>Everywhere I walk, I carry scars</p>
            <p>I don’t think I will ever be the same</p>
            <p>But maybe I don’t want to.</p>
            <p>Maybe I’m content with wallowing in the night</p>
            <p>With bathing in my tears</p>
            <p>Wishing someone would care</p>
            <p>But also strangely wishing to be left alone.</p>
            <br />
            <p>Where are you?</p>
            <p>My life bears a gaping hole that once belonged to you</p>
            <p>That will never, can never be filled.</p>
            <p>I flail and claw onto memories as I sink deeper</p>
            <p>But that is all they are—</p>
            <p>Memories.</p>
            <p>Memories will not bring you back</p>
            <p>No matter how earnestly I envision them.</p>
            <p>They will change form like smoke</p>
            <p>Until they create an illusion of someone you were not,</p>
            <p>Then dissipate aimlessly into oblivion.</p>
            <p>I think you would like these flowers they bring you</p>
            <p>Something beautiful in a time that is not</p>
            <p>But even they will fade in a few days’ time.</p>
            <p>
              Our special phrases, the particular pitch of voice I would use
            </p>
            <p>Lie desolate and buried in my throat.</p>
            <p>I don’t want to forget</p>
            <p>But they no longer have a reason for release.</p>
            <br />
            <p>Sometimes I call out to you, hoping somehow</p>
            <p>Up above,</p>
            <p>You can hear my voice.</p>
            <p>I hope you see how I spend my days</p>
            <p>So I can carry you with me</p>
            <p>But my heart throbs with the longing to speak to you,</p>
            <p>To embrace you once again…</p>
            <p>I would have done it more back then</p>
            <p>If only I knew.</p>
            <p>Now, I am a prisoner in a cavernous cage,</p>
            <p>Alone in the liveliest crowds of people.</p>
            <p>I don’t know where my place is anymore,</p>
            <p>How I’m supposed to behave.</p>
            <p>I am ashamed of becoming a burden</p>
            <p>So should I contort myself into expected normalcy?</p>
            <br />
            <p>God, how can this be?</p>
            <p>I thought you answered prayers</p>
            <p>I thought you honored hope</p>
            <p>I thought you took good care of your children.</p>
            <p>I want to trust you again, but how can I?</p>
            <p>My heart feels strangely distant</p>
            <p>This chasm so hard to breach.</p>
            <p>It doesn’t make any sense</p>
            <p>Yet I can’t bring myself to curse you.</p>
            <p>Deep down I know you are good</p>
            <p>But why are you good, when I struggle to see it?</p>
            <p>Is this faith,</p>
            <p>Something that feels so much like folly?</p>
            <br />
            <p>In the middle of the night</p>
            <p>When weeping stains my face and heart</p>
            <p>A small whisper emerges from within:</p>
            <p>
              “Why are you cast down, O my soul?” <Reference number={1} />
            </p>
            <p>
              And as I stumble along these roads I never thought I would endure
            </p>
            <p>I find that Your hands were beneath my every step.</p>
            <p>I confined You to a box of my perception</p>
            <p>Groaning, “Where were you?”</p>
            <p>“Why did you not do this?”</p>
            <p>When Your plans extended far beyond anything I could fathom.</p>
            <br />
            <p>You were present in that hospital room</p>
            <p>In the borrowed time</p>
            <p>In every sung and spoken word</p>
            <p>In the hope held onto</p>
            <p>In every corner and crevasse</p>
            <p>Of the deepest and darkest nights</p>
            <p>Sitting silently with me,</p>
            <p>Holding me fast.</p>
            <p>Your Word reminds my wounded heart</p>
            <p>That living hope is found in the morning to come</p>
            <p>In the sun that shines with constant glory, even at night.</p>
            <p>So I will wait for the dawn You promise</p>
            <p>And teach my soul to sing again</p>
            <p>That Your steadfast love endures forever</p>
            <br />
            <p>
              <em>
                “The light shines in the darkness, and the darkness has not
                overcome it.” - John 1:5
              </em>
            </p>
            <p className="font-serif font-bold text-xl mt-10">Footnotes</p>
            <div className="font-serif text-md whitespace-pre-line space-y-2">
              <Footnote number={1} text="Psalm 42:5" />
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
