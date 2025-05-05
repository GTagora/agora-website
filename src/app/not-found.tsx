import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="mt-48 ml-32 font-ebgaramond">
            <h1 className="text-[20pt] font-bold tracking-wide mb-3">Hi there!</h1>
            <p className="text-lg">Unfortunately, we could not find the page you were looking for.</p>
            <div className="mt-5 -ml-2 rounded-3xl border-grayGreen border-2 hover:bg-grayGreen w-32 h-auto p-2 transition duration-150">
                <Link
                    href="/">
                    <div className="text-center">return home</div>
                </Link>
            </div>
            
        </div>
)}