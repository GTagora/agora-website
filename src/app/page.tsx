import Image from "next/image";
import styles from './page.module.css'
import { IssuuButton } from "./components/buttons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <div className={styles.mobileView}>
            <Mobile />
        </div> */}
        <div className={styles.desk}>
            <div className={styles.heading}>
                <div>
                    <h1>AGORA</h1>
                    
                        <h2>Georgia Tech’s Journal of Christian Thought</h2>
                        
                        <h3>A marketplace of ideas and spiritual nourishment — all for His glory.</h3>
                </div>
                </div>
                <div>
                <Link href="#latest-issue">
                    <Image
                        className={styles.arrow}
                        src="/arrow.png"
                        width={25}
                        height={25}
                        alt="arrow"
                    />
                </Link>
            </div>
            <a id="latest-issue" href="#latest-issue">
            </a>
            <div className="mt-96 px-36 h-[70vh]">
                <div className="mx-auto gap-10 w-[60vw] lg:w-[30vw]">
                    <h3>Hi there!</h3>
                    <p className={styles.noticeText}>Our website is currently undergoing maintenance. Please visit our blog or view our print publications via the links below. Thank you for your patience &amp; continued support!</p>
                    <Link href="/blog" target="_blank">
                        <div className="rounded-[4rem] px-8 py-3 my-5 border-2 border-darkestGreen text-center text-darkestGreen
                                        hover:bg-darkestGreen hover:text-white hover:tracking-[.07rem] transition-all">
                            Our blog &#x2192;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    </Link>
                    <Link href="https://issuu.com/gtagora/docs/agora_f24" target="_blank">
                        <div className="rounded-[4rem] px-8 py-3 my-5 border-2 border-darkestGreen text-center text-darkestGreen
                                        hover:bg-darkestGreen hover:text-white hover:tracking-[.07rem] transition-all">
                            Check out our print issue &#x2192;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    </Link>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    </main>
  );
}

function Button({ link }:{ link:string }) {
  return (
      <Link href={link} target="_blank">
          <div className={styles.button}>Our blog &#x2192;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </Link>
  );
}