import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <div className="py-32 w-[80vw] lg:w-[50vw]  mx-auto">
            <h1 className="font-playfair text-[20pt] text-black font-bold tracking-wider">Donations</h1>
            <p className="font-ebgaramond mt-6 leading-6">
                To our readers and supporters, we want to express our gratitude–to the Lord first and foremost for providing our campus with this gift and for guiding <i>Agora</i> through every semester to do His will, and to you as well. It is with the knowledge that this journal will reach you, whether digitally or in print, that we continue to pour out our love for <i>Agora</i>.<br/><br/>
                We would also ask that you continue to keep <i>Agora</i> and all the other Augustine Collective journals in your prayers as we continue in this endeavor. If you feel called to support financially, please zelle gatechagora@gmail.com. All donations go directly towards printing this issue and funding the journal each semester. However, the journal is and will always be at no charge for you to freely enjoy.<br/><br/>
        
                In Christ,<br/>
                The <i>Agora</i> staff<br/>
            </p>
            <br/>
            <div className="xl:flex xl:flex-row xl:items-start bg-white px-10 py-4 rounded-2xl">
                <div className="flex flex-col justify-start">
                    <p className="font-ebgaramond mt-6 leading-6">
                        We&apos;re accepting donations through:
                    </p>
                    <ul className="font-ebgaramond list-disc ml-10">
                        <li>Zelle: gatechagora@gmail.com</li>
                        <li>
                            <Link className="underline" href="https://www.paypal.com/paypalme/GTAgora" target="_blank">
                                Paypal
                            </Link>
                            : @GTAgora (gatechagora@gmail.com)</li>
                        <li>Venmo: @ohu-9 (Olivia Hu)</li>
                    </ul>
                </div>
                <Image 
                    className="w-[370pt]"
                    src='/payment.png'
                    width={400}
                    height={400}
                    alt='payment information'
                />
            </div>
        </div>
    )
}