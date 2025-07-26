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
						src="/blog/an-anthology-4/18_do_you_love_me.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}><q>Do you love Me</q></h1>
					<div className="leading-7">
						Constantly returning to my sin<br/>
						The sin that put You on that cross<br/>
						Sitting at the fire<br/>
						I’m called to be Your witness<br/>
						<br/>
						Dwelling on the weight of my sin<br/>
						Burdened by its darkness<br/>
						At the fire I turn You away<br/>
						To wallow in my guilt and shame<br/>
						<br/>
						Woe is me<br/>
						For I’m unclean<br/>
						For I have seen my ugly sin<br/>
						In opposition to Your perfect being<br/>
						<br/>
						You call me still<br/>
						You gave Your life<br/>
						In my shame i walk<br/>
						At Your feet i kneel<br/>
						<br/>
						By the fire You await for me<br/>
						The same place I turned You away<br/>
						With open arms You stand<br/>
						You sit and wait for me<br/>
						<br/>
						<q>Do you love me,</q> you ask<br/>
						For I sit there with no words left to say<br/>
						Speechless i sit<br/>
						My heart trembles<br/>
						<br/>
						<q>Do you love me,</q> you ask<br/>
						As the tears fall gently on my lap<br/>
						Speechless i sit<br/>
						My heart breaks<br/>
						<br/>
						<q>Do you love me,</q> you ask<br/>
						As i grieve my betrayal<br/>
						Speechless i sit<br/>
						Yet You comfort me<br/>
						<br/>
						<q>Feed my lambs</q><br/>
						<q>Tend my sheep</q><br/>
						<q>Feed my sheep</q><br/>
						You say<br/>
						<br/>
						This forgiven life is Yours<br/>
						To turn away from sin<br/>
						To follow You day by day<br/>
						To love You more and more<br/>
						<br/>
						<b>Inspired by Isaiah 6, John 18, and John 21</b>
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/17_a_metric_of_success"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/19_daily_bread"
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
