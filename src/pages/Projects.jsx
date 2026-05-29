import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function AnimatedSection({ children, className = '' }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className={`animate-on-scroll ${className}`}>{children}</div>
}

const allProjects = [
  {
    id: 1,
    title: 'TaskFlow App',
    desc: 'Aplicație web de management al sarcinilor cu autentificare JWT, drag & drop și notificări în timp real prin WebSocket.',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Web App',
    status: 'Finalizat',
    year: '2025',
    emoji: '📋',
    color: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/Radovan04/taskflow',
    demo: 'https://taskflow.netlify.app',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Image Classifier',
    desc: 'Model CNN de clasificare a imaginilor antrenat cu TensorFlow, integrat într-o interfață Flask cu API REST.',
    tags: ['Python', 'TensorFlow', 'Flask'],
    category: 'AI/ML',
    status: 'Finalizat',
    year: '2024',
    emoji: '🤖',
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/Radovan04/ai-classifier',
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: 'CryptoTracker',
    desc: 'Dashboard pentru monitorizarea prețurilor criptomonedelor cu grafice interactive D3.js și alerte prin e-mail.',
    tags: ['Vue.js', 'Chart.js', 'WebSocket'],
    category: 'Web App',
    status: 'Finalizat',
    year: '2024',
    emoji: '📈',
    color: 'from-green-500 to-emerald-500',
    github: 'https://github.com/Radovan04/cryptotracker',
    demo: 'https://cryptotrack.netlify.app',
    featured: true,
  },
  {
    id: 4,
    title: 'Portfolio Personal',
    desc: 'Site de prezentare personală cu React, Tailwind CSS și Strapi CMS. Suport light/dark mode și responsive.',
    tags: ['React', 'Tailwind', 'Strapi'],
    category: 'Web App',
    status: 'În progres',
    year: '2025',
    emoji: '🌐',
    color: 'from-slate-500 to-slate-700',
    github: 'https://github.com/Radovan04/portfolio',
    demo: 'https://radovan.netlify.app',
    featured: false,
  },
  {
    id: 5,
    title: 'Algoritm Dijkstra Vizualizator',
    desc: 'Vizualizator interactiv pentru algoritmul Dijkstra pe grafuri ponderate, cu animații pas cu pas.',
    tags: ['JavaScript', 'HTML Canvas', 'CSS'],
    category: 'Algoritmi',
    status: 'Finalizat',
    year: '2023',
    emoji: '🔢',
    color: 'from-amber-500 to-orange-500',
    github: 'https://github.com/radovan/dijkstra-viz',
    demo: 'https://dijkstra.netlify.app',
    featured: false,
  },
  {
    id: 6,
    title: 'Student Hub',
    desc: 'Platformă colaborativă pentru studenții UVT: partajare notițe, orar, forum și mesagerie internă.',
    tags: ['React', 'Express', 'PostgreSQL'],
    category: 'Web App',
    status: 'În progres',
    year: '2025',
    emoji: '🎓',
    color: 'from-indigo-500 to-blue-500',
    github: 'https://github.com/Radovan04/student-hub',
    demo: null,
    featured: false,
  },
]

const categories = ['Toate', 'Web App', 'AI/ML', 'Algoritmi']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Toate')

  const filtered = activeCategory === 'Toate'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Header */}
      <section className="py-20 hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center animate-slide-up">
          <p className="font-mono text-brand-500 text-sm mb-3">// proiecte.map(p =&gt; p.awesome)</p>
          <h1 className="section-title text-slate-900 dark:text-white">Proiectele mele</h1>
          <p className="section-subtitle mx-auto">
            O colecție de aplicații, experimente și tool-uri pe care le-am construit de-a lungul timpului.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 mb-12">
        <AnimatedSection>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-body font-medium text-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.id}>
                <div className="card h-full flex flex-col group" style={{ animationDelay: `${i * 0.1}s` }}>
                  {/* Top */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-2xl shadow-md`}>
                      {p.emoji}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-xs px-2 py-1 rounded-full ${
                        p.status === 'Finalizat'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                      }`}>
                        {p.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-body text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>

                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-body text-slate-500 hover:text-brand-500 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      Cod sursă
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-body text-slate-500 hover:text-brand-500 transition-colors ml-auto"
                      >
                        Demo live
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    <span className="font-mono text-xs text-slate-300 dark:text-slate-600 ml-auto">{p.year}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
