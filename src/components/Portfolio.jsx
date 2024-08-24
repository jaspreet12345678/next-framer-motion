import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
    {
        title: 'Motion Graphics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/images/motion.png',
    },
    {
        title: 'Android App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/images/andriod.jpeg',
    },
    {
        title: 'Web Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/images/design.jpeg',
    },
    {
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/images/ui.jpeg',
    },
    {
        title: 'Branding',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/images/branding.jpeg',
    },
    {
        title: 'Illustration',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/images/illustration.jpeg',
    },
];

export default function Portfolio() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                {/* Portfolio Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">My Portfolio</h1>
                    <p className="text-lg text-gray-600 mt-2">My Work Examples</p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-cover rounded-lg"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
