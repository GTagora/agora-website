import styles from './page.module.css'
import Image from 'next/image'
import { Reference, Footnote } from '@/app/components/buttons'
import Footer from '@/app/components/footer'


export default async function Article() {
    const author = 'Eddy Huang';
    const credit = 'Photo by Henry Chen';
    const title = 'Climbing with God';
    const date = 'December 06, 2025';

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    {/* <iframe className={styles.video} src='VIDEO LINK HERE'/> */}
                    <Image 
                    className={styles.image}
                    src='/issues/25f/climbing-with-god.webp'
                    width={600}
                    height={600}
                    alt='article image'/>
                    <p className = {styles.credit}>{credit}</p>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
                    <h3 className={styles.date}>{date}</h3>
                    <div className={styles.text}>
<p><i> Sometimes the climb isn't meant to take us higher, but closer to who God is calling us to be. </i></p>
<p style={{ marginBottom: '10px' }}>Many of us grow up believing life is a checklist: get good grades, get into a good school, choose a respectable major, secure the right job… We cross off every box, yet it still feels like something is missing.</p> 
<p style={{ marginBottom: '10px' }}>Why?</p>
<p style={{ marginBottom: '10px' }}>Because progress isn't the same as purpose.<Reference number={1}/></p>
<p style={{ marginBottom: '10px' }}>One way to see our lives is through the classic <i>Hill Climbing Problem</i> in computer science. Imagine being dropped randomly on a hilly terrain, where each peak represents a possible path. Each terrain represents an aspect of our lives: our careers, our relationships, our faith, or our health. As we climb higher in each, we feel more successful, more accomplished, more knowledgeable.</p>
<p style={{ marginBottom: '10px' }}>But success doesn't clear the fog. Our vision is limited and the landscape is enormous; we can only see the small space around us. We pick a direction and climb, but we don't know if the hill we're scaling is the tallest or if, just beyond the fog, a higher peak awaits.<Reference number ={2}/></p>
<p style={{ marginBottom: '10px' }}>In computer science, there are a number of solutions to solving this heuristic problem. The most basic algorithm, and the one we often use, is the Simple Hill Climbing Algorithm. We pick what gives us the first instance of gain, and we climb in that direction.</p>
<p style={{ marginBottom: '10px' }}>Humans are natural hill climbers. When we spot an incline, whether it is a promotion, an internship, or an achievement, we rush upward. The climb feels like progress, and in the moment, it is hard to resist taking the next visible step forward. Yet this creates a problem: sometimes we reach the top of a hill, only to realize it is not the one we were meant to climb.</p>
<p style={{ marginBottom: '10px' }}>Our judgment is shortsighted. We mistake upward motion for ultimate success, but in reality, what looks like the peak of our purpose may only be a small rise compared to the greater calling God has for us.<Reference number={3}/></p>
<p style={{ marginBottom: '10px' }}>Another algorithm is known as Gradient Ascent. We look at all our possible neighboring steps around us and then pick the one that gives us the most increase. While this method takes more time, it gives us a chance to slow down and consider everything around us before making a decision. But it still shares one flaw with Simple Hill Climbing: it never chooses to go backward. We move only when things look better, never when they look uncertain.</p>
<p style={{ marginBottom: '10px' }}>But life doesn't work like that. Sometimes, the most important steps we take aren't the ones that lift us higher, but the ones that force us to pause, to pivot, to wander.</p>
<p style={{ marginBottom: '10px' }}>That's where Stochastic Random Ascent comes in. It's a variation of hill climbing that introduces chance. Instead of always picking the best possible step, it sometimes chooses a random one that may steer the climber in a neutral or even negative direction. The randomness prevents the climber from getting stuck on small hills or plateaus, forcing them to explore paths they might have never chosen intentionally.</p>
<p style={{ marginBottom: '10px' }}>Faith often feels like this kind of randomness. Instead of always choosing the progress-oriented path, we're sometimes forced to wait, or even move backwards, without seeing the reason behind the shift in direction.</p>
<p style={{ marginBottom: '10px' }}>And there will be moments when we move backwards, when we stumble, trip, and fall — not because we chose wrongly, but because God allowed it. He knows which hill is highest and which climb will shape us the most for His glory.<Reference number={4}/></p>
<p style={{ marginBottom: '10px' }}>That is why, at times, He intervenes, allowing us to lose our balance and tumble. Early on, some of these falls may look like a breakup, a loss of a job, the death of a loved one, or even failing an important exam. These falls are often painful, confusing, and cause us to question both ourselves and Him.</p>
<p style={{ marginBottom: '10px' }}>Yet, in the bigger picture, these random moves are not accidents but divine redirections. God sometimes uses what feels like disorder to lead us to a higher purpose we could never have reached by logic alone.<Reference number={5}/></p>
<div style={{ textAlign: 'center' }}>
<i><p>"What seems to us as bitter trials are often blessings in disguise."</p></i>
<i><p>-   Oscar Wilde</p></i>
</div>
<p style={{ marginBottom: '10px' }}>And while we depend on heuristics, our instincts, our logic, or what seems right in the moment, God's algorithm is different. He doesn't approximate or guess. He doesn't optimize for efficiency or comfort. He focuses on <i>formation</i>. Where our man-made algorithms seek the fastest path to the tallest hill, He seeks the slow shaping and refinement of the soul. His climbs are not greedy or random; they are deliberate. Every ascent, descent, and detour has a purpose in His design.<Reference number={6}/></p>
<p style={{ marginBottom: '10px' }}>This means the valleys we dread and the plateaus we resent are not errors in His plan but features of the spaces where He refines endurance, humility, and trust. To us, it may look like a drop in elevation; to Him, it is a turn toward transformation.</p>
<p style={{ marginBottom: '10px' }}>Personally, Tech wasn't my first choice, and I carried a quiet disappointment with me when I first stepped on campus. But in the very place I once viewed as a detour, God has revealed friendships, mentors, and a church of genuine purpose that I never would have found elsewhere. The hill may not have been the one I wanted, but it is exactly the one He knew would shape me the most.<Reference number={7}/></p>
<div style={{ textAlign: 'center' }}>
<i><p>"The good life isn't from God, it's with God"</p></i>
<i><p>-   Valerie Worner</p></i>
</div>
<p style={{ marginBottom: '10px' }}>Sometimes, He even brings us to a local maximum not for ourselves, but for someone else: to lift another climber up, to teach, to serve, to illuminate that part of the mountain before He leads us onward.<Reference number={8}/></p>
<p style={{ marginBottom: '10px' }}>Consider those semesters when we find ourselves in a "filler" class. It may seem like a detour from our path to graduation, but it can be a moment to lift another climber, to extend grace, offer friendship, and reflect God's love to someone He has placed in our path.</p>
<p style={{ marginBottom: '10px' }}>Faith, then, is not about calculating the next best step but trusting the One who already knows the summit. It means letting go of our need to optimize and gain and instead learning to obey — even when the path seems inefficient.<Reference number={9}/> Because God's goal is not merely to bring us higher, but to bring us closer: closer to His character, closer to His purpose, closer to His heart.</p>
<div style={{ textAlign: 'center' }}>
<i><p>"God will tell you the way to go, but you have to do the walking."</p></i>
<i><p>-   Joyce Meyer</p></i>
</div>
<p style={{ marginBottom: '10px' }}>This truth is often difficult to accept because our human instinct is to value short-term progress. Behavioral economists call this "present bias" — the tendency to overvalue immediate rewards at the expense of long-term outcomes. Spiritually, it means we often prefer the smaller hill we can see now instead of trusting God for the taller one that lies beyond our vision. But faith calls us to live differently, so when we finally stand at the summit He's chosen for us, we'll realize that every climb, every fall, and every unexpected turn was perfectly tuned to lead us there.</p>
<div style={{ textAlign: 'center' }}>
<i><p>"Faith is not the belief that God will do what you want. It is the belief that God will do what is right"</p></i>
<i><p>-   Max Lucado</p></i>
</div>
<p>So what does faith look like?</p>
<p>Jesus gives us a simple answer: to depend on God. This is the foundation to all Christian life. We depend on God for salvation. We depend on God for wisdom.<Reference number={10}/> We depend on God for every breath we take. Psalms 18:2 teaches, <i>"The Lord is my rock, my fortress, my deliverer."</i></p>
<p>However, this doesn't imply we can do anything we desire, climb any hill we want, and trust that God will sweep our consequences under the rug. True reliance looks like:</p>
<ul style={{ listStyle: 'none', paddingLeft: '2rem', margin: 0 }}>
  <li style={{ textIndent: '-1rem', marginBottom: '0rem' }}>
    - Praying every day. Prayer shows we need him every moment, and every moment we spend with him serves to refine us further.
  </li>

  <li style={{ textIndent: '-1rem', marginBottom: '0rem' }}>
    - Anchoring ourselves in scripture. Reading our bible every day. The Lord is our daily bread, and the word of God has promises, instructions, wisdom, and examples for every step of the climb<Reference number={11}/>
  </li>

  <li style={{ textIndent: '-1rem', marginBottom: '0rem' }}>
    - Doing what is right, always. Jochebed did what was right for her child, Moses, and left the outcome to God,<Reference number={12}/> and as followers of Christ we are called to do what is right, not what is easy, nor what is popular.
  </li>

  <li style={{ textIndent: '-1rem', marginBottom: '0rem' }}>
    - Abiding in Christ. Jesus puts it this way:<i>"Abide in me, and I in you. As the branches cannot bear fruit by itself, neither can you unless you abide in me.<Reference number={13}/>"</i> Without Christ, our climbs are fruitless.
  </li>

  <li style={{ textIndent: '-1rem' }}>
    - Refusing to worry. Matthew 6:26 declares, <i>"The birds of the sky neither sow nor reap, yet our heavenly father cares for them."</i> We are called to cast all our anxieties on God, and keeping anxiety to ourselves doubts God's power.<Reference number={14}/>
  </li>
</ul>
<p style={{ marginBottom: '50px' }}>So if you feel stuck on the wrong hill — whether that's a job, a major, a relationship, or simply a season of uncertainty — trust. Trust the One who placed your feet there. And if you fall, fall with grace and hope, knowing that the One who holds your hand will never let you go.</p>

<Footnote number = {1} text = "Matthew 16:26" />
<Footnote number = {2} text = "John 9: 39" />
<Footnote number = {3} text = "Proverbs 16:9" />
<Footnote number = {4} text = "Jeremiah 29:12" />
<Footnote number = {5} text = "Romans 11:33" />
<Footnote number = {6} text = "Isaiah 55:8-9" />
<Footnote number = {7} text = "Romans 8:28" />
<Footnote number = {8} text = "1 Peter 4:10" />
<Footnote number = {9} text = "Proverbs 3:5-6" />
<Footnote number = {10} text = "James 1:5" />
<Footnote number = {11} text = "Deuteronomy 8:3" />
<Footnote number = {12} text = "Exodus 2:1-10" />
<Footnote number = {13} text = "John 15:4" />
<Footnote number = {14} text = "1 Peter 5:7" />

                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
)};
