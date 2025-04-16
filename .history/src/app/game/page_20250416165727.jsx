'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function VocabGame() {
  const [currentWord, setCurrentWord] = useState('');
  const [currentDef, setCurrentDef] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [scores,setScores] = useState(0)
  const leave = () => {
    localStorage.setItem("score", scores + score)
    window.location.href = "/"
  }
  useEffect(() => {
    console.log(localStorage.getItem("score"))
    startGame();
  }, []);

  useEffect(() => {
    
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
      localStorage.setItem("score", scores + score)
    }
  }, [timeLeft]);
  useEffect(() => {
    let storedScore = localStorage.getItem("score");
    
    if (storedScore === null) {
      localStorage.setItem("score", 0);
      setScores(0); 
    } else {
      setScores(parseInt(storedScore)); 
    }
  }, []);

  function getNewWord() {
    const wordObj = words[Math.floor(Math.random() * words.length)];
    const useCorrectDef = Math.random() > 0.5;
    setCurrentWord(wordObj.word);
    setCurrentDef(useCorrectDef ? wordObj.definition : words[Math.floor(Math.random() * words.length)].definition);
  }

  function startGame() {
    setScore(0);
    setTimeLeft(5);
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
  useEffect(() => {
    let storedScore = localStorage.getItem("score");
    
    if (storedScore === null) {
      localStorage.setItem("score", "0");
      setScores(0); 
    } else {
      setScores(parseInt(storedScore)); 
    }
  }, []);

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
      <div className='w-full h-screen  flex items-center absolute text-white justify-center overflow-hidden '>
      <div className="absolute top-14 right-14">
      <p><span className="font-bold text-2xl">Definition:</span> {scores}</p>

      </div>
      <div className="absolute top-14 left-14"
      onClick={ leave}>
        go back
      </div>
        <div className="flex-col flex items-center w-full p-4  max-w-xl rounded-2xl shadow-lg bg-gradient-to-r bg-opacity-10 backdrop-blur-lg ">
        <h1 className="text-3xl font-bold mb-4 transition duration-300 hover:filter hover:drop-shadow-[0_0_36px_rgb(255,255,255)]">Vocab Game</h1>
        <p className="text-xl transition duration-300 hover:filter hover:drop-shadow-[0_0_36px_rgb(255,255,255)]">Time Left: {timeLeft} seconds</p>
        <p className="text-lg transition duration-300 hover:filter hover:drop-shadow-[0_0_36px_rgb(255,255,255)]">Score: {score}</p>
        {gameOver ? (
          <button className="mt-4 p-2 bg-blue-500 text-white rounded transition duration-300 hover:filter hover:drop-shadow-[0_0_36px_rgb(0,0,255)]" onClick={startGame}>
            Restart Game
          </button>
        ) : (
          <>
            <p className="text-2xl font-semibold mt-4 transition duration-300 hover:filter hover:drop-shadow-[0_0_36px_rgb(255,255,255)]">{currentWord}</p>
            <p className="text-lg italic mb-4 transition duration-300 hover:filter hover:drop-shadow-[0_0_36px_rgb(255,255,255)]">"{currentDef} "</p>
            <div className="flex gap-4">
              <button className="p-2 bg-green-500 text-white rounded transition duration-300 hover:filter hover:drop-shadow-[0_0_36px_rgb(0,255,0)]" onClick={() => handleAnswer(true)}>
                Yes
              </button>
              <button className="p-2 bg-red-500 text-white rounded transition duration-300 hover:filter hover:drop-shadow-[0_0_36px_rgb(255,0,0)]" onClick={() => handleAnswer(false)}>
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
