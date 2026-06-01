import { useScrollAnimation } from '../hooks/useScrollAnimation'
import team from '../data/team'
import TeamMember from '../components/TeamMember'

function AnimatedSection({ children, className = '' }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className={`animate-on-scroll ${className}`}>{children}</div>
}

const timeline = [
  {
    year: '2024',
    title: 'Formarea Echipei 15',
    desc: 'Ne-am unit ca echipă pentru proiectul universitar, combinând abilități de frontend, backend și design.',
    icon: '👥',
  },
  {
    year: '2024',
    title: 'Inițializare proiect',
    desc: 'Configurare Vite, Tailwind CSS și structură de proiect pentru dezvoltare colaborativă.',
    icon: '⚙️',
  },
  {
    year: '2025',
    title: 'Dezvoltare & Deploy',
    desc: 'Implementare pagini, integrare servicii și publicare pe Netlify (SPA).' ,
    icon: '🚀',
  },
  {
    year: '2022',
    title: 'Primele proiecte web',
    desc: 'Descoperirea dezvoltării web și lucrul la primele proiecte practice.',
    icon: '🎓',
  },
  {
    year: '2023',
    title: 'Colaborări timpurii',
    desc: 'Inițierea colaborărilor între studenți și prototipuri comune.',
    icon: '💻',
  },
  {
    year: '2024',
    title: 'Stack modern adoptat',
    desc: 'React, Vite și Tailwind devin fundamentul proiectelor echipei.',
    icon: '⚛️',
  },
  {
    year: '2025',
    title: 'Proiecte de echipă',
    desc: 'Lucrăm colaborativ folosind Git + GitHub pentru livrabile funcționale.',
    icon: '👥',
  },
]

const interests = [
  { label: 'Web Development', icon: '🌐', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' },
  { label: 'Machine Learning', icon: '🧠', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' },
  { label: 'Open Source', icon: '📦', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' },
  { label: 'Algoritmică', icon: '🔢', color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' },
  { label: 'UI/UX Design', icon: '🎨', color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300' },
  { label: 'Cloud Computing', icon: '☁️', color: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300' },
]

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="py-20 hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Avatar */}
            <div className="lg:col-span-2 flex justify-center animate-fade-in">
              <div className="relative">
                {/* Team avatar placeholder */}
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-2xl shadow-brand-500/30">
                  <span className="font-display font-black text-white text-6xl">E15</span>
                </div>
                {/* Status badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-mono text-sm text-slate-700 dark:text-slate-300">Universitatea de Vest Timișoara — Echipa 15</span>
                </div>
              </div>
            </div>

            {/* Team Bio */}
            <div className="lg:col-span-3 animate-slide-up">
              <p className="font-mono text-brand-500 text-sm mb-3">// despre_echipa.json</p>
              <h1 className="section-title text-slate-900 dark:text-white">
                Suntem <span className="text-brand-500">Echipa 15</span>
              </h1>
              <div className="space-y-4 font-body text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Un grup de studenți care colaborează pentru a livra un proiect full-stack: front-end în React, stilizare cu Tailwind, integrare headless CMS (Strapi) și deploy pe Netlify.
                </p>
                <p>
                  Fiecare membru aduce competențe specifice — frontend, design, QA și backend — iar împreună am construit și documentat acest site pentru prezentarea echipei și a proiectelor noastre.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Radovan04/echipa-15-3ie26-proiect2"
                  className="btn-primary inline-flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l2 4 4 .5-3 2 1 4-4-2-4 2 1-4-3-2 4-.5z" />
                  </svg>
                  Vezi repository
                </a>
                <a href="/contact" className="btn-outline">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Echipa */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="section-title text-center">Echipa</h2>
            <p className="section-subtitle text-center mx-auto">Cei care au contribuit la acest proiect</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {team.map((member) => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Interests */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="section-title text-center">Domeniile noastre de interes</h2>
            <p className="section-subtitle text-center mx-auto">
              Temele care ne inspiră ca echipă.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap gap-4 justify-center">
              {interests.map(({ label, icon, color }) => (
                <span key={label} className={`flex items-center gap-2 px-5 py-3 rounded-xl font-body font-medium text-sm ${color}`}>
                  <span className="text-xl">{icon}</span>
                  {label}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="section-title text-center">Parcursul nostru</h2>
            <p className="section-subtitle text-center mx-auto">Repere importante ale muncii echipei.</p>
          </AnimatedSection>

          <div className="relative mt-12">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-200 dark:bg-brand-800" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimatedSection key={i}>
                  <div className="flex gap-6">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 bg-white dark:bg-slate-900 border-2 border-brand-400 rounded-full flex items-center justify-center text-xl shadow-md z-10">
                        {item.icon}
                      </div>
                    </div>
                    <div className="pb-2">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-xs text-brand-500 font-bold">{item.year}</span>
                        <h3 className="font-display font-bold text-slate-800 dark:text-white">{item.title}</h3>
                      </div>
                      <p className="font-body text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun facts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="section-title text-center">Fun facts despre echipă</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: '👥', value: '3', label: 'membri în echipă' },
              { icon: '📦', value: '1', label: 'repository principal' },
              { icon: '🛠️', value: 'React + Strapi', label: 'tech stack' },
              { icon: '🚀', value: 'Netlify', label: 'hosting' },
            ].map(({ icon, value, label }) => (
              <AnimatedSection key={label}>
                <div className="card text-center">
                  <span className="text-4xl mb-3 block">{icon}</span>
                  <p className="font-display font-black text-2xl text-brand-500">{value}</p>
                  <p className="font-body text-sm text-slate-500 dark:text-slate-400">{label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
