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
						src="/blog/an-anthology-4/13_growing_pains.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>growning pains</h1>
					<div className="leading-6">
						To goodbyes<br/>
						To hellos<br/>
						<br/>
						The old has passed<br/>
						The new has come<br/>
						<br/>
						Things are changing<br/>
						Yet are still the same<br/>
						<br/>
						Good things take time<br/>
						Growing pains renew<br/>
						<br/>
						To the coming hellos<br/>
						To the coming goodbyes<br/>
						<br/>
						Break me, Lord<br/>
						Shape me, Lord<br/>
						<br/>
						Thank You<br/>
						That You know what You’re doing<br/>
						<br/>
						To grow in fruit<br/>
						To grow in love<br/>
						<br/>
						Whatever it takes<br/>
						Good things take time<br/>
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/12_sorrowful_yet_always_rejoicing"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/14_a_reflection_on_luke_13"
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
