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
						src="/blog/an-anthology-4/a_reflection_on_luke_13.webp"
						width={600}
						height={600}
						alt="a reflection on luke 13 article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>a reflection on luke 13</h1>
					<div className="leading-7">
						<b>A reflection written on the Saturday between Good Friday and Easter Sunday, ‘Silent Saturday’</b><br/><br/>
						<i>Luke 13</i><br/>
						<i>v.1-5</i><br/>
						Life happens. In a broken world lives are unfortunately lost, but ultimately repentance is what leads us to freedom. There is no life without repentance.<br/>
						<u>Patience</u><br/>
						Things are made beautiful in his timing. There are second chances and opportunities for His blessing and beauty and grace and mercy to overflow.<br/>
						<i>v.6-21</i><br/>
						A fig tree is given a second chance, despite three years of barreeness, it now receives manure and proper care. God shows grace in those who struggle to bear fruit and He has a loving patience that provides. Verses 10-17 look at a woman who suffered for 18 years before being healed. Her first reaction to being healed was to glorify God. Jesus, the Father, the Spirit. They are life-givers. Verses 18-21. Seeds and dough take time to grow and rise, respectively, but they produce life. Trees create an ecosystem to bless and dough gives yeast to help it rise and become something that nourishes when cooked. These take time. God uses the small to bless and fulfill, but it takes time. There is beautiful purpose in God, beauty in what He does, but it all takes time.<br/>
						<u>To follow Him</u><br/>
						<i>v.22-29</i><br/>
						We can claim to know Christ and be with Him but it all means nothing if we do not truly know Him.<br/>
						A silent Saturday, yet the most Holy one<br/>
						<i>v.31-35</i><br/>
						The lament of Jesus breaks my heart. Jesus so deeply loved the church and the city of Jerusalem. We see Jesus does not fear Herod but acts on the schedule of the Father, even calling Herod a fox. Foxes in the Bible contrast with lions. They symbolize a “cunning, but weak ruler.” A lion signifies strength and true glory and holiness. Jesus demonstrates as the Lion of Judah Himself.<br/><br/>
						In verse 34, we see Jesus say “O Jerusalem, Jerusalem.” Jesus emphasized, showing His true lament at those He knows will turn against Him. It is heart breaking to see how much He loved them but they turned away from him. Am I any different? No. Everyday I turn away from Him and crucify Him, yet His mercy still covers me. Thank You Jesus.<br/>
						I'm just reminded of how much Jesus loves me. I am Jerusalem. I'm no better than that city, I turn away from Him and crucify Him on the daily, but even then, He still took it all on for me. I'm so broken, so sinful, so undeserving of the grace, the love, mercy, the peace that He gives. I was wallowing in that lately, my own guilt and shame, but today Jesus reminded me of His goodness.<br/>
						<br/>
						—<br/>
						<br/>
						At the cafe I did my study at, one of the baristas, his name was John. He came up to me and asked me what book of the Bible I was reading. He just wanted to ask me about what I was kind of blessed and convicted by, and so I shared. He was talking to me about how some pastors came to do a meeting there and all that stuff. They gave him a free shirt and then invited him to their church for Easter. He went back to get the extra shirt he got and gave it to me. It turns out the invite and shirt was from the church I grew up in, and I was like, wow. It's full circle.  The church where I grew up came here and to me it was just very touching. In a way, God showed me His goodness and mercy. He blessed me through showing me how I am where I need to be and placed John in my life in that moment.<br/><br/>
						In the season of patience and growth, I'm always like, oh, I need to do something big, I need to do something big, I need to do this, this, this, this. But every time I come back and just sit in His presence, He 's just constantly reminding me of patience, perseverance and His ultimate love for me, and today I just saw so much of that.<br/><br/>
						It's been a rough season, it's been hard, but through my desire for obedience, He is showing me more of Him.This entire weekend has been just a reminder and testament of his love for me. I've been beating myself down so much lately and the idea of first love has been coming back to me. Returning to my first love. How do I return to that first love, that depth of joy that I had two years ago. How do I return to that? It's been dwindling slowly, but I wanna get back to that deeper, deeper joy. Not just an outward joy, but an inward joy. I wanna get back to that, and I feel like slowly, slowly, slowly as I pray and kind of dwell on that, God has been helping me come back to that. Today was just a testament of that. Sure life is not the everything I imagined it to be, but I truly believe that He is working all things for His good and I believe that one day I'll look back on the season and truly be even more blessed and be able to see more about the season and how much He worked through it. In the meantime, as much as it sucks, He is still reminding me how much He loves me and how much He wants to show me.<br/><br/>
						I thank you so much, God. Thank you. To You be the glory and I'm just so blessed and so undeserving of it, but, You still love me nonetheless, so thank You, God.<br/><br/>
						What a day. What a beautiful start to this Saturday and this Easter weekend. I'm just even more pumped for tomorrow to just dance and celebrate the resurrection of Jesus Christ, so thank You, Lord. I hope one day my high school friends can experience this same joy as well.<br/>
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/**"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/**"
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
