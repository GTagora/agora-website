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
						src="/blog/an-anthology-4/16_growing_up.webp"
						width={600}
						height={600}
						alt="article image"
					/>
					<p className={styles.credit}>Image: Stephen Noh</p>
					<h1 className={styles.title}>growing up</h1>
					<div className="leading-8">
						Growing up has been realizing that I can accomplish nothing but He has already accomplished everything<br/>
						Growing up has been realizing I will not be loved by everyone yet I am wholly loved by the Perfect One<br/>
						Growing up has been realizing that it is not my life, but the one He has given me<br/>
						Growing up has been realizing the weight of my brokenness but the even greater weight of His sacrifice for me<br/>
						Growing up has been realizing that there is nothing that anyone or this world can do to separate me from You<br/>
						Growing up has been realizing that only in the wilderness, the hardship do you really grow the most<br/>
						Growing up has been realizing that the desert is a blessing, to be only in Your presence, to rely wholly on You<br/>
						Growing up has been realizing that God owes me nothing and that I owe Him everything, yet He still gave His son<br/>
						Growing up has been realizing that He is always listening, working in the background, and preparing so that He may be most glorified<br/>
						Growing up has been thinking I’d always be alone but He has always been by my side<br/>
						<br/>
						A year of growth<br/>
						Of bitterness<br/>
						Of acceptance<br/>
						Of realization<br/>
						<br/>
						You are making me beautiful, Lord<br/>
						So continue to do Your work in me<br/>
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/15_a_lifetimes_worth_of_worship"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/17_a_metric_of_success"
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
