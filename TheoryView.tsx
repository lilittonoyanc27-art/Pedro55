/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Play, Info, ArrowRight, User, CheckCircle2, MessageSquare, Briefcase, Settings } from 'lucide-react';

interface TheoryViewProps {
  onStart: () => void;
}

export default function TheoryView({ onStart }: TheoryViewProps) {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="lesson-card p-6 md:p-14 bg-white/95 backdrop-blur-md border-t-8 border-brand-yellow relative overflow-hidden"
      >
        {/* Pedro Mascot Placeholder (Emoji) */}
        <div className="absolute top-4 right-4 text-7xl opacity-20">👨‍🏫</div>

        <header className="text-center space-y-4 mb-12">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
             <User className="w-10 h-10 text-brand-indigo" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 uppercase tracking-tighter">
            ՊԵԴՐՈՅԻ ԻՍՊԱՆԵՐԵՆԸ
          </h2>
          <div className="flex items-center justify-center gap-2">
             <span className="px-3 py-1 bg-brand-indigo text-white text-xs font-black rounded-lg">POR vs PARA</span>
          </div>
        </header>

        <div className="space-y-12">
          {/* Por vs Para Section */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
               <Info className="text-brand-indigo" /> POR vs PARA
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-indigo/5 p-6 rounded-3xl border border-brand-indigo/10">
                <b className="text-brand-indigo text-xl block mb-2 font-black italic">POR</b>
                <ul className="text-sm space-y-2 font-bold text-slate-600">
                  <li>• Պատճառ / Շնորհակալություն</li>
                  <li>• Տևողություն (ժամանակ)</li>
                  <li>• Ճանապարհ (ինչ-որ տեղով)</li>
                  <li>• Փոխանակում</li>
                </ul>
              </div>
              <div className="bg-brand-yellow/5 p-6 rounded-3xl border border-brand-yellow/20">
                <b className="text-brand-indigo text-xl block mb-2 font-black italic">PARA</b>
                <ul className="text-sm space-y-2 font-bold text-slate-600">
                  <li>• Նպատակ / Վերջնակետ</li>
                  <li>• Ստացող / Օգտագործող</li>
                  <li>• Վերջնաժամկետ</li>
                  <li>• Կարծիք</li>
                </ul>
              </div>
            </div>
          </section>

        </div>

        <div className="pt-16 text-center">
          <button 
            onClick={onStart}
            className="btn-primary w-full md:w-auto px-16 py-6 text-2xl flex items-center justify-center gap-4 group bg-brand-indigo hover:bg-slate-800"
          >
            ՍԿՍԵԼ ՊԵԴՐՈՅԻ ՀԵՏ <Play className="w-8 h-8 fill-current group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
