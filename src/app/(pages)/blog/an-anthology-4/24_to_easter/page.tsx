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
					<h1 className={styles.title}>to Easter</h1>
					<div className="leading-7">
						A 4-part piece. The first 3 are written in what I could imagine and think to be the perspective of someone back in Israel on this day. It&apos;s all an interpretation and depiction of what I have read in the Word. I wanted to reflect on not only what Easter means for me but also for those who were not able to see it the way that we believers see it today.<br/><br/>
						Matthew 21:1-11<br/>
						Matthew 27<br/>
						Mark 15<br/>
						Luke 23<br/>
						John 19<br/><br/>
						<b>The Day of Death</b><br/>
						Hosanna, we cried! Hosanna!<br/>
						Where is our Savior?<br/>
						For what did this Prophet speak of?<br/>
						He saved many but not Himself<br/>
						<br/>
						On a donkey He entered<br/>
						and tainted in blood He left<br/>
						On a hill He hangs<br/>
						Death has won<br/>
						<br/>
						For Barabbas, a criminal, was given life<br/>
						but this innocent man was given death<br/>
						Why has the Son of Man perished?<br/>
						For what did He live and die for?<br/>
						<br/>
						King of the Jews they called Him<br/>
						Mocked and shamed as He drew to Golgotha<br/>
						They divided His garments<br/>
						Bickering like children over a toy<br/>
						<br/>
						One final breath you gave<br/>
						The skies turned dark<br/>
						The earth shook<br/>
						The temple was destroyed<br/>
						<br/>
						What does this mean?<br/>
						Where is our savior?<br/>
						For our king is gone<br/>
						His disciples left alone<br/>
						<br/>
						The Sabbath to come<br/>
						Shrouded with gentleness your body rests<br/>
						Those whom you have called, lament<br/>
						We have lost our savior<br/>
						<br/>
						<b>A Silent and Sorrowful Saturday</b><br/>
						Silence remains<br/>
						Hope is gone<br/>
						<br/>
						The Messiah is dead<br/>
						Our King is gone<br/>
						<br/>
						The women watched over the tomb<br/>
						In grief they&apos;re overcome<br/>
						<br/>
						Spices to be prepared<br/>
						Your body to be anointed<br/>
						<br/>
						No words to speak<br/>
						No thoughts to think<br/>
						<br/>
						In silence we sat<br/>
						Despair has won<br/>
						<br/>
						<b>The Resurrection</b><br/>
						To anoint your dead body<br/>
						To the tomb they came<br/>
						The stone had rolled away<br/>
						<br/>
						Behold, stood an empty tomb<br/>
						The disciples peered in<br/>
						The empty cloths remain<br/>
						<br/>
						The earth shook<br/>
						The angels spoke<br/>
						<q>He has risen</q><br/>
						<br/>
						Hallelujah, He is here<br/>
						The King is back<br/>
						Our Savior has returned<br/>
						<br/>
						Your body the same<br/>
						His hands and feet<br/>
						The holes remain<br/>
						<br/>
						For You have told us to believe<br/>
						Christ, the Son of God has returned<br/>
						The Son of Man is here
						<br/>
						<b>To the Easter we see</b><br/>
						Hosanna we cry<br/>
						Save our soul!<br/>
						For You took our toll<br/>
						<br/>
						Humbly, You entered<br/>
						On a donkey, You rode<br/>
						The true King is bestowed<br/>
						<br/>
						For who was Barabbas<br/>
						Are we not the same?<br/>
						Broken and sinful, covered in shame<br/>
						<br/>
						Yet You stood there silently<br/>
						As those who accused you proclaim<br/>
						You traded our place and took our blame<br/>
						<br/>
						To fulfill the law and prophets<br/>
						On a cross You hung<br/>
						The glory to come as they pierced your lung<br/>
						<br/>
						For we see and know,<br/>
						The light of the cross<br/>
						With it, came death&apos;s loss<br/>
						<br/>
						The King has returned!<br/>
						The lamb was slain<br/>
						But His death was not in vain<br/>
						<br/>
						Christ, the Son of Man<br/>
						Who took upon Him every sin<br/>
						So we can walk with life to begin<br/>
						<br/>
						To the Easter they grieved<br/>
						and the Easter we know<br/>
						Your death has set us free<br/>
						<br/>
						So shout your praise!<br/>
						Lift up your voice!<br/>
						Rejoice!<br/>
						<br/>
						For eternity to come<br/>
						To His death we amaze<br/>
						Let us live for you<br/>
						All of our days…<br/>
					</div>

					<div className={styles.buttons}>
						<Link
							href="/blog/an-anthology-4/23_the_lamb_lost"
							className={styles.href}
							>
							&lt;&nbsp; Previous
						</Link>
						<Link
							href="/blog/an-anthology-4/25_get_up_wake_up"
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
