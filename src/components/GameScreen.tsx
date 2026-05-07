import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { animalElements, getRandomElement, getRandomColor } from '../data/elements';
import { LockOpen, PlaySquare } from 'lucide-react';

interface GameProps {
  onExit: () => void;
}

export const GameScreen: React.FC<GameProps> = ({ onExit }) => {
  const [activeItem, setActiveItem] = useState<{ emoji: string; label: string; id: number; keyName: string; color: string } | null>(null);
  const [particles, setParticles] = useState<{ x: number; y: number; emoji: string; id: number }[]>([]);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff']
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent browser default actions to stop accidental zooming/finding/refreshing if possible
      // F5, Ctrl+R, F11, etc.
      if (!e.ctrlKey && !e.metaKey && e.key !== 'F11') {
         e.preventDefault();
      }

      // Exit hotkey: Ctrl + Shift + Q
      if (e.ctrlKey && e.shiftKey && e.code === 'KeyQ') {
        onExit();
        return;
      }
      
      const keyStr = e.key.toLowerCase();
      let item = animalElements[keyStr];
      let pressedValidLetter = !!item;

      if (!item) {
        // If they press a non-letter key, give them a random fun emoji
        item = getRandomElement() as any;
      }

      const newItemIds = Date.now();
      const color = getRandomColor();

      setActiveItem({
        id: newItemIds,
        emoji: item.emoji,
        label: item.label,
        keyName: pressedValidLetter ? keyStr.toUpperCase() : e.key.toUpperCase(),
        color: color
      });

      // Show tiny particles at random places
      setParticles(prev => [
        ...prev.slice(-10), // Keep max 10 to prevent lag
        { 
          id: newItemIds, 
          emoji: item.emoji, 
          x: Math.random() * 80 + 10, // 10% to 90%
          y: Math.random() * 80 + 10
        }
      ]);

      if (Math.random() > 0.8) {
        triggerConfetti();
      }

      // Play real audio sound
      if (item.audioUrl) {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        const audio = new Audio(item.audioUrl);
        audioRef.current = audio;
        audio.play().catch(e => console.warn('Audio play failed:', e));
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onExit]);

  return (
    <div 
      className="fixed inset-0 overflow-hidden flex flex-col items-center justify-center transition-colors duration-300"
      style={{ backgroundColor: activeItem?.color || '#a7f3d0' }}
    >
      <div className="absolute top-4 right-4 text-black/20 text-xs font-mono select-none">
        Tekan [Ctrl + Shift + Q] untuk keluar
      </div>
      
      {/* Background Particles trailing */}
      <AnimatePresence>
        {particles.map(p => (
          <motion.div
            key={`p-${p.id}`}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 0.4, scale: Math.random() * 2 + 1, y: 0, rotate: Math.random() * 45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute text-6xl pointer-events-none select-none"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            {p.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeItem ? (
          <motion.div
            key={activeItem.id}
            initial={{ scale: 0.2, opacity: 0, rotate: -20, y: 50 }}
            animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex flex-col items-center justify-center pointer-events-none select-none"
          >
            <div className="text-[250px] md:text-[350px] leading-none drop-shadow-2xl">
              {activeItem.emoji}
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="mt-8 text-6xl md:text-8xl font-black text-gray-900 drop-shadow-md text-center tracking-tighter mix-blend-overlay"
            >
              {activeItem.label}
            </motion.div>
            {activeItem.keyName && activeItem.keyName.length === 1 && /[A-Z]/.test(activeItem.keyName) && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-10 -left-10 w-32 h-32 md:-top-20 md:-left-20 md:w-48 md:h-48 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-7xl md:text-9xl font-black text-gray-800 shadow-2xl border-4 border-white rotate-12"
              >
                {activeItem.keyName}
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="prompt"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-bold text-gray-800/50 text-center animate-pulse tracking-tight select-none"
          >
            Tekan tombol apa saja! <br/>
            <span className="text-2xl mt-4 block">A, B, C, D...</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
