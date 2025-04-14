import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Taylor Maerlender";
  const credit = "Illustration by Allison Chung";
  const title = "The Gardener's Whisper";
  const date = "April 23, 2025";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/25s/the-gardeners-whisper.webp"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            I step into the garden, my bare feet sinking into the soft earth.
            The scent of lilies and roses carried on the breeze, filling the air
            with a delicate beauty. I notice patches of wildflowers in one
            corner, swaying gently in the breeze, their colors vibrant with
            life. Yet, just beyond them, the ground is overgrown&mdash;thick
            with weeds that coil like serpents around the stems of wilting
            lilies.
            <br />
            <br />
            A sigh escapes me. Why does it always seem like the weeds grow among
            the flowers, stealing their strength?
            <br />
            <br />
            I kneel beside a struggling lily, its petals curled slightly inward,
            as if afraid to open. <br />
            <br />
            <q>You&apos;ll never bloom,</q> the weeds hiss, their thorny
            tendrils tightening around its stem. <q>You&apos;re too weak.</q>
            <br />
            <br />
            The lily trembles.{" "}
            <i className="text-red-500">
              Maybe they&apos;re right. Maybe the lilies were never meant to
              grow.
            </i>
            <br />
            <br />
            I reach out, intending to pull the weeds away, but I hesitate,
            knowing their roots run deep, tangled beneath the surface.
            <br />
            <br />
            <i className="text-red-500">
              What if I damage the lily in the process? What if the weeds bear
              thorns?
            </i>
            <br />
            <br />
            A warm presence moves beside me. I do not have to look up to know He
            is there.
            <br />
            <br />
            <q>My child,</q> the Gardener proclaims, His whisper as gentle as
            the breeze.{" "}
            <q>
              Why do you fear? This garden does not grow by your hands alone.
            </q>
            <br />
            <br />I bow my head.{" "}
            <q>
              But the weeds… they&apos;re choking everything that was meant to
              grow and harming everything beautiful.
            </q>
            <br />
            <br />
            He kneels beside me, His fingers brushing the earth.{" "}
            <q>
              Yes, but even the strongest weeds cannot withstand My hands.
            </q>{" "}
            He reaches down, effortlessly pulling the thorns from their roots,
            shaking the dirt free.{" "}
            <q>
              Some weeds must be removed in time. Others I leave for a
              season&mdash;to strengthen what is growing beside them. Uproot
              them too soon, and you risk disturbing the harvest that is yet to
              come.
            </q>
            <br />
            <br />
            I watch as the lily, now freed, stretches toward the sunlight.
            <br />
            <br />
            <q>Do you see?</q> He asks.{" "}
            <q>
              Even when the weeds crowd the lilies, even when their roots
              intertwine, I am tending to this garden.
            </q>{" "}
            His eyes meet mine. <q>I am tending to you.</q>
            <br />
            <br />
            A breeze stirs the leaves, carrying the scent of the flowers once
            more. I close my eyes, breathing it in. The weeds are not gone
            entirely&mdash;but the Gardener is here, with me, and that is
            enough.
            <br />
            <br />
            As I rise to walk forward, I can feel the slight tug of the weeds
            around me, attempting to entangle me with their influence. Their
            pull is familiar, yet something within me has shifted. I glance back
            at the flowers, and I feel the gardener&apos;s presence as His hands
            still tend the earth.
            <br />
            <br />
            Some weeds will remain and new ones will sprout. The garden will
            need care, pruning, and patience&mdash;not just today, but always.
            Yet, I no longer carry the weight of fixing it alone, and my concern
            for the lilies has eased. Even in the chaos of growth, there is
            purpose. Even in the struggle and testing, there is beauty. <br />
            <br />
            As I walk away, the breeze carries His whisper to me once more:{" "}
            <i className="text-red-500">
              <q>I am tending to this garden. I am tending to you.</q>
            </i>
            <br />
            <br />
            <span className="text-red-500">1 Corinthians 3:7</span>
            <br />
            <i className="text-red-500">
              <q>
                So neither he who plants nor he who waters is anything, but only
                God who gives the growth.
              </q>
            </i>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
