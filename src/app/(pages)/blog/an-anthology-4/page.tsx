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
		"href": "an-anthology-4/5_is_this_really_all"
	},
	{
		"id": 5,
		"title": "paradox of time",
		"href": "an-anthology-4/4_paradox_of_time"
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
								src="/test.jpg"
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
						***
						<br />
						<br />
						With love and blessings,
						<br />
						Stephen
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
