import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Elliot Chen";
  const credit = "Photo by Name";
  const title = "The Hero's Map: Forlorn Valor";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/the-heros-map.webp"
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
            <p>This January was the first time I ever ran a pen dry writing.</p>
            <br />
            <p>
              A year ago, I took to scribbling down whatever interesting
              philosophical or story ideas came my way, in an effort to write
              more consistently and boost my creativity. As opposed to
              brainstorming in Google Docs or merely praying in my head, I have
              found a deeper satisfaction in writing down prayers and story
              notes with
              <b>
                <i> ink</i>
              </b>
              . Part of it is the challenge: writing takes more physical effort
              and thought than typing. &ldquo;H&rdquo; takes three strokes
              instead of a single tap, and autocorrect doesn&rsquo;t exist,
              which means I actually have to think about the spelling of a word.
              In a world oversaturated with stupefying convenience, I&rsquo;d
              rather bleed my pens dry rather than bleed my brain dry. It turns
              out the inconvenience of cognitive load is <i>quite</i> helpful in
              keeping your brain from dissolving like snow.
            </p>
            <br />
            <p>
              Running out of ink reminded me of drawing &ldquo;Herose&rdquo;
              (heroes) maps on blank sheets of paper in kindergarten with
              markers. They were treasure maps, except heroes used them to reach
              whatever goal they had in mind, much in the style of{" "}
              <i>Dora the Explorer</i>. I don&rsquo;t recall much besides the
              colored fruits dotting stick plants on a sparse canvas. Of course,
              I don&rsquo;t have much proof beyond{" "}
              <i>&ldquo;trust me bro.&rdquo;</i> Though the pages which have
              absorbed that ink have surely rotted away in the landfill near the
              Front Range, the heroic ideals expressed in them remain engraved
              in my heart.
            </p>
            <br />
            <p>
              I suspect a similar instinct courses in the subconscious of Homo
              sapiens. At least, those who have evaded the&nbsp;
              <i>abolition of man</i>&nbsp; and the degeneration into men
              without chests. Every great culture, including ours, has had its
              heroes and its role models. Everyone knows about Batman, Iron Man,
              and Spider-Man (and He-man), and can probably list a dozen more.
              However, in recent times, our mainstream stories are no better
              than grease stains on the stories we once had: Hollywood continues
              to churn out Marvel Slop, we see live-action remakes of old movies
              but with a modern agendas, and suffer the subversion of respected
              stories and characters at the hands of an insufferable Mary Sue.
              The quality of our heroes and stories is both a damning indicator
              and cause of our society's inability to project a meaningful
              vision of strength and virtue for men and women. No wonder that
              despite such an abundance of heroes, we are more lost than ever
              holding nonsensical &ldquo;hero&rsquo;s&rdquo; maps. A certain
              blithe nihilism has settled upon our modern societies. As we hop
              from pleasure to pleasure, we chase fragments of meaning. Some
              imagine themselves as rebels against tyranny, fighting for a good
              cause by waving little flags and squealing online. Others give up
              entirely and fall into a pathetic life of sedentary hedonism,
              always yearning but never satisfied. It is for these reasons I
              conclude we are a weak people with no compelling narrative for our
              lives, because we don&rsquo;t understand what ordered strength
              looks like in men or women.
            </p>
            <br />
            <p>
              Even as Christians, we are not immune to this stain of insanity.
              We like to say that&nbsp;
              <i>&ldquo;God fills a God-sized hole in our hearts,&rdquo;</i>
              &nbsp; but if that were true, why do we still wander so much? Why
              do we still ask,{" "}
              <i>&ldquo;what does God want me to do with my life?&rdquo;</i>
              &nbsp; The existence of a discipleship problem in our churches
              suggests that we don&rsquo;t have many answers either. In the face
              of uncertainty, I think a different illustration is in order. Our
              lives are an unfinished tragedy, but our faith provides us the
              metaphors and the framing to turn our story of failure, neglect,
              and avoidance, into one of joy.
            </p>
            <br />
            <p>
              In service of a more symbolic approach, I aim to investigate the
              patterns which emerge from the prototypical fairy tales directed
              towards boys and girls: &ldquo;slaying the dragon&rdquo; and
              &ldquo;taming the beast&rdquo; respectively. Though old and
              possibly misguided, they may contain the echoes of truth we have
              forgotten. So join me in my quixotic quest to rediscover strength,
              the strength which turns boys and girls into men and women.
            </p>
            <br />
            <p>
              <b>How to Slay a Dragon</b>
            </p>
            <p>
              The male archetypal story tends towards the hero exerting physical
              power upon the world to achieve a variety of goals, going on
              side-quests to earn that power if they don&rsquo;t already have
              it. Most of them can be expressed as a &ldquo;knight setting out
              to slay a dragon&rdquo; tale:
            </p>
            <ol>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;1. A dragon threatens the kingdom. Our
                knight sets out on his quest
              </li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;2. Along the way the knight faces trials
                which test and strengthen him
              </li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;3. Upon reaching the dragon&rsquo;s
                lair, he battles the dragon and kills it
              </li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;4. Our knight returns victorious, and
                receives great honor and many awards
              </li>
            </ol>
            <br />
            <p>
              Examples of these tales abound, since any story with action or
              fighting in it can readily be reduced to this tale. This is the
              story of Moses facing off with Pharaoh, of David defeating
              Goliath, of Nehemiah fending off enemies to rebuild the temple.
              This is Batman versus the Joker, the Avengers against Thanos, the
              superhero fighting the villain. The dragon can be used to
              represent any sort of external problem. And slaying that dragon is
              the primary (and sometimes singular) goal of our protagonist.
            </p>
            <br />
            <p>
              The ubiquitous nature of this tale gives it broad appeal, but at
              its core, solving external problems seems to seize the attention
              of males in particular. Proof? Take a trip to
              &ldquo;relationship&rdquo; social media, and you will invariably
              encounter some form of the wisdom,&nbsp;
              <i>
                &ldquo;she doesn&rsquo;t want you to give solutions, she just
                wants you to listen.&ldquo;
              </i>
              &nbsp; And if it isn&rsquo;t solving problems, on average
              there&rsquo;s probably some urge to slay something or to fight.
              It&rsquo;s why young boys on average are more rambunctious and
              tend to enjoy&nbsp;
              <i>blowing things up</i> or fighting with sticks.
            </p>
            <br />
            <p>
              Unfortunately, no one is born strong: often a squire must struggle
              to learn and gain competence to solve a problem, whether that be
              physical or mental. If he is already skilled enough, he will still
              undergo trials in the story to indicate growth or to evaluate
              himself. One could consider this a &ldquo;training arc,&rdquo;
              where our knight gains power and grows, though the emphasis the
              story devotes to this period can vary. In the Bible, training arcs
              are implied, like in the cases of Moses and Jesus, or take the
              form of trials and testing, as it&rsquo;s said in Hebrews
              12,&nbsp;
              <i>&ldquo;For the Lord disciplines those he loves.&rdquo;</i>{" "}
              After these series of struggles, our hero slays the dragon, or
              solves the problem.
            </p>
            <br />
            <p>
              In the end, our protagonist receives some award upon his return:
              perhaps riches, maybe even a princess to marry. Or, if it is a
              &ldquo;moral&rdquo; sort of tale, he returns with the strength of
              character he gained along the way. All these things would raise
              his social standing as a man. But many are the paths upon which
              this heroic journey takes a dark turn, where our hero may no
              longer represent something to aspire to.
            </p>
            <br />
            <p>
              Perhaps, in pursuit of a noble goal, the wrong sacrifices are
              made. This is the common trope of&nbsp;
              <i>&ldquo;do the ends justify the means?&rdquo;</i>
              &nbsp;Consider King Solomon&rsquo;s vast number of wives from
              political marriages which secured alliances. He pursued
              Israel&rsquo;s standing and security among the nations, but was
              led astray by his many wives. This is the result of blind
              obsession with a goal and giving it the wrong priority relative to
              other things.&nbsp;
              <b>
                In our fallen world, we aren&rsquo;t afforded the convenience of
                clean solutions: we have only tradeoffs.
              </b>
              &nbsp;And some tradeoffs simply aren&rsquo;t worth it. Perhaps in
              a singular-minded pursuit to achieve perfect grades, our hero
              might sacrifice sleep, community, and even faith to attain his
              accolades. But a man whose only possession is his GPA, must be
              counted among the most impoverished people of all. Good grades are
              good to aspire to, but in the broader scope of life, one must
              consider if pursuit of the flawless score has diminishing returns.
              In a sense,&nbsp;
              <i>
                &ldquo;For whoever would save his life will lose it, but whoever
                loses his life for my sake will find it&rdquo;
              </i>
              &nbsp; (Matthew 16:25). A paradox worth pondering.
            </p>
            <br />
            <p>
              Alternatively, the knight pursues the dragon for the wrong
              reasons. Beyond pursuing the goal for hedonistic pleasures (like
              in Acts 8 where Simon the sorcerer attempted to buy God&rsquo;s
              power from Paul), one might imagine a knight driven solely by
              hatred. I think of the paraphrased G.K. Chesterton quote as the
              antithesis to this inversion:&nbsp;
              <b>
                <i>
                  &ldquo;The true soldier fights not because he hates what is in
                  front of him, but because he loves what is behind him.&rdquo;
                </i>
              </b>
              &nbsp;The final result will inevitably reflect our hero&rsquo;s
              corrupted desires, which could turn triumph into tragedy. Jonah,
              treading the tides of fury stirred by the wickedness of Nineveh,
              would have left them to judgement, had God not intervened. In our
              modern day, Marxists&mdash;whose hatred and envy of the rich
              dwarfs any love they have for the poor&mdash;imagine themselves to
              be leaders of a great many revolutions. Yet the ideology which
              possesses them is solely responsible for the most avoidable misery
              of the people they pretend to love. For the worker is nothing but
              cattle, an abstract spectre meant to assuage our Marxist of their
              vacuous virtue. The radical may very well witness real problems,
              or be brought to tears in compassion for the plight of a lowly
              laborer, but without a genuine love, or a loved one to protect,
              they do worse than nothing.
            </p>
            <br />
            <p>
              There have been cases, however, where the &ldquo;dragon&rdquo; to
              fight turns out to be a giant windmill, or worse yet, a peaceful
              fire-breathing lizard giving warmth to villagers exposed to the
              gnawing cold. Saul, before he became Paul, is the foremost example
              of this in the Bible. How often do we find ourselves barking up
              the wrong tree? A prescient example lies in the sordid and cruel
              lie of child sacrifice masquerading as &ldquo;reproductive
              rights.&rdquo; The abortion protestor imagines they are a
              counter-cultural rebel, rising up against the machine of{" "}
              <i>&ldquo;patriarchy,&rdquo;</i> while statistically defending the{" "}
              <i>right</i>&nbsp;to offer up one&rsquo;s own child to Molech for
              financial security or freedom from the kryptonite of
              responsibility. In an age of unbridled freedom,&nbsp;
              <i>
                &ldquo;they did whatever was right in their own eyes&rdquo;
              </i>{" "}
              (Judges 21:25).
            </p>
            <br />
            <p>
              Along a similar path, our hero may discover that &ldquo;there is
              no dragon to fight.&rdquo; This is distinct from the previous
              inversion, in that there is no great cause nor dastardly problem
              to fight for: the world has been explored, the frontiers have been
              tamed.&nbsp;
              <b>
                The lion soldiers have won the war, and in peace they are no
                longer needed,
              </b>
              &nbsp; thrown away in favor of foxes who shall rebuild: the
              merchants, the diplomats, the negotiators. Perhaps our forlorn
              knight finds himself accused of being a dragon himself: his
              capability for violence poses the greatest threat to a home which
              no longer perceives the need for defenders. His squire is demoted
              into a knave, unable to prove himself except in the honorless and
              unseen churning of <i>the machine</i>. Lost, he hallucinates
              dragons for himself to fight, so he can appease his desire for any
              amount of achievement or valor, no matter how vain it is. He is
              the whale trapped in a tiny plastic tub, a zoo animal whose
              survival instincts have become the source of their damnation and
              insanity.
            </p>
            <br />
            <p>
              Around 2010, masculinity writ large was deemed the new dragon to
              vanquish. Terms like &ldquo;toxic masculinity&rdquo; permeated
              discourse as&nbsp;
              <i>the patriarchy</i>&nbsp;was perceived to be the cause of all
              misery in the world, both present and past. What once was a
              problem with abuses with a select few men, metastasized into a
              crusade against all forms of masculinity. Shall it be surprising
              why boys retreat to the world of video games? There he can
              struggle against the challenges the game provides and earn his
              virtual manhood. For toiling away in front of a screen, he is
              rewarded with the delusion of accomplishment. Unlike the
              screeching harpies blaming men for all their problems, the NPCs
              have the decency to say&nbsp;
              <i>thank you</i>. It is in this despicable bog that so many boys
              have silently been lost in. What actionable hope then does the
              Christian brother have from the Bible? What encouragement can the
              Christian sister offer to her brother? The Bible has no direct
              solution, but two stories from the Bible hold some rhymes with our
              problem.
            </p>
            <br />
            <p>
              Our first encouragement comes from David, when he was persona non
              grata in his own country and fled into the land of the Philistines
              before he became king. His zeal and righteousness, the trait which
              once bestowed blessings upon him, became the reason for his exile.
              It is undoubtedly one of the lowest spiritual points for David, as
              he survives pretending to be a madman to evade the suspicions of
              the Philistine king. And yet, lost and afraid, he does not fully
              forsake God, cutting down Israel&rsquo;s enemies before he returns
              as Israel&rsquo;s king. The world may reject the power of the
              lion, but the Lord shall set it to good use. Continue on in faith,
              seeking God, for your passion has a place in His church even if
              the church in the world cannot see it.
            </p>
            <br />
            <p>
              Our second encouragement comes from the rebuilding of the temple
              after Israel returns from exile. The Israelites are hounded at
              every turn by fear and by ancient enmities which simmer beneath
              the politics of the Persian Empire. They stumble in building the
              temple of the Lord, and they have to undergo many reforms, as
              noted in Ezra and Nehemiah. And in the end, the rebuilt temple is
              but a shadow of its former glory. Yet this was the temple that
              persisted until Jesus&rsquo;s time. Such is our struggle to
              recover a vision of righteous manhood. We will lose our way, we
              will fall into traps, we shall fall back into our old addictions.
              But carry on in the battle, for to flail towards righteousness in
              difficult times, is far more honorable than stalwart faith in easy
              times, and perpetual cowardice in the face of difficulty.
            </p>
            <br />
            <p>
              <b>To Tame a Dragon</b>
            </p>
            <p>
              The fairy tale archetype for women is decidedly less about
              amassing physical power to become untouchable, and tends more
              towards &ldquo;taming the beast,&rdquo; exerting a more subtle
              power to lift the curses which turn men into animals. Though the
              details tend to vary, one rough outline of the tale is:
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;1. Through fortunate or disastrous events,
              our fair maiden is wed to a beast
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;2. She discovers the beast is a man, but
              an earnest mistake damns him to be a beast forever and separates
              them
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;3. She endures various struggles to
              reunite with the beast and break his curse
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;4. Having shattered the curse, she
              reintegrates him into the kingdom, returning as a king or perhaps
              a knight who will slay the dragon.
            </p>
            <br />
            <p>
              By far the most well-known version of this story is Beauty and the
              Beast: likely more for the Disney animated film than the fairy
              tale itself. Given the specificity of this sort of &ldquo;search
              for the lost husband&rdquo; tale, there aren&rsquo;t as many exact
              examples in any recent media. Still, we have recent movies like
              the Princess and the Frog, or the example of Esther
              (&ldquo;taming&rdquo; the Persian king) in the Bible as examples.
            </p>
            <br />
            <p>
              In these stories, the beast symbolizes a man who is in some way
              either outwardly off-putting (like in the case of a frog or pig),
              or dangerous (like a lion or bear). Over time as our heroine gets
              to know the beast, she begins to see the human side of him. Yet,
              due to one cause or another, they are separated a great distance
              from one another. Upon grasping the nature of the curse, she sets
              out on a journey to find her lover who has disappeared to
              ultimately free him from his inhuman bondage.
            </p>
            <br />
            <p>
              With the advice and benevolence of others, she travels far and
              wide, gathering the tools and skills necessary to reach her lover
              in exile and exorcise the curse laid upon him. Sometimes, she
              faces off with an evil sorceress, but thanks to the implements she
              gathered along the way, she outsmarts the witch and claims
              victory. After she redeems her lover from his curse, they banish
              evil from the kingdom and bring peace to the lands as joy rings
              out once again. Yet just like in the tale of our knight, our
              heroine can tread down the wrong path, leading to a tragedy rather
              than a happy ending.
            </p>
            <br />
            <p>
              For example, while our heroine ponders how to cross a vast ocean,
              a dangerous witch offers her a set of fins and gills to swim
              through, in exchange for her voice. Thus our fair maiden obliges.
              But the journey is difficult, and she comes across a deep ravine,
              and so our heroine finds herself returning to the witch. This
              time, the witch asks for her eyesight in return for wings to fly
              across the gorge. This repeats until at last, the witch requires
              her soul.
            </p>
            <br />
            <p>
              How often are girls led astray by that wretched witch Vanity, to
              destroy themselves in pursuit of beauty, attention, or power? This
              obsession has taken hold of Korea, where families
              &ldquo;gift&rdquo; their daughters plastic surgery in a Red
              Queen&rsquo;s race (a race just to maintain one&rsquo;s own
              position) to keep up appearances and status. This pressure haunts
              figure skaters and dancers, who starve themselves in order to meet
              some shifting goalpost of aesthetics. In the worst cases,&nbsp;
              <b>
                the race for the perfect aesthetic, the perfect form, burns out
                one&rsquo;s soul, leaving nothing but a hollow puppet behind.
              </b>
            </p>
            <br />
            <p>
              What if instead, the beast is so wild and depraved that no rite
              can heal him, where even the strongest chain can barely bind him?
              As the village prepares to put down the foul beast, our maiden
              intercedes for the beast at a critical moment, stopping the
              hunters from finishing the job and causing the monster to break
              out of prison and devour everyone? Our modern day equivalent is
              that of the woman with suicidal empathy. She neither cares for the
              people around her, nor demonstrates the least bit of lenience and
              grace towards those who disagree with her. Kindness is far from
              her heart, until it comes time to demonstrate her virtuous vanity
              for the unrepentant criminal, of whom she will not live near nor
              feed. Citing his pitiful circumstances, she pleads mercy for the
              serial robber and murderer, but cares <i>nothing</i>&nbsp; for
              justice. For if she did, she would seek to soothe the aching
              hearts of the victims. She is the fat cow of Bashan from Amos 4,
              the recalcitrant wife who says to her husband to&nbsp;
              <i>&ldquo;bring us more drinks&rdquo;</i> as the world burns. To
              fool leniency for the virtue of grace and reconciliation is the
              greatest cruelty to the innocent.
            </p>
            <br />
            <p>
              The previous two scenarios presume that our maiden wishes to turn
              the reprobate animal into a human again, but what if, by
              temptation of one way or another, she is lulled into becoming a
              monster herself? The seductress, rather than apply her gifts
              towards the redemption of those around her, would use her words
              and beauty to defile and devour whoever she can for her own
              pleasure. They are the Greek sirens, the proverbial adulteress,
              whose steps lead down to death. Today, they have found a way to
              ensnare more victims through the ocean of the internet. The
              prostitute derives attention, pleasure, and fun from indulging the
              Jezebel spirit. But sin has consequences, even if they arrive
              slowly. Once you scatter your dignity to the winds, it is a
              difficult (but not impossible) task to gain it back. In our
              darkened world, the habitual vices of the adulteress will drive
              away any self-respecting man of character, and will deaden
              one&rsquo;s ability to love and care for another person. Let us
              heed then, this warning:&nbsp;
              <i>
                &ldquo;Her feet go down to death; her steps lead straight to the
                grave. She gives no thought to the way of life; her paths wander
                aimlessly, but she does not know it&rdquo;
              </i>
              &nbsp; (Proverbs 5:5-6).
            </p>
            <br />
            <p>
              Perhaps the most tragic of all is when our maiden is led astray by
              the poisonous advice of an evil witch. Believing the old hag to be
              on her side, she dutifully follows her instructions, drinks her
              potion, and lies down to rest, waking up only to find the witch
              having stolen everything from her, including her lover. And if our
              maiden manages to escape the snare of one witch intact, she
              trudges through a gnarled bog, bound to encounter another
              malicious character. It is this labyrinth filled with phantasmic
              lies and sweet deceptions that drag girls into the forbidden
              depths. The witch? Envious radical feminists. The poison? The lie
              that empowerment is doing everything a man can do, but better. The
              theft? Her femininity and the gifts she was given by God. With the
              coven numbering in the hundreds amongst thousands of voices, she
              is left trying to pick out the fruits of wisdom from a rotten
              basket. Worse yet, this miserable cadre of crones have cast a
              curse of weakness upon the land, turning boys into cowards and
              knights into rabid creatures.
            </p>
            <br />
            <p>
              What actionable hope then does the Christian sister have from the
              Bible? What encouragement can the Christian brother offer to his
              sister? The Bible has no direct solution, but two stories can
              offer some guidance.
            </p>
            <br />
            <p>
              Our first encouragement comes from Esther, the queen who saved the
              Jews in exile. Though inwardly an outsider and initially a coward,
              she was able to orchestrate the reversal of Haman&rsquo;s fortunes
              and grant her people the right to defend themselves against their
              enemies while in exile. You do not need to be a toxic imitation of
              a man to be a virtuous and honorable woman. There are avenues open
              to women for Christ&rsquo;s work, which by nature are closed to
              men or not as readily available. Do not underestimate the power of
              your own whispers.
            </p>
            <br />
            <p>
              Our second encouragement comes from the harlot Rahab, who
              sheltered the two spies sent into Jericho. Though she engaged in
              prostitution and was defiled, she is considered righteous for her
              fear of God and faith in His people. Through her actions, she
              saved her extended family and became a symbol for the salvation of
              both the Jews and Gentiles. For it is through her lineage from
              which Christ was born. The quest of salvation God has set upon His
              people includes not only the kings and the prophets, but even the
              lowly paupers as well, those without dignity nor status. We do not
              need Instagram perfect lives, nor the appearance of pristine
              virtue. We must reach for a righteous womanhood, for He will
              reward even the smallest acts of faith.&nbsp;
              <i>
                &ldquo;For if you have faith the size of a mustard seed, you can
                say to this mountain, ‘move from here to here&rsquo; and it will
                move&rdquo;
              </i>
              &nbsp; (Matthew 17:20). We will lose our way, we will be deceived,
              we shall turn back to our vomit. But carry on in the trials, for
              to reach towards righteousness in difficult times, is far more
              honorable than stalwart faith in easy times, and perpetual
              cowardice in the face of difficulty.
            </p>
            <br />
            <p>
              <b>Glory at the Foot of the Cross</b>
            </p>
            <p>
              Despite the differences between the tales geared towards boys and
              girls, striking similarities remain in their core structure. For
              the race that lies before us all, four gates lie along our path:
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;1. Uncertainties and problems shall hinder
              our way, our finite nature guarantees it
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;2. We are called to a higher mission
              beyond ourselves and beyond our capabilities
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;3. To bear our own cross is our universal
              duty. To suffer discipline, to heal and grow from adversity in
              time, is the reality of life laid ahead of us
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;4. There is a great reward to finishing
              the quest
            </p>
            <br />
            <p>
              There shall always remain problems to be solved, dragons to be
              slain or to be tamed, and their solutions will require approaches
              with different framing. Neither suffering nor damnation
              discriminate, though the cruel warlords of vice carve out
              different territories among men and women. As it is written:&nbsp;
              <i>
                &ldquo;For all have sinned and fallen short of the glory of
                God&rdquo;
              </i>
              &nbsp; (Romans 3:23). In such spiritually dire times as ours, we
              are called to carry our cross, to confront the yawning abyss
              within us all. Neither a hero nor a heroine acting alone can
              withstand the oncoming onslaught. Instead, let each work together
              to strengthen the walls and man the defenses to tide us over in
              our moment of darkness.
            </p>
            <br />
            <p>
              The hour demands all who are able to rise against disaster, to
              embark on an expedition to face our fractured world, to ensure
              that even in the midst of our kingdom&rsquo;s collapse, our little
              corner of the world stands resolute. Our duty beckons, for in Him
              we are children of the Most High, His cherished servants who shall
              judge even angels (1 Corinthians 6:3).
            </p>
            <br />
            <p>
              Even if we lack strength, we must undergo many ordeals, and
              discover the tools to face the many obstacles in our path. As
              different members in the body of the church, our flavours of
              strength are different, yet we all share the same head. The same
              Lord is Lord of all, and gives richly to all who call upon Him.
              Rally yourself to the banner of the Lord and train your body and
              soul, for every army has need of smiths, chefs, and requisition
              officers, of infantry, artillery, and cavalry to participate in
              the Lord&rsquo;s battles.
            </p>
            <br />
            <p>
              Though we are not guaranteed reward for righteousness and honor on
              this side of the mountain, do not let drought cause us to forget
              the odyssey we have set out on. Let yearning, testimony, and
              thanksgiving grant us the glimmer of hope to plod onward. In our
              constant stumbling, rise as the righteous do, for until we are
              home, our commission is not complete. In bitter tribulation, do
              not forget love, for the one who has a why can endure any how. In
              desultory wandering, consult the Good Shepherd for the way, that
              we may continually journey towards goodness and truth.
            </p>
            <br />
            <p>
              This is the hero&rsquo;s map I have drawn out for you. The path
              imprinted upon its yellowed skin has worn away, but I have done my
              best to restore it. Pick up your pen, gather your pages, and take
              it, my dear reader, for it is better than nothing at all. Bushes
              grow and trees wither, rivers bend and the earth breaks. Yet the
              final destination marked on the map remains the same. So go, face
              the trials of thy absolution. March on, even though the path is
              lost. For yonder lies the wicket gate of His heavenly kingdom.
              There shall be trials along the way. Bandits will swarm upon you.
              Great serpents shall overpower you. The very elements themselves
              will stand against you. But in fear, take heart, for God is the
              final author of your story, and He shall write a great tale if you
              would let Him.
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
