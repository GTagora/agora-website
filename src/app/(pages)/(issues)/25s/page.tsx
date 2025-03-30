import styles from './page.module.css'
import { IssueCard } from '@/app/components/cards';
import { IssuuButton } from '@/app/components/buttons';
import Footer from '@/app/components/footer';


const articles = [
    {
        id: 0,
        title: 'EXAMPLE',
        image: '/issues/25s/test.webp',
        genre: 'genre',
        issue: 'Garden',
        link: '/25s/id-article-name'
    },
    {
        id: 11,
        title: 'His story & mine',
        image: '/issues/25s/his-story-and-mine.webp',
        genre: 'essay',
        issue: 'Garden',
        link: '/25s/11-his-story-and-mine'
    }
]

export default async function Issue() {

    const volume = 2;
    const issue = 2;
    const semester = 'Spring 2025'
    const theme = 'Garden';
    const issuu = 'https://issuu.com/gtagora/docs/agora_s25';
    const image = '/covers/25s.jpg';

    return (
        <main className={styles.main}>
            <h1>{theme}</h1>
            <h5>{semester.toUpperCase()} | VOL. {volume}, NO. {issue}</h5>
            {issuu ? <IssuuButton  link={issuu}/> : null}
            <div className={styles.hbox}>
                <div className={styles.letter}>
                    <h3>Letter from the editors</h3>
                    <div>
                        {/* INSERT LETTER FROM EICS HERE */}
                    </div>
                </div>
                <div className={styles.articlesContainer}>
                    {articles && articles.map((article: any) => (
                        <IssueCard key={article.name} article={article}></IssueCard>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
)};