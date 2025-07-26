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
						src="/blog/an-anthology-4/8_seasons.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>seasons</h1>
					<div className="leading-7">
						<i>A reflection, a collection of pieces on the seasons of harvest</i><br/>
						<br/><br/>
						<b>Winter</b><br/>
						The cold winds blow<br/>
						Life is gone<br/>
						<br/>
						None can survive<br/>
						Life looks lost<br/>
						<br/>
						For nothing can survive in the harsh winter<br/>
						No fruits will be born<br/>
						<br/>
						To push through the hardship<br/>
						In the lack of harvest<br/>
						<br/>
						In the hunger<br/>
						In the thirst<br/>
						<br/>
						Hang on to what is true<br/>
						Hang on to what is promised<br/>
						<br/>
						The winter will pass<br/>
						The harvest will come<br/>
						<br/>
						Seasons come<br/>
						And seasons go<br/>
						<br/>
						<b>Plowing</b><br/>
						the ground waits<br/>
						in thirst its cracks show<br/>
						<br/>
						unfit for a sowing<br/>
						lacking in nutrients<br/>
						<br/>
						what fruits can be born from this soil?<br/>
						soil that produces no harvest is no soil at all<br/>
						<br/>
						Yet, there the plow awaits<br/>
						to tilling the farmer begins<br/>
						<br/>
						in the hot sun<br/>
						In the open field<br/>
						<br/>
						with each swing of the hoe<br/>
						<br/>
						the ground is made anew<br/>
						<br/>
						For the fill dirt is broken away<br/>
						And beautiful topsoil fills its place<br/>
						<br/>
						In that dead field<br/>
						Now a foundation of life is built<br/>
						<br/>
						<b>Sowing</b><br/>
						For to sow is to prepare<br/>
						To begin the good work in await for the harvest<br/>
						<br/>
						In love, each seed is planted<br/>
						In care, each seed is watered<br/>
						<br/>
						For the foundation has been set<br/>
						The soil has been blessed<br/>
						<br/>
						To a plentiful harvest<br/>
						To see what sweet beautiful fruits will grow<br/>
						<br/>
						<b>Harvest</b><br/>
						To see what this season&apos;s toil amounts to<br/>
						To see what the Lord has done<br/>
						<br/>
						How has He grown me?<br/>
						How has He watered me?<br/>
						<br/>
						For to the winter<br/>
						And to the fall<br/>
						<br/>
						The farmer cannot see his fruit<br/>
						He trusts in the work that is done<br/>
						<br/>
						In the soil that was set<br/>
						In the seeds that were cared for<br/>
						<br/>
						To walk upon the harvest<br/>
						And pluck a beautiful fruit<br/>
						<br/>
						Then will the master delight<br/>
						And say, <q>well done, good and faithful servant</q><br/>
						<br/>
						I remember writing in the preface of Volume 3 how God has placed me in this season of plowing. In this season of difficult renewal and of difficult work. I&apos;m not sure what my sowing and harvest season will look like to be quite honest, so to write in the perspective of sowing and harvest was quite difficult. I can only imagine what it may be like but those seasons will carry their own hardships as well. This piece is a reflection, a quiet sitting in the winter He has brought me through and the plowing He has called me to do. I look forward to what is to come, to the sowing, and to the harvest. I&apos;m excited to see what more He will do in my heart and in my life.
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/7_roaming_nomad"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/9_reflections"
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
