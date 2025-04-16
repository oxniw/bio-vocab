'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
const words = [
  { word: "Active transport", definition: "ลำเลียงสารเข้าออกเซลล์" },
  { word: "Cleavage furrow", definition: "การคอดกิ่วเซลล์" },
  { word: "Food vacuole", definition: "ออแกเนลล์เก็บอาหาร" },
  { word: "Fermentation", definition: "กระบวนการสร้างแอลกอฮอล์" },
  { word: "Kinetochore", definition: "โปรตีนที่เซนโทรเมียร์" },
  { word: "Mitochondria", definition: "ออแกเนลล์สร้างพลังงาน" },
  { word: "Phosphorylation", definition: "กระบวนการสร้าง ATP" },
  { word: "Tonicity", definition: "สภาพตึงตัว" },
  { word: "Replication fork", definition: "จุดแยกการจำลองตัว" },
  { word: "Dihybrid cross", definition: "การผสมสองลักษณะ" },
  { word: "Vector", definition: "ดีเอ็นเอพาหะ" },
  { word: "Complete flower", definition: "ดอกสมบูรณ์" },
  { word: "Aerating root", definition: "รากหายใจ" },
  { word: "Cladophyll", definition: "ลำต้นคล้ายใบ" },
  { word: "Leaf tendril", definition: "ใบมือเกาะ" },
  { word: "Tendril stem", definition: "ลำต้นมือเกาะ" },
  { word: "Suberin", definition: "สารที่มีคุณสมบัติกันน้ำ" },
  { word: "Thorny root wood", definition: "รากหนาม" },
  { word: "Vein", definition: "เส้นใบ" },
  { word: "Senescence", definition: "การเสื่อมตามอายุ" },
  { word: "Capacitance vessel", definition: "หลอดเลือดที่มีความจุ" },
  { word: "Cardiac cycle", definition: "รอบการทำงานของหัวใจ" },
  { word: "Left atrium", definition: "เอเทรียมซ้าย" },
  { word: "Pericardium", definition: "ถุงเยื้อหุ้มหัวใจ" },
  { word: "B-lymphocyte", definition: "เม็ดเลือดขาวชนิดบี" },
  { word: "cell body", definition: "ตัวเซลล์" },
  { word: "Beta - cell", definition: "เซลล์บีต้า" },
  { word: "Simple goiter", definition: "คอพอก ธรรมดา" },
  { word: "Receptor", definition: "หน่วยรับความรู้สึก" },
  { word: "Hiccup", definition: "การสะอึก" },
  { word: "Glomerulus", definition: "กลุ่มเส้นเลือดฝอย" },
  { word: "Vasa recta", definition: "กลุ่มหลอดเลือดฝอย" },
  { word: "Vena cava", definition: "หลอดเลือดกลุ่มเวนขนาดใหญ่" },
  { word: "Phagocytic cell", definition: "เซลล์ฟาโกไซต์" },
  { word: "Action potential", definition: "การเกิดกระแสประสาท" },
  { word: "Free nerve ending", definition: "ปลายประสาทอิสระ" },
  { word: "Nerve ring", definition: "เส้นประสาทวงแหวน" },
  { word: "Rod cell", definition: "เซลล์รูปแท่ง" },
  { word: "Poly A tail", definition: "โครงสร้างเติมสาย mRNA" },
  { word: "Acetyl CoA", definition: "สารตัวกลางกระบวนการหายใจ" },
  { word: "Hydrogen peroxide", definition: "สารที่เป็นพิษต่อเซลล์" },
  { word: "Somatic cell", definition: "เซลล์ร่างกาย" },
  { word: "Deletion", definition: "การขาดหาย" },
  { word: "Insertion", definition: "การเพิ่มขึ้น" },
  { word: "Nucleoplasm", definition: "ของเหลวภายในนิวเคียส" },
  { word: "Nuclear envelop", definition: "เยื้อหุ้มนิวเคียส" },
  { word: "Divergent evolution", definition: "วิวัฒนาการ เบนออก" },
  { word: "Fossil", definition: "ซากดึกดำบรรพ์" },
  { word: "Living fossil", definition: "สิ่งมีชีวิตคงสภาพดึกดำบรรพ์" },
  { word: "Analogous structure", definition: "โครงสร้างกำเนิดต่างกัน" },
  { word: "Molecule marker", definition: "เครื่องหมายโมเลกุล" },
  { word: "Incomplete dominance", definition: "ความเด่นไม่สมบูรณ์" },
  { word: "Perennial plant", definition: "พืชหลายปี" },
  { word: "Species", definition: "ชนิดของสิ่งมีชีวิต" },
  { word: "Chromatid", definition: "แขนของโครโมโซม" },
  { word: "Lysosome", definition: "ออร์แกเนลล์ที่มีเอนไซม์" },
  { word: "Genotype", definition: "การเขียนคู่ของยีน" },
  { word: "Polygene", definition: "การถ่ายทอดลักษณะทางพันธุกรรม" },
  { word: "Hybrid", definition: "สายพันธุ์ทาง" },
  { word: "Apoptosis", definition: "กระบวนการตายของเซลล์" },
  { word: "Ring canal", definition: "ท่อวงแหวนที่อยู่รอบปาก" },
  { word: "Ventilation", definition: "การระบายอากาศ" },
  { word: "Transportation", definition: "การขนส่งแก๊ส" },
  { word: "Thymus gland", definition: "ต่อมไทมัส" },
  { word: "Anus", definition: "ทวารหนัก" },
  { word: "Crop", definition: "กระเพาะพัก" },
  { word: "Bronchi", definition: "ขั้วปอด" },
  { word: "Chyme", definition: "อาหารที่คล้ายซุป" },
  { word: "Constipation", definition: "ท้องผูก" },
  { word: "Defaecation", definition: "การถ่ายอุจจาระ" },
  { word: "Esophagus", definition: "หลอดอาหาร" },
  { word: "Enamel", definition: "สารเคลือบฟัน" },
  { word: "Bile salt", definition: "เกลือน้ำดี" },
  { word: "Buccal cavity", definition: "กระพุ้งแก้ม" },
  { word: "Lymph organ", definition: "อวัยวะน้ำเหลือง" },
  { word: "Lymphatic vessel", definition: "หลอดน้ำเหลือง" },
  { word: "Papillary muscle", definition: "กล้ามเนื้อหัวใจที่นูนขึ้นมา" },
  { word: "Plasma", definition: "น้ำเลือด" },
  { word: "Vasoconstriction", definition: "การหดตัวของเลือด" },
  { word: "Immune system", definition: "ระบบภูมิคุ้มกัน" },
  { word: "Internal defense", definition: "การป้องกันภายใน" },
  { word: "T-lymphocyte", definition: "เซลล์เม็ดเลือดขาว ชนิดที" }
];

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
        <p><span className="font-bold text-2xl">Definition:</span> {localStorage.getItem("score")}</p>
      </div>
      <div className="absolute top-14 left-14"
      onclick={() => {

      }}>
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
