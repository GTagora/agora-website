"use client";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
  const author = "Michael Pitts";
  const credit = "";
  const title = "Our Weekly Glimpse of Eternity";
  const date = "December 06, 2025";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-contain md:object-contain my-3 md:max-h-[70vh]"
            src="/issues/25f/our-weekly-glimpse-of-eternity.webp"
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
            <h4 className="font-serif font-bold text-xl mt-10">
              Christ Offers Us Something Better
            </h4>

            <p>
              We live in a world that is constantly crying for our attention.
              Our professors demand more work from us. Our friends invite us to
              more parties. Our families call for more connection. We must
              attend to our houses, our cars, our finances, our grades, our
              health, and so much more, or else our lives begin to unravel. And
              even after we have attended to the bare necessities, there awaits
              for us a veritable cornucopia of novelties to fill what little
              free time remains. TV offers an escape from monotony to drama.
              Video games offer an escape from insignificance to achievement.
              The doom-scroll of social media even offers us an escape from
              reality itself. It can feel like we barely have a free moment,
              much less a free day.
            </p>
            <p>
              Among the many people and things crying for our time and attention
              is God. But how quiet his call can seem! Our careers don't crumble
              if we fail to read our Bibles. Forgetting to pray doesn't erode
              our social lives. Our pastors don't chide us if we skip church one
              week. So many unbelievers live outwardly successful lives without
              doing any of these things! To then say that God should take the
              foremost position in the ordering of our lives—or especially that
              he demands exclusive use of an entire day each week—sounds
              impossible. To call that a blessing sounds absurd.
            </p>
            <p>
              But if we move about our lives as though all that matters is
              getting through another day, we lose perspective. We forget God,
              we forget where we're headed, and we neglect the only source of
              true joy in this life. Paul said, "If in Christ we have hope in
              this life only, <em>we are of all people most to be pitied.</em>"
              <Reference number={1} />
            </p>
            <p>
              Christ offers us something better. Instead of leaving us in our
              state of worldly busyness, he quietly calls us to lift our eyes to
              the heavenly rest. There are many ways in which the Lord does
              this, but the most prominent example used in Scripture is the
              Lord’s Day. We don’t find the best foretaste of heavenly rest in
              daily, private acts of personal piety (though certainly those help
              and are commendable
              <Reference number={2} />
              ), but in the day each week that our Lord set apart specifically
              for that purpose. For us to take full advantage of the blessing
              offered,
              <Reference number={3} /> first we need to understand what this
              special day is and why God set it apart.
            </p>
            <h4 className="font-serif font-bold text-xl mt-10">
              The Lord's Day
            </h4>

            <p>
              From the beginning of the world, God set apart a day for himself.
              Only six days after God began his work of creation, Genesis
              records that "God blessed the seventh day and made it holy,
              because on it God rested from all his work that he had done in
              creation."
              <Reference number={4} /> Even at this most early stage of
              pre-redemptive history, God already had in mind a day of rest.
              Although very little is said at this point, a couple of things are
              of note. First, God made the day holy, that is, he set it apart
              for himself.
              <Reference number={5} /> Other days could be used for other
              purposes, but God set apart the seventh day for his own exclusive
              use. Moreover, this wasn't an arbitrary decision. God didn't set
              apart the seventh day just because he really liked the number
              seven. No, God set the seventh day apart because he himself
              labored for six days and then rested on the seventh. God modeled
              our rest upon his own rest in creation. The sanctification (making
              holy) of the seventh day is grounded not in an arbitrary command,
              but in the very being of God. Even from Creation, we can see that
              the day carries very special significance.
            </p>
            <p>
              Very little is said about the worship of God between Adam and
              Moses, including the observance of his holy day. The next text
              that speaks to it follows Israel's exodus from Egypt. In
              preparation for entering the promised land, God gave Israel an
              extensive set of rules and regulations for life in the promised
              land. But amidst those rules and regulations, God also taught his
              people in general how they ought to behave. The most prominent
              example of this is the Ten Commandments. God wrote on tablets of
              stone, "with the finger of God,"
              <Reference number={6} /> ten commands that applied not to
              sacrifices or to civil government, but to men and women in their
              relationship with God and with one another, commands that still
              hold enduring significance. The Fourth Commandment gave his holy
              day a name, "the Sabbath day," and enshrined the particular type
              of behavior that God expected from his people on that day.
            </p>
            <p className="mx-12 my-3">
              Remember the Sabbath day, to keep it holy. Six days you shall
              labor, and do all your work, but the seventh day is a Sabbath to
              the Lord your God. On it you shall not do any work, you, or your
              son, or your daughter, your male servant, or your female servant,
              or your livestock, or the sojourner who is within your gates. For
              in six days the Lord made the heavens and the earth, the sea, and
              all that is in them, and rested on the seventh day. Therefore the
              Lord blessed the Sabbath day and made it holy.
            </p>
            <p className="mx-12 my-3 -mt-4">Exodus 20:8-11 ESV</p>
            <p>God clarified more just a few chapters later:</p>
            <p className="mx-12 my-3">
              Above all you shall keep my Sabbaths, for this is a sign between
              me and you throughout your generations, that you may know that I,
              the Lord, sanctify you. You shall keep the Sabbath, because it is
              holy for you.
            </p>
            <p className="mx-12 my-3 -mt-4">Exodus 31:13-14 ESV</p>
            <p>
              Here, God gave his people new insight into the Sabbath day. He
              intended it to be a sign not only of his personal holiness and
              rest, but also of his people being made holy (sanctified) and
              resting. Even to Old Testament Israel the Sabbath was not a bare
              command, but a promise of sanctification. It is a sign every week
              that God is working for us, moving us from sin and corruption
              towards righteousness and holiness. And because of that promise,
              the command bears special importance; the Lord said, "
              <em>Above all</em> you shall keep my Sabbaths." The Sabbath
              operates as a kind of turning point in the Ten Commandments,
              transitioning us from our duties to God to our duties to one
              another. Without it, we fall short in both areas. We can neither
              work nor worship as we ought. But with it, according to the very
              promise of God, we can know that the Lord himself sanctifies us in
              every area of our lives. Even within the Ten Commandments the
              Sabbath holds a special place.
            </p>
            <p>
              Between Moses and Christ, the prophets spoke extensively of the
              importance of the Sabbath to God. John Calvin summarized it best
              when he wrote,
            </p>
            <p className="mx-12 my-3">
              There is no commandment the observance of which the Almighty more
              strictly enforces. When he would intimate by the Prophets that
              religion was entirely subverted, he complains that his sabbaths
              were polluted, violated, not kept, not hallowed; as if, after it
              was neglected, there remained nothing in which he could be
              honoured. The observance of it he eulogises in the highest terms,
              and hence, among other divine privileges, the faithful set an
              extraordinary value on the revelation of the Sabbath.
            </p>
            <p className="mx-12 my-3 -mt-4">
              <em>Institutes</em> II.8.29 by John Calvin
            </p>
            <p>
              But in the New Testament, we see a remarkable transformation in
              the observance of the Sabbath. From the beginning of Creation
              through the death of Christ, God's holy day was always on the last
              day of the week, since, in Creation, he had worked on the first
              six days and rested on the seventh. But Christ completed his work
              of redemption, restoring the blessing that Adam lost, not on the
              seventh day (when he remained yet in the grave), but on the first
              (when he had arisen from the dead).
              <Reference number={7} /> The New Testament describes Christ not
              only as the better Adam,
              <Reference number={8} /> but also as the God and Creator of all
              the universe
              <Reference number={9} /> and the Lord of the Sabbath,
              <Reference number={10} /> so it makes perfect sense that he would
              have a dramatic effect upon the observance of the day. Just as
              Christ finished his work on the seventh and so rested on the first
              day of the week, the New Testament church met together to worship
              on the first day of the week.
              <Reference number={11} /> And in recognition of the stark contrast
              in the observance of the command, our Lord even gave the day a new
              name, "the Lord's Day."
              <Reference number={12} />
            </p>
            <p>
              While Christ's work changed the observance and name of the holy
              day, there is much that remains the same. We still observe a
              pattern of six days of work and one day of rest. The rest that we
              observe still mirrors the rest of God. But, instead of resting on
              the last day of the week, we rest on the first. Likewise, instead
              of recalling God's rest in Creation, we now recall God's rest in
              Redemption. And to enforce this idea even further, the day that
              was once called holy—set apart for God—is now called God's—the
              Lord's Day—communicating the same idea. While Paul twice clarifies
              that the Old Testament Sabbath command no longer abides in the
              Church,
              <Reference number={13} /> the New Testament Lord's Day was the
              practice of both the apostolic and post-apostolic
              <Reference number={14} /> churches. All major Protestant summaries
              of doctrine have upheld this doctrine of the Lord's Day even up
              until the present day.
              <Reference number={15} />
            </p>
            <h4 className="font-serif font-bold text-xl mt-10">
              A Foretaste of Heaven
            </h4>

            <p>
              It's not as though we intentionally neglect the God whom we love,
              but more that we are slow to believe and understand the full
              blessing of what he has commanded. Despite the biblical clarity on
              the matter, the Lord's Day is a practice that has all but totally
              fallen out of favor. Churches continue to meet on the Lord's Day,
              but few speak of the day as carrying any significance. The command
              that the whole day be kept holy unto the Lord is almost entirely
              absent. Even the command that we ought not work is neglected! A
              command that is, in many ways, central to God's two great works of
              Creation and Redemption, seems to have almost disappeared. It begs
              the question: how can so many churches that stand strong on the
              more pressing violations of God's law—such as rebellion, murder,
              adultery, and theft
              <Reference number={16} />
              —crumple so easily on violations of the Fourth Commandment?
            </p>
            <p>
              There are many potential answers to this problem. Certainly some
              raise internal biblical criticisms to the idea,
              <Reference number={17} /> but the majority seem to neglect the day
              more out of ignorance than of malice. If we understood the rich
              meaning and lavish blessings of God's holy day, then we would be
              much more eager to honor it. Thankfully, the Scriptures are
              replete with descriptions of both the day's deep significance and
              the abundant spiritual blessings that come to those who honor it.
            </p>
            <p>
              The clearest description of the meaning of the Lord's Day is found
              in the book of Hebrews. When the author encourages his readers to
              press on in the Faith towards Glory, one of the analogies he pulls
              from the Old Testament to describe their situation is Israel in
              the wilderness, waiting to enter the promised land.
              <Reference number={18} /> The analogy, applied to the church, says
              that we, too, are in a type of wilderness, awaiting the promised
              land of the New Earth.
            </p>
            <p className="mx-12 my-3">
              Therefore, while the promise of entering his rest still stands,
              let us fear lest any of you should seem to have failed to reach
              it. For good news came to us just as to [Israel in the
              wilderness], but the message they heard did not benefit them,
              because they were not united by faith with those who listened. For
              we who have believed enter that rest, as he has said,"As I swore
              in my wrath, 'They shall not enter my rest,'" although his works
              were finished from the foundation of the world. For he has
              somewhere spoken of the seventh day in this way: "And God rested
              on the seventh day from all his works." … For if Joshua had given
              them rest [in the promised land], God would not have spoken of
              another day later on. So then, there remains a Sabbath rest [in
              the New Earth] for the people of God.
            </p>
            <p className="mx-12 my-3 -mt-4">Hebrews 4:1-4, 8-9 ESV</p>
            <p>
              After applying the rest in the promised land in the Old Testament
              ultimately to the New Earth, the author attaches one more picture
              of this rest. Not only was the promised land a picture of the
              heavenly rest ahead, so was the Sabbath day. This is what Jesus
              meant when he said, "The Sabbath was made for man, not man for the
              Sabbath."
              <Reference number={19} /> The Lord's Day is not first a command
              that we ought to follow; it is first and foremost the best taste
              in this life of the heavenly rest that awaits us. In his sermon on
              Hebrews 4, Rev. Dr. Carlton Wynne described beautifully the
              promise-first nature of the Lord's Day, saying,
            </p>
            <p className="mx-12 my-3">
              We need to remember as members of the Church of Jesus Christ that
              the Sabbath command is first a promise and then an obligation. It
              is first a promise. It is a promise that we are heading somewhere.
              It is a promise that Sabbath rest is coming. And then it is a
              command. It is a way in which we proclaim to the world, "Jesus
              Christ is not only my God, he is my guide. And he is leading me to
              a place of heavenly rest with him forever."
            </p>
            <p className="mx-12 my-3 -mt-4">
              <em>Pressing On to Promised Rest</em> by Rev. Dr. Carlton Wynne
            </p>
            <p>
              We would be far better served to see the Lord's Day not as a
              burden that we ought to bear, but as a blessing that we ought to
              enjoy. It's not so much that we <em>have</em> to give up the
              things that we love to worship God, but that we <em>get</em> an
              opportunity to leave behind that which is passing away and to
              receive a foretaste of the eternal glory that awaits us. The
              Lord’s Day doesn't distract us from what matters in our lives; it
              points us to the only life that really matters. Instead of leaving
              us with only the chores and distractions of the week that so often
              fill our minds, God quietly calls us to lift our eyes to the
              heavenly rest before us.
            </p>
            <p>
              This heavenly rest did not start with Christ in the New Testament.
              As we have already seen, it penetrates backward, throughout the
              Old Testament, even to Creation. Before Adam had even fallen, God
              had already appointed a day of his rest. This lines up perfectly
              with what we know about Adam and Christ. The Scriptures hold forth
              that the two hold for us a similar position. Both Adam and Christ
              were heads of covenants that offered blessing.
              <Reference number={20} /> Where Adam failed and brought
              condemnation, Christ succeeded and brought justification. But what
              this also entails is that, had Adam obeyed God's command, he, too,
              would have won an even better glory than that offered to him in
              Eden. Eventually, Adam and all his posterity would have lived in a
              yet higher state of glory. We know this because when Christ
              succeeded where Adam failed, that's exactly what he won for us.
              <Reference number={21} />
            </p>
            <p>
              What this means for the Lord's Day is that, for Adam, the Sabbath
              rest on the seventh day pointed to the heavenly rest that he was
              promised, once his (sinless and painless) labors were completed.
              But when Adam forfeited his right to that rest, God didn't remove
              the day that symbolized it. He enshrined it even more clearly in
              the Fourth Commandment. He enshrined it, but he didn't move it; it
              remained on the seventh day of each week, showing that, although
              the promise of rest still stood for those who believed, it had yet
              not been won by Christ. Although redemption was promised in the
              Old Testament,
              <Reference number={22} /> it was always promised in a manner that
              made clear that it had not yet been accomplished. The Sabbath
              pointed to the rest that Adam had lost, and symbolized that it was
              still available to the people of God, but not that it had yet been
              won by Christ.
            </p>
            <p>
              But in the Lord's Day, on the first day of the week, we receive an
              even better promise. Not only are we pointed towards the heavenly
              rest that awaits us, we are also pointed back. By calling the
              first day holy, Christ reminds us both of the resurrection and of
              the life that he won for us. Far from being diminished in the New
              Covenant, if anything, the promise of the Lord's day is further
              strengthened, and our reason to honor it is even further
              established.
            </p>
            <h4 className="font-serif font-bold text-xl mt-10">
              Delighting in God
            </h4>

            <p>
              How can we drink of these blessings? How can we receive the
              foretaste of Glory that is promised to us in the Lord's Day?
              First, we must rest from our work. Certainly, we are encouraged to
              do what work is still necessary in this fallen world—Jesus allowed
              his disciples to pick and eat heads of grain on the Sabbath.
              <Reference number={23} /> We must work to protect and heal the
              innocent—Christ himself performed many miracles on the Sabbath.
              <Reference number={24} /> But outside of those exceptions, we
              ought not work. We must order our lives around this holy day each
              week to prevent us from having to work. The{" "}
              <em>Westminster Confession of Faith</em> describes this doctrine
              very succinctly, saying,
            </p>
            <p className="mx-12 my-3">
              This Sabbath is then kept holy unto the Lord, when men, after a
              due preparing of their hearts, and ordering of their common
              affairs beforehand, do not only observe an holy rest, all the day,
              from their own works, words, and thoughts about their worldly
              employments and recreations, but also are taken up, the whole
              time, in the public and private exercises of his worship, and in
              the duties of necessity and mercy.
            </p>
            <p className="mx-12 my-3 -mt-4">
              <em>Westminster Confession of Faith</em> XXI.8
            </p>
            <p>
              Keeping the Lord’s Day holy starts with ordering our lives ahead
              of time. This is why the commandment begins, “<em>Remember</em>{" "}
              the Sabbath day <em>to</em> keep it holy.”
              <Reference number={25} /> Our natural behavior is to let our work
              pile up until we have no choice but to do it on Sunday; it takes
              intentional effort throughout the week to keep it holy. We must
              work ahead on assignments. We can’t take jobs (except jobs of
              necessity or mercy) that require us to work on the Lord's Day. We
              need to plan out and prepare our personal affairs ahead of time to
              prevent needing to catch up on Sunday (the laundromat and grocery
              stores are open on other days!). More than that, the command is
              not only that we are not to work, but even that we are not to
              require "our sons, our daughters, our male servants, our female
              servants, our livestock, or even the sojourners who are within our
              gates"
              <Reference number={26} /> to work. That means we need to seriously
              consider, on the Lord's Day, if we're eating out at restaurants
              out of necessity or out of laziness. We need to refrain from
              frivolous purchases at retailers. We should even consider means of
              fellowship that don't require others to work (like playing a board
              game together instead of bowling). There is a lot of wisdom
              required in this matter—we don't want to become Pharisees with
              extra-biblical lists of do's and don't's—but we ought to think
              carefully about how we live our lives on this holy day.
            </p>
            <p>
              If we want to drink deeply of the blessings offered, we must learn
              not only how to lay aside our work, but also how to lay aside our
              distractions. Once we have cleared open the day, it will take
              intentional work to prevent ourselves from filling it right up
              again with mindless or secular entertainment. Those things aren't
              bad, but on the Lord's Day, they distract us from the blessing
              offered therein. Not only that, they make the day that is supposed
              to be holy and set apart ordinary and common. Through the prophet
              Isaiah, God gently chided Israel for this very thing, writing,
            </p>
            <p className="mx-12 my-3">
              If you turn back your foot from the Sabbath, from doing your
              pleasure on my holy day, and call the Sabbath a delight and the
              holy day of the Lord honorable; if you honor it, not going your
              own ways, or seeking your own pleasure, or talking idly; then you
              shall take delight in the Lord, and I will make you ride on the
              heights of the earth; I will feed you with the heritage of Jacob
              your father, for the mouth of the Lord has spoken.
            </p>
            <p className="mx-12 my-3 -mt-4">Isaiah 58:13-14 ESV</p>
            <p>
              The command here is difficult. Just like Jesus proclaimed that he
              who hates his brother in his heart is guilty of murder,
              <Reference number={27} /> the prophet Isaiah proclaims that he who
              seeks his own pleasure or talks idly profanes the Lord's Day. But
              in Christ, though we fail to keep God's law every day, we are
              encouraged to press on, knowing that he has forgiven us and will
              strengthen us to do even better tomorrow. We would do well to
              recall the Sabbath command in Exodus 31: "Above all you shall keep
              my Sabbaths … that you may know that I, the Lord, sanctify you."
              Even when we break it every week, and fail to keep it perfectly,
              it still serves as a reminder that the Lord is sanctifying us, to
              keep it even better the next week.
            </p>
            <p>
              Second, once we have rid our lives of the forbidden work and
              secular recreation on the day, we need to learn instead how to
              rest in God. We must seek, insofar as we are able, to live out the
              heavenly worship that awaits us in the weekly foretaste of heaven
              that we have now. We ought to be in church, every Sunday, as
              consistently as possible.
              <Reference number={28} /> Many churches have both morning and
              evening services
              <Reference number={29} /> to help their members keep the day holy,
              and we ought to attend them. The Lord’s Day is a great opportunity
              for hospitality and fellowship at home—I often enjoy having
              brothers and sisters in Christ over for lunch on Sunday. Instead
              of seeking our own pleasure on the Lord's Day with things like TV
              or social media, we ought to seek the pleasure of time with God
              and his people. Instead of talking idly, talk about the things of
              God; share stories of his faithfulness or situations that require
              prayer. Instead of seeing the day as a burden, we should try, as
              much as we're able, to make it a delight. Dr. Wynne offers
              wonderful advice here also:
            </p>
            <p className="mx-12 my-3">
              How can you enhance the joy of the Sabbath day for yourself, for
              your friends, for your family, for your children? Certainly it's
              to center on worship at church. But outside of church, how can you
              break from [the busyness of] this world and enjoy God's creation?
              … How can you delight more in His redemption? How can you delight
              more in the people of God?
            </p>
            <p className="mx-12 my-3 -mt-4">
              <em>Pressing On to Promised Rest</em> by Rev. Dr. Carlton Wynne
            </p>
            <p>
              This may sound like an insurmountable task. How can we change our
              hearts to love something we do not naturally love? But we have the
              promises of God's Word, that those who keep the day will
              certainly—though perhaps slowly—learn to love it more and more. We
              have the wonderful promise of Isaiah 58: "If you turn back your
              foot from the Sabbath, … if you honor it, … then{" "}
              <em>you shall</em> take delight in the Lord, and{" "}
              <em>I will make you</em> ride on the heights of the earth;{" "}
              <em>I will feed you</em> with the heritage of Jacob your father."
              God has promised to do what you cannot do, to make you love what
              you may not presently love.
            </p>
            <p>
              My own life is proof of the reality of this promise. Learning to
              call the Lord's Day holy has been the single greatest blessing of
              my spiritual life. Before I honored the Lord's Day, I didn't
              particularly love church, reading God's Word, or prayer—though I
              participated in all of those activities. But the Lord convicted me
              when I read Isaiah 58, and though I didn't want to, I tried to
              call the Lord's Day honorable, to turn back my feet from my own
              pleasure. And although I have never kept it perfectly, little by
              little I began to love the things of God. I began to love going to
              church, even looking forward to the Lord's Day as the best day of
              the week (a foretaste of heavenly rest!). I began to love reading
              and studying God's Word. I even began to love prayer, both private
              and corporate. The Lord wrought a dramatic transformation in my
              life through even my feeble attempts to keep this command.
            </p>
            <p>
              So I urge you, reader, with the same words of Isaiah 58 that so
              convicted me: "turn back your foot from the Sabbath, from doing
              your pleasure on [God's] holy day, and call the Sabbath a delight
              and the holy day of the Lord honorable; … honor it, not going your
              own ways, or seeking your own pleasure, or talking idly." Look to
              the promise of the heavenly rest that is offered to you in the
              Lord's Day. This Sunday, turn from the many worldly works and
              recreations that seek to crowd every moment of our lives. Lift
              your eyes heavenward. Look to the Christ that has gone before you,
              preparing a place for you in the eternal Sabbath rest that awaits
              the people of God.
              <Reference number={30} /> And when you do, I promise, as the Lord
              himself promised through Isaiah, that "you shall take delight in
              the Lord, and [he] will make you ride on the heights of the earth;
              [he] will feed you with the heritage of Jacob your father, for the
              mouth of the Lord has spoken."
            </p>
          </div>
          <p className="font-serif font-bold text-xl mt-10">Footnotes</p>
          <div className="font-serif text-md whitespace-pre-line space-y-2">
            <Footnote number={1} text="1 Corinthians 15:19 ESV." />
            <Footnote
              number={2}
              text="For instance, Daniel was commended for his practice of thrice daily prayer (Daniel 6:10, 22), and Jesus often went away to pray alone (Matthew 14:23, 26:36, Mark 1:35, 6:46, 14:32, Luke 5:16, 6:12, 9:18, 28-29, 11:1, 22:41)."
            />
            <Footnote number={3} text="Isaiah 58:14." />
            <Footnote number={4} text="Genesis 2:3 ESV." />
            <Footnote number={5} text="https://biblehub.com/hebrew/6942.htm." />
            <Footnote number={6} text="Exodus 31:18 ESV." />
            <Footnote
              number={7}
              text="Matthew 28:1, Mark 15:41, 16:1, Luke 23:54, 56, John 19:31."
            />
            <Footnote
              number={8}
              text="Romans 5:21-21, 1 Corinthians 15:21-22, 45."
            />
            <Footnote
              number={9}
              text="John 1:3, Colossians 1:16-17, Hebrews 1:2-3."
            />
            <Footnote number={10} text="Matthew 12:8, Luke 6:5." />
            <Footnote
              number={11}
              text="Acts 20:7, 1 Corinthians 16:2; cf. John 20:19."
            />
            <Footnote number={12} text="Revelation 1:10." />
            <Footnote number={13} text="Romans 14:5-6, Colossians 2:16-17." />
            <Footnote
              number={14}
              text="Didache 14:1; Ignatius of Antioch, Epistle to the Magnesians ch. 9; Justin Martyr, First Apology ch. 67."
            />
            <Footnote
              number={15}
              text="Westminster Confession of Faith 21.7-8, Heidelberg Catechism 103, 1689 Second London Baptist Confession of Faith 21.7-8, Baptist Faith and Message 2000 ch. 7."
            />
            <Footnote
              number={16}
              text="Allusions to the 5th through 8th Commandments; Exodus 20:12-15."
            />
            <Footnote
              number={17}
              text="Some posit, for instance, that the Ten Commandments don't apply to the church, and others posit that the day doesn't point to heaven, but instead to Christ, thus abrogating it once one has received Christ. The former misunderstanding stems from a faulty view of the law and the passages that touch on it (cf. 1 Corinthians 9:9, 20-21), and the latter stems from a misinterpretation of Hebrews 4:3, which is discussed below."
            />
            <Footnote number={18} text="Hebrews 3:7-4:11." />
            <Footnote number={19} text="Mark 2:27 ESV." />
            <Footnote
              number={20}
              text="Romans 5:12-21, 1 Corinthians 15:21-22."
            />
            <Footnote
              number={21}
              text="For a more thorough presentation of this doctrine, see Foundations of Covenant Theology by Lane Tipton and Systematic Theology 2.1.IV and 2.3.III by Louis Berkhof."
            />
            <Footnote
              number={22}
              text="Hebrews 4:1-2, 1 Corinthians 10:1-5, Romans 9:31-32."
            />
            <Footnote
              number={23}
              text="Matthew 12:1-8, Mark 2:23-28, Luke 6:1-5."
            />
            <Footnote
              number={24}
              text="Matthew 12:9-14, Mark 3:1-6, Luke 6:6-11, 13:10-17, 14:1-6, John 5:1-7, 7:21-24, 9:1-17."
            />
            <Footnote
              number={25}
              text="“The word Remember is set in the beginning of the fourth commandment, partly, because of the great benefit of remembering it, we being thereby helped in our preparation to keep it, and, in keeping it, better to keep all the rest of the commandments, and to continue a thankful remembrance of the two great benefits of creation and redemption; … and partly, because we are very ready to forget it, … [since] it restraineth our natural liberty in things at other times lawful; that it cometh but once in seven days, and many worldly businesses come between, and too often take off our minds from thinking of it, either to prepare for it, or to sanctify it; and that Satan with his instruments much labor to blot out the glory, and even the memory of it, to bring in all irreligion and impiety.” Westminster Larger Catechism 121."
            />
            <Footnote number={26} text="A paraphrase of Exodus 20:10 ESV." />
            <Footnote number={27} text="Matthew 5:21-23." />
            <Footnote
              number={28}
              text="Acts 20:7, 1 Corinthians 16:2; cf. John 20:19, Hebrews 10:25."
            />
            <Footnote
              number={29}
              text="https://opc.org/qa.html?question_id=604."
            />
            <Footnote number={30} text="Hebrews 4:8-11." />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
