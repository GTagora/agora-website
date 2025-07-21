import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const contents = [
	{
		id: 1,
		title: "a testimony",
		href: "an-anthology-4/1_a_testimony",
	},
	{
		id: 2,
		title: "quiet monotony",
		href: "an-anthology-4/2_quiet_monotony",
	},
	{
		id: 3,
		title: "quiet monotony pt.2",
		href: "an-anthology-4/3_quiet_monotony_pt2",
	},
	{
		id: 4,
		title: "A merciful God in a harsh wilderness",
		href: "an-anthology-4/4_a-merciful-God-in-a-harsh-wilderness",
	},
	{
		id: 5,
		title: "intermission",
		href: "an-anthology-4/5_intermission",
	},
	{
		id: 6,
		title: "honor and faith",
		href: "an-anthology-4/6_honor-and-faith",
	},
	{
		id: 7,
		title: "my sin scares me",
		href: "an-anthology-4/7_my-sin-scares-me",
	},
	{
		id: 8,
		title: "ataraxia",
		href: "an-anthology-4/8_ataraxia",
	},
	{
		id: 9,
		title: "\"I\'m proud of you\"",
		href: "an-anthology-4/9_im-proud-of-you",
	},
];

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
