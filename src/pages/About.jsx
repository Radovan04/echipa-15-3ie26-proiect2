import { useScrollAnimation } from '../hooks/useScrollAnimation'

function AnimatedSection({ children, className = '' }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className={`animate-on-scroll ${className}`}>{children}</div>
}

const timeline = [
  {
    year: '2022',
    title: 'Admis la UVT',
    desc: 'Încep Facultatea de Economie si Administrare a Afacerilor, specializarea Informatică-economica',
    icon: '🎓',
  },
  {
    year: '2023',
    title: 'Primul proiect web',
    desc: 'Construiesc primul site complet cu HTML, CSS și JavaScript vanilla.',
    icon: '💻',
  },
  {
    year: '2023',
    title: 'Descopăr React',
    desc: 'Mă îndrăgostesc de componentele React și încep să construiesc aplicații mai complexe.',
    icon: '⚛️',
  },
  {
    year: '2024',
    title: 'Backend cu Node.js',
    desc: 'Extind cunoștințele spre backend, construiesc REST API-uri și lucrez cu baze de date.',
    icon: '🔧',
  },
  {
    year: '2025',
    title: 'Proiecte de echipă',
    desc: 'Colaborez în echipe de 4 studenți pe proiecte academice și personale cu Git + GitHub.',
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
                {/* Avatar placeholder */}
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-2xl shadow-brand-500/30">
                  <span className="font-display font-black text-white text-8xl">A</span>
                </div>
                {/* Status badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-mono text-sm text-slate-700 dark:text-slate-300">An III, Informatică-economica</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 animate-slide-up">
              <p className="font-mono text-brand-500 text-sm mb-3">// despre_mine.json</p>
              <h1 className="section-title text-slate-900 dark:text-white">
                Salut! Sunt <span className="text-brand-500">Raicici Radovan</span>
              </h1>
              <div className="space-y-4 font-body text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Sunt student în anul III la <strong className="text-slate-800 dark:text-white">Facultatea de Economie si Administrare a Afacerilor </strong>, 
                  specializarea Informatică-economica, din cadrul <strong className="text-slate-800 dark:text-white">Universității de Vest Timișoara</strong>.
                </p>
                <p>
                  Mă fascinează felul în care codul poate transforma idei abstracte în produse reale, folosite de oameni reali. 
                  De la un simplu script Python la o aplicație web completă — procesul de construire mă entuziasmează constant.
                </p>
                <p>
                  În afara programului academic, contribui la proiecte open-source, particip la hackathon-uri locale 
                  și încerc să scriu articole despre ceea ce am învățat, pentru comunitatea studențească.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/cv-alex-ionescu.pdf"
                  className="btn-primary inline-flex items-center gap-2"
                  download
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descarcă CV
                </a>
                <a href="https://github.com/alexionescu" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="section-title text-center">Domeniile mele de interes</h2>
            <p className="section-subtitle text-center mx-auto">
              Temele care mă țin treaz noaptea (în sens bun).
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
            <h2 className="section-title text-center">Parcursul meu</h2>
            <p className="section-subtitle text-center mx-auto">Câteva momente importante din călătoria mea.</p>
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
            <h2 className="section-title text-center">Fun facts despre mine</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: '☕', value: '2-3', label: 'cafele pe zi' },
              { icon: '💻', value: '6h+', label: 'programare zilnic' },
              { icon: '📚', value: '12', label: 'cărți citite în 2024' },
              { icon: '🏃', value: '5km', label: 'alerg de 3x/săptămână' },
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
