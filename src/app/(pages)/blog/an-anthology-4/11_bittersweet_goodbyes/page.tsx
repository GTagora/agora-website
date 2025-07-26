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
						src="/blog/an-anthology-4/bittersweet_goodbyes.webp"
						width={600}
						height={600}
						alt="bittersweet goodbyes article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>bittersweet goodbyes</h1>
					<div className="leading-7">
						Sometimes I wish I never saw friends again…<br/><br/>
						because when I see them again, I am reminded of all the wonderful times we shared…<br/><br/>
						and then those wonderful times increase and increase until it becomes hard to part with them once again…<br/><br/>
						but isn’t that the most beautiful blessing?<br/><br/>
						to have brothers and sisters to run alongside this race with…<br/><br/>
						to share of His goodness and share in His joys and mercies.<br/><br/>
						What a blessing that is.<br/><br/>
						Bittersweet goodbyes may be the only way to truly recognize and reconcile with that. How beautiful that is.<br/><br/>
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
