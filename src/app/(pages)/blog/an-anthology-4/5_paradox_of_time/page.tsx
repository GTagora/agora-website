import styles from "./article.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<Link href="/blog/an-anthology-4" className={styles.breadcrumb}>
						An Anthology of Joy and Thought Vol. 4
					</Link>
					<Image
						className={styles.image}
						src="/blog/an-anthology-4/5_paradox_of_time.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>paradox of time</h1>
					<div className="leading-7">
						Death has followed me all of my life. Six deaths, three car accidents. Its imminence is something that always looms in the back of my mind. In many ways, it has shaped the way I view time. Time is a construct that has now become more condensed, and life no longer feels like it will be as long as I once thought.<br/><br/>
						I&apos;m a single 23-year old male. Arguably, I&apos;m at the life stage with the most spare time outside of work. I&apos;m at what many would call the <q>peak</q> of my productivity and growth. Yet, I find myself thinking very differently from the world. Sure, I could live the life that all 20s seek. Travel all the time, explore the world, work on my career, go to parties. I have so much time, yet no time at all. In my condensed worldview, I find myself constantly rushed, constantly in a hurry in fear of what is inevitably to come: death.<br/><br/>
						We simultaneously have all the time in the world yet we don&apos;t. We are at the mercy of a god who controls all things and can take our lives at the snap of His fingers. Nowadays, I&apos;m surrounded by many people who are in their late 20s and early 30s and I am often reminded that I am the youngest, the one with the most “time”, yet I feel a rush, a push to do more, for my construct of time has shrunken.<br/><br/>
						We live as if we are in full control of our lives, like we dictate when and where we will leave this earth. Like we can decide on our own timing when something will happen. It&apos;s a dangerous mindset to live in. The book of 1 Thessalonians speaks on being vigilant and ready for when the time will come.<br/><br/>
						<i>For you yourselves are fully aware that the day of the Lord will come like a thief in the night.</i><br/>
						&mdash;1 Thessalonians 5:2 ESV<br/><br/>
						We don&apos;t know when the Lord will return or when we will join the Father. So we are to live each day as if it&apos;s our last, but plan as if that same time is still there. It&apos;s a dichotomy, a contradiction, a paradox, one that we feeble and frail beings cannot understand in the presence of a mighty God.<br/><br/>

					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/4_is_this_really_all"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/6_fall_like_rain"
							className={styles.href}
							>
							Next &nbsp;&gt;
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
