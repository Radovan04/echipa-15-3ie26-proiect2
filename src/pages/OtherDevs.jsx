import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function AnimatedSection({ children, className = '' }) {
  const ref = useScrollAnimation()

  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  )
}

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'GitHub',
  'Tailwind CSS',
  'VS Code',
]

const qualities = [
  'Seriozitate',
  'Atenție la detalii',
  'Dorință de învățare',
  'Adaptabilitate',
  'Organizare',
  'Comunicare',
]

export default function Prezentare() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center hero-gradient overflow-hidden">
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating blobs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-amber-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-sm text-brand-700 dark:text-brand-300">
                  Disponibil pentru oportunități în IT
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                Bună, sunt{' '}
                <span className="text-brand-500 relative">
                  Andrei
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path
                      d="M2 8 Q100 2 198 8"
                      stroke="#f59e0b"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                <span className="text-slate-500 dark:text-slate-400 text-4xl md:text-5xl">
                  Junior IT Enthusiast
                </span>
              </h1>

              <p className="font-body text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-lg">
                Sunt o persoană motivată, serioasă și pasionată de domeniul IT.
                Îmi doresc să îmi construiesc o carieră în tehnologie, unde pot
                combina gândirea logică, atenția la detalii și dorința de a
                învăța constant.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                  <span>Vezi proiectele</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link to="/contact" className="btn-outline inline-flex items-center gap-2">
                  <span>Contactează-mă</span>
                </Link>
              </div>
            </div>

            {/* Code Card */}
            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative z-10 card p-0 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 dark:bg-slate-950">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="font-mono text-xs text-slate-400 ml-2">
                    prezentare.js
                  </span>
                </div>

                <div className="p-6 bg-slate-900 dark:bg-slate-950 text-sm font-mono">
                  <div className="text-slate-500">// Profil profesional</div>

                  <div className="mt-2">
                    <span className="text-blue-400">const</span>{' '}
                    <span className="text-green-400">candidate</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-yellow-400">{'{'}</span>
                  </div>

                  <div className="ml-4 text-slate-300">
                    <div>
                      <span className="text-red-400">name</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-green-300">"Andrei Szilagyi"</span>,
                    </div>

                    <div>
                      <span className="text-red-400">field</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-green-300">"IT & Web Development"</span>,
                    </div>

                    <div>
                      <span className="text-red-400">goal</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-green-300">"Junior / Internship"</span>,
                    </div>

                    <div>
                      <span className="text-red-400">skills</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-yellow-400">[</span>
                    </div>

                    <div className="ml-4">
                      <div className="text-green-300">"HTML", "CSS",</div>
                      <div className="text-green-300">"JavaScript", "React"</div>
                    </div>

                    <div>
                      <span className="text-yellow-400">]</span>,
                    </div>

                    <div>
                      <span className="text-red-400">learning</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-purple-400">true</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-yellow-400">{'}'}</span>
                  </div>

                  <div className="mt-4 flex items-center gap-1">
                    <span className="text-slate-500">$</span>
                    <span className="text-brand-400">_</span>
                    <span className="w-0.5 h-4 bg-brand-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {[
                { label: 'React', top: '-16px', right: '40px', delay: '0s' },
                { label: 'JavaScript', bottom: '40px', left: '-24px', delay: '0.2s' },
                { label: 'GitHub', top: '40%', right: '-24px', delay: '0.4s' },
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

      {/* PROFIL */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="section-title">Prezentare personală</h2>
              <p className="section-subtitle mx-auto">
                O scurtă descriere profesională despre mine, obiectivele mele și direcția în care vreau să mă dezvolt.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="card h-full">
                <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white mb-4">
                  Cine sunt
                </h3>

                <p className="font-body text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Sunt o persoană ambițioasă, atentă la detalii și interesată de
                  tehnologie. Îmi place să învăț lucruri noi, să înțeleg cum
                  funcționează aplicațiile și să transform ideile în soluții digitale.
                </p>

                <p className="font-body text-slate-600 dark:text-slate-300 leading-relaxed">
                  Consider că domeniul IT oferă oportunitatea perfectă de a combina
                  gândirea logică, creativitatea și rezolvarea problemelor reale.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="card h-full">
                <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white mb-4">
                  Obiectiv profesional
                </h3>

                <p className="font-body text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Îmi doresc să obțin o oportunitate în domeniul IT, într-un rol de
                  început, internship sau junior, unde pot acumula experiență practică
                  și pot contribui la proiecte reale.
                </p>

                <p className="font-body text-slate-600 dark:text-slate-300 leading-relaxed">
                  Sunt deschis să lucrez în echipă, să primesc feedback și să mă
                  dezvolt constant atât tehnic, cât și profesional.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="section-title">Competențe & calități</h2>
              <p className="section-subtitle mx-auto">
                Cunoștințele și calitățile pe care le pot aduce într-o echipă IT.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="card">
                <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white mb-6">
                  Competențe tehnice
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skills.map(skill => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="card">
                <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white mb-6">
                  Calități personale
                </h3>

                <div className="flex flex-wrap gap-3">
                  {qualities.map(quality => (
                    <span key={quality} className="tag">
                      {quality}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-12 text-center">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '32px 32px',
                }}
              />

              <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4 relative">
                Sunt pregătit să învăț și să evoluez în IT
              </h2>

              <p className="font-body text-brand-100 text-lg mb-8 max-w-md mx-auto relative">
                Caut oportunități prin care pot aplica ceea ce învăț și pot contribui la proiecte reale.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-600 font-body font-semibold px-8 py-4 rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 relative"
              >
                Contactează-mă
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