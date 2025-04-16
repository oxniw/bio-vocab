'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
const words = [
  { word: 'Ephemeral', definition: 'Lasting a very short time' },
  { word: 'Tenacious', definition: 'Holding fast; persistent' },
  { word: 'Ineffable', definition: 'Too great to be expressed in words' },
  { word: 'Sycophant', definition: 'A person who flatters for personal gain' },
  { word: 'Pernicious', definition: 'Having a harmful effect' }
];

export default function VocabGame() {
  const [currentWord, setCurrentWord] = useState('');
  const [currentDef, setCurrentDef] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
    }
  }, [timeLeft]);

  function getNewWord() {
    const wordObj = words[Math.floor(Math.random() * words.length)];
    const useCorrectDef = Math.random() > 0.5;
    setCurrentWord(wordObj.word);
    setCurrentDef(useCorrectDef ? wordObj.definition : words[Math.floor(Math.random() * words.length)].definition);
  }

  function startGame() {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    getNewWord();
  }

  function handleAnswer(isCorrect) {
    if (!gameOver) {
      const correctDef = words.find(w => w.word === currentWord).definition === currentDef;
      setScore(prev => prev + (correctDef === isCorrect ? 1 : -1));
      getNewWord();
    }
  }

  return (
    <div className=" items-center justify-center flex bg-black h-screen overflow-x-hidden">
      <Image
      className="absolute top-24 -left-36 rotate-45"
      src="/com/cysphere.svg"
      alt="Next.js logo"
      width={612/2 }
      height={408/2 }
      priority
      />
      <Image
      className="absolute top-24 -right-10 rotate-45 scale-75"
      src="/com/cysphere.svg"
      alt="Next.js logo"
      width={612/2 }
      height={408/2 }
      priority
      />
      <Image
      className="absolute bottom-0 left-0 "
      src="/com/cyd3.svg"
      alt="Next.js logo"
      width={343 }
      height={411 }
      priority
      />
      <Image
      className="absolute bottom-0 right-0 "
      src="/com/cy2d.svg"
      alt="Next.js logo"
      width={343 }
      height={411 }
      priority
      />
      <Image
      className="absolute scale-125"
      src="/com/cy4d.svg"
      alt="Next.js logo"
      width={343 }
      height={411 }
      priority
      />
      
      
      
    </div>

  );
}
