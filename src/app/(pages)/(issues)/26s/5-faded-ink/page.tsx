import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Simon Ruiz";
  const credit = "Illustration by Olivia Hu";
  const title = "Faded Ink";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/faded-ink.webp"
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
            <p>Dear God,</p>
            <p>
              {`You won’t believe who I ran into today!
              Do you remember my first bible study leader? 
              His story was my favorite 
              Because it was the first one to teach me about you`}
            </p>
            <p>
              {`You sent so many people to pour into me
Like that one guy’s story that taught me your relentlessness
Oh! and hers, that showed how deep your love flows
All glimpses of how you are worthy of my life`}
            </p>
            <p>
              {`But the ink is faded now
Their lives reciting a different story
Devoid of you
Chasing their own desires
`}
            </p>
            <p>
              {`What happened to them?
Was any of it real?
If my story is built upon theirs
Is mine real?
`}
            </p>
            <p>
              {`Oh, but they weren’t the only people you sent me
There were people that I grew with
We were writing our own stories together
Learning to be your warriors
`}
            </p>
            <p>
              {`We grew to love the outcasts
Learned to fight for each other
Created stories about your goodness
I was so blessed by these brothers and sisters
`}
            </p>
            <p>
              {`But can I still call them that?
They stopped writing
Discarding their drafts and progress
Making us forgotten strangers
`}
            </p>
            <p>
              {`What was different?
Was it that meaningless to them?
It wasn’t like I was any stronger or more faithful
So why me and not them?
`}
            </p>
            <p>
              {`And what of the ones you’ve entrusted to me?
Their stories had so much promise
I poured into them
Saw their stories develop
`}
            </p>
            <p>
              {`These were the stories of revival
This person was devoting their life to you
And those people were meeting you for the first time
Numerous stories being written
`}
            </p>
            <p>{`So why is the result the same?
Their stories ended too soon
Making the same mistakes
All leaving you behind
`}</p>
<p>
  {`Is this just inevitable?
Were our stories not good enough?
Did they reflect you properly?
Did I fail them?
Because you don’t fail
So what did I do wrong?
Was I not wise enough to cast out their doubts?
Was I not loving enough to minister to them?
Was I not relentless enough to tear down their walls?
God! What was I supposed to do?
These were people I cared about!
These were people that loved you!
You were the greatest thing in their lives
But now they don’t want you
What can I do?
I miss them so much
And I feel so powerless here because all I can do is pray.
`}
</p>
<p>
  {`So God, please, 
I know you love them more than I do
You miss them more than I do
Let your wisdom put them in awe of you
Let your love captivate them again
Let your relentlessness be ever present in their lives
Make their lives be a story of your goodness
And write your name upon their hearts
`}
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
