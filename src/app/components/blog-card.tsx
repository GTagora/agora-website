import styles from './blog-card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { BlogCardProps } from '../types/types'


export default function BlogCard({article}:BlogCardProps) {
    return (
        <Link href={article.slug}>
            <div className={styles.card}>
                <Image 
                    className={styles.cardImage}
                    src={article.img}
                    width={400}
                    height={400}
                    alt='article image'/>
                <div className={styles.box}>
                    <div className={styles.hbox}>
                        <h2>{article.title}</h2><h3>{article.genre.toUpperCase()}</h3>
                    </div>
                    <h4>{article.date}</h4>
                </div>                
            </div>
        </Link>
    )
}