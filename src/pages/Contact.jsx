import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function AnimatedSection({ children, className = '' }) {
  const ref = useScrollAnimation()
  return <div ref={ref} className={`animate-on-scroll ${className}`}>{children}</div>
}

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'radovan.raicici04@e-uvt.ro',
    href: 'mailto:radovan.raicici04@e-uvt.ro',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    label: 'GitHub',
    value: '@Radovan04',
    href: 'https://github.com/Radovan04',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Raicici Radovan',
    href: 'https://linkedin.com/in/raiciciradovan',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Locație',
    value: 'Timișoara, România',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Numele este obligatoriu'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email invalid'
    if (!form.subject.trim()) e.subject = 'Subiectul este obligatoriu'
    if (form.message.trim().length < 20) e.message = 'Mesajul trebuie să aibă cel puțin 20 de caractere'
    return e
  }

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(err => ({ ...err, [e.target.name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('sending')
    // Simulate API call (connect to Strapi in production)
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border font-body text-slate-800 dark:text-white bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors ${
      errors[field]
        ? 'border-red-400 dark:border-red-500'
        : 'border-slate-200 dark:border-slate-700'
    }`

  return (
    <>
      {/* Header */}
      <section className="py-20 hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center animate-slide-up">
          <p className="font-mono text-brand-500 text-sm mb-3">// contact.send(mesaj)</p>
          <h1 className="section-title text-slate-900 dark:text-white">Hai să vorbim!</h1>
          <p className="section-subtitle mx-auto">
            Fie că ai o idee de proiect, o întrebare sau vrei să colaborăm — sunt bucuros să aud de tine.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection>
                <h2 className="font-display font-bold text-2xl text-slate-800 dark:text-white mb-6">
                  Date de contact
                </h2>
              </AnimatedSection>

              {contactInfo.map(({ icon, label, value, href }) => (
                <AnimatedSection key={label}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-500 shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="font-mono text-xs text-slate-400 mb-1">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="font-body text-slate-700 dark:text-slate-200 hover:text-brand-500 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-body text-slate-700 dark:text-slate-200">{value}</p>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              {/* Response time notice */}
              <AnimatedSection>
                <div className="mt-8 p-4 rounded-xl bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono text-xs text-brand-700 dark:text-brand-300 font-medium">De obicei răspund în 24h</span>
                  </div>
                  <p className="font-body text-sm text-slate-600 dark:text-slate-400">
                    Cel mai rapid mă poți contacta prin e-mail sau LinkedIn. Sunt deschis la orice colaborare sau discuție tehnica.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="card">
                  <h2 className="font-display font-bold text-2xl text-slate-800 dark:text-white mb-6">
                    Trimite un mesaj
                  </h2>

                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <div className="text-5xl mb-4">🎉</div>
                      <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white mb-2">
                        Mesaj trimis cu succes!
                      </h3>
                      <p className="font-body text-slate-500 dark:text-slate-400 mb-6">
                        Mulțumesc că m-ai contactat. Voi reveni în cel mai scurt timp.
                      </p>
                      <button
                        onClick={() => setStatus(null)}
                        className="btn-outline"
                      >
                        Trimite alt mesaj
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block font-body text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Nume complet *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Ion Popescu"
                            className={inputClass('name')}
                          />
                          {errors.name && <p className="font-mono text-xs text-red-500 mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block font-body text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Adresă e-mail *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="ion@exemplu.ro"
                            className={inputClass('email')}
                          />
                          {errors.email && <p className="font-mono text-xs text-red-500 mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block font-body text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Subiect *
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className={inputClass('subject')}
                        >
                          <option value="">Selectează un subiect...</option>
                          <option value="colaborare">Propunere de colaborare</option>
                          <option value="internship">Oportunitate de internship</option>
                          <option value="proiect">Discuție despre un proiect</option>
                          <option value="altele">Altele</option>
                        </select>
                        {errors.subject && <p className="font-mono text-xs text-red-500 mt-1">{errors.subject}</p>}
                      </div>

                      <div>
                        <label className="block font-body text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Mesaj *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Scrie mesajul tău aici..."
                          className={inputClass('message') + ' resize-none'}
                        />
                        {errors.message && <p className="font-mono text-xs text-red-500 mt-1">{errors.message}</p>}
                        <p className="font-mono text-xs text-slate-400 mt-1 text-right">{form.message.length} caractere</p>
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === 'sending' ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                            </svg>
                            Se trimite...
                          </>
                        ) : (
                          <>
                            Trimite mesajul
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
