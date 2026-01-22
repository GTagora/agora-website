import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
	const author = "Elliott Chen";
	const credit = "Photo by Daniel Guo";
	const title = "Garden of Graves";
	const date = "April 23, 2025";

	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<Image
						className={styles.image}
						src="/issues/25s/garden-of-graves.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>{credit}</p>
					<h1 className={styles.title}>{title}</h1>
					<h2 className={styles.author}>BY {author.toUpperCase()}</h2>
					<h3 className={styles.date}>{date}</h3>
					<div className={styles.text}>
						<h1>
							“The line between good and evil passes…through every human heart.”
						</h1>
						<p>
							<em>
								- Aleksandr Solzhenitsyn, <strong>The Gulag Archipelago</strong>
							</em>
						</p>
						<br />

						<p>
							Red poppies adorn the rows of white headstones, standing in rank
							and file across Arlington National Cemetery. Unlike the modern
							steel skyscrapers towering over the ground, the humble stones
							saluting the departed demand reverence for those who died in
							service of their country. In a different tone from the previous
							writers, I invite you to join me in somber reflection. For “It is
							better to go to a house of mourning than to go to a house of
							feasting, for death is the destiny of everyone.”
						</p>

						<p>
							What wisdom can we draw from this solemn sight? The wisdom of
							Solzhenitsyn, which reminds us that the struggle of good against
							evil resides not in historical battlefields, but in the hidden
							depths of our hearts. For the screaming horrors of the past did
							not arrive in isolation, but arose from the numbing ignorance of
							our iniquity. To honor their sacrifice, let us then examine
							ourselves, and see what we can do to rectify our personal
							shortcomings, so that we may avoid the mistakes of the past. Only
							then can flowers of righteousness bloom once more in this Garden
							of Graves.
						</p>
						<br />

						<h2>
							<strong>Unearned Moral Valor</strong>
						</h2>

						<p>
							<em>
								“There can be only one permanent revolution — a moral one…Nobody
								knows how it will take place in humanity, but every man feels it
								clearly in himself. And yet in our world everybody thinks of
								changing humanity, and nobody thinks of changing himself.”
							</em>
							— Leo Tolstoy, <strong>Three Methods Of Reform</strong>
							<br />
						</p>

						<p>
							A strange idea has taken hold of our modern minds. Even though a
							sizable proportion of people believe that morality is subjective,
							they hold to some idea that, as a modern and scientific society,
							we have “made moral progress.”
						</p>

						<p>
							This is true to an extent; as a society we shun the ownership of
							humans as property, and believe that each human has certain rights
							afforded to them. But to think that moral progress means that we
							are morally superior to our ancestors is a grave mistake—unearned
							moral valor, if you will.
						</p>

						<p>
							We may not sacrifice infants on iron hot altars in the vain
							superstition that it will bring rain, but we sacrifice babies in
							abortions for a fleeting notion of financial security. Corruption
							and abuse of power remain all the same both in antiquity and in
							our present time. Just as science stands upon the shoulders of
							giants, so do our moral convictions stand upon the shoulders of
							abolitionists. Stanley Milgram’s famous experiment with lethal
							shocks demonstrates how quickly we can stumble into making morally
							horrifying decisions.
						</p>

						<p>
							When our own life is at stake, we would be surprised at the things
							we could do to survive. How else then, could “the world’s most
							civilized and advanced people (The people of Beethoven, Goethe,
							Kant) [have] embraced that slime-ball Hitler and participated in
							the Holocaust?”<sup>1</sup>
						</p>

						<p>
							What a question indeed! While Adolf Hitler was certainly
							responsible for these horrors as the head of the Nazi party, I
							believe it was the moral cowardice of the German people that
							enabled him to get away with it. It was the average young man,
							drafted into the military, who carried out the extermination of
							the “undesirables,” rather than evil ogres and overlords.
						</p>

						<p>
							To think that it is solely the responsibility of charismatic
							fascist and communist leaders for these atrocities would be naive.
							Holocaust survivor Freddie Katz states that “Only a tiny
							proportion of this century’s mass killings are attributable to the
							actions of those people we call criminals or crazy people... The
							vast majority of killings were actually carried out by plain folk
							in the population—ordinary people, like you and me.”
						</p>

						<p>
							The stark reality a moral subjectivist admits is that in doing
							good, we are largely motivated by our self-interest. We don’t rob
							banks largely because we’re not skilled enough to evade jail time.
							Some of us virtue signal, doing a good deed for the ulterior
							motive of appearing good, often doing great evil in the process.
							Take pedophile hunters on social media: many do it for clout or
							emotional satisfaction, and in the process, make it easier for the
							pedophile to get away by jeopardizing ongoing police
							investigation.
						</p>

						<p>
							It is a good instinct to want to be a hero and to see justice
							done. But to equate having that desire with “being a good person”
							is stolen moral valor.
						</p>

						<p>
							Jesus calls out this facetiousness in the moral teachers for the
							lay people of his time: “Woe to you, teachers of the law and
							Pharisees, you hypocrites! You clean the outside of the cup and
							dish, but inside they are full of greed and self-indulgence. Blind
							Pharisee! First clean the inside of the cup and dish, and then the
							outside also will be clean.”<sup>2</sup> (Matthew 23:25-26)
						</p>

						<p>
							Thus, we must put to rest any idea that we are “a good enough
							person.”
						</p>
						<br />

						<h2>
							<strong>Weed the Garden, Sow Righteousness</strong>
						</h2>

						<p>
							<em>
								“To put the world right in order, we must first put the nation
								in order; to put the nation in order, we must first put the
								family in order; to put the family in order, we must first
								cultivate our personal life; we must first set our hearts
								right.”
							</em>
							— Confucius
						</p>
						<br />

						<p>
							How might we then “clean our inner parts” so that our moral
							convictions may not be vain grandstanding?
						</p>

						<p>
							For some, they must first drop the belief that no moral facts
							exist. Why? First, there can be no “moral progress” if there is no
							objective standard we can progress to. Second, if moral facts and
							duties do not exist, murder and rape are not wrong in any
							meaningful way that is binding to anyone else but an individual
							and the people they have power over. Thus, to be intellectually
							consistent, we have to believe that moral facts exist.
						</p>

						<p>
							The next step is to be honest with ourselves. If we do not
							seriously ponder the great evil we are capable of, we cannot aim
							to prevent gratuitous evil. This is not to be cynical, but to draw
							attention to the fact that “our ability to act well when the time
							comes depends partly, perhaps largely, upon the quality of our
							habitual objects of attention.”<sup>3</sup> (Iris Murdoch,{" "}
							<em>Sovereignty of the Good</em>)
						</p>

						<p>
							Why? The strength and courage to stand up for what is good comes
							from a deep conviction cultivated by proper attention. When the
							right moral choice comes at a significant personal cost, the
							person that has not deeply considered their convictions, if any,
							will not make the right choice. Had more Germans paid attention to
							their values, they might have stood up to Hitler before it was too
							late.
						</p>

						<p>
							In other words, to become better people, we need to be careful
							about what we give our attention to. For Jesus taught that “Your
							eye is like a lamp that provides light for your body. When your
							eye is healthy, your whole body is filled with light. But when
							your eye is unhealthy, your whole body is filled with darkness.
							And if the light you think you have is actually darkness, how deep
							that darkness is!”<sup>4</sup> (Matthew 6:22-23)
						</p>
						<br />

						<p>
							So, what might fixing our attention look like? The children’s hymn{" "}
							<strong>“Be Careful Little Eyes”</strong> gives a decent idea
							through its five verses which state:
						</p>
						<ul>
							<li>Oh, be careful, little eyes, what you see…</li>
							<li>Oh, be careful, little ears, what you hear...</li>
							<li>Oh, be careful, little tongue, what you say...</li>
							<li>Oh, be careful, little hands, what you do...</li>
							<li>Oh, be careful, little feet, where you go...</li>
						</ul>
						<p>There’s a Father up above looking down in love.</p>
						<br />

						<p>
							The low hanging fruit, the most critical but hardest to deal with,
							is paying attention to what we watch—to what seeds we are planting
							in our garden, if you will. “The eye is the window to the soul”
							encapsulates the point. When we scroll social media and use our
							phones, what are we looking at, and for what reason?
						</p>

						<p>
							Are we scrolling endlessly on TikTok and Instagram, mindlessly
							laughing at memes and funny animal videos? Or are we seeking
							answers to questions we have, treating the internet like a library
							of good and bad ideas? These are good starting points for
							investigating our attention habits.
						</p>

						<p>
							What we entertain ourselves with also influences us heavily. How
							do the movies we watch, the games we play, and the books we
							(don’t) read depict aspects of life? Are we engaging with them for
							joy, or to escape reality in harmful ways?
						</p>

						<p>
							Additionally, music is a powerful influence on emotion and
							thought. If it can alter our walking pace, how much more our
							worldview? While I don’t claim it’s wrong to listen to popular
							artists, I encourage reflection: are we glorifying brokenness, or
							being drawn into beauty and truth?
						</p>

						<p>
							“For the one who sows to his own flesh will from the flesh reap
							corruption, but the one who sows to the Spirit will from the
							Spirit reap eternal life.”<sup>5</sup> (Galatians 6:8, ESV)
						</p>
						<br />

						<h2>
							<strong>Flowers of Character</strong>
						</h2>

						<p>
							<em>
								“A good character is the best tombstone. Those who loved you and
								were helped by you will remember you when forget-me-nots have
								withered. Carve your name on hearts, not on marble.”
							</em>
							— Charles H. Spurgeon
						</p>

						<p>
							As we tend our garden of character amidst the faded cemeteries of
							history, let us be contrite in our self-reflection. As the
							diligent gardener attends to the plants in his garden, let us
							uproot the thistles which occupy our attention and prune the
							thorns which blind our eyes to what is good, so that we may stand
							vigilant against the slow corruption of evil.
						</p>

						<p>
							After all, the fight against evil does not begin in distant
							battlefields or grand declarations of war, but within our hearts
							and our daily routines.
						</p>

						<p>
							Then perhaps, when the sun breaks through the somber clouds of the
							Garden of Graves, we shall find vibrant red poppies of remembrance
							saluting the departed.
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
