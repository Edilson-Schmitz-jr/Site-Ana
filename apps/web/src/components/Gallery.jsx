import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const Gallery = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const images = [
    {
      id: 1,
      alt: 'Bride getting ready with bridesmaids helping with dress',
      src: "https://horizons-cdn.hostinger.com/ec837054-8f97-480f-978b-cfeecb1485f1/gemini_generated_image_80t2ro80t2ro80t2-kTQby.png",
      className: "md:col-span-1 md:row-span-2"
    },
    {
      id: 2,
      alt: 'Wedding rings on white flowers',
      src: "https://horizons-cdn.hostinger.com/ec837054-8f97-480f-978b-cfeecb1485f1/gemini_generated_image_ojb4zaojb4zaojb4-uu3Qk.png",
      className: "md:col-span-1"
    },
    {
      id: 3,
      alt: 'Romantic couple portrait in nature',
      src: "https://horizons-cdn.hostinger.com/ec837054-8f97-480f-978b-cfeecb1485f1/gemini_generated_image_2812d32812d32812-ouYY5.png",
      className: "md:col-span-1 md:row-span-2"
    },
    {
      id: 4,
      alt: 'Bride and groom holding hands close-up',
      src: "https://horizons-cdn.hostinger.com/ec837054-8f97-480f-978b-cfeecb1485f1/gemini_generated_image_nnarbsnnarbsnnar-okizN.png",
      className: "md:col-span-1"
    },
    {
      id: 5,
      alt: 'Wedding ceremony outdoor setup with white chairs',
      src: "https://horizons-cdn.hostinger.com/ec837054-8f97-480f-978b-cfeecb1485f1/gemini_generated_image_m8xum4m8xum4m8xu-DSbjU.png",
      className: "md:col-span-1 md:row-span-2"
    },
    {
      id: 6,
      alt: 'Elegant wedding table setting with flowers and candles',
      src: "https://horizons-cdn.hostinger.com/ec837054-8f97-480f-978b-cfeecb1485f1/gemini_generated_image_cpfec3cpfec3cpfe-uukij.png",
      className: "md:col-span-1"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4">Moments</h2>
          <div className="w-16 h-px bg-gray-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" ref={ref}>
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group ${image.className}`}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={image.alt}
                src={image.src}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;