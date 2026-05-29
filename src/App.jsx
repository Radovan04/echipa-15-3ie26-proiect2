import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = window.location
  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <p className="font-display text-8xl font-black text-brand-500 mb-4">404</p>
                <h1 className="font-display text-2xl font-bold text-slate-800 dark:text-white mb-4">Pagina nu a fost găsită</h1>
                <p className="font-body text-slate-500 mb-8">Ne pare rău, pagina pe care o cauți nu există.</p>
                <a href="/" className="btn-primary">Întoarce-te acasă</a>
              </div>
            } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
