import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
const About = () => {
  const [ref, isInView] = useInView({
    threshold: 0.2
  });
  const handleBookSession = () => {
    document.querySelector('#contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div ref={ref} initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }}>
            <img className="w-full h-[600px] object-cover" alt="Photographer Charlotte McCoy with camera" src="https://horizons-cdn.hostinger.com/ec837054-8f97-480f-978b-cfeecb1485f1/brooke-cagle-vigms0_5wdi-unsplash-xYjmW.jpg" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light">About me</h2>
            <div className="w-16 h-px bg-gray-400"></div>
            
            <p className="text-gray-700 leading-relaxed">
              My lens is an extension of my heart, capturing the fleeting, beautiful moments that define your story. With every click, I aim to weave raw emotions, genuine connections, and the unique essence of your day into timeless memories.
            </p>

            <p className="text-gray-700 leading-relaxed">
              I believe in a collaborative and personal approach, ensuring your comfort and vision are at the forefront. My goal is to create not just photographs, but a vivid narrative that transports you back to those cherished moments for years to come.
            </p>

            <p className="text-gray-700 leading-relaxed">
              It’s more than just a photograph; it’s an heirloom, a whisper of love, and a testament to the beauty found in every celebration. Let's create something unforgettable together.
            </p>

            <Button onClick={handleBookSession} className="mt-6 bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-sm tracking-wider">
              BOOK A SESSION
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;