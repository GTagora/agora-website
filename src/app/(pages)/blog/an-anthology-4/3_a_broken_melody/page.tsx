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
						src="/blog/an-anthology-4/3_a_broken_melody.webp"
						width={600}
						height={600}
						alt="a broken melody article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>a broken melody </h1>
					<div className={styles.text}>
						“I’m sorry, Lord”<br/>
						“I won’t do it again”<br/>
						<br/>
						in my guilt i wallow<br/>
						in my shame i hide<br/>
						<br/>
						for down in my heart<br/>
						i know i’ll turn back<br/>
						<br/>
						like Adam and Eve in the garden<br/>
						i hide in my dirtiness<br/>
						<br/>
						You call out my name<br/>
						You desire to love me<br/>
						<br/>
						yet i continue to hide<br/>
						ashamed and disgusted at my own sin<br/>
						<br/>
						rather than walking out in faith<br/>
						to receive Your love and blessing<br/>
						<br/>
						i sit in my sin<br/>
						and ask for a bigger portion size<br/>
						<br/>
						for like a song on repeat<br/>
						this broken melody plays<br/>
						<br/>
						a broken song i sing<br/>
						knowing no harmony<br/>
						<br/>
						change my appetite, Lord<br/>
						renew this spirit<br/>
						<br/>
						for if I return, Lord<br/>
						You promise You’ll renew me<br/>
						<br/>
						but can You make a new song, Lord?<br/>
						can you fix this broken melody?<br/>
						<br/>
						if it is so, Lord<br/>
						if Your promises are true<br/>
						<br/>
						then take this sacrifice<br/>
						take this life<br/>
						<br/>
						use it for Your glory<br/>
						and make me a beautiful song<br/>
						<br/>
						Inspired by Jeremiah 15:19 and Maverick City Music’s song, ‘Broken Melodies’
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/2_detours"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/4_is_this_really_all"
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
