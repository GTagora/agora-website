import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Raphael Cheng";
  const credit = "Photo by Joshua Chung";
  const title = "Infinity Is Bigger Than You Think";
  const date = "December 6, 2025";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/25f/infinity-is-bigger-than-you-think.webp"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            <p>Part 1</p>
            <p>
              Numbers are a funny thing. As babies, we learn it pretty much
              right after walking and talking — remember those wooden number
              blocks, or the donuts you had to stack in order? — and then for
              the next 20 years of our life it just keeps adding on, pun
              intended. It starts out pretty easy — oh, 2 + 2 = 4, yeah that
              makes sense — then there’s the curveball all kids face when they
              learn about negative numbers (a number less than <em>zero?</em>{" "}
              <em>How?</em>) — and then we add letters, we add symbols, we add{" "}
              <em>Greek </em>letters… it just keeps getting more and more
              complex. As in, we even named them “complex numbers”, like the
              mathematicians knew these poor high schoolers would be struggling
              to understand them.
            </p>
            <p>
              Thankfully, I’ll be sticking to the positive, whole number side of
              things — but even then, you might find that on the extreme end of
              large quantities it can sometimes become more complex than the
              square root of -1.
            </p>
            <p>
              Of course, infinity isn’t really a number. It’s not… quantifiable.
              So why am I starting with <em>finite </em>numbers?
            </p>
            <p>
              I think the concept of infinity gets brushed over a bit because of
              how used to it we are from school. In math it’s just a tool — to
              find a limit, to describe sets, to denote bounds. It’s just one of
              the many symbols we learn, when it is really so much more. We lose
              sight of the <em>scale </em>in which infinity resides. I hope that
              through these much smaller finite examples, you might rediscover
              just how vast infinity seems, and how immeasurable of a concept it
              really is.
            </p>
            <p>
              <strong>A Finite Amount</strong>
            </p>
            <p>
              If I asked you to close your eyes and picture ten people in a
              room, I’m sure most of you could do so easily. You could probably
              give each one an identity too, one of someone you know. What if I
              asked you to picture one hundred people? A little harder, but
              still doable. You could put these ten people in a row, and then
              make ten rows. You might even still be able to give each person a
              unique identity.
            </p>
            <p>
              What about a thousand people? Does that start to sound like a lot?
              Do you even know a thousand people? A 2008 study[1]***** estimated
              that the average person knows about 600 people by name. That’s a
              decent amount, but it’s not a thousand. And in the world of
              numbers, 1000 isn’t even that much. If you’ve been to Broadway you
              might’ve gone to the Eugene O’Neill theatre, which has a seating
              capacity of 1066 people — and honestly, that theatre didn’t seem
              that big to me. Yet it’s more people than the average person
              knows!
            </p>
            <p>
              Now if we’re talking big venues, maybe it’s easier to imagine the
              Mercedes Benz stadium. It’s got a seating capacity of 71,000
              people. That’s seventy-one times the size of those Broadway
              Theatres. Think of how packed the Benz stadium is during a game or
              concert… and we aren’t even close to the millions yet.
            </p>
            <p>
              The Atlanta Metropolitan area has around 6.4 million people —
              think everything within the 285 highway, and then some. Can you
              visualize what six million looks like? What about something small
              — like grains of sand. Six million grains might sound like a lot,
              but a cubic foot of sand contains around 1 billion grains. That
              means 6,000,000 grains amount to less than a cup of sand! Even a
              cubic foot is really not a lot of sand. A full beach can go into
              the trillions and trillions of particles — now our numbers are
              getting much, much larger.
            </p>
            <p>
              Speaking of trillions, here’s a fun fact — our body is made up of
              around 30-40 <em>trillion </em>cells. For reference, the Milky Way
              galaxy has somewhere in the 200-400 billion number of stars. We
              have more cells in our body — wayyy more, like 100x more — than
              there are stars in our <em>galaxy</em>. Wow.
            </p>
            <p>
              I think you get the idea. The larger the number gets, the more
              wild the examples I have to give. A billion is <em>a lot</em>.
              It’s almost three times the number of people there are in the
              entire United States. But in terms of sand, it’s barely anything.
              It’s interesting how the context in which a number is given vastly
              changes how we perceive that amount.
            </p>
            <p>What about this one?</p>
            <p>
              You know when you were a kid, and you would compete with someone
              else by saying a bigger number?
            </p>
            <p>I have a hundred.</p>
            <p>Well, I have a thousand.</p>
            <p>
              Well, I have a <em>million</em>.
            </p>
            <p>
              It didn’t really matter what the item was — it could be dollars,
              it could be Pokémon cards, it could be something as dumb as the
              number of fingers you had held up. You just had to have a bigger
              number.
            </p>
            <p>
              There was this one hack that the kids in my school would use.
              “Well, I have a <em>googol</em>.” Have you heard of it? A googol
              is 1, with 100 zeros behind it (It’s also the name origin of a
              certain search engine). For those of you who want a visual,
              that’s:
            </p>
            <p>
              10,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000.
            </p>
            <p>
              When I type it out it actually doesn’t seem like that much, right?
              Since the individual zeros are so small — but I promise, it is an
              incomprehensibly large number. It would stump all the middle
              school kids — except for that one nerd (me) who’d say:
            </p>
            <p>
              “Oh yeah? Well, I have a <em>googolplex.</em>”
            </p>
            <p>
              That’s ten to the power of googol, in case you didn’t know. As in,
              1, with a <em>googol </em>number of zeros behind it. As in, ten to
              the ten to the hundredth power. As in, an uncountable number — and
              when I say uncountable, I mean quite literally uncountable.
              There’s only ten to the eightieth atoms in the observable universe
              — less than a googol, if you’re keeping track — which means if you
              were to try and write out a googolplex, you would run out of atoms
              to do so, even if you were using one atom per zero. A physically{" "}
              <em>indescribable </em>number.
            </p>
            <p>
              And of course, then someone would always go, “Well, I have
              googolplex <em>plus one</em>…”
            </p>
            <p>
              <strong>A Finite Time</strong>
            </p>
            <p>
              But that’s enough of counting. Instead, let’s move to a different
              sort of value.
            </p>
            <p>
              What would you consider a long time? It probably depends on the
              context, as we’re coming to see. A year? Two years? To Jacob,
              fourteen years of labor was like nothing[2]***** (though I hope
              you wouldn’t be as big a simp as he was).
            </p>
            <p>
              Or maybe I’m starting too large. An hour can seem like a long time
              — you’re in a boring lecture hall, watching the clock slowly tick
              by, just waiting for your professor to dismiss you. Even a minute
              can seem impossibly long — try planking or wall-sitting for a
              minute and it’ll feel so much longer than if you were playing a
              video game. Or that minute right after you ask out your crush, and
              you’re waiting for a response…
            </p>
            <p>
              <strong>Subscript A</strong>: [I want to add a little note here to
              anyone who’s a young-earth creationist (For those of you
              unfamiliar, YECs are those who have a literal interpretation of
              the Bible and the creation story, placing Earth at around
              6000-10,000 years old). Nothing but love, and I respect that you
              have such a faithful view of the literal text of scripture. But as
              someone who grew up loving dinosaurs, I’ll be talking about time
              in the span of millions of years — which I think we can all agree
              is a <em>long </em>time. Also, I <em>promise </em>that scientific
              discoveries like these <em>do not </em>contradict what scripture
              says — though if you are a YEC, I’m sure you’ve had that said to
              you many times before.]
            </p>
            <p>But anyways. Let’s go back in time, just a little bit.</p>
            <p>
              Archaeologists trace the emergence of human civilization to the
              Neolithic Revolution, around 12,000 years ago. This was a shift
              from the hunter-gatherer ways of old to agriculture, permanent
              residences, towns, villages, and cities. But before that, they
              estimated humans had been around for 2-3 hundred thousand years.
              Keep in mind, I said I’d be talking about time on the scale of the
              millions. Us humans don’t even get to be part of that
              conversation.
            </p>
            <p>
              Let’s jump even further back to my favorite thing when I was a kid
              — sixty-five <em>million </em>years ago, when dinosaurs roamed the
              earth. Right before a big rock blew them all away. And they’d been
              there much longer than that — more than two hundred million years
              earlier.
            </p>
            <p>
              But of course, Earth is believed to be much, much older than that.
              4.3 billion years older, actually. My old pastor had this fun fact
              when he was talking about the vastness of God once: if all of
              earth’s history were to be put on a 24 hour clock, dinosaurs were
              only around starting at 11 p.m. The <em>last hour</em> of the day.
              Humans? We come in about 1 minute before midnight. And modern
              human civilization? Those 12,000 years of technological
              development? Yeah, that’s about 1/4th of a second.
            </p>
            <p>Crazy, isn’t it?</p>
            <p>
              Really puts that long minute of waiting into perspective. I think
              your crush can take just a little bit longer.
            </p>
            <p>
              <strong>A Finite Scale</strong>
            </p>
            <p>
              Growing up, I had a phase where I was really into outer space —
              stars, planets, constellations, comets, all of that. It still
              interests me now, though more in a, “oh that’s Virgo, cool” sort
              of way than a <em>pushes up glasses </em>“ahem did you know that
              Virgo is the second largest constellation?” vibe.
            </p>
            <p>
              One thing that never ceases to amaze me, however, is that moment
              when you’re out at night, preferably somewhere without a lot of
              light pollution, and you just tilt your head back and look up at
              the sky. You see the thousands of pinpricks speckling the black
              canvas above, winking at you from millions of light years away,
              filling this immeasurable expanse, and everything just feels so{" "}
              <em>big</em>.
            </p>
            <p>
              And you feel so… <em>small.</em>
            </p>
            <p>
              It’s such an amazing and yet humbling feeling. We get so wrapped
              up in the busyness of the day to day, in our own problems and
              issues, and to realize that it really is such a little part of a
              massive universe brings a totally different perspective.
            </p>
            <p>
              “Massive universe” is a rather general description, though, so
              let’s get more specific.
            </p>
            <p>
              Earth is pretty big, right? Large enough that people used to (some
              still do, I suppose) think the earth is flat because any way you
              looked the horizon seemed to be a dead straight line. That’s a
              leading question, by the way — you and I both know compared to
              most celestial objects Earth is a midget.
            </p>
            <p>
              You might have learned this in science class. Remember the Great
              Red Spot on Jupiter? It’s a giant wind storm on the largest planet
              in our solar system and it’s so big that you could fit 2 earths
              inside of it. Yeah — our planet fits in the <em>storm </em>of
              another planet.
            </p>
            <p>
              Think about how we usually picture our solar system. Bright yellow
              sun, with eight planets orbiting around it in concentric rings
              (R.I.P. Pluto). Do you know just how inaccurately scaled our
              diagrams have to be to fit every planet on one page?
            </p>
            <p>
              There’s a fun website called “If the Moon Were Only 1
              Pixel,”[3]***** which creates an accurate scale model of our solar
              system with Earth’s moon the size of a single pixel. For
              reference, that means each pixel is about 3500 km, or as the site
              says, roughly the distance from New York to Las Vegas. The sun is
              a big yellow circle, fills up like a fourth of the screen — and
              then you start scrolling.
            </p>
            <p>And scrolling.</p>
            <p>
              First up is Mercury — 58 <em>million </em>kilometers away from the
              sun. I just scrolled 16,000 pixels to see my first planet. Earth?
              150 million kilometers. My fingers are tired. I’ll include Pluto
              here for the sake of knowledge — it’s 6 billion kilometers away.
              40 times further away from the sun than Earth is. At the end of
              the map, right after Pluto, there’s a quote that says, “We’ll need
              to scroll through 6,771 more maps like this before we see anything
              else.” That’s <em>wild</em>.
            </p>
            <p>
              There're actually several scale-models of the solar system out
              there, but it’s probably not what you’re imagining. They don’t
              exactly fit in a building, you see. Gainesville, GA has a “Solar
              System Walk” — a 1.8 mile walk with the planets correctly sized
              and spaced out at a 1:2,000,000,000 scale. At the end of that 1.8
              mile walk, they were kind enough to include Pluto — a tiny ball,
              less than an inch in diameter. <em>Less than an inch</em>, and you
              walked almost 2 miles to get to it.
            </p>
            <p>
              The Oort Cloud comes after Pluto and marks the edge of our solar
              system — that’s the 6,771 more maps to scroll, remember — which
              means if you wanted to walk past Pluto to the Oort cloud, you’re
              walking another 12,000 miles. We drive about 12,000 miles in{" "}
              <em>a year</em>.
            </p>
            <p>
              I think you get the point, so I’ll skip to the big one — what
              about our universe? Well actually — we have no idea. Not because
              it would be immeasurable, but because light literally doesn’t
              travel <em>fast enough </em>for us to see further than 46.5
              billion light-years away. So the appearance of anything further
              than that <em>hasn’t reached us yet </em>in order for us to see it
              — and when I say hasn’t reached us yet, I mean as in, light that
              has been traveling towards us… since <em>creation itself</em>.
            </p>
            <p>
              <strong>An Infinite Number</strong>
            </p>
            <p>
              Now I’ve given a bunch of examples of big finite numbers. So what?
              I haven’t even gotten to infinity yet. And that’s because infinity
              is… quite hard to explain, actually.
            </p>
            <p>
              I wanted to give these examples to help establish the scale with
              which we’re talking about here. Some of these numbers are
              mind-bogglingly large, in some cases, physically indescribable.
              And yet, googolplex in comparison to infinity? It’s nothing. It’s
              not even a fraction of infinity. Not a speck on a page. A number
              that is physically impossible to just <em>write out </em>is, in
              essence, the same value as 1 with respect to infinity.
            </p>
            <p>
              <strong>Subscript B</strong>: [Side note — within infinity, there
              are actually even more infinities. Kind of. We can form numbers
              into “infinite sets” — for example, the “infinite set of all whole
              numbers,” or “the infinite set of all real numbers” — and they
              would have different magnitudes. The infinity that represents all
              real numbers, is infinitely larger than the infinity that
              represents all whole numbers. But both of them are still infinity
              — they are already an unquantifiable amount. One is just…
              unquantifiably more unquantifiable than the other.]
            </p>
            <p>
              But what <em>is </em>infinity?
            </p>
            <p>
              I want to take us back to calculus for a second (Or if you never
              took it, forwards, I suppose). Do you remember the phrase, “the
              limit as x approaches infinity?” You might recall it better like
              this:
            </p>
            <p></p>
            <p>
              Now f(x) can be any sort of function. It could be exponential, it
              could be trigonometric, it could be a simple x + 3 or a
              complicated integral. For this example, I’ll use something simple:
            </p>
            <p></p>
            <p>
              You probably know just from looking at it, that the answer to the
              limit as x approaches infinity is 0. After all, one divided by
              infinity is zero. But first, I want to think of it like this.
            </p>
            <p>
              There is an infinite set of numbers between 0 and 1.{" "}
              <em>Infinite</em>. And if you plug in any of those numbers, you’ll
              get anything from 1 at x = 1, to… well, infinity. And if we go
              past 1, we could go anywhere from the range of 1 to googolplex,
              and the answer we would get for f(x) still wouldn’t be 0. It’d be
              basically zero, in any practical, useful sense — but not zero. It
              is only at <em>infinity</em> that we see what the function
              becomes.
            </p>
            <p>
              So I have a more interesting definition for infinity. To me,
              infinity is not a boundless quantity, or a continuous line. To me,
              infinity is the state at which the <em>true nature</em> of
              something is revealed. It’s only when we understand the infinite
              scope of a function that we find its true value. And it’s only
              when we try to understand the infinite scope of God that we can
              even hope to know Him.
            </p>
            <h1>
              <strong>PART 2</strong>
            </h1>

            <p>Let me take back what I just said.</p>
            <p>
              You should know that we will never be able to fully understand an
              infinite God. It’s not possible — he says so Himself[4]*****. I
              mean, our greatest minds say that “if you think you understand
              quantum mechanics, you do not understand quantum mechanics.” If we
              can’t even comprehend something that small, how can we with
              something so big? (That’s a joke, by the way — the statement, not
              quantum mechanics. Quantum mechanics is no joke.)
            </p>
            <p>
              However, God has <em>chosen </em>to help us understand Him,
              because He <em>wants us </em>to know Him. He <em>wants us </em>to
              have a relationship with Him. And he’s done this in so many ways:
              through creation, through prophets, through teachers, through
              Scripture, through <em>Jesus</em>. But often, our view of God
              becomes misconstrued — especially if we begin to define him in the
              limited, physical terms that we know to be our own reality. I’m
              guilty of this. I constantly need to be reminded that the God we
              serve isn’t one that we can place into boxes or categories of our
              own creation: He is truly above our wildest imagination.
            </p>
            <p>
              You might notice that the section titles going forward seem to be
              a bit redundant. After all, omni-anything already implies
              infiniteness. And you’d be right — they are redundant. I just
              think they sound cool.
            </p>
            <p>
              <strong>An Infinite Omnipresence</strong>
            </p>
            <p>Stop me if you’ve heard this before:</p>
            <p>“I want to make more time for God.”</p>
            <p>
              Maybe it’s not a want, but a need. Maybe it’s not time, but space.
              The meaning is the same — God is not as prevalent in my life as I
              would desire Him to be. The reasonings can vary: too much
              schoolwork. Too many extracurriculars. Long work hours. Spouse.
              Kids. League of Legends (I know this is true for some of y’all).
              Oftentimes it’s the answer to the question, “so what is your
              prayer request?” Or, “What are you working on?” Or, “How are you
              trying to grow in your walk with God?” I can’t count the number of
              times I’ve heard this answer before — not just from other people,
              but from myself as well.
            </p>
            <p>I hate this phrase.</p>
            <p>
              Don’t get me wrong, it is absolutely true — we all need to make
              more time for God. You think you spend enough time in His
              Presence? You don’t. More on that in a sec. You think you know Him
              well enough? You don’t. We <em>constantly </em>need to make more
              time for God — every day, every hour, every <em>second.</em>
            </p>
            <p>But I hate this phrase.</p>
            <p>Have you ever stopped to think about how stupid it sounds?</p>
            <p>
              Imagine a king seeks the audience of a farmer working in his
              kingdom. In what world would that farmer have the authority to
              say, “sorry — let me make some time in my schedule for you.” If
              the king requested his presence, you’d better hope the farmer
              drops everything and goes immediately. <em>Nothing </em>could be
              more important.
            </p>
            <p>Yet we do this all the time with God.</p>
            <p>
              I’m supposed to do my morning devos, but I woke up late. Crap —
              got to get to work. Guess I’ll hold off on devos till later. Got
              homework due tonight — I’ll read the Bible later. Dang, life is
              getting busy. I can shorten my quiet time.
            </p>
            <p>
              Is work more important than God? Is that assignment? Is your{" "}
              <em>life</em>?
            </p>
            <p>
              No, it’s not. We’re called to seek <em>first </em>the Kingdom of
              God and his righteousness[5]***** — not second, not third.{" "}
              <em>First</em>.
            </p>
            <p>
              By the way, all those examples I gave — those are just the
              concrete times we’ve marked out to spend with God. Do you know how
              often the Bible says we should be with Him?
            </p>
            <p>
              <em>Continually</em>[6]*****.
            </p>
            <p>
              <em>Always</em>[7]*****.
            </p>
            <p>Is that possible? Obviously not.</p>
            <p>
              We are finite beings — and not only that, finite,{" "}
              <em>imperfect </em>beings. We mess up all the time. So how are we
              supposed to continually, always be walking with God?
            </p>
            <p>We first have to reframe our perspective.</p>
            <p>
              You know that farmer? Would <em>they </em>ever be the one to
              schedule an appointment with the king? They could{" "}
              <em>request </em>one — but the decision isn’t up to them. The
              decision is up to their boss. In the same way, we are in no
              position to be the ones that say, “okay God. I have time. Come,
              let’s meet up.” That is entirely up to God.
            </p>
            <p>Here’s the amazing part.</p>
            <p>
              I don’t think most kings have the capacity nor the desire to meet
              up with their lowest employees. But God does — He has both the
              capacity <em>and </em>the desire. He loves us.
            </p>
            <p>
              The Bible even tells us how much he loves us — multiple times. One
              that sticks out to me is this:
            </p>
            <p>
              <em>
                For as high as the heavens are above the earth, so great is his
                love for those who fear him; as far as the east is from the
                west, so far has he removed our transgressions from us.
              </em>
              [8]*****
            </p>
            <p>
              David gives us not one, but two unquantifiable metrics of God’s
              love — the distance of the heavens to the earth, and the east from
              the west. The Hebrew word used for heavens here,{" "}
              <strong>שָׁ֭מַיִם</strong> (ma-yim), is multi-meaning, depending
              on the context. One is the sky — which if we want to say is the
              physical atmosphere, is about 6000 miles. But it can also mean the
              universe — something unobservably large, as I mentioned earlier —
              or even, the dwelling place of God Himself. It doesn’t tell us
              which definition David meant, but based on what comes after I
              would lean towards one of the infinite ones. The east and west,
              after all, aren’t physical places. They’re concepts: in our
              spherical world, east goes on forever, as does west. It is a{" "}
              <em>limitless </em>descriptor of God’s love.
            </p>
            <p>
              He loves us so much that He knows the number of{" "}
              <em>hairs on our head</em>[9]*****. He is the one who seeks us
              out[10]*****. He is the God who leaves the ninety-nine
              sheep[11]***** and goes to find the one lost lamb. That lamb?
              That’s me and you.
            </p>
            <p>
              And when does He do this? Not just when we’re lost, but all the
              time. God is <em>always </em>by our side[12]*****, whether we’re
              in the green pastures and still waters or in the valley of the
              shadow of death[13]*****. <em>No matter what</em>, He is with us.
            </p>
            <p>So you see?</p>
            <p>
              We don’t choose to be in the presence of God or not. We are{" "}
              <em>always </em>in the presence of God, because <em>He </em>
              chooses to be with us at all times. He is with us when we wake up,
              when we go to class, when we go shopping, when we do our homework
              late instead of doing quiet time, when we worship and praise Him
              and when we stumble and fall. God chooses us.
            </p>
            <p>
              It’s not a matter of making more time for God. We can’t — because
              He has already made all the time to be with us. Instead, what we
              need to do is acknowledge Him[14]*****<sup> </sup>more and more,
              because He is always there, directing the path. And not just your
              path and my path. Whether it’s your friend or your enemy, He is
              there, walking with them. He is <em>always by</em>{" "}
              <em>everyone’s </em>side.
            </p>
            <p>But how?</p>
            <p>
              <strong>An Infinite Omnipotence</strong>
            </p>
            <p>
              <em>In the beginning, God created the heavens and the earth</em>
              [15]*****.
            </p>
            <p>
              This might be the most famous Bible verse ever. Or at least, in
              the top 3. It is, as the verse says, the very beginning.
            </p>
            <p>But what does that mean?</p>
            <p>
              It doesn’t say, “In the beginning, God became,” or “In the
              beginning, God arrived.” Instead, God already was. “In the
              beginning, God created.” He already was, and He was already doing.
              Need more convincing? “In the beginning was the Word.”[16]*****
              The Word <em>already was</em>. So how can it be a beginning, if
              God was clearly there before that?
            </p>
            <p>
              Well, once again, I think this requires a bit of a perspective
              shift — away from how we might perceive time. See for us, time is
              a ray. I say ray because a line by definition extends in two
              directions, but time doesn’t. Not for us. Once it passes, it’s
              gone — you can’t go back.
            </p>
            <p>
              God, of course, is not constrained by time[17]*****. How do we
              know this? Well for one thing, He’s the one who made it.
            </p>
            <p>Don’t believe me?</p>
            <p>
              <em>
                And God said, “Let there be light,” and there was light. And God
                saw that the light was good. And God separated the light from
                the darkness. God called the light Day, and the darkness he
                called Night. And there was evening and there was morning, the
                first day.
              </em>
              [18]*****
            </p>
            <p>
              It’s interesting because God doesn’t create the sun and the moon,
              or any of the celestial bodies for that matter, until the fourth
              day. When He makes them, He even says they will be used to
              separate the day from the night[19]*****. So what’s the deal with
              the light and the dark from the first day?
            </p>
            <p>
              It’s not just light and dark God created. On the first day, God
              literally created, <em>the first day. </em>The very first.
              Followed by the first night.
            </p>
            <p>
              In ancient days time was measured a bit differently than it is
              now. After all, the sundial wasn’t around until 1500 BC[20]*****.
              Hours weren’t a precise measure of time, because it was mostly
              gauged off of feel. The two constants when it came to the passing
              of time, then, were sunset and sunrise- the evening, and the
              morning.
            </p>
            <p>
              You see? On day 1, by creating day 1, God created <em>time.</em>
            </p>
            <p>
              So there was no “before that”. The beginning in verse 1 isn’t a
              beginning in the way we think about it, because time{" "}
              <em>didn’t exist</em>.
            </p>
            <p>
              And that gives us the “how” — as in, how can God spend an entire
              lifetime with me — and also with you, and with everyone else? He
              can because He is above time. He <em>created </em>time. It’s not
              like He’s walking by us, and as we get a minute older, He also
              gets a minute older. The God that is by your side on your deathbed
              is the <em>same God </em>that is by your side at your birth —
              same, not in the identity sense, but literally the same — because
              God is constant.
            </p>
            <p>
              At infinity, we see the true nature of things. At infinity, the
              true nature of God is revealed — and it’s crazy because there
              isn’t a descriptor for it. As God himself says, “
              <strong>I AM WHO I AM</strong>.”[21]***** He just… is. Not was,
              not will be — He is.
            </p>
            <p>
              <strong>An Infinite Omniscience</strong>
            </p>
            <p>
              I’m sure at some point in your life, you’ve questioned why God was
              doing something — a trial, a suffering, a temptation — while it
              was happening. But then afterwards you say something along the
              lines of, “I didn’t get what God was doing <em>at the moment</em>.
              But <em>looking back</em>, now I understand why He let that
              happen.”
            </p>
            <p>
              I want you to ask yourself this question: do you <em>really </em>
              understand?
            </p>
            <p>
              It’s true — God absolutely does work[22]***** in many ways, all
              around us. But I am hoping that by now you see how limited of a
              perspective we have when it comes to the matters of an infinite
              God.
            </p>
            <p>
              You know the verse, “and we know that for those who love God all
              things work together for good, for those who are called according
              to His purpose?”[23]***** It doesn’t say, “and we know that for
              you.” It says, “those who love God.” As in, plural. Let me give an
              example.
            </p>
            <p>
              I didn’t get a job once. It was something I really wanted, in a
              field I had a strong passion for. I felt like I was a good fit,
              and I felt like the interview went really well. So naturally I
              questioned God when I was rejected. At some point afterwards, I
              had this thought: if I had gotten that job, I wouldn’t be doing{" "}
              <em>this </em>now. Not this as in writing this piece, but whatever
              I was doing back then. I’m sure you all have had similar thoughts
              before.
            </p>
            <p>
              What about the person who <em>did </em>get the job though?
              Wouldn’t it be natural that their thought would be, “wow! I really
              see how God moved in my life to provide me this opportunity!” Have
              you ever thought about that person?
            </p>
            <p>
              When we talk about “God’s plan,” it’s not just — “God’s plan for
              me” — but we tend to treat it as such. Call it our
              shortsightedness, or our self-centeredness, but we try to make
              sense of what God is trying to do when that is both not within our
              rights and not within our capabilities. God’s thoughts are not our
              thoughts, and His ways are not our ways[24]*****. This is a{" "}
              <em>good thing</em>, by the way. The depths of His wisdom and
              knowledge are infinite — His judgements are unsearchable, His ways
              inscrutable[25]***** — while ours? They are very much finite,
              searchable, and scrutable.
            </p>
            <p>
              I think it’s helpful to keep in mind that God’s will reaches a
              larger scale than we could ever imagine. We are a tiny being on a
              tiny planet in an immeasurably large universe — a universe that
              God has planned <em>everything </em>in. The multitudes of stars
              and their names are by His design[26]*****, the changing of the
              tides and seasons all according to his command — and yet we wonder
              whether that billboard on the highway is a sign from God to ask
              out a girl, or that person who cut you off is meant to teach you a
              life lesson.
            </p>
            <p>
              I’m not saying these aren’t, by the way. They might very well be
              divine intervention. What I am saying is that we need to stop
              worrying, and start having faith. It’s fine to want to understand
              God’s plan for you — natural, even. The danger comes when we start
              trying to evaluate every little thing that happens, thinking that
              we know what He has in store for us when really, all we are seeing
              is a tiny pinpoint of an infinitely larger picture.
            </p>
            <p>
              But there are things we do know. We know that God’s plan is good.
              Not pleasing, not comfortable — <em>good</em>. It is a plan
              carefully cultivated for each and every person, a plan that spans
              way past our finite window of the world and anything we could hope
              to see with our limited perspective. Sometimes, we might catch a
              glimmer of it — a dim reflection in a mirror, just a part of the
              full picture[27]***** — and it is in those moments that we give
              thanks to the Lord, for He is good.
            </p>
            <p>
              <strong>An Infinite God</strong>
            </p>
            <p>
              I keep stressing how impossible it is for us to even begin to
              comprehend God — His power, His presence, His plans — but I don’t
              want to write all of this and end there. We’re not supposed to do
              nothing and just accept that God is infinitely out of our reach.
            </p>
            <p>
              The natural question then becomes: how do we, as finite beings,
              approach an infinite God?
            </p>
            <p>
              Well, He answers this in scripture — as He does all things. He
              tells us to approach Him with confidence,[28]***** and that if we
              seek Him with our whole heart we will find Him[29]*****. But what
              does it mean to approach with <em>confidence</em>?
            </p>
            <p>
              The Greek word used in Hebrews for confidence is{" "}
              <strong>παρρησία </strong>(parrésia): all out spokenness, i.e.
              frankness, bluntness, publicity — (by implication) assurance. It
              portrays the freedom of someone to speak, act, or approach without
              fear — fear of judgement, fear of stepping out of line, fear of
              rejection. God not only lets us come to Him, He <em>wants </em>us
              to come to Him — and to come without fear of repercussions.
            </p>
            <p>There is one problem.</p>
            <p>
              We are not just finite, we are broken<em>.</em> All of us have
              sinned and fallen short of the glory of God[30]*****. There should
              not be a way for us to approach a holy, perfect God, unless we
              were ourselves holy and perfect. And yet because of His love for
              us, we can.
            </p>
            <p>
              We needed a bridge between the imperfect and the perfect, between
              the finite and infinite. That’s where Jesus comes in. He was both
              the finite man, living among us, <em>and </em>the infinite God.
              Through Jesus and his sacrifice on the cross, our sinful selves
              can come with <em>confidence </em>before the Lord. Even though we
              constantly fall short and turn away from Him, we don’t have to
              fear the judgement we so rightfully deserve for our iniquities{" "}
              <em>because </em>of our Savior.
            </p>
            <p>
              I am sure that what I said here isn’t new to you. Jesus died for
              our sins — this is the core tenant of everything we believe in.
              Yet it’s so easy to lose sight of the magnitude of what this
              means. Jesus connects us — our finite, flawed, single digit beings
              — to <em>infinity</em>. Somehow, we can have an intimate, personal
              relationship with the everlasting God, the Creator of the ends of
              the earth (another immeasurable description, if you think about
              it)[31]*****. Isn’t that <em>amazing?</em>
            </p>
            <p>So then, what should we do?</p>
            <p>Seek him with our whole heart. That’s it.</p>
            <p>Well, I say that, but it’s a lot.</p>
            <p>
              Remember, God makes time for us — we don’t make time for God. He
              is always there. And if he is always there, we must always be
              looking towards him. Of course we’re not going to be perfect — he
              doesn’t expect us to be. That’s why Jesus is so necessary. We can
              try, but we won’t <em>always </em>be seeking after God. When we do
              though, we have to make sure we do it with our whole heart.
            </p>
            <p>
              In the beginning, this is tough. It’s maintaining your daily
              disciplines — reading the Bible, praying, meditating on his word,
              spending solitude with God, fellowshipping with believers. It’s
              actively, repeatedly turning your thoughts away from the things of
              the world — away from the idols of money, or career, or porn. It’s
              choosing God when you could choose other things —{" "}
              <em>especially </em>easier things.
            </p>
            <p>
              God is good because it doesn’t stay this way. Of course it will be
              hard sometimes. Life is life, and faith is <em>not </em>a promise
              of heaven on earth. Yet as we draw near to God, he draws near to
              us[32]*****. The more we seek Him, the more we find Him, and the
              more we find Him, the more we love Him (yep, I took that straight
              out of the song). It is, in the engineer’s world, a
              positive-feedback loop. The more we look to God, the more we{" "}
              <em>want </em>to look to God.
            </p>
            <p>
              It might feel like your walk with God is a struggle. Trials come,
              and life really can seem so, so hard. But it does not have to be
              hard — Jesus says his yoke is easy, and his burden is
              light[33]*****. It is still a yoke, don’t get me wrong. Yokes are
              heavy things. But it is easy and it is light because yokes are not
              meant to be held by one person. They are meant to be held by two.
            </p>
            <p>
              On one side, there’s us — the 1/4th of a second species, the one
              pixel, the lowly farmer. But on the other side?
            </p>
            <p>There’s God.</p>
            <p>
              And He is <strong>infinite</strong>.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
