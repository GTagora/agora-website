"use client";
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header() {

    const itemVars= {
        initial: {
            opacity: 1,
        },
        hover: {
            opacity: 1,
            transition: {
                duration: .7,
                staggerChildren: .1,
            }
        },
    }

    const dropdownVars= {
        initial: {
            opacity: 0,
        },
        hover: {
            opacity: 1,
            y:5,
            transition: { duration: .2 },
        },
    }

    return (
    <div className={"hidden md:flex flex-row w-[100%] pl-10 text-[13pt] fixed top-0 z-10 py-5 h-20 bg-[whitesmoke]"}>
    {/* LOGO */}
        <Link href="/">
            <Image
                className="w-11"
                src="/logo-black-box.png"
                width={75}
                height={75}
                alt='Agora logo'
            />
        </Link>
        <div className="hidden md:flex md:flex-row pl-10 font-cormorant tracking-[.1rem]">

        {/* ABOUT */}
            <motion.div 
                className="mt-2"
                variants={itemVars}
                initial="initial"
                whileHover="hover">
                <Link href="/about"><div className="text-left mx-6 hover:underline underline-offset-8 transition duration-200" >ABOUT</div></Link>

            {/* MISSION */}
                <Link href="/about">
                    <motion.div 
                        className="bg-[whitesmoke] ml-4 px-2 py-1 hover:underline underline-offset-4"
                        variants={dropdownVars}>
                    Mission</motion.div></Link>
            {/* STAFF */}
                <Link href="/about/staff">
                    <motion.div 
                        className="bg-[whitesmoke] ml-4 px-2 py-1 hover:underline underline-offset-4"
                        variants={dropdownVars}>
                    Staff</motion.div></Link>
            </motion.div>

        {/* ARCHIVE */}
            <motion.div 
                className="mt-2"
                variants={itemVars}
                initial="initial"
                whileHover="hover">
                <Link href="/archive"><div className="text-left mx-6 hover:underline underline-offset-8 transition duration-200" >ARCHIVE</div></Link>

            {/* CURRENT ISSUE */}
                <Link href="/">
                    <motion.div 
                        className="bg-[whitesmoke] ml-4 px-2 py-1 hover:underline underline-offset-4"
                        variants={dropdownVars}>
                    Latest Issue</motion.div></Link>
            {/* PAST ISSUES */}
                <Link href="/archive">
                    <motion.div 
                        className="bg-[whitesmoke] ml-4 px-2 py-1 hover:underline underline-offset-4"
                        variants={dropdownVars}>
                    Past Issues</motion.div></Link>
            </motion.div>

        {/* BLOG */}
            <motion.div 
                className="mt-2"
                variants={itemVars}
                initial="initial"
                whileHover="hover">
                <Link href="/blog"><div className="text-left mx-6 hover:underline underline-offset-8 transition duration-200" >BLOG</div></Link>
            </motion.div>

        {/* CONTACT */}
            <motion.div
                className="mt-2"
                variants={itemVars}
                initial="initial"
                whileHover="hover">
                <Link href="/contact"><div className="text-left mx-6 hover:underline underline-offset-8 transition duration-200" >CONTACT</div></Link>
            </motion.div>
        
        {/* GIVE */}
            <motion.div
                className="mt-2"
                variants={itemVars}
                initial="initial"
                whileHover="hover">
                <Link href="/give"><div className="text-left mx-6 hover:underline underline-offset-8 transition duration-200" >GIVE</div>
                </Link>
            </motion.div>
        
        </div>
    </div>
)}