'use client'
import { useState } from "react";

function Popup({ onClose }) {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 50
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        textAlign: 'center'
      }}>
        <h2>This is a pop-up!</h2>
        <p>You clicked the button 🎉</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh'
    }}>
      <button onClick={() => setShowPopup(true)}>
        Show Pop-Up
      </button>

      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </main>
  );
}