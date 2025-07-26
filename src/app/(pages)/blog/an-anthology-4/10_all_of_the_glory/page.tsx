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
						src="/blog/an-anthology-4/10_all_of_the_glory.webp"
						width={600}
						height={600}
						alt="All of the glory article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>All of the glory</h1>
					<div className="leading-7">
						In the highs,<br/>
						in the lows.<br/>
							<br/>
						In the frustration,<br/>
						in the peace<br/>
							<br/>
						In the suffering,<br/>
						in the healing<br/>
							<br/>
						In the roaring quakes,<br/>
						in the gentle whisper<br/>
							<br/>
						To when You bless,<br/>
						and when You take away<br/>
<br/>
						This world is Yours,<br/>
						this life is Yours<br/>
							<br/>
						All of it is Yours, Lord,<br/>
						all glory belongs to You<br/>
							<br/>
						Out of the darkness You called me,<br/>
						out of my anguish You called me<br/>
							<br/>
						In the depth of my pain,<br/>
						in my crying of desperation<br/>
							<br/>
						Your arms reach for me,<br/>
						and in Your gentle embrace i rest<br/>
							<br/>
						To sit in the presence of Your glory,<br/>
						In the midst of Your face<br/>
							<br/>
						That is where i long to be,<br/>
						to sit for eternity<br/>
							<br/>
						All of it is Yours, Lord,<br/>
						all glory belongs to You<br/>
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/9_reflections"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/11_bittersweet_goodbyes"
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
