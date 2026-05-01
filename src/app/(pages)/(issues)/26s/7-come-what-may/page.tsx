import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
  const author = "Sean Kim";
  const credit = "";
  const title = "Come What May";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/come-what-may.webp"
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
              My future is a blank page, and it terrifies me. Potential may be
              freeing, but every possibility demands a choice, and that choice
              can feel damning. From what career opportunities to pursue to
              tradeoffs between academics and health, our actions echo into the
              uncharted future. The future is an unsurpassable realm no human
              effort can breach; it remains dim and dark, just beyond our reach.
            </p>
            <p>
              Still, what do humans do, when faced with insurmountable and
              impossible challenges? They struggle. They fight with all their
              might, no matter the odds. With calendars that dictate our days,
              plans meant to chart our paths, and societal milestones
              benchmarking progress in life, we strive. We desperately scrawl
              our handwriting upon tomorrow’s unblemished pages, attempting to
              assign an illusion of order to an unstable, unwritten future.
            </p>
            <p>
              And what results from this endeavor? The careful, tidy boundaries
              of our calendar dissolve under a wave of waning concentration,
              unforeseen events, and unrealistic expectations. The simple and
              idealistic plans of a future career or relationship get derailed
              by one unexpected decision or one bad call. Reality washes over us
              and our scribbles upon the page—what had before seemed so neat—now
              smudges and bleeds.
            </p>
            <p>
              When life robs us of the presumption we know what to expect from
              it, anxiety sets in. Arising from our expectations of the future,
              anxiety lives in the gap between where we are now and the outcome
              we can’t confirm yet. We willingly suffer the tyranny of
              uncertainty, tormented under a servitude we can’t escape from.
              Conjuring a future gone wrong, we choose to suffer it in advance.
            </p>
            <p>
              That was my life for the past few months. I developed a certain
              ritual: phone before my feet hit the floor, then scan my inbox
              with bleary eyes. Most mornings brought nothing. Some brought
              rejections, which I’d learned to grow numb to. The ones that hurt
              were the others—rejections after interviews I thought went well,
              impersonal replies from team leads who said{" "}
              <em>we’re excited about you</em>, silence after emails that said{" "}
              <em>next steps</em>. Because those were the mornings where I felt
              the shame of having hoped, of letting myself build a version of me
              who figured it out and then having to kill it. Opportunity and
              belief shriveled, and thoughts spiraled:
              <em>
                What if I never get an internship? How will I get a job? I’ll
                fall behind everyone else. My life will be set back so much. How
                could I ever catch up? I will be a failure.
              </em>{" "}
              The despair was more than just about the internship. It was about
              the narrative I’d been crafting about my own future, about a
              person who had been given countless chances and wasted them all.
            </p>
            <p>
              Of course, I sought to escape these thoughts. While searching for
              answers, hope was a common prescription, and my preferred
              medication. <em>Have hope in God</em>, I thought.{" "}
              <em>It’ll all work out eventually.</em> I did my best to stay
              optimistic, trying everything from convincing myself that I didn’t
              really care about results to deluding myself that it’d all
              magically work out somehow in the end. But whether anxious or
              hopeful, I was constantly thinking about the summer and my life
              ahead.
            </p>
            <p>
              Perhaps that was the problem. After all, hope, much like anxiety,
              carries an inherent entanglement with the future. Both involve
              placing expectations onto future results, and in my head, they
              often jumbled into one indistinguishable mess. If so, how do we
              hold onto a hope that remains spotless and will never slip into
              anxiety?
            </p>
            <p>
              The first step is to realize that the hope I’d been grasping onto
              was doomed to fail, because it was rooted in the same fallible
              mind as anxiety. Blind optimism is no different from blind
              pessimism. Both lack a solid grounding and involve a delusional
              cramming of reality into preconceived notions. How then, can we
              overcome anxiety?
            </p>
            <p>Bet on the fallibility of man.</p>
            <p>
              Our fears and anxieties are the product of a faulty mind, and thus
              are as prone to failure as anything else we do. My thoughts and
              feelings of the future are heavily swayed by momentary experiences
              and subjective beliefs. Based on the fraction of life I’ve
              experienced, I arrogantly claim to know what paths lie before me,
              and which narrative fits best. For what is anxiety if not placing
              some measure of faith into a set of bad outcomes? What is fear but
              a prideful declaration that I know what my future will hold?
              Writing a script for ‘happily ever after’, I presume the world
              will comply with my demands and insist it follow my designs.
            </p>
            <p>
              When factoring in human imperfection, none of our worries can be
              trusted. If my thoughts were right, I would never have made it to
              where I am today. If my fears were as well founded as I believed,
              I would have flunked every class, ruined every relationship, and
              ended up as someone who amounted to nothing. Our thoughts cannot
              be trusted. And so maybe, just maybe, we are not as reliable a
              narrator of our lives as we think. We may claim to be the author
              of our lives, but our authorship is flawed.
            </p>
            <p>
              But the grace of Christianity is that the story doesn’t stop at
              living with our imperfections. There is another, an infinitely
              better author, who we can place our hope in.
            </p>
            <p>
              Hope, for a Christian, is a promise preserved in ink. It stems
              from pages detailing a covenant with the Almighty and writings
              that depict the love of a God who died for us. It reassures us
              that “for those who love God all things work together for good,
              for those who are called according to his purpose.”{" "}
              <Reference number={1} />
              It provides an assurance that the infinite creator of the universe
              also intimately loves us more than we love ourselves. And if such
              a being has “plans for welfare and not for evil, to give you a
              future and a hope” <Reference number={2} />, what are we to fear?
              Our hope is not rooted in uncertain predictions of the future, but
              stems from our relationship with a deeply personal God. We entrust
              the foundation of our faith to the work of a divine author who
              “has perfected for all time those who are being sanctified”{" "}
              <Reference number={3} />.
            </p>
            <p>
              That perfection, crucially, works through our imperfections, not
              around them. When I sin, the consequences are permanent. The
              mistakes I make, written in ink, may remain, but God will use
              those marks to elevate my story.
            </p>
            <p>
              The doubts about my future career, the pressures of becoming
              someone I can be proud of, all magnify the moment when His work is
              made clear. It was only when I finally gave up control over my
              summer plans to God that my prayers were answered. The very moment
              my heart felt at peace with the future was also the moment an
              offer arrived. Because peace came first, it changed what the offer
              meant to me. I was able to see the blessing for what it was, not
              just as a relieved sign that things had finally worked out. I may
              doubt and I may scheme, yet it is the Lord who establishes my
              steps. My fears are riddled with flaws, for I simply cannot
              predict the numerous ways God can move. Even if I fail to
              recognize the individual strokes of His mercy and grace, they are
              present, and they <em>will</em> come together to form a future written with
              purpose.
            </p>
            <p>
              I trace His fingerprints through my past and witness the subtle
              threads culminating into who I am today. The rejections. The false
              hope. The mornings of despair. They’re all in there, seamlessly
              woven into a narrative I could never have designed. My future is
              still a blank page, and I still can’t see what it holds. But I
              know whose hand is holding the pen. And that’s enough.
            </p>
            <p className="font-serif font-bold text-xl mt-10">Footnotes</p>
            <div className="font-serif text-md whitespace-pre-line space-y-2">
              <Footnote number={1} text="Romans 8:28" />
              <Footnote number={2} text="Jeremiah 29:11" />
              <Footnote number={3} text="Hebrews 10:14" />
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
