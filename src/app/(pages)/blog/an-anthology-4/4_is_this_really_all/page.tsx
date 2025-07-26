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
					<h1 className={styles.title}><q>is this really all?</q></h1>
					<div className="leading-7">
						I find myself asking myself this question a lot lately. It&apos;s a daily cry. A reliance. A desire.<br/><br/>
						<q>Is this really all? This can&apos;t be all there is.</q><br/><br/>
						Wake up. Get ready. Go to work. Go to the gym. Meet up with someone. Eat dinner. Relax. Read/pray. Sleep.<br/><br/>
						It&apos;s a daily cycle. A monotonous one. One that I remember writing about and dwelling on many times. Quiet monotony.<br/><br/>
						Isn&apos;t this the &apos; that I asked for? The &apos; that we Americans seek?<br/><br/>
						As I reflect on what &apos; is and what it means to live <q>fully,</q> I find myself unsatisfied by this cycle. Asking God, “is this all You will use me for?”<br/><br/>
						In this season of waiting. This season of cycles. This season of quiet monotony. I pray that I do not succumb to the cycles but still seek You daily.<br/><br/>
						How many years did Abraham wait for Isaac? The Israelites to the promised land? David to his appointment as king?<br/><br/>
						In the wilderness, in the waiting. May my reliance and my dependence grow deeper in You.<br/><br/>
						Why does &apos; feel so empty? Why does there lack purpose?<br/><br/>
						As I wait in this season, may I remember that this isn&apos;t all. There&apos;s so much more to come. He desires my obedience, waiting, and growth.<br/><br/>
						So cling to Him. Seek after Him. Draw near to Him.<br/><br/>
						To the day that He calls your name, be faithful in stewarding them all.<br/><br/>
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/3_a_broken_melody"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/5_paradox_of_time"
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
