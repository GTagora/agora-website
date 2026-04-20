import styles from './page.module.css'
import Image from 'next/image'
import Footer from '@/app/components/footer'


export default async function Article() {
    const author = 'Chelsea Ekwegh';
    const credit = 'Photo by Joshua Chung';
    const title = 'At His Feet';
    const date = 'December 6, 2025';

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    {/* <iframe className={styles.video} src='VIDEO LINK HERE'/> */}
                    <Image
                        className={styles.image}
                        src='/issues/25f/at-his-feet.webp'
                        width={600}
                        height={600}
                        alt='article image' />
                    <p className={styles.credit}>{credit}</p>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
                    <h3 className={styles.date}>{date}</h3>
                    <div className={styles.text}>
                        <p>I’m a stranger in many spaces.</p>
                        <p>With culture, family, and friends</p>
                        <p>determining my identity for the day.</p>
                        <p>Constantly molded by people who were well meaning</p>
                        <p>and others not so much.</p>
                        <p>The more I yearn to belong,</p>
                        <p>the more I become lost in the crowd.</p>
                        <p>My eyes fall first.</p>
                        <p>My body follows suit.</p>
                        <p>My mind — a space warring within itself</p>
                        <p>slowly enslaved by fleeting feelings and various vanities.</p>
                        <p>Every blind and desperate step taken to get out,</p>
                        <p>only further hollows my heart.</p>
                        <p>Fear engulfs me</p>
                        <p>and I am a puppet, a shell, miserable.</p>
                        <p>Hiding behind meaningless achievements and blind</p>
                        <p>obedience</p>
                        <p>while battling a consuming, isolating darkness.</p>
                        <p>I just want to go back… back home.</p>
                        <p>A crisis of faith.</p>

                        <br />

                        <p>The space between You and me feels so far.</p>
                        <p>What stops me from coming to You?</p>
                        <p>I stare in the mirror, face to face.</p>
                        <p>Who is this person?</p>
                        <p>When did I become so broken?</p>
                        <p>Does anyone notice?</p>
                        <p>Why should anyone care?</p>
                        <p>I am mist.</p>
                        <p>Here today and gone tomorrow. Merely passing</p>
                        <p>through.</p>

                        <br />

                        <p>Why do you still call out despite everything I’ve done,</p>
                        <p>despite never responding. I know You are God,</p>
                        <p>but there’s so much going on in the space within and around.</p>
                        <p>How can I find You as I’m here shuffling through this crowd?</p>
                        <p>You bring little things to memory.</p>
                        <p>The much needed vacations near the sea — His unchanging</p>
                        <p>character</p>
                        <p>The random acts of kindness from strangers — His sufficient grace.</p>
                        <p>You give me everything I need but I manage to mess it up, time</p>
                        <p>and time again.</p>
                        <p>Yet in confronting all my deficiencies,</p>
                        <p>I’ve seen how You strengthen and help me as I stumble in darkness.</p>
                        <p>How You pick me up each time I fall.</p>
                        <p>How You remind me that I’m not forgotten.</p>

                        <br />

                        <p>Even with the way I am</p>
                        <p>You still want me to come?</p>
                        <p>the old hymn plays in my head.</p>
                        <p>“Turn your eyes upon Jesus,”</p>
                        <p>Even though I have nothing to give,</p>
                        <p>You still paid the price —</p>
                        <p>bled and died on a cross for me —</p>
                        <p>the ultimate sacrifice.</p>
                        <p>I take my chances and lift up my head – our eyes meet.</p>
                        <p>The taunts of the crowd don’t fade away</p>
                        <p>“Stupid…Prostitute…Ugly…Sinner!”</p>
                        <p>They intensify.</p>
                        <p>Defining me by my waning abilities,</p>
                        <p>calling me cruel names</p>
                        <p>I have long grown accustomed to.</p>
                        <p>Then You call my name.</p>
                        <p>Though a soft whisper,</p>
                        <p>I hear it clearly.</p>
                        <p>A new desire consumes me.</p>

                        <br />

                        <p>Just to live in your shadow,</p>
                        <p>to be held in Your arms,</p>
                        <p>comforted beyond every sorrow,</p>
                        <p>all that matters is that You are mine,</p>
                        <p>and I am Yours.</p>
                        <p>I know who I am because You utterly define me.</p>
                        <p>You draw me closer until we are one space.</p>
                        <p>At that moment, this is the only place I want to be</p>

                        <br />

                        <p>Each space I built and all the protests I made</p>
                        <p>though lost to time they were never lost to You.</p>
                        <p>You kept every tear I’ve cried – every single one of them.</p>
                        <p>Every hair on my head – unruly as they are</p>
                        <p>You numbered them all.</p>
                        <p>You ordered every step I’ve taken.</p>
                        <p>You watched over me before I was.</p>
                        <p>You are greater than Sunday mornings</p>
                        <p>and not limited to churches made by human hands.</p>
                        <p>I don’t know when or how I got here</p>
                        <p>but somehow I’m on my knees.</p>
                        <p>I don’t hear the crowd’s cries anymore,</p>
                        <p>and the tears in my eyes blur them out.</p>
                        <p>No longer lost — I’m forgiven.</p>
                        <p>Faith makes the way clear.</p>

                        <br />

                        <p>Finally, in this space, at the feet of Jesus — I’m home.</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
};
