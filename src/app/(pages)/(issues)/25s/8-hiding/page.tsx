import styles from './page.module.css'
import Image from 'next/image'
import Footer from '@/app/components/footer'
import { Reference, Footnote } from '@/app/components/buttons';


export default async function Article() {
    const author = 'Simon Ruiz';
    const credit = 'Photo by Joshua Chung';
    const title = 'Hiding';
    const date = 'April 23, 2025';

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <Image 
                        className={styles.image}
                        src='/issues/25s/hiding.webp'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>{credit}</p>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
                    <h3 className={styles.date}>{date}</h3>
                    <div className="lg:w-[50%]">
                        <p className="text-right text-orange-700">Oh no, look at you, sinning again.</p>
                        <p className="">I, I didn’t mean to</p>
                        <p className="text-right text-orange-700">It doesn’t matter, you still sinned right?</p>
                        <p className="">I did sin</p>
                        <p className="text-right text-orange-700">    Well, what are you going to do?</p>
                        <p className="">I can repent, right?</p>
                        <p className="text-right text-orange-700">What, so you can just sin again later? Repentance without change isn’t repentance.</p>
                        <p className="">I can- I can change, I can stop sinning</p>
                        <p className="text-right text-orange-700">    How are you going to do that?</p>
                        <p className="">God can help-</p>
                        <p className="text-right text-orange-700">    Wait, you definitely can’t let God see you like this</p>
                        <p className="">I’ll make it up to Him, I’ll fix it, I’ll do something</p>
                        <p className="text-right text-orange-700">Can a sinner like you be trusted not to mess up again?</p>
                        <p className="">I’ll try, I’ll read the Bible five times a day or something to make up for what I did</p>
                        <p className="text-right text-orange-700">Wait, do you hear that?</p>
                        <p className="">What is it?</p>
                        <p className="text-right text-orange-700">I think it’s God’s footsteps, quick, run, hide, you’re not ready for Him to see you right?</p>
                    </div>
                    <div className="mt-16 md:w-[75%] lg:w-[50%]">
                        <p className="text-right text-green-800">Why are you hiding?</p>
                        <p className="">Because I messed up. I sinned against God</p>
                        <p className="text-right text-green-800">Does hiding fix things?</p>
                        <p className="">No, but it gives me time to fix things</p>
                        <p className="text-right text-green-800">Do you think God doesn’t already know?</p>
                        <p className="">Well, I mean, He knows everything</p>
                        <p className="text-right text-green-800">Does this affect how God loves you?</p>
                        <p className="">No! … yes… no… maybe?</p>
                        <p className="text-right text-green-800">How are you going to fix things?</p>
                        <p className="">I’ll read more, I’ll serve more, I’ll just be a better Christian until I’m good enough</p>
                        <p className="text-right text-green-800">How good is good enough for God?</p>
                        <p className="">I… I don’t know</p>
                        <p className="text-right text-green-800">Is it possible to reach God’s perfection?</p>
                        <p className="">I mean, I guess not</p>
                        <p className="text-right text-green-800">Did you repent?</p>
                        <p className="">No! I can’t yet!</p>
                        <p className="text-right text-green-800">Why not?</p>
                        <p className="">I haven’t done anything to make me worthy of forgiveness</p>
                        <p className="text-right text-green-800">Didn’t Jesus already do everything needed for God’s forgiveness?</p>
                        <p className="">But… How can I face Him like this?</p>
                        <p className="text-right text-green-800">Why are you hiding?</p>
                        <p className="">I’m too ashamed. Can I really go to a loving God like this?</p>
                        <p className="text-right text-green-800">Yes, but God won’t force you out of hiding. Just try not to hide for too long, all you’re doing is hurting yourself, and God.</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
)};
