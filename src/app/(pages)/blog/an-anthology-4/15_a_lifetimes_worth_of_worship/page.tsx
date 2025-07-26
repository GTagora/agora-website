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
						src="/blog/an-anthology-4/a_lifetimes_worth_of_worship.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}></h1>
					<div className="leading-7">
						<br/>In everlasting joy I live
						<br/>In the palm of Your hands I dance
						<br/>
						<br/>Until I see You again
						<br/>When all is finished
						<br/>
						<br/>May You be my only
						<br/>May You be my all
						<br/>
						<br/>To gaze upon Your face
						<br/>To dance upon Your hands
						<br/>
						<br/>A lifetime’s worth of worship
						<br/>That is what You ask
						<br/>
						<br/>To sing Your praises in each day
						<br/>To love You all of my days
						<br/>
						<br/>May I praise through every season
						<br/>In the darkest night and the brightest day
						<br/>
						<br/>To walk in the valleys of life
						<br/>To the mountain peaks of Your glory
						<br/>
						<br/>The highest place I will ever be, Lord
						<br/>Is right at Your feet
						<br/>
						<br/>In the palm of Your hands I dance
						<br/>Your everlasting joy is my reward
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/**"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/**"
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
