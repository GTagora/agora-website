export type Article = {
    id: number,
    title: string,
    image: string,
    genre: string,
    issue: string,
    link: string,
};

export interface ArticleCard {
    article: Article
};