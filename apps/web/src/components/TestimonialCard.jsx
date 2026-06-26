import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, initials, rating, text, date, index }) => {
  const bgColors = [
    'bg-primary/10',
    'bg-secondary/20',
    'bg-accent/20',
    'bg-muted',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 shadow-sm border border-border h-full flex flex-col"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl ${bgColors[index % bgColors.length]} flex items-center justify-center flex-shrink-0`}>
          <span className="text-lg font-semibold text-foreground">{initials}</span>
        </div>
        <div className="flex-1">
          <p className="font-medium">{name}</p>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'text-border'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed flex-1 mb-4">{text}</p>
      <p className="text-sm text-muted-foreground">{date}</p>
    </motion.div>
  );
};

export default TestimonialCard;