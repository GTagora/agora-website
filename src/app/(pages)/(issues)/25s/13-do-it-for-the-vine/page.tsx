import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
	const author = "Andy Ouyang";
	const credit = "Photo by Andy Ouyang";
	const title = "Do It for the Vine";
	const date = "April 23, 2025";

	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<Image
						className={styles.image}
						src="/issues/25s/do-it-for-the-vine.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>{credit}</p>
					<h1 className={styles.title}>{title}</h1>
					<h2 className={styles.author}>BY {author.toUpperCase()}</h2>
					<h3 className={styles.date}>{date}</h3>
					<div className={styles.text}>
						<p>
							There is a garden that God places in our care. But instead of
							plants growing in that garden, it’s people and relationships. Some
							relationships we search for and choose to plant in our garden.
							Other relationships have been planted there from the start. But
							above all, our garden must have one relationship growing at its
							center—a vine.
						</p>
						<br />

						<h2>
							<strong>The Garden We Choose</strong>
						</h2>

						<p>
							We often consider those who we choose to share our lives with our
							friends. But what is a friend?
						</p>
						<br />

						<p>
							Merriam Webster defines a friend as “one attached to another by
							affection or esteem”<sup>1</sup> [Merriam-Webster]. But what
							amount of “affection” or “esteem” separates an acquaintance from a
							friend? One person may draw that line differently than the next.
							However you define it, we would never be satisfied with only
							knowing acquaintances.
						</p>
						<br />

						<p>
							Scripture gives us a different definition of friendship. It
							doesn’t undermine the importance of “affection” or “esteem”; the
							famous friendship of David and Jonathan was full of affection and
							esteem. Rather, in addition, it requires that true friendship is
							intentional, involved, and interceding.
						</p>
						<br />

						<p>
							In Proverbs, we see the intentional choice behind friendship. We
							are told that “the righteous choose their friends carefully” and
							there is value in being intentional and having “a friend” as
							opposed to “many companions”<sup>2</sup> [Proverbs 12:26, 18:24].
							Friendship also means being closely involved in one another’s
							lives. Jesus called his disciples “friends” and was deeply
							involved in their lives: spending time with them, eating with
							them, and confiding in them. Finally, friendship also means
							interceding in one another’s lives. A friend is one who gives
							“earnest counsel” and is not afraid to “wound” you when necessary
							<sup>3</sup> [Proverbs 27:6,9].
						</p>
						<br />

						<p>
							There is an intimacy and commitment to biblical friendship that
							goes beyond just affection or esteem. And yet, there is a joy and
							delight to friendship that goes beyond just duty and
							responsibility.
						</p>
						<br />

						<p>
							Friends are the flowers of our garden. There is something sweet in
							our shared interests or experiences, like a fragrance which draws
							us in. And there is a brightness and color that only someone
							else's personality can bring to our lives. But if our friendships
							are not deeply rooted, they become wilted and easily blown away
							during the storms of our life.
						</p>
						<br />

						<h2>
							<strong>The Garden Chosen For Us</strong>
						</h2>

						<p>
							If friends are the flowers in our garden, then family are the
							trees in our garden, ones that have been there for as long as we
							can remember. Unlike friends, who we can choose, family is
							something we are born into. We don’t choose family members based
							on the sweetness of shared experience or the color of their
							personality. Rather, the strength of family is in the deep roots
							which anchor us through the storms of “adversity” in our lives
							<sup>4</sup> [Proverbs 17:17].
						</p>
						<br />

						<p>
							So, if there is a distinction between friends and family, how
							about our “brothers” and “sisters” in Christ? The comparison of
							church to family is used over and over. We are called “members of
							the household of God”<sup>5</sup> [Ephesians 2:19] and part of
							“the household of faith”<sup>6</sup> [Galatians 6:10]. When we
							follow Christ, we are born again into the family of believers, and
							the same concept applies: we cannot choose our siblings. And yet
							we are called to worship God together, love and serve one another,
							and be a light to those outside the church. We are no longer
							“strangers” to God or to one another, but we are chosen into an
							eternal family, united under Christ.
						</p>
						<br />

						<p>
							So what happens when we make friends within our church family? By
							“choosing” only some people to be friends, are we showing
							partiality and making “distinctions among ourselves”?<sup>7</sup>{" "}
							[James 2:4]
						</p>
						<br />

						<p>
							According to a survey by the American Bible Society, they found
							that the most common negative experience in church was “exclusion
							or cliques within the faith community”<sup>8</sup> [Fulks]. And
							for most Christians, that may not come as a surprise. It’s natural
							to want to make friends with likeminded people, and for many
							Christians, those are other members of the church. By nature,
							friendships are intentional and friend groups are exclusive.
							According to Aristotle, “A friend to all is a friend to none”, and
							there is some truth to that. There is a depth and commitment to
							real friendship that cannot be realistically maintained with too
							many people.
						</p>
						<br />

						<p>
							So how can we have close, intentional friendships without leaving
							some members of the church feeling excluded? The answer lies in
							how we view the church and our relationship with Christ.
						</p>
						<br />

						<h2>
							<strong>The Garden We Are Chosen For</strong>
						</h2>

						<p>
							In our garden, Jesus is the vine and we the church are its
							branches<sup>9</sup> [John 15:5]. And it is through that “true
							vine” that all believers are connected by an unbreakable bond of
							unity.
						</p>
						<br />

						<p>
							The unity we are called to have as a church is one that mirrors
							the unity found between the Father, Son, and Spirit<sup>10</sup>{" "}
							[John 17:21]. And the bond that we have in Christ is stronger and
							closer than any other bond. For what binding can be stronger than
							the blood of Christ and who could be closer to you than your own
							body<sup>11</sup> [Ephesians 2:13,16]? Jesus charges us to love
							one another in the same way that He has loved us: sacrificially
							and unconditionally. It’s only through “bearing with one another”
							<sup>12</sup> [Ephesians 4:2] in that sacrificial and
							unconditional love that we can find the unity we’re called for.
						</p>
						<br />

						<p>
							Unity in the church is not something that comes naturally; it
							takes deliberate sacrifice, patience, humility, and forgiveness.
							It means making others feel welcome and honored at the expense of
							our own comfort in the types of people we normally get along with
							and the communities we’ve formed. It also means giving one another
							grace and bearing with one another in patience when we feel
							excluded or unwelcome. But “bearing with one another” does not
							mean bottling up our pains and hurts into bitterness. We should be
							honest with one another: accepting a “complaint” in humility and,
							in turn, forgiving one another<sup>13</sup> [Colossians 3:13].
						</p>
						<br />

						<p>
							But the purpose of church is more than just to find unity with one
							another. As fellow branches from the vine, we are called to bear
							fruit. And as a church, we need to begin with that mission.
						</p>
						<br />

						<p>
							Our mission is both inward and outward: calling those in the
							church to become more like Christ and bringing those in the world
							to see and know Christ. Finding a welcoming community and sense of
							belonging may set the stage for our inward mission, but it is not
							the end goal. By putting too much of our hope and purpose on
							community, we lose sight of our greater calling: to worship God
							and serve others. We are called “fellow workers” and if we truly
							believe that “the harvest is plentiful but the workers are few”
							<sup>14</sup> [Matthew 9:37], then we cannot afford to exclude
							even a single worker! But we are also made to rest from our work,
							and we often find that rest in our friends that pour into us.
							Which again leads us back to the central problem: we can’t be
							friends with everyone. Sometimes, we can’t even be good friends to
							the ones we have; we fail to love one another time and time again.
							Which is why we are told to not put our trust “in human beings,
							who cannot save”<sup>15</sup> [Psalm 146:3].
						</p>

						<p>
							But there is one who can save, who calls us both friends
							<sup>16</sup> [John 15:13-15] and family<sup>17</sup> [Matthew
							12:50]. The extent of His love doesn’t dilute its depth or
							intensity. His friendship extends to us all individually and
							personally; dying for us while we were still sinners and walking
							with us as we are sanctified. Jesus himself called us friends when
							he said “greater love has no one than this, that someone lay down
							his life for his friends”<sup>16</sup> [John 15:13-15] and that is
							exactly what He did for us on that cross. As impossible as it may
							seem, His command for us is to love one another with that same
							self-sacrificial love. And that is what it means to “abide in the
							vine.” It is only through our relationship with Christ that we can
							truly know His love for us and be able to love each other the same
							way. He is a friend who has chosen us, walks with us daily, and
							intercedes on our behalf. In our friendship with Him, the true
							vine, we find our rest.
						</p>
						<br />
					</div>
				</div>
				<div className="mt-8 leading-6">
					<p className="mb-3 font-bold">Footnotes</p>

					<Footnote
						number={1}
						text="friend. (2025). In Merriam-Webster Dictionary. https://www.merriam-webster.com/dictionary/friend"
					/>
					<Footnote number={2} text="Proverbs 12:26, 18:24" />
					<Footnote number={3} text="Proverbs 27:6,9" />
					<Footnote number={4} text="Proverbs 17:17" />
					<Footnote number={5} text="Ephesians 2:19" />
					<Footnote number={6} text="Galatians 6:10" />
					<Footnote number={7} text="James 2:4" />
					<Footnote
						number={8}
						text="Fulks, J., Angel Mann, Randy Petersen, Plake, J. F., American Bible Society, Holloran, J., & Plake, J. F. (2024). State of the Bible 2024. In American Bible Society, State of the Bible (September 2024 edition). https://1s712.americanbible.org/state-of-the-bible/stateofthebible/State_of_the_bible-2024.pdf"
					/>
					<Footnote number={9} text="John 15:5" />
					<Footnote number={10} text="John 17:21" />
					<Footnote number={11} text="Ephesians 2:13,16" />
					<Footnote number={12} text="Ephesians 4:2" />
					<Footnote number={13} text="Colossians 3:13" />
					<Footnote number={14} text="Matthew 9:37" />
					<Footnote number={15} text="Psalm 146:3" />
					<Footnote number={16} text="John 15:13-15" />
					<Footnote number={17} text="Matthew 12:50" />
				</div>
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
}
