"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { competencesData } from "@/data/competencesData";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Competences() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {competencesData.map((comp) => {
        const isOpen = openId === comp.id;
        return (
          <div
            key={comp.id}
            className="rounded-3xl border border-white/10 bg-gray-900/80 text-white shadow-lg overflow-hidden"
          >
            <button
              className={`w-full flex items-center gap-4 px-6 py-5 text-left focus:outline-none transition-colors ${isOpen ? "bg-emerald-950/60" : "bg-transparent"}`}
              onClick={() => setOpenId(isOpen ? null : comp.id)}
              aria-expanded={isOpen}
            >
              <span className="text-emerald-400"><comp.icon className="w-7 h-7" /></span>
              <span className="text-lg font-semibold flex-1">{comp.title}</span>
              <span className={`ml-2 transition-transform ${isOpen ? "rotate-90" : "rotate-0"}`}>▶</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="mb-4">
                    <h3 className="text-emerald-300 font-semibold mb-1">Situations professionnelles</h3>
                    <ul className="list-disc list-inside text-white/90 text-sm space-y-1">
                      {comp.situationsProfessionnelles.map((sp) => (
                        <li key={sp}>{sp}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-emerald-300 font-semibold mb-1">Niveaux</h3>
                    <div className="space-y-3">
                      {comp.niveaux.map((niveau, idx) => (
                        <div key={niveau.title} className="bg-emerald-900/30 rounded-xl p-4">
                          <p className="font-semibold text-emerald-200 mb-1">{niveau.title}</p>
                          <ul className="list-disc list-inside text-white/90 text-sm space-y-1">
                            {niveau.ac.map((ac) => (
                              <li key={ac}>{ac}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-emerald-300 font-semibold mb-1">Projets associés</h3>
                    <div className="flex flex-wrap gap-2">
                      {comp.projetsAssocies.map((proj) => {
                        const found = projects.find(p => p.title.toLowerCase().includes(proj.toLowerCase()) || proj.toLowerCase().includes(p.slug));
                        return found ? (
                          <Link
                            key={proj}
                            href={`/projects/${found.slug}`}
                            className="bg-emerald-700/80 text-emerald-100 hover:bg-emerald-400 hover:text-black px-3 py-1 rounded-full text-xs font-medium transition-colors underline underline-offset-2"
                          >
                            {found.title}
                          </Link>
                        ) : (
                          <span key={proj} className="bg-emerald-800/60 text-emerald-100 px-3 py-1 rounded-full text-xs font-medium">
                            {proj}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
