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
						src="/blog/an-anthology-4/20_image_bearer.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>image bearer</h1>
					<div className="leading-6">
						To be an image bearer<br/>
						<br/>
						Brother,<br/>
						Sister,<br/>
						one in the same<br/>
						<br/>
						Son of God,<br/>
						daughter of God,<br/>
						live amidst His creation<br/>
						<br/>
						Love,<br/>
						Mercy,<br/>
						That is who You are<br/>
						<br/>
						Justice,<br/>
						Truth,<br/>
						That is who You are<br/>
						<br/>
						You welcome me in Your courts<br/>
						You call my name in love<br/>
						You seek to dwell in me<br/>
						<br/>
						In my image I reflect You<br/>
						Your glory and righteousness<br/>
						Mirrored on my face<br/>
						<br/>
						Like the moon to the sun<br/>
						A reflection of Your light<br/>
						Shining upon Your people<br/>
						<br/>
						As people see me<br/>
						May they see Your face<br/>
						Your character reflecting upon me<br/>
						<br/>
						Image bearer<br/>
						That is who You made me to be<br/>
						To bear Your image
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/19_daily_bread"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/21_connections"
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
