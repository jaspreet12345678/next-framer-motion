import Image from 'next/image';
import Background from '../../public/images/1.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { useTypingAnimation } from '../hooks/useTypingAnimation'; // Adjust the import path accordingly

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    const typingText = useTypingAnimation(
        'Hello and quality need the right time to be conceived and realised even in a world that is in too much of a hurry.',
        50,
        2000
    );

    return (
        <div
            ref={container}
            className='relative flex items-center justify-center h-screen overflow-hidden'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='relative z-10 p-20 text-white w-full h-full flex flex-col justify-between'>
                <p className='w-[50vw] text-[2vw]'>
                    {useTypingAnimation('Hello and quality need the right time to be conceived and realised even in a world that is in too much of a hurry.',
                        50,
                        2000)}
                </p>
                <p className='text-[5vw] uppercase mix-blend-difference'>Background Parallax</p>
            </div>
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{ y }} className='relative w-full h-full'>
                    <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
                </motion.div>
            </div>
        </div>
    );
}
