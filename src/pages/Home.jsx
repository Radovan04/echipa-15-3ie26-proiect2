import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  {
    id: 1,
    title: 'TaskFlow App',
    desc: 'Aplicație web de management al sarcinilor cu autentificare JWT, drag & drop și notificări în timp real.',
    tags: ['React', 'Node.js', 'MongoDB'],
    emoji: '📋',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'AI Image Classifier',
    desc: 'Model de clasificare a imaginilor antrenat cu TensorFlow.js, integrat într-o interfață web intuitivă.',
    tags: ['Python', 'TensorFlow', 'Flask'],
    emoji: '🤖',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'CryptoTracker',
    desc: 'Dashboard pentru monitorizarea prețurilor criptomonedelor cu grafice interactive și alerte personalizate.',
    tags: ['Vue.js', 'Chart.js', 'WebSocket'],
    emoji: '📈',
    color: 'from-green-500 to-emerald-500',
  },
]

const blogPosts = [
  {
    id: 1,
    title: 'Cum am construit primul meu API REST cu Node.js',
    excerpt: 'O călătorie prin lumea backend-ului: de la zero la un API funcțional în producție.',
    date: '15 Mai 2025',
    readTime: '8 min',
    tag: 'Backend',
  },
  {
    id: 2,
    title: 'React vs Vue în 2025: Ce am ales și de ce',
    excerpt: 'O comparație sinceră după ce am lucrat cu ambele framework-uri în proiecte reale.',
    date: '2 Aprilie 2025',
    readTime: '6 min',
    tag: 'Frontend',
  },
  {
    id: 3,
    title: 'Git pentru studenți: workflow-ul pe care îl folosesc zilnic',
    excerpt: 'Strategia mea de branching, commit messages și colaborare în echipă.',
    date: '18 Martie 2025',
    readTime: '5 min',
    tag: 'DevOps',
  },
]

function AnimatedSection({ children, className = '' }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  )
}

function SkillBadge({ name, level }) {
  const widths = { Expert: 'w-full', Avansat: 'w-4/5', Intermediar: 'w-3/5', Începător: 'w-2/5' }
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="font-mono text-sm text-slate-700 dark:text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-400">{level}</span>
      </div>
      <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div className={`h-full bg-brand-500 rounded-full ${widths[level] || 'w-1/2'} transition-all duration-1000`} />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center hero-gradient overflow-hidden">
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating blobs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-sm text-brand-700 dark:text-brand-300">Disponibil pentru proiecte</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                Bună, suntem{' '}
                <span className="text-brand-500 relative">
                Echipa 15
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8 Q100 2 198 8" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                <br />
                <span className="text-slate-500 dark:text-slate-400 text-4xl md:text-5xl">Studenți Informatică</span>
              </h1>

              <p className="font-body text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-lg">
                Studiem Informatica-economica <strong className="text-brand-600 dark:text-brand-400">UVT Timișoara</strong> și construiesc aplicații web moderne. Pasionat de React, Node.js și machine learning.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                  <span>Descoperă proiectele</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/contact" className="btn-outline inline-flex items-center gap-2">
                  <span>Contactează-mă</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                {[
                  { value: '12+', label: 'Proiecte' },
                  { value: '3+', label: 'Ani experiență' },
                  { value: '5', label: 'Tehnologii principale' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-display font-black text-2xl text-brand-500">{value}</p>
                    <p className="font-body text-sm text-slate-500 dark:text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative z-10 card p-0 overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 dark:bg-slate-950">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="font-mono text-xs text-slate-400 ml-2">portfolio.js</span>
                </div>
                {/* Code */}
                <div className="p-6 bg-slate-900 dark:bg-slate-950 text-sm font-mono">
                  <div className="text-slate-500">// Despre mine</div>
                  <div className="mt-2">
                    <span className="text-blue-400">const</span>{' '}
                    <span className="text-green-400">developer</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-yellow-400">{'{'}</span>
                  </div>
                  <div className="ml-4 text-slate-300">
                    <div><span className="text-red-400">name</span><span className="text-white">:</span> <span className="text-green-300">"Raicici Radovan"</span>,</div>
                    <div><span className="text-red-400">role</span><span className="text-white">:</span> <span className="text-green-300">"Full-Stack Dev"</span>,</div>
                    <div><span className="text-red-400">location</span><span className="text-white">:</span> <span className="text-green-300">"Timișoara 🇷🇴"</span>,</div>
                    <div><span className="text-red-400">skills</span><span className="text-white">:</span> <span className="text-yellow-400">[</span></div>
                    <div className="ml-4">
                      <div className="text-green-300">"React", "Node.js",</div>
                      <div className="text-green-300">"Python", "MongoDB"</div>
                    </div>
                    <div><span className="text-yellow-400">]</span>,</div>
                    <div><span className="text-red-400">coffee</span><span className="text-white">:</span> <span className="text-purple-400">true</span> <span className="text-slate-500">// ☕</span></div>
                  </div>
                  <div><span className="text-yellow-400">{'}'}</span></div>
                  <div className="mt-4 flex items-center gap-1">
                    <span className="text-slate-500">$</span>
                    <span className="text-brand-400">_</span>
                    <span className="w-0.5 h-4 bg-brand-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { label: 'React', top: '-16px', right: '40px', delay: '0s' },
                { label: 'Node.js', bottom: '40px', left: '-24px', delay: '0.2s' },
                { label: 'MongoDB', top: '40%', right: '-24px', delay: '0.4s' },
              ].map(({ label, top, bottom, left, right, delay }) => (
                <div
                  key={label}
                  className="absolute tag shadow-lg animate-fade-in"
                  style={{ top, bottom, left, right, animationDelay: delay }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="section-title">Tehnologii & Skill-uri</h2>
              <p className="section-subtitle mx-auto">
                Instrumentele pe care le folosim zilnic pentru a construi aplicații moderne și performante.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { cat: 'Frontend', icon: '🎨', skills: [
                { name: 'React.js', level: 'Avansat' },
                { name: 'Tailwind CSS', level: 'Expert' },
                { name: 'JavaScript ES6+', level: 'Avansat' },
                { name: 'TypeScript', level: 'Intermediar' },
              ]},
              { cat: 'Backend', icon: '⚙️', skills: [
                { name: 'Node.js / Express', level: 'Avansat' },
                { name: 'Python / Flask', level: 'Intermediar' },
                { name: 'REST APIs', level: 'Avansat' },
                { name: 'GraphQL', level: 'Începător' },
              ]},
              { cat: 'Baze de date & DevOps', icon: '🗄️', skills: [
                { name: 'MongoDB', level: 'Avansat' },
                { name: 'PostgreSQL', level: 'Intermediar' },
                { name: 'Git / GitHub', level: 'Expert' },
                { name: 'Docker', level: 'Începător' },
              ]},
            ].map(({ cat, icon, skills }) => (
              <AnimatedSection key={cat}>
                <div className="card">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{icon}</span>
                    <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white">{cat}</h3>
                  </div>
                  {skills.map(s => <SkillBadge key={s.name} {...s} />)}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="section-title">Proiecte recente</h2>
                <p className="section-subtitle mb-0">Ce am construit în ultimul an.</p>
              </div>
              <Link to="/projects" className="btn-outline shrink-0">
                Toate proiectele →
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <AnimatedSection key={p.id}>
                <div className="card group cursor-pointer" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-2xl mb-4`}>
                    {p.emoji}
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-body text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG PREVIEW ─── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="section-title">Ultimele articole</h2>
                <p className="section-subtitle mb-0">Scriu despre ce am învățat și ce am construit.</p>
              </div>
              <Link to="/blog" className="btn-outline shrink-0">
                Toate articolele →
              </Link>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.id}>
                <div className="card flex flex-col sm:flex-row sm:items-center gap-4 group cursor-pointer">
                  <div className="sm:w-20 shrink-0">
                    <span className="tag">{post.tag}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-slate-800 dark:text-white group-hover:text-brand-500 transition-colors mb-1">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-slate-500 dark:text-slate-400">{post.excerpt}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-xs text-slate-400">{post.date}</p>
                    <p className="font-mono text-xs text-slate-400">{post.readTime} citit</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-12 text-center">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }}
              />
              <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4 relative">
                Hai să construim ceva împreună!
              </h2>
              <p className="font-body text-brand-100 text-lg mb-8 max-w-md mx-auto relative">
                Sunt deschis la colaborări, internship-uri sau simple discuții despre tehnologie.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-brand-600 font-body font-semibold px-8 py-4 rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 relative">
                Trimite un mesaj
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
