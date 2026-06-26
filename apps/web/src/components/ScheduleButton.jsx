import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ScheduleButton = ({
  variant = 'default',
  size = 'default',
  className = '',
  onClick
}) => {
  const handleClick = e => {
    if (onClick) {
      onClick(e);
    } else {
      const contactSection = document.querySelector('#contato');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        window.location.href = '/contato';
      }
    }
  };
  return <Button onClick={handleClick} variant={variant} size={size} className={`transition-all duration-200 ${className}`}>
      <Calendar className="w-4 h-4 mr-2" />
      Agendar Atendimento
    </Button>;
};
export default ScheduleButton;