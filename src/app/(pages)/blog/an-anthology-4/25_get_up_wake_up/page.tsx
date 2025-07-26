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
						src="/blog/an-anthology-4/25_get_up_wake_up.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>get up! wake up!</h1>
					<div className="leading-7">
						My soul, why do you linger in your shame?<br/>
						Why do you dwell on your guilt?<br/>
						<br/>
						For Christ has done a good work<br/>
						He has paid it all on that cross<br/>
						<br/>
						All shame is gone<br/>
						All guilt is freed<br/>
						<br/>
						The price has been paid<br/>
						There is no sin left to fear<br/>
						<br/>
						So pick up your head<br/>
						Stand on your feet<br/>
						<br/>
						Get up!<br/>
						Wake up!<br/>
						<br/>
						For the joy of the Lord is your strength<br/>
						Your life has only just begun<br/>
						<br/>
						For there is no greater freedom<br/>
						No greater privilege<br/>
						<br/>
						To bow down at the throne<br/>
						To sit at Your feet<br/>
						<br/>
						My soul, rejoice!<br/>
						Celebrate!<br/>
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/24_to_easter"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/"
							className={styles.href}
							>
							Back to contents &nbsp;&gt;
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
