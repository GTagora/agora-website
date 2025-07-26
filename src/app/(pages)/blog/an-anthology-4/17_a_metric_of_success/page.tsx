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
						src="/blog/an-anthology-4/17_a_metric_of_success.webp"
						width={600}
						height={600}
						alt="a metric of success article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>a metric of success </h1>
					<div className="leading-7">
						Lately I&apos;ve been dwelling a lot on what it means to live and what metric I measure myself. The metric of success. I&apos;ve been so trapped lately by what the world defines as <q>success.</q> When I look at social media, I see all these people making more money, telling me I NEED to have more than one income stream or else my life is over. I see these influencers telling the metric to how they find life. All reasons and things that will perish with this Earth.<br/>
						<br/>
						For most of my life, I&apos;ve placed a lot of value in my own achievements and my own worldly <q>successes</q> and in this season, God has definitely been breaking a lot of that down lately.<br/>
						<br/>
						When we look at the parable of the talents in Matthew 25:14-30, God says in verse 21, <q>well done, good and <i>faithful</i> servant.</q> Not productive, not amazing, not achieving. Faithful. 1 Peter 4:10 says <q>As each has received a gift, use it to serve one another, as good stewards of God&apos;s varied grace.</q> We have all been given a set of gifts from the Lord, and just as the talents, some have been given more gifts than others. Does that matter? No. Because it&apos;s not about how much we produce persay, but about <i>are we producing</i>? Do we remember who these gifts, these <q>successes</q> truly come from? Do our fruits represent that?<br/>
						<br/>
						<i>For who sees anything different in you? What do you have that you did not receive? If then you received it, why then do you boast as if you did not receive it?</i><br/>
						&mdash;1 Corinthians 4:7 ESV<br/>
						<br/>
						I&apos;ve realized that I&apos;ve been measuring myself on the wrong metric. To live and win this race is to be faithful. Whether I have one talent, three talents, or five. God calls me to use my talents for His glory. The enemy is winning when I just serve myself, when I choose to use what God has given me for my own glory. To sin is to work against the purposes of God. Realign. Remember. Reposture. And rejoice, for the reward I will see is so much greater than anything else the world can offer.<br/>
						<br/>
						<i>Nevertheless, do not rejoice in this, that the spirits are subject to you, but rejoice that your names are written in heaven.</i><br/>
						&mdash;Luke 10:20
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/16_growing_up"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/18_do_you_love_me"
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
