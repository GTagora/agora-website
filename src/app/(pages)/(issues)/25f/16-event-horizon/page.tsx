import styles from './page.module.css'
import Image from 'next/image'
import { Reference, Footnote } from '@/app/components/buttons'
import Footer from '@/app/components/footer'


export default async function Article() {
    const author = 'Daeyong Kwon';
    const credit = 'Alex Wu';
    const title = 'Event Horizon';
    const date = 'December 06, 2025';

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    {/* <iframe className={styles.video} src='VIDEO LINK HERE'/> */}
                    <Image 
                    className={styles.image}
                    src='/issues/25f/event-horizon.webp'
                    width={600}
                    height={600}
                    alt='article image'/>
                    <p className = {styles.credit}>{credit}</p>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
                    <h3 className={styles.date}>{date}</h3>
                    <div className={styles.text}>
<p style={{ marginBottom: '10px' }}>“A theoretical boundary around a black hole beyond which no light or other radiation can escape.”</p>

<p style={{ marginBottom: '10px' }}>Event horizons accomplish this with a gravity so strong that it warps spacetime itself. Light doesn't have mass, but due to the warping of spacetime, it can only travel towards the singularity <Reference number={'a'}/> of a black hole. </p>

<p style={{ marginBottom: '10px' }}>God created the world and saw it as good <Reference number={1}/>. Then it all collapsed—the bright beautiful cosmos He created imploded into a supernova of good and evil, leaving behind a black hole. This phenomenon is embodied in flesh: an eternal sense of longing, a desperation to latch on to something that lasts, a desire for the thirst to be quenched <Reference number={2}/>. Attempts to fill it with a highly esteemed status, a curated self-concept, or blissful affection from and towards others, prove to be futile. After crossing the event horizon, the once promising luminaries <Reference number = {'b'}/> are left to be afterthoughts, mere presumptions, expanding and amplifying the gravity that surrounds the singularity.  </p>
        
<p style={{ marginBottom: '10px' }}>Even the abstract notion of redeeming light <Reference number={3}/> is distorted to follow selfish geodesic <Reference number={'c'}/> curves: the desire to belong, the pride and fabricated purpose behind servitude, and our own conceited knowledge of the very light that promised escape from the horizon.</p>

<p style={{ marginBottom: '10px' }}>Gazing into the ravenous singularity, the depth of sin is … realized yet not <Reference number={4}/>. It deludes itself to satiate through perfection, accreting matter endlessly, protesting the inevitable idea of an imperfect and imperfectable self. So what does it take to look past the horizon?</p>

<p style={{ marginBottom: '10px' }}>In quantum field theory, Hawking radiation is believed to cause black holes to lose mass over immense timescales. The irony of an all-consuming black hole being evaporated through starvation is profoundly mirrored in the gospel. </p>

<p style={{ marginBottom: '10px' }}>Our God is holy. He is set apart from sin. Infinitely distanced from the black hole, He shines as the radiant star whose gravity holds us fast, keeping our souls in orbit. The reality is, the black hole exists. It will continue to exist. Yet this weakness is rather an invitation! <Reference number={5}/> For when we find ourselves pulled toward sin's gravity, we are given a greater chance to behold the surpassing strength of God—an opportunity to surrender to His mercy.</p>

<p style={{ marginBottom: '10px' }}>“Let him deny himself and take up his cross daily and follow me.” <Reference number={6}/></p>

<p style={{ marginBottom: '10px' }}>We have a choice. Are we to continue fueling the perpetual black hole in our hearts? Or are we to daily deny and die to ourselves, allowing ourselves to be drawn closer to Him? Just as a spacecraft must constantly adjust its trajectory to remain in stable orbit—firing small thrusters, recalibrating when pulled too close to another body—so must we make daily corrections, yielding to His sustaining gravity, allowing Him to do the work while we remain in orbit around Him. </p>

<p style={{ marginBottom: '10px' }}>Gazing into the ravenous singularity now, His majesty and glory are revealed. He has promised the full restoration of creation, when every black hole will at last be starved…of its very hunger. How has He redeemed us, knowing the price He would pay, even when we ventured beyond the horizon? </p>

<p style={{ marginBottom: '10px' }}>It's love that makes no sense. It's love that we are designed and created for. It's love that transcends the event horizon.</p>


References:
<Footnote number = {1} text="Genesis 1:31"/>
<Footnote number = {2} text="Ecclesiastes 3:11"/>
<Footnote number = {3} text="1 John 1:5"/>
<Footnote number = {4} text="Romans 7:18-19"/>
<Footnote number = {5} text="2 Corinthians 12:9"/>
<Footnote number = {6} text="Matthew 16:24"/>

Definitions (from Oxford Languages):
<Footnote number = {'a'} text="[a] Singularity: A point at which a function takes an infinite value, especially in space-time when matter is infinitely dense, as at the center of a black hole."/>
<Footnote number = {'b'} text="[b] Luminary: A natural light-giving body, especially the sun or moon."/>
<Footnote number = {'c'} text="[c] Geodesic: Relating to or denoting the shortest possible line between two points on a sphere or other curved surface."/>

                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
)};
