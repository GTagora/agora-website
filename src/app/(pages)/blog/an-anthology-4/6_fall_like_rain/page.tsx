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
					<h1 className={styles.title}>fall like rain</h1>
					<div className="leading-7">
						Parched I stand<br/>
						Thirsty I look up<br/>
						<q>Bring me rain, Lord</q><br/>
						<br/>
						These clasped hands<br/>
						Longing to receive<br/>
						Thirsting for drink<br/>
						<br/>
						Drip by drip the rain falls<br/>
						Through the cracks each drip falls<br/>
						And in the puddle of my hands I drink<br/>
						<br/>
						Yet in this drink I still thirst<br/>
						Satisfied but always thirsty<br/>
						Going back to what little rain may come<br/>
						<br/>
						<q>Why are you satisfied by so little?<br/>
						For I have so much more to offer<br/>
						If only you would ask.</q><br/>
						<br/>
						For is this not life?<br/>
						To be able to drink<br/>
						Even what little is given<br/>
						<br/>
						But if what You say is true<br/>
						Then Lord give me more<br/>
						So that I may never thirst<br/>
						<br/>
						Lord, I need downpour<br/>
						A mighty flood of rain<br/>
						So that these hands may never empty<br/>
						<br/>
						Would they overflow<br/>
						Would they never leak<br/>
						Would they be filled like never before<br/>
						<br/>
						So Spirit fall like rain<br/>
						Fill this cup anew<br/>
						Let it overflow<br/>
						<br/>
						Continuously pour into me<br/>
						Overflow<br/>
						Satisfy me in ways only You can<br/>
						<br/>
						Would I then be a fountain<br/>
						An outpouring<br/>
						So that those around me may also not thirst<br/>
						<br/>
						&mdash;<br/>
						<br/>
						Have you ever tried to clasp your hands and catch the rain in your hands? No matter how tightly you hold, water always sifts in between the cracks between your palm and fingers. In a way, I can see it as a model of our faith. We&apos;re so satisfied by the little that we can catch. When we can scoop some water in our hands and drink. When we fill ourselves with the Lord from time to time in seasons, searching for these spiritual highs, we find ourselves empty once again. We come back to the Lord asking Him for another small glimpse. But why do that when He offers so much more? He offers more than just satisfaction of our thirst. He promises that we can never thirst again.<br/>
						<br/>
						To live in Christ, to overflow is to be living in continuous outpouring of God&apos;s love and mercy. The rate at which we receive, the rate at which we experience, must overtake, overcome, and be so much greater than how we pour out. Only God can give us this outpouring. Not anything a spiritual high can do, but a daily return to Him. A daily surrender, a daily need. Then, and only then, may your cup overflow and His love be your life.<br/>
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/5_paradox_of_time"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/7_roaming_nomad"
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
