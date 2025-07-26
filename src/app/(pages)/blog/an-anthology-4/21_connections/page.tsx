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
						src="/blog/an-anthology-4/21_connections.webp"
						width={600}
						height={600}
						alt="connections article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>connections</h1>
					<div className="leading-7">
					<b>Inspired by Acts 2:42-47</b><br/><br/>
					In this digital age, we are connected but simultaneously so disconnected. We’re glued to the screens, weary eyed, and filled with feelings of cynicism and pessimism as we’re flooded daily with more information than humans were designed to handle. Gen Z and Gen Alpha are arguably some of the most digitally-immersed and globally informed generations of all of history. Yet despite all this connection, we are known as the ‘loneliest generation’. It’s quite ironic. We search for fulfillment and the approval of strangers online more than we seek the opinion of the One who created and knows us deeper than anyone else.<br/><br/>
					To find a connection with anyone is to find a commonality, a similarity, something in common that is a deep part of each other’s lives. If these things are built on something fragile, does that not also mean that the relationship is standing on something fragile? We see friendships broken over small arguments. Marriages broken over disagreements of direction. We, as social beings, seek to find our commonalities in things that will perish. When those things perish, so do those relationships.<br/><br/>
					But we Christians are different. We share a commonality that is unfailing and indestructible, Jesus Christ. Through Jesus, broken relationships are restored. Marriages are restored. Friendships, brotherhoods, sisterhoods, can endure anything. Through Jesus, we share all in common.<br/><br/>
					“And all who believed were together and had <b>all</b> things in common.”<br/>
					&mdash;Acts 2:44 (ESV)<br/><br/>
					These people spoke different languages. They had different cultures, different upbringings. Different interests and hobbies for sure, yet they still had <b>all</b> in common. To live as a believer is to live with Jesus as your <b>all</b>. When Jesus is your <b>all</b>, then anyone else who follows Jesus shares <b>all</b> with you. It’s a connection that withstands anything. A connection given by God, a connection that cannot ever be equal to a relationship built of this world.<br/><br/>
					It’s time to reconnect. To reconvene. To once again reposition your all and experience deep relationships that could never have come without Jesus. This generation needs Jesus.
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/20_image_bearer"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/22_stillness_in_a_rushed_world"
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
