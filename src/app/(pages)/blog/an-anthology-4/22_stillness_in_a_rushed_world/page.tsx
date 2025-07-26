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
						src="/blog/an-anthology-4/22_stillness_in_a_rushed_world.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>stillness in a rushed world</h1>
					<div className="leading-6">
						From one thing to the next<br/>
						A bombardment of expectations<br/>
						<br/>
						Do this<br/>
						Do that<br/>
						<br/>
						Achieve this<br/>
						Achieve that<br/>
						<br/>
						The world continues its barrage<br/>
						An insecure heart cannot withstand<br/>
						<br/>
						The world tells me my identity<br/>
						You show me one greater<br/>
						<br/>
						Quiet my heart, let me sit at Your feet<br/>
						Silence is all, let me hear Your voice<br/>
						<br/>
						You call me to something greater<br/>
						You reshape my identity<br/>
						<br/>
						I am lovingly made in You<br/>
						You place my confidence in You<br/>
						<br/>
						You have called me to more<br/>
						More than this world can offer<br/>
						<br/>
						So remind me of who I am, Lord<br/>
						Keep me in Your plans<br/>
						<br/>
						In this rushed world<br/>
						In the hustle and bustle<br/>
						<br/>
						Keep me still<br/>
						To walk in Your plan<br/>
						<br/>
						<b>Inspired by 1 Samuel 15:17</b><br/>
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/21_connections"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/23_the_lamb_lost"
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
