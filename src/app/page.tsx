import Image from "next/image";

import { HomeCard } from "./components/cards";
import Footer from "./components/footer";

const articles = [
  {
    id: 1,
    title: "Ballpoint",
    author: "Ansley Cheng",
    image: "/issues/26s/test.png",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/article-1",
  },
  {
    id: 2,
    title: "article 2 name",
    author: "author name",
    image: "/issues/26s/test.png",
    genre: "genre",
    issue: "Ink",
    link: "/26s/article-2",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start pt-24 px-10">
      <div className="flex flex-row justify-center items-center gap-5">
        <Image
          className="w-16 object-cover"
          src="/logo-black.png"
          width={400}
          height={400}
          alt="article image"
        />
        <p className="font-playfairsc font-bold text-black text-[40pt] md:text-[60pt] tracking-tighter">
          AGORA
        </p>
      </div>
      <div className="flex flex-row justify-between w-full md:w-[70vw] lg:w-[50vw] border-t-2 border-black font-bold text-sm md:text-md">
        <p>GEORGIA TECH</p>
        <p className="">A JOURNAL OF CHRISTIAN THOUGHT</p>
        <p className="">EST. 2023</p>
      </div>

      {/* LATEST ISSUE */}
      <div
        className="mt-12 bg-neutralTan py-20 w-[100vw] px-14
						lg:px-28 lg:grid lg:grid-cols-5 gap-12 lg:w-[80vw]"
      >
        <div className="col-span-2">
          <Image
            className="hidden lg:block w-full h-full object-cover"
            src="/issues/26s/test.png"
            width={400}
            height={400}
            alt="article image"
          />
        </div>
        <div className="col-span-3 flex flex-col text-left">
          <p className="font-bold text-xl">LATEST ISSUE:</p>
          <p className="font-playfair italic font-black text-[60pt] lg:text-[80pt] lg:-mt-8 -ml-3">
            Ink
          </p>
          <div className="pt-1 border-t-2 border-black flex flex-row justify-between">
            <p className="font-cormorant">Dear Reader,</p>
            <p className="font-bold text-xs text-right">LETTER FROM THE EICS</p>
          </div>
          <div className="font-cormorant">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tempus feugiat enim, nec condimentum neque sollicitudin eu. Morbi
            accumsan risus elit, ut finibus sem auctor in. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Morbi elementum lacinia nibh, eu fringilla nisl. Morbi bibendum
            egestas lectus sit amet maximus. Duis at lorem ac velit elementum
            aliquet ac eu dolor. Fusce gravida eros vel pulvinar consectetur.
            <br />
            <br />
            Donec pharetra metus sem, quis mattis urna malesuada in. Nam elit
            nisi, porta pharetra mauris vel, ultricies aliquam ipsum.
            Pellentesque egestas ex vitae sem feugiat dictum. Donec aliquam elit
            vitae mattis vulputate. Nunc vitae ultricies sapien. Sed imperdiet
            sed lorem id condimentum. Sed ac odio lacus.
            <br />
            <br />
            Ut ultrices mollis scelerisque. Fusce commodo sem eu felis cursus,
            sit amet dapibus tortor mollis. Donec mollis neque ac odio posuere
            accumsan. Cras dui odio, suscipit lacinia nisi nec, tincidunt porta
            ex. Maecenas in mauris sollicitudin, viverra massa non, mollis erat.
            Phasellus in mi eu libero tristique vestibulum. Sed nec arcu quis
            nibh interdum condimentum. Mauris tempus in tortor ac interdum.
            Fusce est justo, mollis ut ligula viverra, interdum tincidunt
            lectus. Quisque ultrices pulvinar eros, vel sagittis lectus
            tincidunt ac. Nam vitae mauris eu magna dictum hendrerit. Duis
            blandit lorem eu nisl hendrerit ornare.
            <br />
            <br />
            Maecenas urna arcu, vulputate sit amet elit ut, interdum feugiat
            ligula. Nulla facilisi. In gravida molestie magna, a lacinia nisi
            lobortis id. Mauris sollicitudin congue neque, id fringilla magna
            euismod sed. Nulla facilisis in nibh at mattis. Suspendisse augue
            tellus, pulvinar ut pellentesque sit amet, elementum at ante. Aenean
            eleifend, tortor sit amet bibendum lacinia, purus enim mattis sem,
            id laoreet elit mi vel orci.
            <br />
            <br />
            Integer nulla tellus, posuere a turpis eget, eleifend pellentesque
            ipsum. Nunc non interdum lorem, vel pulvinar ex. Aliquam erat
            volutpat. Duis suscipit at libero eu maximus. Aenean in risus
            venenatis, consectetur urna ut, dapibus erat. Pellentesque dignissim
            blandit augue. Aenean et risus vel erat dapibus tempus id convallis
            dui. Sed tempus nulla non velit volutpat, euismod vulputate nisl
            placerat. Praesent accumsan vel nunc ac vulputate.
            <br />
            <br />
            Yours in Christ,
            <br />
            Olivia and Sean
          </div>
        </div>
      </div>

      {/* ARTICLES */}
      <div
        className="py-14 w-full flex flex-col gap-12
						md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-14
						lg:w-[80vw] lg:grid xl:grid-cols-3"
      >
        {articles.map((article) => {
          return <HomeCard key={article.id} article={article} />;
        })}
      </div>
      <Footer />
    </main>
  );
}
