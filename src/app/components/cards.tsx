import Link from "next/link";
import Image from "next/image";

interface ArticleCard {
  article: {
    id: number;
    title: string;
    image: string;
    genre: string;
    issue: string;
    link: string;
  };
}

export function ArticleCard({ article }: ArticleCard) {
  const image = article.image;
  const title = article.title;
  const genre = article.genre.toUpperCase();
  const link = article.link;
  return (
    <Link href={link}>
      <div
        className="w-[87vw] h-[210px] p-[30px] bg-white rounded-lg shadow-lg flex flex-row justify-between gap-6
                        md:w-[40vw]"
      >
        <div className="overflow-ellipsis">
          <h2 className="font-ebgaramond font-bold text-xl line-clamp-2 leading-6">
            {title}
          </h2>
          <h3 className="font-sans text-xs opacity-60 my-2">{genre}</h3>
          {/* <p className={styles.preview} dangerouslySetInnerHTML={{ __html: text.replace(/\\n/g, '\n')}}></p> */}
        </div>
        <Image
          className="w-56 object-cover"
          src={image ? image : "/test.jpg"}
          width={400}
          height={400}
          alt="article image"
        />
      </div>
    </Link>
  );
}
