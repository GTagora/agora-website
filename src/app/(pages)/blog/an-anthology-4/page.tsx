import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const contents = [
	{
		"id": 1,
		"title": "who am i? (what's in a name? pt. 2)",
		"href": "an-anthology-4/1_who_am_i"
	},
	{
		"id": 2,
		"title": "Detours",
		"href": "an-anthology-4/2_detours"
	},
	{
		"id": 3,
		"title": "a broken melody",
		"href": "an-anthology-4/3_a_broken_melody"
	},
	{
		"id": 4,
		"title": "\"is this really all?\"",
		"href": "an-anthology-4/4_is_this_really_all"
	},
	{
		"id": 5,
		"title": "paradox of time",
		"href": "an-anthology-4/5_paradox_of_time"
	},
	{
		"id": 6,
		"title": "fall like rain",
		"href": "an-anthology-4/6_fall_like_rain"
	},
	{
		"id": 7,
		"title": "roaming / nomad",
		"href": "an-anthology-4/7_roaming_nomad"
	},
	{
		"id": 8,
		"title": "seasons",
		"href": "an-anthology-4/8_seasons"
	},
	{
		"id": 9,
		"title": "Reflections",
		"href": "an-anthology-4/9_reflections"
	},
	{
		"id": 10,
		"title": "All of the glory",
		"href": "an-anthology-4/10_all_of_the_glory"
	},
	{
		"id": 11,
		"title": "bittersweet goodbyes",
		"href": "an-anthology-4/11_bittersweet_goodbyes"
	},
	{
		"id": 12,
		"title": "sorrowful yet always rejoicing",
		"href": "an-anthology-4/12_sorrowful_yet_always_rejoicing"
	},
	{
		"id": 13,
		"title": "growing pains",
		"href": "an-anthology-4/13_growing_pains"
	},
	{
		"id": 14,
		"title": "a reflection on luke 13",
		"href": "an-anthology-4/14_a_reflection_on_luke_13"
	},
	{
		"id": 15,
		"title": "a lifetime's worth of worship",
		"href": "an-anthology-4/15_a_lifetimes_worth_of_worship"
	},
	{
		"id": 16,
		"title": "growing up",
		"href": "an-anthology-4/16_growing_up"
	},
	{
		"id": 17,
		"title": "a metric of success",
		"href": "an-anthology-4/17_a_metric_of_success"
	},
	{
		"id": 18,
		"title": "\"Do you love Me\"",
		"href": "an-anthology-4/18_do_you_love_me"
	},
	{
		"id": 19,
		"title": "daily bread",
		"href": "an-anthology-4/19_daily_bread"
	},
	{
		"id": 20,
		"title": "image bearer",
		"href": "an-anthology-4/20_image_bearer"
	},
	{
		"id": 21,
		"title": "connections",
		"href": "an-anthology-4/21_connections"
	},
	{
		"id": 22,
		"title": "stillness in a rushed world",
		"href": "an-anthology-4/22_stillness_in_a_rushed_world"
	},
	{
		"id": 23,
		"title": "the lamb / lost",
		"href": "an-anthology-4/23_the_lamb_lost"
	},
	{
		"id": 24,
		"title": "to Easter",
		"href": "an-anthology-4/24_to_easter"
	},
	{
		"id": 25,
		"title": "get up! wake up!",
		"href": "an-anthology-4/25_get_up_wake_up"
	}	
]


export default function Page() {
	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<div className={styles.hbox}>
						<div className={styles.col}>
							<Image
								className={styles.image}
								src="/blog/an-anthology-4/1_who_am_i.webp"
								width={600}
								height={600}
								alt="article image"
							/>
							<p className={styles.credit}>Image: Stephen Noh</p>
						</div>
						<div className={styles.col}>
							<h1 className={styles.title}>
								{" "}
								An Anthology of Joy and Thought Vol. 4
							</h1>
							<h2 className={styles.author}>By Stephen Noh</h2>
							<h3 className={styles.date}>JULY 26, 2025</h3>
						</div>
					</div>
					<h2 className={styles.subtitle}>Preface</h2>
					<p className={styles.text}>
						Dear reader,<br/><br/>
						It&apos;s been a little while again, hasn&apos;t it? Life has mellowed down. In some ways it has become quite routine and in other ways every day feels like a gift. I have come to love this quiet Texas life and the time that I am able to have with God without worldly pressures of success. With that said, this will probably be my final release of pieces.<br/><br/>
						The timing of these pieces were in a way a reflection of my year of transition. From college student to young adult. They say the first year out of college is the hardest and at first, in my pride, I told myself, <q>I&apos;d never think that way.</q> Boy, was I wrong. The first couple months were amazing but about four months into this life, it got quite difficult to come to terms with the life of a young adult. These difficulties and feelings have calmed down in the past month or so, but instead of it being an overcoming of these things, it&apos;s more of an acclimation. None of the prayers I&apos;ve been directly praying have been answered necessarily and it&apos;s not like my circumstances changed, but I think God is slowly changing my attitude and posture towards this season of life. It&apos;s a prayer request that I think is indirectly being answered as I ask Him to <q>transform me to be more like You.</q><br/><br/>
						It&apos;s been a strange season for sure. From being told I was being placed in a plowing season months ago to now recognizing this season of wilderness. I found myself, many times, questioning and complaining to God about my situation and my desire to be delivered from it. However, as I&apos;ve come to walk on through this season, I&apos;ve been coming to Him more than most other seasons and He has been giving me a more content and grateful heart in turn. It&apos;s a hard ask, a hard prayer, but ultimately if the wilderness is where I will be growing the most and the closest to Him, then it&apos;s the place I want to be most.<br/><br/>
						Some recent updates are that I recently went on a short term mission trip to Tucson, Arizona and that I moved out of my parents house into my own apartment. In Tucson, we worked on a construction project and ran an art camp for the children with a local ministry, Corazón Ministries. There, I got a clear idea of what it meant to be in the wilderness. Being in the sweltering Arizona sun everyday working on a construction project helped me physically picture the difficulty of wandering in the wilderness. It&apos;s no wonder the Israelites complained. They had to do it for 40 years. That&apos;s crazy to think about because just a week alone was exhausting. With moving out, I didn&apos;t realize how much of a needed change it was for me and my heart. I&apos;ve been able to go back to hosting people/cooking for others and I remember just how much joy those things bring me.<br/><br/>
						This season is still not exactly what I&apos;d hoped it to be and I&apos;m still praying diligently for those same things I&apos;ve been praying for years now, but I am definitely where He wants me to be in this season and that gives me more peace and comfort than any answered prayer can give. To live in this more mature form of joy and childlike faith has been wonderful and I&apos;m excited to see how much more He will grow me. I can only pray that you, reader, are also able to experience more of that. So here&apos;s just a little glimpse of that. I&apos;ll continue writing, just a lot slower and probably released somewhere more personal. With that said, reader, welcome to the fourth and final volume of <q>An Anthology of Joy and Thought.</q> Thank you for joining me in the reflections of this past year of life.<br/><br/>
						With love, blessing, and joy for what is to come,<br/>
						snoh
					</p>
					<br /> <br />
					<h2 className={styles.subtitle}>Contents</h2>
					<div className={styles.contentsContainer}>
						{contents.map((item) => (
							<Link key={item.id} href={item.href} className={styles.content}>
								{item.id}&nbsp;&nbsp;
								<p className={styles.href}>{item.title}</p>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
