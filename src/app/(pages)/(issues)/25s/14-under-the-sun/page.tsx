import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
	const author = "Esther Shen";
	const credit = "Photo by Lorien Cho";
	const title = "Under the Sun";
	const date = "April 23, 2025";

	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<Image
						className={styles.image}
						src="/issues/25s/under-the-sun.webp"
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
							<strong>
								<em>Under the Sun</em>
							</strong>
						</h1>

						<p>
							I often take pleasure in solo walks. Today, with a heavier heart
							than usual, I step outside to clear my head and bask in the
							tranquil breath of creation.
						</p>

						<p>While on my stroll, I saw three things under the sun.</p>
						<br />

						<h2>
							<strong>
								<em>I. The Sparrow</em>
							</strong>
						</h2>

						<p>
							The bird dwells quietly in the bushes, until my sudden presence
							sends it in a flurry. I feel a twinge of guilt. Did I just chase
							it away from home?
						</p>

						<p>But maybe anywhere is home for the sparrow.</p>

						<p>
							Because He who had nowhere to lay His head gives home to the
							homeless.
						</p>

						<p>
							I watch as this nomadic sparrow lands several feet away, plunges
							its head into the dirt, and after some wrestling, triumphantly
							resurfaces with the reward of a flailing worm. It takes off again
							and leaves my field of view.
						</p>

						<p>
							The sparrow never has to worry about what to eat or drink, or
							where to take shelter, or how to stay warm when the earth dons its
							white gown each year—a garment strikingly beautiful yet piercing
							to the touch. In every season, the Lord provides in full.
						</p>

						<p>
							I stare at the now uninhabited bush for a minute. Just as He takes
							care of the sparrows who neither sow nor reap, will He not do the
							same for me? All the prayers I am waiting on Him to answer, all
							the wounds I am pleading with Him to heal, all the seeds I am
							yearning for Him to grow—He will tend to it all in His time. Why
							should I worry about tomorrow when I know who holds the day?
						</p>

						<p>
							I am reminded that my Father knows exactly what I need. And for
							the same reason, He withholds certain things—all for my good.
						</p>

						<p>
							A weight is lifted off my chest and I almost flinch in surprise. I
							didn’t realize I was suffocating from the burden before. Footsteps
							a little lighter, I continue onwards.
						</p>

						<p>Another sight catches my wandering eye.</p>
						<br />

						<h2>
							<strong>
								<em>II. The Gardener</em>
							</strong>
						</h2>

						<p>
							The gardener tends to his garden with meticulous care. There is a
							gentleness to him, like a mother swaddling her child. I am
							entranced by the compassion that guides his weathered hands, to
							plant and water, to fertilize and prune. Even as he bustles
							around, he whistles a merry tune as a love letter to his crops,
							which sway gleefully in the breeze.
						</p>

						<p>
							Moved by this graceful display, I decide to strike up a
							conversation with the gardener. I tell him how I admire his
							dedication to the plants he is tending. I marvel aloud that he
							must spend each and every day here in this garden, and he must be
							proud of the fruits of his labor.
						</p>

						<p>
							The gardener’s response is shocking. He throws his head back and
							chuckles, eyes sparkling in amusement as if to say, “That’s what
							you think.”
						</p>

						<p>
							In reality, he tells me, he has been quite negligent of the
							garden. This is his first time back in weeks. Other commitments
							have grabbed hold of his precious time: copious business trips,
							planning friend get-togethers, and the many demands of serving at
							church. However, this little garden that he planted in the
							community has continued to thrive in his absence.
						</p>

						<p>
							So the song he was whistling was not simply an encouragement to
							his sprouts, but also a melody of joy pouring from his soul—a
							gratitude song to the One who kept the garden alive.
						</p>

						<p>
							A revelation struck me. The gardener never has to worry about the
							welfare of his garden when he cannot be present. He never has to
							doubt whether they, like the sparrow, will be provided for. The
							Lord may choose to use him as His hands and feet—but in times when
							the gardener is faithful and likewise when he is not, the Lord is
							always, always sufficient.
						</p>

						<p>
							On the other hand, I have been obsessing over my shortcomings,
							tormented by the feeling that I have let people down—that I was
							not good enough.
						</p>

						<p>
							But I was never meant to carry this load alone. His yoke is easy
							and His burden is light. Though I may fail a thousand times, it is
							God who gives unwavering growth. How humbling—even comforting—is
							it to see Him work without a finger’s effort from me?
						</p>

						<p>
							Yet, He still delights in this lacking child, even much more than
							a gardener delights in his plants.
						</p>

						<p>
							Another weight is lifted. Scales fall from my heart, hardened
							against His mercies, and dissolve into dust as they crash on the
							ground. Choosing to carry the light burden, I wave farewell to the
							gardener and proceed on my way.
						</p>

						<p>One last thing I saw under the sun.</p>
						<br />

						<h2>
							<strong>
								<em>III. The Branch</em>
							</strong>
						</h2>

						<p>
							Broken, severed, withered. It lays contorted atop the half-soaked,
							half-dried foliage that shrouds the ground. A solemn sight.
						</p>

						<p>
							I ponder what happened to this branch. How did it end up in such a
							state, rejected by the vine that once sustained it?
						</p>

						<p>
							I let my gaze wander skywards. The vine clings to the side of a
							rugged building, hosting a multitude of branches that extend from
							the central stem. They curve optimistically, as if smiling up
							towards the sun, and wave their leaves amiably at me. Other than
							the one fallen, the vine and its branches appear perfectly
							healthy.
						</p>

						<p>
							The difference, I observe, between the withered twig below and the
							flourishing branches above is connection to the vine. The lively
							branches draw nutrients from the vine, enabling them to bear
							fruit. But the twig sits bare, a consequence of not abiding when
							it should have, and now hopelessly unable to.
						</p>

						<p>Apart from the vine, a branch can do nothing.</p>

						<p>Apart from Jesus, I can do nothing.</p>

						<p>
							Maybe that is the reason for my heavy heart. It is because I have
							not been abiding in the True Vine, sitting at His feet like Mary
							did. I forgot that my strength and song do not come once and for
							all, but through daily filling my cup with His living water.
						</p>

						<p>And now I am feeling the thirst.</p>

						<p>
							I look down at the fallen branch. That one may be too far gone.
							But me? He still invites, to come and drink. His table is open.
						</p>

						<p>
							At this, a weight dissipates from my heart once more. With feet
							like the deer’s, I turn back with rejoicing.
						</p>

						<p>
							I know that His table beckons warmly, and I know it does not
							require anything of me. It simply asks that I come and lay it all
							down. All my consuming worries and broken dreams, all my heaviness
							and sorrows. Even my victories too. They are all counted as loss
							in light of Christ, a striving after wind.
						</p>

						<p>
							He asks that I come and trust that He alone is sufficient, that
							His hands will take what I offer and mold it into something
							beautiful.
						</p>

						<p>In the end—the answer He has revealed under the sun is this.</p>

						<p>
							<strong>
								Seek first the kingdom and His righteousness, and everything
								else will be added.
							</strong>{" "}
							<sup>1</sup> (Matthew 6:33)
						</p>
					</div>
				</div>
				<div className="mt-8 leading-6">
					<p className="mb-3 font-bold">Footnotes</p>
					<Footnote number={1} text="Matthew 6:33" />
				</div>
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
}
