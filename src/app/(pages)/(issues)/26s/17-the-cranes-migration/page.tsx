import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Angela Bahn";
  const credit = "Photo by Alex Wu";
  const title = "The Crane's Migration";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/the-cranes-migration.webp"
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
          <div className="font-serif text-sm md:text-lg leading-[200%] whitespace-pre-line">
<p style = {{ marginBottom: '8px'}}>
In my room hangs a sedge of cranes
</p>
<p style = {{ marginBottom: '8px'}}>
Gentle brushstrokes press their wings
</p>
<p style = {{ marginBottom: '8px'}}>
Their long pointed beaks raise up to sing
</p>
<p style = {{ marginBottom: '30px'}}>
A herald's call to the coming King
</p>

<p style = {{ marginBottom: '8px'}}>
To be like the crane, so adaptable to change
</p>
<p style = {{ marginBottom: '8px'}}>
Moving north as it turns to bright spring
</p>
<p style = {{ marginBottom: '8px'}}>
By steady faith, to Him I cling
</p>
<p style = {{ marginBottom: '30px'}}>
Trusting the Lord and what He will bring
</p>

<p style = {{ marginBottom: '8px'}}>
But even as the seasons pass
</p>
<p style = {{ marginBottom: '8px'}}>
I am not alone
</p>
<p style = {{ marginBottom: '8px'}}>
Wherever I go, I long for the known
</p>
<p style = {{ marginBottom: '30px'}}>
Your peaceful presence that I call my home
</p>

<p style = {{ marginBottom: '8px'}}>
When You call me to follow, I'm led by Your hand
</p>
<p style = {{ marginBottom: '8px'}}>
Through every shadow, come what may
</p>
<p style = {{ marginBottom: '8px'}}>
Like the permanence of ink, Your grace never sways
</p>
<p>
Your love everlasting remains
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
