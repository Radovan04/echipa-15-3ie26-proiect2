import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function AnimatedSection({ children, className = '' }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className={`animate-on-scroll ${className}`}>{children}</div>
}

const articles = [
  {
    id: 1,
    title: 'Cum am construit primul meu API REST cu Node.js',
    excerpt: 'O călătorie prin lumea backend-ului: de la zero la un API funcțional în producție, cu autentificare JWT și rate limiting.',
    date: '15 Mai 2025',
    readTime: '8 min',
    tag: 'Backend',
    tagColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    featured: true,
  },
  {
    id: 2,
    title: 'React vs Vue în 2025: Ce am ales și de ce',
    excerpt: 'O comparație sinceră după ce am lucrat cu ambele framework-uri în proiecte reale. Spoiler: nu există un câștigător universal.',
    date: '2 Aprilie 2025',
    readTime: '6 min',
    tag: 'Frontend',
    tagColor: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    featured: true,
  },
  {
    id: 3,
    title: 'Git pentru studenți: workflow-ul pe care îl folosesc zilnic',
    excerpt: 'Strategia mea de branching, commit messages convenționale și colaborare eficientă în echipă pe proiecte academice.',
    date: '18 Martie 2025',
    readTime: '5 min',
    tag: 'DevOps',
    tagColor: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
    featured: false,
  },
  {
    id: 4,
    title: 'Tailwind CSS: De ce mi-a schimbat modul în care scriu CSS',
    excerpt: 'Am trecut de la sceptic total la utilizator convins. Iată cum s-a întâmplat această transformare și ce am câștigat.',
    date: '5 Martie 2025',
    readTime: '4 min',
    tag: 'Frontend',
    tagColor: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    featured: false,
  },
  {
    id: 5,
    title: 'MongoDB vs PostgreSQL: Alegerea potrivită pentru proiectul tău',
    excerpt: 'Criteria clare pentru a decide între o bază de date NoSQL și una relațională, cu exemple din proiectele mele.',
    date: '20 Februarie 2025',
    readTime: '7 min',
    tag: 'Backend',
    tagColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    featured: false,
  },
  {
    id: 6,
    title: 'Primii pași cu Machine Learning: Un ghid pentru programatori web',
    excerpt: 'Cum am trecut de la JavaScript la Python și TensorFlow, și ce resurse m-au ajutat cel mai mult în procesul de învățare.',
    date: '8 Ianuarie 2025',
    readTime: '10 min',
    tag: 'AI/ML',
    tagColor: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    featured: false,
  },
]

const tags = ['Toate', 'Frontend', 'Backend', 'DevOps', 'AI/ML']

export default function Blog() {
  const [activeTag, setActiveTag] = useState('Toate')

  const filtered = activeTag === 'Toate'
    ? articles
    : articles.filter(a => a.tag === activeTag)

  const featured = articles.filter(a => a.featured)

  return (
    <>
      {/* Header */}
      <section className="py-20 hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center animate-slide-up">
          <p className="font-mono text-brand-500 text-sm mb-3">// articole.sort((a,b) =&gt; b.date - a.date)</p>
          <h1 className="section-title text-slate-900 dark:text-white">Blog</h1>
          <p className="section-subtitle mx-auto">
            Scriu despre ce am învățat, ce am construit și ce m-a surprins în lumea programării.
          </p>
        </div>
      </section>

      {/* Featured articles */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="font-display font-bold text-xl text-slate-800 dark:text-white mb-6">
              📌 Articole recomandate
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featured.map((post, i) => (
              <AnimatedSection key={post.id}>
                <article className="card group cursor-pointer h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xs px-3 py-1 rounded-full font-medium ${post.tagColor}`}>
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      <span className="font-mono text-xs">Featured</span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-3 group-hover:text-brand-500 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                    <span className="font-mono text-xs text-slate-400">{post.date}</span>
                    <span className="font-mono text-xs text-slate-400">⏱ {post.readTime} citit</span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Tag filter */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 mb-8">
              {tags.map(t => (
                <button
                  key={t}
                  onClick={() => setActiveTag(t)}
                  className={`px-4 py-1.5 rounded-full font-mono text-sm transition-all duration-200 ${
                    activeTag === t
                      ? 'bg-brand-500 text-white'
                      : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-brand-400'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Articles list */}
          <div className="space-y-4">
            {filtered.map((post, i) => (
              <AnimatedSection key={post.id}>
                <article className="card group cursor-pointer flex flex-col sm:flex-row gap-4 sm:items-center">
                  <span className={`self-start font-mono text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap ${post.tagColor}`}>
                    {post.tag}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-slate-800 dark:text-white group-hover:text-brand-500 transition-colors mb-1">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-slate-500 dark:text-slate-400 hidden sm:block">{post.excerpt}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-xs text-slate-400">{post.date}</p>
                    <p className="font-mono text-xs text-slate-400">⏱ {post.readTime}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400 font-body">
              Nu există articole în această categorie.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/30 mt-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="section-title">Abonează-te la newsletter</h2>
            <p className="section-subtitle mx-auto mb-8">
              Primești un e-mail la fiecare articol nou. Fără spam, promis. 🤝
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="adresa@email.ro"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-body text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button className="btn-primary whitespace-nowrap">
                Abonează-te
              </button>
            </div>
            <p className="font-mono text-xs text-slate-400 mt-3">
              Poți să te dezabonezi oricând, fără nicio consecință.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
