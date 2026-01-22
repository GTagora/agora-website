import styles from './page.module.css'
import Image from 'next/image'
import Footer from '@/app/components/footer'

export default async function Article() {
    const author = 'Tammy Pham';
    const title = 'The Source';
    const date = 'April 23, 2025'

    return (
        <div>
            <div className={styles.main}>
                <div className="w-[80vw] md:w-[50vw] mx-auto">
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
                    <h3 className={styles.date}>{date}</h3>
                    <div className="px-12 flex flex-col gap-7">
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/01_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/02_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/03_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/04_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/05_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/06_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/07_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/08_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/09_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/10_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/11_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/12_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/13_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <Image 
                            className="w-full mx-auto"
                            src='/issues/25s/the-source/14_panel.webp'
                            width={600}
                            height={600}
                            alt='article image'/>
                        <div className="mt-3 leading-7">
                            We were made to be in relation with God. Within each of us is an innate yearning for Him and the fulfillment and joy only He can provide. This resolute satisfaction can only come straight from Him. Often our hearts and desires wander and drift to the false shininess of this world. Yet, only through continual abidance in our Father can we be truly satiated.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
)};
