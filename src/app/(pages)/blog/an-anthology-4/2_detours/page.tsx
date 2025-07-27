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
						src="/blog/an-anthology-4/2_detours.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>Detours</h1>
					<div className="leading-7">
						to walk along my road<br/>
						this path of life<br/>
						<br/>
						when the blocks are hit<br/>
						and the plans go south<br/>
						<br/>
						the moments when then plans fail<br/>
						and panic sets in<br/>
						<br/>
						be still my heart<br/>
						quiet my soul<br/>
						<br/>
						sit in reminiscence<br/>
						look to His faithfulness<br/>
						<br/>
						it&apos;s those moments when the speakers shut off<br/>
						yet Your people shout the loudest praise<br/>
						<br/>
						it&apos;s those moments when my schedule falls apart<br/>
						yet Your provision covers me more than ever<br/>
						<br/>
						it&apos;s those moments when all hope feels lost<br/>
						yet Your cross shines brighter than ever<br/>
						<br/>
						it&apos;s Your timing, Lord<br/>
						Your plans, Lord. Not mine<br/>
						<br/>
						it&apos;s when things don&apos;t go the way i plan<br/>
						Your presence draws ever so closer<br/>
						<br/>
						detours we call them<br/>
						maybe even road blocks<br/>
						<br/>
						in the heat of my frustration<br/>
						the loss of my control<br/>
						<br/>
						i grasp onto what i know<br/>
						and You remind me You know more<br/>
						<br/>
						detours?<br/>
						no<br/>
						<br/>
						it&apos;s Your way, Lord<br/>
						Your road i walk on<br/>
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/1_who_am_i"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/3_a_broken_melody"
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
