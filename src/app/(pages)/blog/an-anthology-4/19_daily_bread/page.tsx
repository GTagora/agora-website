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
						src="/blog/an-anthology-4/19_daily_bread.webp"
						width={600}
						height={600}
						alt="daily bread article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>daily bread</h1>
					<div className="leading-7">
						On the brink of bitterness i stand<br/>
						Is this journey really meant for me?<br/>
						Nothing is going right<br/>
						Nothing to what it should seem<br/>
						<br/>
						In the world I find my satisfaction<br/>
						In the world I find my worth<br/>
						Am I not in control?<br/>
						Is this not my life?<br/>
						<br/>
						Hallowed You are<br/>
						Set apart and Holy You are<br/>
						For when was I in control?<br/>
						When was this my life?<br/>
						<br/>
						I come to You<br/>
						To the Holy One<br/>
						Make me righteous, i ask<br/>
						Show me and make me Holy<br/>
						<br/>
						To bear the cross that Your son carried<br/>
						A heavy weight it is<br/>
						One that can’t be done alone<br/>
						And definitely not by me<br/>
						<br/>
						So, Lord I need Your presence<br/>
						I need Your mercy<br/>
						In this empty world, I seek life<br/>
						Only in You is that found<br/>
						<br/>
						So, may Your kingdom come<br/>
						Your will be done<br/>
						Lord, I need my daily bread<br/>
						Everyday I need You<br/>
						<br/>
						For to bring upon Your Kingdom<br/>
						Is to bring upon Your Holiness<br/>
						For what can a sinner like me<br/>
						Do anything except perish in the presence of a Holy King<br/>
						<br/>
						Lord, help me to never lose sight of the sweetness of Your Gospel<br/>
						Lord, let me return to You<br/>
						My daily food<br/>
						My daily bread<br/>
						<br/>
						On the brink of bitterness i kneel<br/>
						In the presence of the One who has it all<br/>
						It’s all according to Your plan<br/>
						All according to Your will<br/>
						<br/>
						<b>Inspired by Matthew 6:9-13, the Lord’s Prayer</b>

					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/18_do_you_love_me"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/20_image_bearer"
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
