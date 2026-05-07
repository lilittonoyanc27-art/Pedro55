/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ExerciseView from './ExerciseView';
import TheoryView from './TheoryView';
import { POR_PARA_LESSON, VERBS_LESSON } from './lessons';
import { Trophy, Gamepad2, UserCircle2, BookOpen, Share2, User, Type } from 'lucide-react';
import { GameMode, Lesson } from './types';

export default function App() {
  const [screen, setScreen] = useState<GameMode>(GameMode.THEORY);
  const [showMenu, setShowMenu] = useState(true);
  const [activeLesson, setActiveLesson] = useState<Lesson>(POR_PARA_LESSON);

  const startCompetition = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setScreen(GameMode.COMPETE);
    setShowMenu(false);
  };

  const startTheory = () => {
    setScreen(GameMode.THEORY);
    setShowMenu(false);
  };

  return (
    <div className="min-h-screen bg-brand-soft overflow-x-hidden selection:bg-brand-indigo selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-indigo/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-yellow/5 rounded-full blur-[120px]" />
      </div>

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 px-4 md:px-8 py-4">
         <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button 
              onClick={() => setShowMenu(true)} 
              className="flex items-center gap-3 group cursor-pointer"
            >
               <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg">
                  <User className="text-brand-yellow w-6 h-6 md:w-7 md:h-7" />
               </div>
               <div>
                 <span className="block text-lg md:text-xl font-black text-slate-800 leading-none tracking-tighter uppercase italic">
                    ՊԵԴՐՈՅԻ <br/> <span className="text-brand-indigo">ԱԿԱԴԵՄԻԱ</span>
                 </span>
               </div>
            </button>

            <div className="flex items-center gap-2 md:gap-4">
               <button className="p-2 md:p-3 hover:bg-slate-100 rounded-2xl transition-colors text-slate-400 hover:text-slate-900">
                  <UserCircle2 className="w-6 h-6 md:w-7 md:h-7" />
               </button>
               <button className="bg-slate-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-2xl font-black text-xs md:text-sm tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-brand-yellow" />
                  <span className="hidden sm:inline uppercase">ՀԱՇԻՎ: 1240</span>
               </button>
            </div>
         </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 relative">
        <AnimatePresence mode="wait">
          {showMenu ? (
            <motion.div 
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <header className="text-center space-y-4 pt-12">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="inline-block p-6 bg-white/90 backdrop-blur-sm rounded-[40px] shadow-2xl relative border-4 border-white/50"
                >
                  <span className="text-7xl">👨‍🏫</span>
                </motion.div>
                <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-slate-900 drop-shadow-xl uppercase">
                  Hola <span className="text-brand-yellow underline decoration-brand-indigo">Amigos!</span>
                </h1>
                <p className="text-slate-500 text-2xl font-black uppercase tracking-[0.3em] italic drop-shadow-md">
                  ՊԱՏՐԱՍՏ ԵՍ ՍՈՎՈՐԵԼ ՊԵԴՐՈՅԻ ՀԵՏ?
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <button 
                  onClick={startTheory}
                  className="lesson-card p-10 flex flex-col items-center gap-6 group hover:scale-[1.05] active:scale-95 transition-all text-center bg-white/80 backdrop-blur-md"
                >
                  <div className="w-20 h-20 bg-brand-yellow/20 rounded-3xl flex items-center justify-center group-hover:scale-125 transition-transform shadow-inner">
                    <BookOpen className="w-10 h-10 text-brand-yellow" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-800 uppercase leading-none mb-2">ՏԵՍՈՒԹՅՈՒՆ</h2>
                    <p className="text-slate-400 font-bold">Կանոններ Por/Para և Բայեր</p>
                  </div>
                </button>

                <button 
                  onClick={() => startCompetition(POR_PARA_LESSON)}
                  className="lesson-card p-10 flex flex-col items-center gap-6 group hover:scale-[1.05] active:scale-95 transition-all text-center bg-white/80 backdrop-blur-md"
                >
                  <div className="w-20 h-20 bg-brand-indigo/10 rounded-3xl flex items-center justify-center group-hover:-rotate-6 transition-transform">
                    <Share2 className="w-10 h-10 text-brand-indigo" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-800 uppercase leading-none mb-2">POR vs PARA</h2>
                    <p className="text-slate-400 font-bold">20 վարժություն</p>
                  </div>
                </button>

                <button 
                  onClick={() => startCompetition(VERBS_LESSON)}
                  className="lesson-card p-10 flex flex-col items-center gap-6 group hover:scale-[1.05] active:scale-95 transition-all text-center bg-white/80 backdrop-blur-md md:col-span-2 lg:col-span-1"
                >
                  <div className="w-20 h-20 bg-brand-orange/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    <Type className="w-10 h-10 text-brand-orange" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-800 uppercase leading-none mb-2">ԲԱՅԵՐ</h2>
                    <p className="text-slate-400 font-bold">Խոնարհման խաղ</p>
                  </div>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="game"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <button 
                onClick={() => setShowMenu(true)} 
                className="mb-8 flex items-center gap-2 text-slate-500 font-black uppercase text-xs tracking-widest hover:text-brand-indigo transition-colors"
              >
                ← ՀԵՏ ԳՆԱԼ ԸՆՏՐԱՑԱՆԿ
              </button>
              
              {screen === GameMode.THEORY ? (
                <TheoryView onStart={() => startCompetition(POR_PARA_LESSON)} />
              ) : (
                <ExerciseView 
                  lesson={activeLesson} 
                  onBack={() => setShowMenu(true)} 
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-12 text-center opacity-60">
         <p className="text-[10px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-2 text-slate-400">
            &copy; 2024 ՊԵԴՐՈՅԻ ԱԿԱԴԵՄԻԱ • ՀԱՅԱՍՏԱՆ
         </p>
      </footer>
    </div>
  );
}
