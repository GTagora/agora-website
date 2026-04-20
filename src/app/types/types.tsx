export type Article = {
  id: number;
  title: string;
  author: string;
  image: string;
  genre: string;
  issue: string;
  link: string;
};

export interface ArticleCard {
  article: Article;
}

export interface BlogCardProps {
  article: {
    id: number;
    title: string;
    genre: string;
    img: string;
    slug: string;
    date: string;
  };
}
