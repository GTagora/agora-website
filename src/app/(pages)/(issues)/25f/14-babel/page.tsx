import styles from './page.module.css'
import Image from 'next/image'
import Footer from '@/app/components/footer'


export default async function Article() {
    const author = 'Galadriel Cho';
    const credit = '';
    const title = 'Babel';
    const date = 'December 06, 2025';

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    {/* <iframe className={styles.video} src='VIDEO LINK HERE'/> */}
                    <Image 
                    className={styles.image}
                    src='/issues/25f/babel.webp'
                    width={600}
                    height={600}
                    alt='article image'/>
                    <p className = {styles.credit}>{credit}</p>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
                    <h3 className={styles.date}>{date}</h3>
                    <div className={styles.text}>
                        <p>
                            tucked away in a spiralling tower,<br/>
                            worldly trophies craft my name.<br/>
                            trusting these treasures to be my shield,<br/>
                            i endlessly crave for more.<br/>
                            <br/>
                            then with crashing thunder and roaring wind,<br/>
                            Your storm tears down my walls.<br/>
                            floodwater engulfs weak foundation;<br/>
                            my tower crumbles apart.<br/>
                            <br/>
                            my Tower of Babel, scattered across the earth!<br/>
                            i tremble in fear of Your judgement.<br/>
                            no flaw can hide from blinding sun,<br/>
                            my darkness exposed to light.<br/>
                            <br/>
                            then salvation’s sweet fragrance is carried by breeze;<br/>
                            rainbows shimmer Your promise of grace.<br/>
                            so radiant is the boundless sky,<br/>
                            i’m breathless from palpable glory.<br/>
                            <br/>
                            i’m vulnerable here in open space,<br/>
                            yet peace seeps through my soul.<br/>
                            how foolish was my childish fortress;<br/>
                            my heart is home with You.<br/>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
)};
