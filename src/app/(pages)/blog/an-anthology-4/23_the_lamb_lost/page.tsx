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
						src="/blog/an-anthology-4/23_the_lamb_lost.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>the lamb / lost</h1>
					<div className="leading-6">
						a sheep has lost its voice<br/>
						Wandering, lost,<br/>
						apart from the pack<br/>
						<br/>
						Scared,<br/>
						It cries out for help<br/>
						searching for its home<br/>
						<br/>
						None who know<br/>
						None can hear<br/>
						None can see<br/>
						<br/>
						In the midst of it all,<br/>
						Where is its peace?<br/>
						Where is its home?<br/>
						<br/>
						It cries for it does not know<br/>
						It wanders for it knows not where to go<br/>
						Scared and alone it stands<br/>
						<br/>
						Suffocated, <br/>
						Lost,<br/>
						Consumed by anxiety<br/>
						<br/>
						Where does it go?<br/>
						Where is its rest?<br/>
						Who will lead it back home?<br/>
						<br/>
						&mdash;<br/>
						<br/>
						With the pack, the Shepherd leads<br/>
						He knows His sheep, each one by name<br/>
						The Shepherd notices His lost sheep<br/>
						Calling its name, He searches<br/>
						Knowing its steps, He traces<br/>
						He leaves the sheep to search<br/>
						They await for His return<br/>
						<br/>
						Crying out, He hears His sheep<br/>
						Desperate for direction<br/>
						Despe<br/>rate for hope
						<br/>
						The Shepherd embraces His sheep<br/>
						<br/>
						Once again it can breathe<br/>
						It knows it is safe<br/>
						It knows it is home<br/>
						<br/>
						The Shepherd leaves the 99 for the 1<br/>
						Rejoicing, He has found the lost<br/>
						<br/>
						In His protection they dwell<br/>
						For there is no place like home<br/>
						<br/>
						<b>Inspired by Matthew 18:10-14</b><br/>
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/22_stillness_in_a_rushed_world"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/24_to_easter"
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
