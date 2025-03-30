import Image from 'next/image'
import Footer from '../../components/footer'

export default function About() {
    return (
    <div className="flex flex-col items-center p-[2rem] font-ebgaramond">
        <div className="mt-[40px] w-[80vw] lg:w-[50vw]">

            <h1 className="font-bold text-3xl my-14 tracking-wider font-playfairsc">Mission Statement & Rationale</h1>
            
            <div className="my-10">
                <h1 className="font-playfair text-xl font-bold tracking-widest mb-4"> Mission Statement </h1>
                <p className="text-md leading-7"> Agora seeks to <b> glorify God </b> as an ecumenical forum and journal of Christian thought. By creating and curating pieces that reflect the vibrant beauty of God’s nature, we offer a collective Christian perspective to the campus dialogue. </p>
            </div>

            <div className="my-10"> 
                <h1 className="font-playfair text-xl font-bold tracking-widest mb-4"> Vision Statement </h1>
                <ul className="text-md list-disc leading-8">
                    <li className="ml-10"> We hope to provide a space for Christians to navigate curiosities, doubts, or moments of awe in their relationship with God </li>
                    <li className="ml-10"> In writing or dialogue, Agora promotes solidarity amongst Christians across ministries and denominations. </li>
                    <li className="ml-10"> Ultimately, through our journal, we strive to bring aspects of God’s beauty into focus through various creative mediums. </li>
                </ul>   
            </div>

            <div className="flex flex-col rounded-[1.5rem] px-16 pt-14 pb-3 bg-neutralTan">
                <div className="mb-10"> 
                    <h1 className="font-playfair text-xl font-bold tracking-widest mb-4"> Why &quot;Agora&quot; </h1>
                    <p className="text-md leading-7"> <b> agora </b> (n): a gathering place, a market </p>
                    <p className="text-md leading-7"> In ancient Greece, an agora (ἀγορά) was a public open space used for assemblies and markets. By naming our journal after this historical artifact, we hope to realize a few of its qualities:</p>
                    <ul className="text-md list-disc leading-8">
                        <li className="ml-10">A gathering place for dialogue, reflection, composition, and fellowship</li>
                        <li className="ml-10">Instead of goods and produce, ideas and spiritual food</li>
                        <li className="ml-10">Refreshment & spiritual sustenance </li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h1 className="font-playfair text-xl font-bold tracking-widest mb-4"> Our Logo </h1>
                    <Image 
                        className="mb-5 w-36"
                        src={"/logo-footer.png"} 
                        width={200} 
                        height={90} 
                        alt="logo"/>
                    <p className="text-md leading-7"> Agora’s logo depicts the letters “A” and “g” as symbols; these can be interpreted as both quotation marks and commas. <br /> <br />
                        Like the Ancient Greek marketplace, Agora seeks to be a place of exchange. For us, this means the exchange of ideas, thoughts, and expressions regarding our faith; a dialogue. While we may write in pertinence to experiences from our own life, we ultimately seek to glorify God; His Word, through our words. Our logo depicted by quotation marks aims to convey these beliefs. <br /><br />
                        Whereas other punctuation marks may indicate the end of a sentence, a comma implies a continuation; Agora does not seek to be a publication that preaches ultimatums, but rather provides the start of an ongoing conversation with our audience.
                    </p>
                </div>

            </div>

            <div className="mt-10">
                <h1 className="font-playfair text-xl font-bold tracking-widest mb-4"> Augustine Collective & Veritas Forum </h1>

                <p className="text-md leading-7"></p>
                <ul className="text-md list-disc leading-8">
                    <li className="ml-10">The Augustine Collective (AC) is a network of student-lead, Christian thought journals on university campuses across the US and the UK. The AC operates under the Veritas Forum, a nonprofit organization that seeks to foster faith exploration and the pursuit of truth surrounding the ideas that shape our lives.</li>
                    <li className="ml-10">Agora is one of over thirty member journals within the AC network. While each journal shares the overarching vision of the AC, Agora platforms the unique creative perspectives from the Christian dialogue on Georgia Tech’s campus.</li>
                </ul>
            </div>



        </div>
        <Footer />
    </div>
    )
}
