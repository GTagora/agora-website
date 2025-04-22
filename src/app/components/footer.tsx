import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.css' // Import CSS file for styling

function socialButton(img:string, alt:string, link:string) {
    return (<Link href={link} target="blank">
            <div className={styles['social-buttons']}>
                <Image 
                    className={styles['social-images']}
                    src={img}
                    width={28}
                    height={28}
                    alt={alt}
                />
            </div>
    </Link>)
}

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center my-12 font-ebgaramond
                        md:flex-row lg:justify-between lg:w-full lg:px-20">
            <div className="flex flex-col text-left">
                <Link href="/">
                    <Image
                        className={styles.logo}
                        src="/logo-footer.png"
                        width={160}
                        height={50}
                        alt='Agora logo'
                    />
                </Link>
                <div className={styles.socialRow}>
                    {socialButton("/socials/instagram.png", "instagram icon", "https://www.instagram.com/gt.agora/")}
                    {socialButton("/socials/facebook.png", "facebook icon", "https://www.facebook.com/groups/1308653603346414/")}
                    {socialButton("/socials/slack.png", "slack icon", "https://join.slack.com/t/agorageorgiat-eig5741/shared_invite/zt-237p10exi-TnyKfsr78OXD_FJ_vIFG7Q")}
                    {socialButton("/socials/email.png", "email icon", "mailto:gatechagora@gmail.com")}
                </div>
            </div>
            <div className={styles.textBox}>
                <div className={styles.row}>
                    <div className="flex flex-col text-left">
                        <Link href="/about" className={styles.heading}>About</Link>
                        <Link className={styles.footerLink} href="/about">
                            Mission
                        </Link>
                        <Link className={styles.footerLink}  href="/about/staff">
                            Staff
                        </Link>
                    </div>
                    <div className="flex flex-col text-left">
                        <Link href="/archive" className={styles.heading}>Archive</Link>
                        <Link className={styles.footerLink} href="/">
                            Latest Issue
                        </Link>
                        <Link className={styles.footerLink}  href="/archive">
                            Past Issues
                        </Link>
                    </div>
                    <div className="flex flex-col text-left">
                        <Link href="/contact" className={styles.heading}>Contact</Link>
                        <Link className={styles.footerLink}  href="mailto:gatechagora@gmail.com" target="_blank">
                            Email
                        </Link>
                        <Link className={styles.footerLink}  href="https://www.instagram.com/gt.agora/" target="_blank">
                            Instagram
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;