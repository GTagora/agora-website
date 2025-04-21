import styles from './page.module.css'
import Image from 'next/image'
import Footer from '@/app/components/footer'


export default async function Article() {
    const author = 'Lois Lee';
    const credit = 'Photo by Joshua Chung';
    const title = 'Our Gardener';
    const date = 'April 23, 2025';

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <Image 
                        className={styles.image}
                        src='/issues/25s/our-gardener.webp'
                        width={600}
                        height={600}
                        alt='article image'/>
                    <p className = {styles.credit}>{credit}</p>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
                    <h3 className={styles.date}>{date}</h3>
                    <div className="leading-6">
                        <h1 className="text-2xl font-playfair font-bold mt-7">
                            I. planting
                        </h1>
                        <div className="italic font-cormorant my-3">
                        <q>Then the Lord God formed the man of dust from the ground and breathed into his nostrils the breath of life, and the man became a living creature.</q> — Genesis 2:7
                        </div>
                        <div className="mx-auto md:grid grid-cols-2 gap-6 text-justify">
                            <div className="mb-8 md:mb-0">
                                A bell jingles as the door swings open. A friendly grin from the nursery staff and the rich scents of plants and soil greet the gardener as he ambles in. The gardener strolls through the aisles of seed packets, deep in thought. The petunias? No, it’s already too late to plant them now. The poppies? No, they’d bloom too late, when the rest of his garden is out of season. The lilacs. He picks out several packets of lilac seeds, and a warm smile spreads across his face as he envisions how his garden will look in half a year. As he drives home, he hums as he repeatedly glances at the seat next to him, where his seeds bounce along the bumps of the gravel road back to the gardener’s home. The gardener gives birth to a flower with his planting. The seeds he carefully selected at the nursery are what he knows will thrive and look most elegant in his garden when spring comes. With great expectation, the gardener creates tiny divets in the soil for the seed to delicately fall into its new home. Every morning, the gardener walks out to his garden, gives a sprinkle of water, and looks out for any signs of the lilacs starting to sprout above the soil.
                            </div>
                            <div>
                                God breathed life into man. He carefully created a place for us to join His family in His garden. He was the Gardener even before the creation of the garden. He has been our Gardener since before He tore open the seed packets to have us fall into the soil. When He created man, He did so in His image. And after creation, He continues to be the Gardener who never forsakes His garden. Once nestled within the soil, the Gardener tends to His seeds, ensuring the soil is the proper environment for the seed to grow its roots then sprout. Unlike the earthly gardener, the Lord as our Gardener does not make His morning rounds then leave His garden unattended for the rest of the day. He keeps watch over His garden day in and day out, sheltering and nurturing the seedlings constantly.
                            </div>
                        </div>

                        <h1 className="text-2xl font-playfair font-bold mt-9">
                            II. growth and nutrition
                        </h1>
                        <div className="italic font-cormorant my-3">
                            <q>Consider the lilies of the field, how they grow: they neither toil nor spin.</q> — Matthew 6:28
                        </div>
                        <div className="mx-auto md:grid grid-cols-2 gap-6 text-justify">
                            <div className="mb-8 md:mb-0">
                                As the seasons change, the seed forms roots, sprouts a stem, lengthens, buds, then finally blooms in the spring. Even as the flower matures, the gardener continues feeding the flower, packing on fertilizer. The unassuming  lilac seed has now transformed into a fully grown flower with a display of vibrant petals. The solid blue and violet hues of the lilacs nestled next to delicate peonies create a dynamic landscape. The flowers sway to the gentle breeze in a synchronized motion; butterflies swoop in and out of the frame. As the gardener takes a step back and looks around at his garden, he proudly admires its beauty. This is exactly what he imagined his garden to look like when he first stepped foot in the nursery months ago. 
                            </div>
                            <div>
                                The Gardener provides with the nutrients to thrive spiritually. We are His flowers, and He wants to see us bloom with bright colors. He longs to see His flowers at full bloom not just in the peak of spring, but year-round. From the first day His flowers were planted, He supplied soil and fertilizer in the form of His living Word, giving hearty soil for the roots of the flowers to anchor to. His lilies of the field grow to be beautiful, because He has created us in His image. And as His flowers bloom and mature, He brings in companion plants, ones that He knows will enrich with spiritual brotherhood. The Gardener knows that the growth of His flowers will not be without struggle, so He intertwines His Spirit to dwell within the roots of His flowers.
                            </div>
                        </div>

                        <h1 className="text-2xl font-playfair font-bold mt-9">
                            III. wilting
                        </h1>
                        <div className="italic font-cormorant my-3">
                            <q>&apos;What man of you, having a hundred sheep, if he has lost one of them, does not leave the ninety-nine in the open country, and go after the one that is lost, until he finds it? And when he has found it, he lays it on his shoulders, rejoicing.&apos;</q> — Luke 15:4-5
                        </div>
                        <div className="mx-auto md:grid grid-cols-2 gap-6 text-justify">
                            <div className="mb-8 md:mb-0">
                                When a drought hits and the once-plump lilacs shrivel, the gardener uproots them. When his garden freezes over during the winter and is unable to recover from the cold months, the gardener clears his garden and replants a new garden for the following spring. He stops by the nursery again, perusing the seeds, contemplating which seeds to plant this year. Why does the gardener do such unkind things to his garden? Does he not care about the garden he had tended to for the past year? Why would he give up on their plants and start anew? It is because those wilted and dead plants ruined the image of his once vibrant garden. The limp posture of the wilted flowers disrupts the neat rows that the gardener originally planted. The dead lilacs mute the vibrancy of the rest of the garden with their browned petals. So the gardener chooses to take his tools and uproot the flowers that are no longer thriving.
                            </div>
                            <div>
                                But the Gardener does not do this with His garden. His heart breaks when a flower has lost its color and begins to sag. He never has the sentiment that this wilting flower is no longer beautiful. He has never thought that the drooping flower is ruining the image of the rest of His garden. In the Gardener’s eyes, His flower is just as elegant at the peak of spring as when it hangs limp and heavy. He pursues the one flower that is lost and shriveled. He loves on it even at its weakest. When His flowers cry out to Him in suffering and hurt, He weeps with them. When the Gardener sees a shriveled flower longing for nutrition, He knows exactly how to revive it again with His spiritual food. He will provide it with extra fertilizer and water, staying by its side always, teaching it that He is there to be leaned on. He keeps pursuing the lost flower until it is found and full of life. Now the Gardener rejoices; His garden is now alive, found, and within the embrace of His arms once again.
                            </div>
                        </div>

                        <h1 className="text-2xl font-playfair font-bold mt-9">
                            Gardener
                        </h1>
                        <div className="mx-auto text-justify">
                            The Lord is our Gardener. He tends to His garden with daily care and love, all the way from the first stage of planting, to the cries of wilting, to the joyful celebrations of growth and revival. He gives His flowers living water in seasons of drought; He shields them from harsh storms. But even when His flower stands tall, it does not do so with pride and boasting. Its inherent nature and potential to be a beautiful flower at full bloom is all due to the Creator. The wondrous, intentional design for the flower was crafted by the Gardener from the time the seed was rescued from the rows of seeds at the nursery. The grace and love of the Gardener gave the flower life; all the glory belongs to Him and Him only. How blessed are we to have steadfast assurance knowing we are being nurtured by the Gardener. And how blessed are we to be able to call the Gardener who tends for us Abba, Father.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
)};
