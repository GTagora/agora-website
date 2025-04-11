import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
  const author = "Catherine Tian";
  const credit = "Photo by Daniel Guo and Catherine Tian";
  const title = "Running Out of Time";
  const date = "April 23, 2025";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/25s/running-out-of-time.webp"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            “Can I join you on your run today?”
            <br />
            <br />
            My friend asks me this as I begin to tie my first shoelace. This is
            an unexpected request — I typically go on my spur-of-the-moment runs
            alone. But I haven’t seen him in a while and am excited for his
            company. I eagerly say yes.
            <br />
            <br />
            The weather is beautiful today. The sun has the golden warmth of an
            11:00 am hug, and the wind gently counteracts its heat as though the
            two are dancing. It is as if the sun and the wind are also running
            around — like two children playing tag. Joyful. Inviting.
            <br />
            <br />
            I finish tying my shoes, phone in hand, shifting my weight from one
            leg to another as the pre-run anticipation begins to crash over me.
            I feel adrenaline race through my veins, reminding me why I love
            running.
            <br />
            <br />
            “Hey come on. Let’s go let’s go let’s go! We have to get back before
            lunch. I want to get going.” I impatiently hurry him along.
            <br />
            <br />
            My friend smiles without a word and ties his shoes on. His sneakers
            are black, simple in design with the bottoms deeply soiled. Their
            wear marks him as a veteran runner who had put in the miles, each
            step filled with love for the sport. First left, then right, I watch
            him meticulously take his time knotting his laces. My skin crawls
            with impatience. I stare at my watch, catching its gaze just in time
            to see it blink from 11:00 to 11:01.
            <br />
            <br />
            I can’t wait any longer.
            <br />
            <br />
            Finally, we set off, him on my left, stride for stride as we slowly
            ease into what I can immediately tell will be a great run. My feet
            hit the pavement with a soft “thump” every second, him doing the
            same by my side. We fall into an easy rhythm, creating a steady
            metronomic beat that matches the ever-increasing cadence of my heart
            waking up from its slumber.
            <br />
            <br />
            The familiar pavement welcomes me back as I continue down my regular
            route. The uphills and downhills come like waves. I know which
            crevices to avoid and where to shift my weight back or brace my
            knees. I imagine I am a surfer, plunging headfirst into the rolling
            terrain I know all too well, becoming one with the waves, an
            invitation home.
            <br />
            <br />
            I get ready to make a left, glancing at my watch just as we hit the
            one-mile mark. Right on schedule. My feet instinctively guide me
            towards the trail, but my friend veers right, in the opposite
            direction I was headed. He looks back and makes sure that I am
            behind him. Reluctantly, I follow.
            <br />
            <br />
            Irritation courses through my veins as we deviate from my usual
            path. I’m now off course, and just as I was getting a good stride.
            All at once, the once gentle warmth of the sun becomes too hot on my
            back. Sweat beads stick to my face, each droplet clinging distinctly
            to my skin. The wind blows my hair into my face, fanning flames of
            annoyance. A truck rushes past nearby, a few decibels too high for
            my liking. My friend looks at me, somehow unbothered by all these
            nuisances. He knows I am irritated; I’m sure of it. My pace is
            quickening — smoke of the fire inside me must be billowing out
            behind. But the feeling is quickly suppressed. I remind myself to
            remain level-headed, enjoy the moment, and follow the lead of
            someone who objectively has more running experience.
            <br />
            <br />
            We continue down the new trail, this one unpaved and slightly muddy.
            As I glance at my shoes, I notice a thin layer of brown dirt inching
            its way along the pale blue treads of my sneakers, turning my
            semi-new shoes a murky brown. It's as if the hills of the pavement
            have agitated my soul. Another bout of irritation catches me off
            guard.
            <br />
            <br />
            Regaining my footing, now acclimated to the new terrain, I turn to
            ask my friend if he wants to pick up the pace so we can make up for
            some of the lost time. I know he can run faster than me; the beads
            of sweat on his forehead are a mere courtesy to my soon-to-be fully
            drenched black racer tank. But where he was once by my side,
            matching me stride for stride, he is nowhere to be found. I rewind
            to moments before, realizing that the sound of our feet running
            together has been cut in half as it turned into just the sound of my
            shoes hitting the ground.
            <br />
            <br />
            Slightly frantic, I stop. Heart pounding, I feel its every stomp as
            I gasp for breath, partially from fear, partially as my heart
            attempts to helplessly regain its normal rhythm.
            <br />
            <br />
            I begin to retrace my steps, hoping to find any sign of where my
            friend might have gone. About twenty steps back, I finally see him.
            My fear transforms back into annoyance. I speed up towards him,
            ready to ask him why he decided to stop and leave me on a random,
            dirt-ridden, unknown path. And now we’re going to be late for lunch.
            It’s already 11:35, and we are barely halfway done with the miles I
            had planned to run.
            <br />
            <br />
            I open my mouth, ready to let it all out, because I’ve quite
            honestly had enough of this spontaneity, when I see his eyes fixed
            on a house not twenty yards away.
            <br />
            <br />
            The house is blocked by a decaying wooden fence, its lopsided beams
            a reflection of the many families that it has dedicated itself to
            protect. But the house’s focal point is its garden. Small and
            humble, the garden has the air of a middle-aged mother. Baby red
            tomatoes growing in one corner, the sprouts of bell peppers in
            another. Judging by how carefully it's kept, I presume the mother
            must be a recent empty-nester who now nurtures her plants just as
            she tended to her children, hoping that if she watered them well,
            they too would one day bear fruit.
            <br />
            <br />
            I look to the side at my friend again. He is focused on this house,
            this garden, a small smile playing on his lips. So I turn back,
            mirroring his posture, trying my best to see what might be
            intriguing enough to justify standing here, looking at some random
            lady’s house.
            <br />
            <br />
            My eyes follow his line of sight to rest on the tomato plants again.
            I stare for a while, and a strange thought strikes me. These
            tomatoes are ripe, and they are quite red. It’s the same shade of
            red as the Lunar New Year’s envelope I received just days ago from
            my parents, a tradition of hope and prosperity.
            <br />
            <br />
            Is that what the mother also hoped for her children when she planted
            them?
            <br />
            <br />
            A pair of birds–cardinals, from the looks of it–land at the edge of
            the garden. It’s picturesque, how the birds and plants balance each
            other. The birds rest delicately, perfectly balanced on the edge of
            a thin fence. The tomatoes are slightly paler than the red of the
            cardinals, a detail I had never put together. But the two shades of
            red complement each other, indicative of a central artist.
            <br />
            <br />
            I stare at the trees. The trunks. They are brown. But not a dull,
            rotting brown like the fence. The fence has the brown of a
            grandfather who has gone through battle and has been giving his
            service willingly to the occupants of the families he watches over.
            The trees, however, are an intermediate sort of brown: an
            in-between, youthful brown, as if the tree itself was preparing for
            something to come.
            <br />
            <br />
            Was the tree also in its season of waiting?
            <br />
            <br />
            I feel a strange sense of deja-vu, as if this was not the first time
            I had seen something of this shade. I look down, my eyes once again
            met with the dirt that has now managed to crawl up to the sides of
            the laces on my shoes. But the brown looks brighter now that I am
            standing, not running. They look lived in, like my friend’s. I
            wonder how many different dirt roads his shoes have been down.
            <br />
            <br />
            As I stand there watching the scene before me unfold, I am made
            aware of my own heavy breathing. I place my hand over my chest, only
            just realizing how fast my heart is beating and how hard I have been
            breathing. I think back to running just minutes earlier, realizing
            that my pace had increased along with my exasperation without my
            knowing. Had my friend not stopped, I know I would have tired myself
            out on this unknown path.
            <br />
            <br />
            His eyes meet my gaze now as if he knows what I am thinking. Then he
            turns around, indicating that he is ready to continue our run. With
            one last glance at the garden, I do what I should have done from the
            beginning.
            <br />
            <br />I follow Him.
          </div>
          <div className="mt-8 leading-6">
            <p className="mb-3 font-bold">Inspiration/References</p>
            <li>Genesis 5:24 (Enoch walks with God)</li>
            <li>
              Luke 19: 1-10 (Jesus passes through Jericho and meets Zaccheus)
            </li>
            <li>Psalm 37:7</li>
            <li>Matthew 11:28-30</li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=aiIduOvFEtI&t=304s"
                className={styles.link}
              >
                Sermon - When Your Mind Won’t Stop
              </a>
            </li>
            <li>Psalm 84</li>
            <li>Psalm 46:10</li>
            <li>Job 12:7-10</li>
            <li>
              <b>Psalm 32:8</b>
            </li>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
