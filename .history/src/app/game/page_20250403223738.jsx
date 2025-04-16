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
    <div className=" items-center justify-center flex bg-black h-screen overflow-x-hidden relative">
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
      <div className="w-full h-screen flex items-center justify-center absolute text-white overflow-hidden bg-blue-300 bg-opacity-30 backdrop-blur-lg">
  <div className="flex flex-col items-center w-full p-6 max-w-xl rounded-2xl shadow-lg bg-white bg-opacity-100">
    <h1 className="text-3xl font-bold mb-4">Vocab Game</h1>
    <p className="text-xl">Time Left: {timeLeft} seconds</p>
    <p className="text-lg">Score: {score}</p>
    
    {gameOver ? (
      <button className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Restart Game
      </button>
    ) : (
      <>
        <p className="text-2xl font-semibold mt-4">{currentWord}</p>
        <p className="text-lg italic mb-4">"{currentDef}"</p>
        <div className="flex gap-4">
          <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Yes
          </button>
          <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            No
          </button>
        </div>
      </>
    )}
  </div>
</div>

      
      
    </div>

  );
}
