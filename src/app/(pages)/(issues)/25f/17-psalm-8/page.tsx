import styles from './page.module.css'
import Image from 'next/image'
import Footer from '@/app/components/footer'


export default async function Article() {
    const author = 'Chase Whitener';
    const credit = 'Photo by Joshua Chung';
    const title = 'Psalm 8';
    const date = 'December 6, 2025';

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    {/* <iframe className={styles.video} src='VIDEO LINK HERE'/> */}
                    <Image
                        className={styles.image}
                        src='/issues/25f/psalm-8.webp'
                        width={600}
                        height={600}
                        alt='article image' />
                    <p className={styles.credit}>{credit}</p>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
                    <h3 className={styles.date}>{date}</h3>
                    <div className={styles.text}>
                        <p>The skies above are depths untold</p>
                        <p>A deep stretching beyond the deep.</p>
                        <p>Though speck am I among the stars,</p>
                        <p>All worlds were yet made for me.</p>

                        <br />

                        <p>Let stars collide and nebulas commence</p>
                        <p>The symphony longer than life.</p>
                        <p>Though I— merely a breath for them</p>
                        <p>Shall live to see them die!</p>

                        <br />

                        <p>Of all that lies beyond the sun</p>
                        <p>Beyond heaven and what lies</p>
                        <p>Our Lord decendeth not to come</p>
                        <p>To worlds other than mine!</p>

                        <br />

                        <p>Though we the chosen race of God</p>
                        <p>Call not creation&rsquo;s center home,</p>
                        <p>Of no other people doth Heaven say</p>
                        <p>&ldquo;For God so loved the world&rdquo;</p>

                        <br />

                        <p>Though dark the deeds of men doth reign</p>
                        <p>And scarcely beats the heart of love</p>
                        <p>Of all mysteries most profound is this</p>
                        <p>That Father&rsquo;s love abidest still</p>

                        <br />

                        <p>Son of dust, cease not to see</p>
                        <p>The relevance of thy relevance forever.</p>
                        <p>Though short dark days ere dust bound fate</p>
                        <p>Sowed dust shall reap Heaven%rsquo;s man!</p>

                        <br />

                        <p>And raise an anthem older than time</p>
                        <p>Deeper than that far reaching deep.</p>
                        <p>Let all that hath breath declare</p>
                        <p>Blessed be He that choseth me!</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
};
