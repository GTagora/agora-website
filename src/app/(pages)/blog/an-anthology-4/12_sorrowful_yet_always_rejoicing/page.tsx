import styles from "./article.module.css";
import Link from "next/link";

export default async function Page() {
	return (
		<div>
			<div className={styles.main}>
				<div className={styles.container}>
					<Link href="/blog/an-anthology-4" className={styles.breadcrumb}>
						An Anthology of Joy and Thought Vol. 4
					</Link>
					<h1 className={styles.title}>sorrowful yet always rejoicing</h1>
					<div className="leading-7">
						I think one phrase I&apos;ve been kind of dwelling on and reflecting on lately is the phrase <q>sorrowful yet always rejoicing.</q> It&apos;s the phrase or slogan that desiring God, John Piper&apos;s ministry, lives by. I&apos;ve been dwelling a lot on what is the heart that God seeks with this. John Piper shared in one of his sermons that one thing he looks for in preachers is always, <q>can I tell that they are filled with joy, but that they are also filled with sorrow as they preach?</q> It seems counterintuitive to be filled with both, but I think I&apos;m beginning to understand a little glimpse of what that means.<br/><br/>
						It does break my heart a little bit. I just finished meeting up with some high school friends and admittedly, I felt a very big tug to try to share, but I didn&apos;t really feel like I had an opportunity to share. We never really hit that point where I could really bring it in, but maybe God&apos;s not wanting me to wait for the good opportunity. Maybe he wants me to bring it up, but I&apos;m not sure. Praise God that He&apos;s giving me more opportunities as we want to continue meeting like once every other month. I want to see God use me to reach them, but it hurts my heart a little bit to not be able to share this time around, but I pray that I can really have another opportunity.<br/><br/>
						But anyways, back to sorrowful yet always rejoicing. I&apos;ve been kind of dwelling on it a lot. What does that look like and what is that? I think I had an idea what it means. It&apos;s a heart I&apos;ve had for a long time. A lot of times I look at those around me with sorrow because they do not know Christ. They don&apos;t know the true freedom and joy and they wander lost, but personally, I can rejoice because of the joy that I have in Christ. It&apos;s not a selfish joy in any way, but one that you desire to share. One that taps on the floodgates of your heart, waiting to overflow. Yet, your heart breaks for those who don&apos;t know this. As I was talking with my high school friends today, I think I had this heart. I was thinking about it as they were talking. There&apos;s a lot of issues in the world right now and we have a lot of perspectives, but it&apos;s just kind of sad to see them looking for solutions that are not permanent and ultimately looking for solutions that are only man-made. There is one big solution, a bigger freedom that&apos;s in Jesus Christ. I might be that one person in their lives that really knows Jesus. If I&apos;m that person, do I live in that way? Do I reflect that and do I share that?<br/><br/>
						Lord, I pray that You reveal to me, use me, and teach me to wait and be bold.<br/><br/>
						All this to say, I think I got a little glimpse of what it means to be sorrowful yet always rejoicing because as I looked to my high school friends, I just couldn&apos;t help but have a very broken heart. It&apos;s a little reflection of tonight to not be discouraged, but just reflect on the reality of the world that we live in and wow, America truly does need Jesus.
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/11_bittersweet_goodbyes"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/13_growing_pains"
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
