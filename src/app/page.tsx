import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start p-24">
      
      <div className="flex flex-row justify-center items-center gap-5">
        <Image
          className="w-16 object-cover"
          src='/logo-black.png'
          width={400}
          height={400}
          alt='article image'/>
        <p className="font-playfairsc font-bold text-black text-[50pt] tracking-tighter">AGORA</p>
      </div>
    </main>
  );
}
