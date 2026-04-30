import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Edison Hong";
  const credit = "";
  const title = "Beautiful Rupture";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/test.png"
            width={600}
            height={600}
            alt="article image"
          />
          <p className="text-[9pt] font-sans tracking-wide text-center opacity-70 mb-10">
            {credit}
          </p>
          <h1 className="font-playfair font-medium text-[30pt] md:text-[40pt] my-5 md:my-10">
            {title}
          </h1>
          <h2 className="font-cormorant font-semibold text-xl mb-1 uppercase">
            BY {author}
          </h2>
          <h3 className="font-normal text-md mb-8 text-neutral-500">{date}</h3>
          <div className="font-serif text-sm md:text-lg leading-[200%] whitespace-pre-line space-y-4">
            <p>
              {`It is blank.
Just too blank
for the things I carry. 
`}
            </p>
            <p>
              {`Each dot stares at me. 
They know they are designed for control.
They judge me.
It is too calm
`}
            </p>
            <p>
              {`But the silence ruptures quickly, 
The feeling of regret flows thickly, 
Through the depths of my torn heart, 
Into my trembling hands that start
In the pen 
and onto the white
Like some messy kind of art. 
`}
            </p>
            <p>
              {`I am overflow with hurt, 
With splotches of tears on my shirt,
The red rims of my cold eyes 
Filled with a look full of despise
Still remembering betrayals
`}
            </p>
            <p>
              {`With words that threaten to leak and spill 
Yet, silence is wrapped around me like a quilt, 
Writing words that fill me with guilt 
`}
            </p>
            <p>
              {`The memories cut me. 
With viscous yells that feel like cut-throat hits
A sickening feeling I know too well 
Where my eyes burn with tears that dwell 
And with a stare so still 
`}
            </p>
            <p>
              {`If I had spoken out like this, 
I’d be a brute beast
`}
            </p>
            <p>
              {`So I bury them
In this page
`}
            </p>
            <p>
              {`With the bleeding of my words 
I am Bettered into a pile of bits 
`}
            </p>
            <p>
              {`The spill does not feel like poison. 
It is bleeding. 
Not foreign to you. 
`}
            </p>
            <p>
              {`Sins written into me 
But they are covered. 
Rewritten. 
`}
            </p>
            <p>
              {`The canvas is where
I can blink 
I can think
`}
            </p>
            <p>{`The pen trembles 
As if it knows before I do
`}</p>
<p>
  {`Line after line 
The ink confesses what I cannot say 
`}
</p>
<p>
  {`And suddenly I realize 
You have been watching the page
`}
</p>
<p>
  {`It is you Lord 
Who sees my final stroke. 
`}
</p>
<p>
  {`It does not have the final word 
`}
</p>
<p>
  {`You do.`}
</p>

          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
