import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
	const author = "Chelsea Ekwegh";
	const credit = "Photo by Josh Chung";
	const title = "Under the Fig Tree";
	const date = "April 23, 2025";

	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<Image
						className={styles.image}
						src="/issues/25s/under-the-fig-tree.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>{credit}</p>
					<h1 className={styles.title}>{title}</h1>
					<h2 className={styles.author}>BY {author.toUpperCase()}</h2>
					<h3 className={styles.date}>{date}</h3>
					<div className={styles.text}>
						<p>
							Before my beginning You knew me
							<br />A seed sown in darkness,
							<br />
							buried by the wages of iniquity.
							<br />
							Knowing the end you plowed through
							<br />
							Pierced hands hung from above
							<br />
							Your loving kindness, all I ever knew.
							<br />
							With tender mercies and unending love,
							<br />I was showered with living water
							<br />
							And flooded with warmth
							<br />
							By the one I knew to be the Gardener,
							<br />
							Saviour, and only begotten Son.
						</p>
						<br />

						<p>The frost melted and spring began to unveil</p>

						<p>
							Yet, I was still a seedling
							<br />
							Bent over and painfully frail
							<br />
							An impatient bud found wanting,
							<br />
							Covered in scrawny shoots,
							<br />
							Stunted in stature, barely there,
							<br />
							possessing little to no roots.
						</p>
						<br />

						<p>
							Then the southern winds broke the song of spring
							<br />
							Budding bulbs and bustling birds all blowing in
							<br />
							Lovely lilac lilies lauding over great green olives,
							<br />
							Flowering florets flirting with buzzing bees.
							<br />
							Summer was here
							<br />
							And in this garden of many colors
							<br />I stood, tempted with fear
							<br />
							It was soon the season
							<br />
							and though I was yet to bear,
							<br />
							My Gardener overflowing with love,
							<br />
							nurtured me, always near.
						</p>
						<br />

						<p>
							Shimmers of sunshine now heated the soil
							<br />
							My naked branches donned a covering of leaves
							<br />A scene causing The Father to recoil:
							<br />
							His judgment singled me out from the trees.
							<br />
							With streams of righteousness and rolls of justice
							<br />
							An axe lay ready at my root; pushing me into despair.
							<br />
							Fatigued with worry, depression, envy, and malice
							<br />I cried on my knees, praying someone would hear
							<br />
							It was then the Savior told me to cast all my care
							<br />
							He pleaded for my soul
							<br />
							So the Father mercifully granted me a year.
						</p>
						<br />

						<p>
							Instead of trusting the Son
							<br />I was too focused on my roots
							<br />
							In this condition, how could I possibly bear fruit?
							<br />
							He pruned and groomed
							<br />
							Ploughed and tilled
							<br />
							Cut and dug
							<br />
							Fertilized and filled
							<br />
							He sent His Gift
							<br />
							in Wind and Word
							<br />
							To become one with me
							<br />
							And change my world.
							<br />
							Then it happened miraculously
							<br />
							branches once barren
							<br />
							carrying firstfruits for all to see
						</p>
						<br />

						<p>
							From the beginning, You so loved me
							<br />
							Forever true to Your word
							<br />
							You didn’t leave or forsake me
							<br />
							Though dust goes to dust and seasons fade
							<br />
							My sights are set on You
							<br />
							So I will say this; without being afraid:
							<br />
							Someday, with branches bowed
							<br />
							Under this Fig tree,
							<br />
							I’ll see my Gardener, face to face
							<br />
							and He’ll be so proud.
						</p>
					</div>
				</div>
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
}
