import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
  const author = "Olivia Hu";
  const credit = "Image by Olivia Hu";
  const title = "Paint With Me";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
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
            <h4 className="font-bold">Day 1 09:34</h4>
            <p>The first lines on a fresh canvas are the most daunting.</p>
            <p>
              On a pristine, white surface, an artist makes their first marks.
              It’s an act of courage, akin to defiance — they believe they can
              take this perfect surface and make it <em>more </em>beautiful.
              It’s presumption, or maybe hope.
            </p>
            <p>So in fear, in faith, I lay my first strokes.</p>
            <Image
              className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
              src="/issues/26s/18-paint-with-me-1.webp"
              width={600}
              height={600}
              alt="article image"
            />
            <h4 className="font-bold">June 2004</h4>
            <p>
              On the day your daughter is born, purity, truth, and beauty
              intersect.
            </p>
            <p>
              She is wrinkly and red against white sheets, affronted by the
              harsh reality of the world. She is pure — and it is true, she is
              beautiful.
            </p>
            <p>
              You will watch her skin grow pudgy and flush, you will cradle her
              head to protect her soft skull. You will tuck her curled toes into
              tiny little socks, you will hold the camera as she takes her first
              steps.
            </p>
            <p>
              She laughs and sounds out garbled Mandarin, a constant source of
              curiosity to her older brother. Together, they color your home
              with bright peals of laughter. This simple life comes at a cost —
              the marital scuffles, the compromise of assimilation, the family
              and familiarity left behind, the daily grit, are no small burden.
              Yet, beneath the endless struggle you find a kind of threadbare
              joy. Your wife cooks dinner, and steam rises with smells from a
              home overseas. Your children are endlessly delighted, emboldened
              by their ignorance. Still unshaped in their youth, with infinite
              futures ahead, they are completely free.
            </p>
            <h4 className="font-bold">Day 1 10:12</h4>
            <p>
              I darken the lines, and forms begin to emerge. My teacher always
              reminded me to lay down decisive, clean strokes. Go slow—stop
              making those inefficient, sketching motions. You’ll only produce
              hairy lines and messy shapes. It just confuses your artwork; you
              need clear lines to see where you’re going.
            </p>
            <p>
              But I don’t want to. I sketch fuzzy lines, I hesitate, I erase and
              try again. I can’t help my indecision. I can’t tell if a line is
              accurate, much less <em>good</em> or <em>beautiful</em>. The
              result is vague and noncommittal.
            </p>
            <p>
              But canvas is forgiving, and erasure grants a clean slate. So I
              dutifully try again.
            </p>
            <Image
              className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
              src="/issues/26s/18-paint-with-me-2.webp"
              width={600}
              height={600}
              alt="article image"
            />
            <h4 className="font-bold">May 2021 </h4>
            <p>
              It’s a Saturday afternoon, and dappled sunlight flickers across
              the dashboard. Your daughter is in the passenger seat, stifling
              tears. The air conditioner throbs with gusts of cold wind; the
              radio holds an aloof silence. You don’t know what to say.
            </p>
            <p>
              You are driving back from the RMV; she just failed her driver’s
              license exam. She’s inconsolable, maybe more than is warranted,
              but as a father, your compassion isn’t bound by reason.
            </p>
            <p>
              You know that, like a newborn bird, this attempt is but the first
              of many failures. Countless trials have yet to unveil themselves,
              and though she will struggle, she’ll come out stronger for it.
              She’ll take this challenge in stride, drive every road in town,
              practice hundreds of parallel parks. In a few months’ time, she’ll
              retake the exam and pass.
            </p>
            <p>
              The whole time, you’ll watch from the passenger seat, never
              wavering. Even as she panics or oversteers or blames you for both
              blocking her view and not checking for cars, you won’t overstep,
              and you won’t grow impatient. Because for all her gripes, she
              still needs you, so you’ll stay right where she needs you to be.
            </p>
            <p>
              All this you know, but the words will not come. So you do what you
              can, and you drive home in silence.
            </p>
            <h4 className="font-bold">Day 1 14:23 </h4>
            <p>The first foray into color is yet another act of courage.</p>
            <p>
              Once pigment is applied, there’s no going back. It was
              conceivable, with pencil and canvas, that enough erasing could
              return the canvas to its original, unblemished state. No mistake
              was irreversible.
            </p>
            <p>
              But paint brings us into an entirely new realm. Once the canvas is
              stained, it’s impossible to revert. Even the thickest layer of
              Titanium White cannot fully conceal an errant mark. My teacher
              used to warn me: start lightly, dilute the acrylic paint and treat
              it like watercolor. Build shadow with layers, not concentrated
              colors, and hesitate until the last moment to add dark shades. And
              never, ever, use pure black.
            </p>
            <Image
              className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
              src="/issues/26s/18-paint-with-me-3.webp"
              width={600}
              height={600}
              alt="article image"
            />
            <h4 className="font-bold">October 2021</h4>
            <p>
              It’s 7:02 am. There’s some time before the day will begin, but the
              morning is stacked with meetings, to-dos, and coworkers to manage.
              You heave a sigh.
            </p>
            <p>_</p>
            <p>
              Down the hall, your daughter is also awake. Her eyes blink open to
              see a black hole yawning overhead. Assignments, college apps,
              tournaments, recitals, mentees, leadership responsibilities,
              relationships. Failure, judgement, anxiety, self-esteem,
              helplessness, hopelessness, exhaustion. All swirling into the
              abyss, sucking all color from the room. She is late for school.
              She closes her eyes again.
            </p>
            <p>
              You don’t know that her mind is teetering at the extremes,
              romanticizing oblivion, anything to escape the excruciating
              present. You don’t <em>realize</em> that, though you’re a mere
              twenty feet away, she feels utterly alone.
            </p>
            <h4 className="font-bold">Day 1 17:27</h4>
            <p>
              So I start with broad strokes of watery acrylic, blocking out
              where the colors will go. Greens and tans to set the scene, reds
              and blues for the focal subjects. The sketch acquires a kind of
              depth, as irrevocable strokes stain the canvas. The absence of
              pigment implies where light hits the scene, gently. But it is not
              enough. I want to see contrast, I want to see textures drawn out.
              I can’t help myself—
            </p>
            <p>In I go with the darks, and a creature emerges.</p>
            <h4 className="font-bold">December 2021</h4>
            <p>
              The front door shudders closed, announcing her return. From your
              office, you hear terse fragments of conversation, then heavy steps
              up the stairs and another door decisively shut.
            </p>
            <p>
              When did the years fly by? Your daughter grew up in an instant,
              and now carries a throbbing turmoil inside her. The curious
              chatter and playful glee are barely memories, replaced by a color
              wheel of anxious outbursts, aloof frowns, and biting words.
            </p>
            <p>
              Tonight is the same. The dinner table is set, and she enters, her
              brows scrunched, then expressionless. You too, are brittle after a
              long day. You turn on the TV. Distraction, like a blanket, and
              apathy, like an ointment. The rest of the day is just a buffer
              before the next workday. Her frustration, you think, is a problem
              only solved by time. This moment is about surviving.
            </p>
            <p>
              Mother and daughter look at each other, then at you, but your eyes
              are fixed on the screen. They quietly pray over the meal — the
              practice still new, almost self-conscious, amidst the usual dinner
              routine — then you begin to eat. The TV chatters on.
            </p>
            <p>
              If only you knew: her time is crammed full with commitments and
              to-do’s and thought after restless thought. Time is no salve, but
              a constant enemy. Her efforts feel unseen, her self-hatred
              unexpressed, her endeavors insufficient and fruitless — every
              single one. She sees her mother, who is earnest but unable to
              understand, and her father, who plainly refuses to make eye
              contact. She bundles her feelings in two fists and looks down at
              her bowl, completely lost.
            </p>
            <h4 className="font-bold">Day 2 10:45</h4>
            <p>
              At this moment, the seal has been broken. The darks have been
              broached, and the figure is emerging: now it is time for detail
              work. I dip my brush into a rich Yellow Ochre, then pacify it with
              white. The first stroke of undiluted paint touches the canvas.
              Slowly, a small, orange maw takes shape. Cadmium Red for the edges
              and umber brown to deepen the gullet. The beak protrudes harshly
              from a vague and feathery background.
            </p>
            <h4 className="font-bold">December 2021</h4>
            <p>
              The ads break, and you look up to notice empty seats and
              half-eaten plates. Murmurs and halting tones are audible from
              upstairs. You can sense that something has come loose.
            </p>
            <p>
              At her doorway, you find her mother hesitant, peering in. The
              hallway light casts over a form covered by quilts, but her face is
              still hidden in shadows.
              <em> what’s wrong</em>, her mother entreats, but there is only a
              quivering silence.
            </p>
            <p>When she finally speaks, her voice is fragile and young.</p>
            <ul className="list-none pl-10">
              <li>
                <em>— you don’t </em>see
                <em>
                  {" "}
                  anything, you don’t even see me. you see, mom? when we talk to
                  him, he doesn’t answer.{" "}
                </em>
              </li>
              <li>
                <em>— even if I explained it now, you wouldn’t get it. you </em>
                don’t understand.
              </li>
            </ul>
            <p>
              Bitter, broken words flung out, seeking their target.{" "}
              <em>You don’t understand</em> — and how could you? A life free
              from food stamps and freezing nights, steeped in American
              comforts, where the biggest concerns are studies, friends, a
              failed license exam. These privileges that you sacrificed for, she
              swims in blindly because it is all she has ever known.
            </p>
            <p>
              Still, you relent: <em>we’re sorry</em>.
            </p>
            <p>
              You feel a tightness at the back of your throat. Your feet resist
              the urge to leave, quickly.{" "}
              <em>we’re trying, and you can always talk to us.</em>
            </p>
            <p>
              <em>it’s okay</em>. She turns and burrows deeper.{" "}
              <em>it’s too late, anyway.</em>
            </p>
            <Image
              className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
              src="/issues/26s/18-paint-with-me-4.webp"
              width={600}
              height={600}
              alt="article image"
            />
            <h4 className="font-bold">Day 2 15:44</h4>
            <p>There, a little bird.</p>
            <p>
              I spend an afternoon toiling over the small head, moving colors
              back and forth, comparing again and again with my reference. The
              beak is the center, the focal point that draws the viewer’s eye,
              so it must be perfect. These few square inches hold the energy and
              movement that anchor the entire piece.
            </p>
            <p>
              But as I daub and worry over the canvas, the colors become muddy
              and illegible. I check my reference again, and the image looks
              completely different. Where is the translucence, where is the
              depth? I seem to have lost the intuition that guided my first
              strokes.
            </p>
            <p>
              For the first time, fear sets in. What if I’m unable to finish?
              What if I’ve ruined this large, 24” x 30” canvas — a gift from my
              art teacher — by painting a garish, orange triangle? The little,
              misshapen bird stares helplessly back at me.
            </p>
            <p>
              I sigh. If you get stuck, it’s okay, my teacher would say. Rest
              your eyes for a bit, go outside and look at nature. Work on
              something else. And later, when you’re ready, you can come back to
              work on this one.
            </p>
            <p>
              I am doubtful, but sure, I’ll work on something else. So I shift
              my attention to the foreground, and set to drawing out streaks
              that will become the bird’s nest.
            </p>
            <h4 className="font-bold">December 2022 – May 2023</h4>
            <p>
              Your daughter returns from her first semester of college
              exuberant. Her eyes are lucid and hopeful, her mouth is filled
              with stories, her body still charged with momentum. She rushes
              through the holidays and she flees back to campus, where the
              community she loves awaits her.
            </p>
            <p>
              In May, she is home again, tanned by the Georgia sun. She carries
              the sweet aftertaste of goodbyes, and you can see that a part of
              her remains on that campus, where she is building a new home. In a
              matter of days she has left again, to France this time, each
              flight bringing her further away.
            </p>
            <p>
              When she first got her acceptance to Georgia Tech, nothing
              changed. You’ll find out later — she opened it alone in her room,
              still blurry-eyed from the last rejection. She refused to open any
              letters with you, because the shame of failure was too great.
              Praises or consolations — nothing stuck. It wasn’t prestige she
              wanted, or even pity, but escape from her own disappointment. Was
              that Georgia? Who could say.
            </p>
            <p>
              She’ll find out later that yes, it was. Not in Georgia per se, but
              in the faith she discovered there. She’ll learn that her value
              isn’t in her accolades or your approval or even her own
              self-regard, but in her faith, which is a relationship with a God
              of unconditional love.
            </p>
            <p>
              She didn’t know that, though, when you said goodbye. Barely a
              freshman, she knew so little. All she saw was the distance between
              you, which niceties and gratitude could not mend. So she held fast
              to her bitterness and stayed stiff beneath your arms. You and her
              mother flew back to Boston. It was bittersweet, but you both felt
              it: you finally had room to breathe.
            </p>
            <Image
              className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
              src="/issues/26s/18-paint-with-me-5.webp"
              width={600}
              height={600}
              alt="article image"
            />
            <h4 className="font-bold">Day 3 11:49</h4>
            <p>
              Gradually, I am making my way around the nest. It is a wreath of
              branches, arching across the canvas, unruly and meticulously
              detailed. Each strand is a braid of tan, then shadow, then
              highlight, repeated again and again until a texture distinguishes
              itself from the canvas. If I stop for a moment, I’ll lose my
              rhythm, or else lose my spot in my reference, so I keep painting,
              keep layering, until I’ve reached the end of the nest.
            </p>
            <p>
              Sometimes, I’ll look back at the nest and am surprised by the
              level of detail and realism I achieved — it actually looks like a
              nest! And I think, “Really, I painted that?”
            </p>
            <h4 className="font-bold">Day 3 13:21</h4>
            <p>
              Now, I begin to study the eggs, their smooth untextured surface,
              and I feel an exhaustion setting in. I start at the shadow,
              Cerulean Blue with just a touch of black, and wait — the color is
              wrong. The blue is far too rich; it throws the entire composition
              off balance. I check the reference again and find that the egg’s
              seemingly blue surface is really a more muted, desaturated gray.
              Regret begins to bud at the back of my throat; I hastily apply a
              coat of white, but the color refuses to budge. My teacher’s words
              are like a hex in my mind —{" "}
              <em>you went too far with the darks</em>.
            </p>
            <h4 className="font-bold">October 2024</h4>
            <p>
              The days at home were quieter at first, then just quiet. You and
              her mother settled into familiar routines, in a house now twice as
              large. Evenings are a serene pool with the occasional ripple: a
              talk show murmuring in the background, the heater clanking on and
              then off again, slippered footsteps shuffling back and forth, as
              the night slowly dissolves into silence.
            </p>
            <p>
              The routine only breaks with the weekly appointment, when you
              call, then call again, to catch a glimpse into your children’s
              busy lives. Your daughter is walking home, the brief space between
              meetings and more work, and your son is just in from dinner plans.
              Your lives continue along tangent lines, occasionally mingling but
              always tunneling forward.
            </p>
            <p>
              Until one semester, she calls. That fragility is in her voice
              again. She is asking for help; you can’t see it, but on the other
              side of the phone, the abyss has reopened behind her. She has come
              to the end of herself.
            </p>
            <p>
              <em>whatever you need</em>, you both reassure her. Because you
              have plenty, and lately have found no one to give it to.
            </p>
            <p>
              This time, when your daughter returns home, her shoulders are
              stooped and cautious. Gone is the stiff pride and displays of
              independence. At home, she is nothing but your daughter.
            </p>
            <p>
              In the evening, she helps set the table. The TV is turned off. She
              is quiet, and braids herself into the night’s ebb and flow. You’re
              not entirely sure what goes on in her head, but there’s a certain
              translucency now. The struggle and resentment have faded, and she
              no longer assumes you don’t understand.
            </p>
            <p>
              Time and distance have softened the friction, but there is also
              something else. Yes, you’ll find out: a new hope tethers her,
              strings her along, and urges her to keep going. As the weeks pass,
              you slowly see the fight return to her eyes, and she begins to
              ready herself again. She knows that this is, and will always be,
              her home. But still, she ups and leaves again, because the world
              has come to need her.
            </p>
            <h4 className="font-bold">Day 3 13:26</h4>
            <p>
              I lean back. No, the dark mark is redeemable. I apply a coat of
              white, then another, this time denatured with tan. The blue
              splotch gradually morphs into a shadow, a natural pedestal to the
              egg’s robin blue. You need more contrast, my teacher once told me.
              It’s all gray and murky, and you’re hesitating. You need dark
              parts to make the light parts bright.
            </p>
            <p>
              Of course, she was right — the shadow enriches the blue-gray of
              the egg and bodies out the spherical shape. If I focus on
              something else, then look back, the dark splotch is almost
              indistinguishable. Miraculously, it has been fixed.
            </p>
            <Image
              className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
              src="/issues/26s/18-paint-with-me-6.webp"
              width={600}
              height={600}
              alt="article image"
            />
            <h4 className="font-bold">Day 4 09:28</h4>
            <p>
              When I return to my painting the next day, I find I’m able to
              focus on the birds again. The long detour to the nest, the eggs,
              and the foreground have reset my eyes. Behind the central bird,
              another small chick raises its head from the shadows.
            </p>
            <p>
              The paints from previous days have developed a hard shell, so I
              squeeze fresh dollops of acrylic onto my palette. Yellow Ochre on
              the tip of my brush again, I begin to trace out a second beak.
            </p>
            <h4 className="font-bold">August 2025 – December 2025</h4>
            <p>
              Not long ago, your nephew had his first child, and you, by
              extension, became a grandfather. In your free time, you began to
              reorganize your photo archives, starting from the year your son
              was born. Between messages about logistics, dental insurance, and
              family updates, you shared your discoveries.
            </p>
            <ul className="list-none pl-10">
              <li>— “Brian on May 16, 200x”</li>
              <li>— “mom recovering from Oli’s birth”</li>
              <li>— “Oli lost her first tooth 😊” </li>
              <li>— “Dec. 19, 2012”</li>
              <li>— “Brian in Tian An Men Square in Beijing”</li>
            </ul>
            <p>
              Something was thawing, and your daughter could see it. Between the
              rush of classes and obligations and endless debt to time, she
              noticed:
            </p>
            <p>
              A fledgling interest in golf, a new waffle knit sweater. You began
              to plan trips, revisit old projects, and declutter the house. You
              let your mind venture freely, with renewed curiosity about the
              world. You and your wife went out for your wedding anniversary,
              something special, this time.
            </p>
            <p>
              Your daughter saw this, how, like a paint-covered brush dipped in
              clean water, new colors blossomed in your life. Now, though your
              son and daughter have departed, the delight you once had is slowly
              returning. This is where your home is. And she knows — you will
              always be there.
            </p>
            <Image
              className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
              src="/issues/26s/18-paint-with-me-7.webp"
              width={600}
              height={600}
              alt="article image"
            />
            <br />
            <div className="font-sans font-light md:mx-36 text-[10pt] my-24 leading-6">
              <p>dad,</p>
              <p>
                I see it now. All my life I have struggled to grow up, perhaps
                not unlike these birds. All my life I struggled to be your
                daughter. I fled from the parts of me that looked like you,
                afraid of the hurt that might be perpetuated through me. So now,
                I am learning how to be a child.
              </p>
              <br />
              <p>
                I didn’t realize it at first, but writing this piece became an
                exercise in empathy as I sought to understand you better as a
                father. Maybe, as a byproduct of growing up, it was inevitable
                that I’d start to see things from your point of view. But I know
                my own stubbornness and the bitterness, hurt, and jaded
                misunderstanding that I harbored these past four years. I also
                know that these emotions only came to unravel because of my
                faith. And don’t worry, this isn’t an attempt to convert you to
                Christianity; because there has been distance between us, I
                wanted to share these reflections with you.
              </p>
              <br />
              <p>
                dad, it has been so piercing to realize the kind of father you
                have been to me. When I look a little beyond myself, I see that
                you have been incredibly good. Our relationship has not been
                perfect, but it has been good, and it was in my own blindness
                and pride that I failed to see that.
              </p>
              <br />
              <p>
                It has been similar in my Christian walk. There were things I
                had learned about the God of Christianity: he is merciful,
                faithful, steadfast, and loving <Reference number={1} />. But
                during the past few years, I’ve been coming to <em>know</em>{" "}
                this God, as a father, as a daughter. These truths became the
                substance of my relationship with him. He is my heavenly Father.
                His great and perfect love is offered to me; in fact, it has
                been pursuing me since my very birth. And, dad, this love is
                offered to you too.
              </p>
              <br />
              <p>
                <em>
                  “See what kind of love the Father has given to us, that we
                  should be called children of God; and so we are.”
                </em>{" "}
                <Reference number={2} />
              </p>
              <br />
              <p>
                I don't think I ever explained this clearly, but this is what I
                mean: our heavenly Father made us to be his children, but in sin
                we rejected the relationship he offered. So often we fail to see
                this, because the world is shiny and tempting, and it bombards
                us with instant solutions so that we’ll never notice the
                God-shaped hole in our hearts. Instead we pursue our own
                desires, whatever we lay our eyes upon. It’s a historical truth
                and a contemporary one. Despite the heartache this causes, God
                refuses to give up on his creation. To reconcile us to him, he
                chose to give up his own son to demonstrate the depth of his
                love for us.
                <Reference number={3} /> God loved, and sought our adoption. God
                spoke, and called us his children. And so we are.
              </p>
              <br />
              <p>
                It took me so long to understand this. It took me so long to
                stop stiffening my shoulders and fleeing far away from home. I
                realize now that all this time, you have been letting me go. I
                won’t forget: you have been patient, and you have provided for
                me from the start. You may be more like Him than you realize; in
                thinking about my relationship with you, I am also learning
                about God’s fatherly patience.
              </p>
              <br />
              <p>
                <em>
                  “The Lord is not slow to fulfill his promise as some count
                  slowness, but is patient toward you, not wishing that any
                  should perish, but that all should reach repentance.”
                </em>{" "}
                <Reference number={4} />
              </p>
              <br />
              <p>
                I know, because I am your daughter, that you have felt it too.
                The question — is this it? — or the semblance of peace — I’m
                secure now because of this — these are all symptoms of that
                God-shaped hole. Christianity, or faith, isn’t synonymous with
                organized religion or strict rules or cryptic texts about
                2,000-year-old stories. It’s merely a door held open: to
                understanding, to purpose, and to a relationship with our
                Creator.
              </p>
              <br />
              <p>
                dad, the same God is waiting for you, to be His son and to find
                a true peace. He is waiting to show you this too: this is where
                your home is.
              </p>
              <br />
              <p>
                As you have been here for me, He will also be there for you.
              </p>
              <br />
              <p>
                all my love,
                <br />
                olivia
              </p>
            </div>
            <Image
              className="w-full h-full object-cover md:object-contain my-5 md:my-144 md:max-h-[70vh]"
              src="/issues/26s/18-paint-with-me.webp"
              width={600}
              height={600}
              alt="article image"
            />
            <h4 className="font-bold mb-20">July 2026</h4>
            <p>
              Three thousand miles west, your daughter will set down her
              suitcase in an empty apartment room. Seattle air will carry
              sunlight in through the window. White walls and unfurnished
              floors; there’ll be a barrenness — a freshness — that speaks of a
              new chapter.
            </p>
            <p>
              This final flight will carry her further than ever before, not
              just in distance, but in the undetermined stretch of time before
              her next return. You won’t know what she is thinking as she
              discovers the colors that will define her new life. You won’t know
              that she is praying, often, for you.
            </p>
            <p>
              But you will also be closer than you have ever been, because the
              words have been spoken aloud, and the distance, like a loosened
              knot, will finally be drawn closed.
            </p>
          </div>
        </div>

        <div className="mt-16 font-serif text-sm space-y-2">
          <p>
            <b>References</b>
          </p>
          <Footnote number={1} text="Exodus 34:6" />
          <Footnote number={2} text="1 John 3:1" />
          <Footnote
            number={3}
            text="John 3:16-18, Romans 5:10-11, Romans 8:31-39"
          />
          <Footnote number={4} text="2 Peter 3:9" />
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
