import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Banner() {
    return (
        <div
            className="relative flex items-center justify-between h-80 overflow-hidden"
            style={{
                margin: '0 auto',
                background: 'aliceblue',
                maxWidth: '1280px',
            }}
        >
            {/* Text Section (Left Side) */}
            <motion.div
                className="absolute left-0 flex flex-col justify-center h-full w-1/2"
                style={{ zIndex: 1, padding: '20px' }}
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: ['inset(0 120% 0 0)', 'inset(0 0% 0 0)'] }}
                transition={{
                    duration: 3,
                    ease: 'linear',
                }}
            >
                <h1 className="text-lg font-bold text-gray-700">Hello There</h1>
                <h2 className="text-2xl font-semibold text-gray-500 mt-2">
                    I’m Michale Smith
                </h2>
                <p className="text-2xl font-semibold text-gray-500">UI & UX Designer</p>
                <p className="text-base text-gray-600 mt-2">
                    I'm a creative designer based in New York, and I'm very passionate
                    and dedicated to my work.
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg w-40">
                    Hire Me
                </button>
            </motion.div>

            {/* Image Section (Right Side) */}
            <motion.div
                className="absolute right-0 flex items-center justify-center h-full w-1/2"
                style={{ zIndex: 1 }}
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'] }}
                transition={{
                    duration: 2.5,
                    ease: 'linear',
                    delay: 2.5, // Delay the image reveal until Superman passes
                }}
            >
                <img
                    src="/images/10.png"
                    alt="Innovative Solutions"
                    className="h-full max-w-full"
                />

                {/* Floating Award Section */}
                <motion.div
                    className="absolute bottom-60 right-10 flex items-center p-3 bg-white shadow-lg rounded-lg"
                    style={{ zIndex: 2,width:'40%' }}
                    initial={{ opacity: 0, x: '50%' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.5,
                        ease: 'linear',
                        delay: 4, // Ensure it appears after Superman has passed
                    }}
                >
                    <i className="fas fa-users text-2xl text-blue-500 mr-3"></i>
                    <span className="text-lg font-semibold text-gray-700">
                        2k+ Happy Customers
                    </span>
                </motion.div>
                <motion.div
                    className="absolute bottom-10 right-10 flex items-center p-3 bg-white shadow-lg rounded-lg"
                    style={{ zIndex: 2, width:'40%' }}
                    initial={{ opacity: 0, x: '50%' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.5,
                        ease: 'linear',
                        delay: 4, // Ensure it appears after Superman has passed
                    }}
                >
                    <i className="fas fa-trophy text-2xl text-yellow-500 mr-3"></i>
                    <span className="text-lg font-semibold text-gray-700">
                        Best Design Award
                    </span>
                </motion.div>
            </motion.div>

            {/* Moving Superman Image Section */}
            <motion.div
                className="absolute flex items-center justify-center h-full w-full"
                animate={{ x: ['-50%', '100%'] }}
                transition={{
                    duration: 5,
                    ease: 'linear',
                }}
                style={{
                    zIndex: 2,
                }}
            >
                <img
                    src="/images/super.png"
                    alt="Superman"
                    className="h-full"
                />
            </motion.div>
        </div>
    );
}

