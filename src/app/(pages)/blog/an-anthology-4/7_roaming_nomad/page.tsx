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
						src="/blog/an-anthology-4/7_roaming_nomad.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>roaming / nomad</h1>
					<div className="leading-7">
						In the midst of the wilderness<br/>
						Suffocated by anxiety<br/>
						I wander, lost<br/>
						<br/>
						A sweltering sun,<br/>
						A barren land,<br/>
						No direction to go<br/>
						<br/>
						Roaming,<br/>
						Wandering,<br/>
						A nomad<br/>
						<br/>
						My body failing<br/>
						My heart faltering<br/>
						My mind shattering<br/>
						<br/>
						A prisoner to my mind<br/>
						Left to the voices in my head<br/>
						The remains of a broken past<br/>
						<br/>
						I call out to the empty air<br/>
						Crying out for someone to hear<br/>
						An outburst, a paroxysm of desperation<br/>
						<br/>
						“Why have you left me here?<br/>
						Why have you left me alone?<br/>
						Where do I go?”<br/>
						<br/>
						In my desperation I quiet<br/>
						For there is no energy left to cry out<br/>
						An uneasy heart goes quiet<br/>
						<br/>
						In the midst of the quiet,<br/>
						When the tempest of my mind stills<br/>
						I hear a quiet voice in the breeze<br/>
						<br/>
						A voice of comfort<br/>
						A voice of ease<br/>
						A voice of purpose<br/>
						<br/>
						At my wit’s end<br/>
						When all vitality is gone<br/>
						There, the noises quiet<br/>
						<br/>
						The lights dim down<br/>
						The clouds part ways<br/>
						There, an empty night sky stands<br/>
						<br/>
						No lights to distract<br/>
						For the stars shine brightly<br/>
						When all lights fade away<br/>
						<br/>
						In the midst of this wilderness<br/>
						I’m surrounded by nothing<br/>
						I move forward to with Your guidance<br/>
						<br/>
						In the quiet<br/>
						In the stillness<br/>
						Only then can I hear Your voice<br/>
						<br/>
						<i><q>C. S. Lewis illustrates the truth by noting that an artist may not take much trouble over a picture drawn to amuse a child, but he takes endless effort over his great work of art that he loves.</q> (Waltke)</i><br/>
						<br/>
						God, the artist of my life, is making something beautiful. A beautiful piece of work that He will one day step back and say, “yes, it is done”. So until that piece is finished, until my walk on earth is done, may I continue to lean on Him and dwell in Him no matter how hard it may be. To seek His face in the midst of all things and walk upon this life He guides me to.<br/>
						<br/>
						<b>Inspired by 1 Kings 19:10-18 and my own personal thoughts/realizations in this season of wilderness</b>
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/6_fall_like_rain"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/8_seasons"
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
