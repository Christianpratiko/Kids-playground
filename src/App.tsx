import React, { useState, useEffect } from 'react';
import { GameScreen } from './components/GameScreen';
import { Lock, Maximize, Keyboard, AlertTriangle } from 'lucide-react';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const requestFullscreenAndPlay = async () => {
    try {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      }
      
      // Kunci tombol ESC (Hanya jalan di Chrome/Edge)
      if ('keyboard' in navigator) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await (navigator as any).keyboard.lock(['Escape']);
        } catch (e) {
          console.warn("Keyboard lock failed", e);
        }
      }
      
      setIsPlaying(true);
    } catch (err) {
      console.warn("Fullscreen request failed. Proceeding anyway.", err);
      setIsPlaying(true);
    }
  };

  const handleExit = () => {
    setIsPlaying(false);
    
    if ('keyboard' in navigator) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (navigator as any).keyboard.unlock();
      } catch (e) {
        console.warn("Keyboard unlock failed", e);
      }
    }
    
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.warn(err));
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  if (isPlaying) {
    return (
      <>
        <GameScreen onExit={handleExit} />
        {!isFullscreen && (
          <div 
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-md cursor-pointer touch-none p-6"
            onClick={requestFullscreenAndPlay}
          >
            <AlertTriangle className="w-24 h-24 text-yellow-400 mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black text-white text-center">Game Terjeda!</h2>
            <p className="text-xl md:text-2xl text-slate-300 mt-4 max-w-2xl text-center">
              Mode layar penuh terlepas. Klik di mana saja pada layar untuk kembali dan mengunci otomatis.
            </p>
            <div className="mt-10 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-3xl shadow-2xl shadow-blue-500/50 transition-transform active:scale-95">
              Klik Layar Untuk Lanjut
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 pb-20 font-sans">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 p-8 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Ketik & Belajar!</h1>
          <p className="text-blue-100 mt-2 text-lg">Permainan Interaktif Keyboard Anak</p>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-3 rounded-full shrink-0">
              <Keyboard className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Cukup Tekan Keyboard</h3>
              <p className="text-slate-600 mt-1">
                Biarkan anak Anda menekan tombol apapun di keyboard, dan animasi serta suara hewan yang lucu akan muncul.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-full shrink-0">
              <Maximize className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Otomatis Layar Penuh</h3>
              <p className="text-slate-600 mt-1">
                Game akan berjalan dalam layar penuh (fullscreen) untuk mencegah anak Anda keluar secara tak sengaja.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-full shrink-0">
              <Lock className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Proteksi Hotkey</h3>
              <p className="text-slate-600 mt-1">
                Untuk keluar dari permainan, Anda harus menekan kombinasi tombol rahasia: <br/> 
                <span className="inline-block mt-2 font-mono text-sm font-bold bg-slate-100 px-2 py-1 rounded text-red-600">Ctrl + Shift + Q</span>
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <button
              onClick={requestFullscreenAndPlay}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl py-5 rounded-2xl transition-transform active:scale-95 flex items-center justify-center space-x-2"
            >
              <Maximize className="w-6 h-6" />
              <span>Mulai Bermain</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center max-w-md text-sm text-slate-400">
        <p>
          <strong>Catatan Keamanan:</strong> Web browser memiliki keterbatasan keamanan 
          dan pengguna masih bisa keluar menggunakan tombol sistem seperti (Windows Key, Alt+Tab, Fn+F11). 
          Untuk mengunci OS secara total, Anda disarankan menggunakan mode <em>Kiosk</em> di Windows, 
          atau <em>Guided Access</em> di iPad/Mac.
        </p>
      </div>
    </div>
  );
}
