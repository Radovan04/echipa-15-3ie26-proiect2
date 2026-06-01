# 🌐 Portofoliu Web Personal & Sistem de Management

Site de prezentare personală realizat cu **React 18** și **Tailwind CSS v3**, structurat modular prin **Vite** și pregătit pentru integrare cu un sistem CMS (Headless), găzduit live pe platforma **Netlify**.

## 🚀 Link-uri Proiect

- **Site Live (Netlify):** https://echipa-15-3ie26-proiect2.netlify.app/
- **Repository GitHub:** https://github.com/Radovan04/echipa-15-3ie26-proiect2
- **Configurație Temă (tweakcn.com):** [Link Temă Tweakcn Personalizată](https://tweakcn.com/editor/theme?theme=candyland)

## 📄 Structură Pagini și Layout-uri

| Pagina | Descriere / Funcționalități | Tip Layout / Stilizare |
|--------|-----------------------------|------------------------|
| **Home** | Banner Hero, secțiune skill-uri animate, preview proiecte recente, secțiune CTA. | Layout hibrid multi-secțiune cu elemente interactive. |
| **About** | Biografie profesională, istoric academic/profesional sub formă de timeline, interese. | Layout de tip coloană asimetrică cu elemente grafice. |
| **Projects** | Grilă extinsă de proiecte, componentă de filtrare dinamică în funcție de categorie/tehnologie. | Grid adaptiv (Responsive Layout) cu filtre active. |
| **Blog** | Listă de articole cu etichete (tag-uri), secțiune de newsletter și elemente recomandate. | Layout mixt (listă și elemente de tip card). |
| **Contact** | Formular de contact interactiv cu validări detaliate de input și integrare mesaje. | Split layout (stânga date de contact, dreapta formular). |

## 🛠 Tehnologii Utilizate

- **Core:** React 18 (Componente Funcționale & Hooks), React Router v6 (SPA Routing).
- **Stilizare:** Tailwind CSS v3 (sistem de utilitare, configurare extinsă de culori și fonturi).
- **Design & Tematică:** [tweakcn.com](https://tweakcn.com/) (utilizat pentru generarea paletei armonice de culori și maparea fonturilor).
- **Build Tool:** Vite (pentru compilare rapidă și optimizare `dist`).
- **Hosting & Deployment:** Netlify (cu configurare `netlify.toml` pentru redirecționarea rutelor SPA).

## 👥 Echipa, Atribuțiile și Distribuția Sarcinilor

*Notă: Proiectul a fost coordonat de către Raicici Radovan, care a asigurat arhitectura de bază a aplicației și a avut cea mai mare contribuție la implementarea funcționalităților cheie.*

| Membru Echipă | Rol în Proiect | Sarcinile și Elementele Implementate |
| :--- | :--- | :--- |
| **Raicici Radovan** <br>*(Principal Contributor & Lead)* | **Full-Stack Developer & Arhitect Proiect** | <ul><li>Configurarea inițială a proiectului cu Vite, React Router v6 și Tailwind CSS.</li><li>Crearea structurii globale a site-ului (Navbar adaptiv, Meniu Hamburger mobil, Footer dinamic).</li><li>Implementarea paginii **Home** (Hero banner, animații, structură carduri).</li><li>Dezvoltarea funcționalității de **Dark Mode / Light Mode** (salvare stare în localStorage + clasă globală).</li><li>Scrierea logicii de filtrare dinamică pentru pagina **Projects**.</li><li>Configurarea fișierelor de deployment (`netlify.toml`, `.gitignore`).</li></ul> |
| **Andrei Szilagyi** | **Frontend Developer & Content Designer** | <ul><li>Dezvoltarea integrală a paginii **About** (structură biografie și componenta grafică de Timeline).</li><li>Implementarea paginii de **Blog** (afișarea listei de articole, designul cardurilor și adăugarea tag-urilor).</li><li>Popularea componentelor cu date mock-up realiste și stilizarea textelor.</li></ul> |
| **Cristian Bologa** | **UI/UX Developer & Quality Assurance** | <ul><li>Dezvoltarea paginii **Contact** și implementarea formularului interactiv.</li><li>Adăugarea regulilor de validare a datelor introduse în formular (verificare email, câmpuri obligatorii).</li><li>Integrarea paletei de culori și a celor 3 fonturi web exportate din editorul **tweakcn.com** în fișierul `tailwind.config.js`.</li><li>Testarea responsivității pe rezoluții mobile și tablete (QA Testing).</li></ul> |

## 🎨 Tema și Design-ul (tweakcn.com)

Identitatea vizuală a proiectului este construită pe baza unei teme exportate din **tweakcn.com**, configurată în `tailwind.config.js`:
- **Font Display:** *Playfair Display* – utilizat exclusiv pentru titluri mari, secțiuni importante și headere.
- **Font Body:** *DM Sans* – utilizat pentru corpul textelor, descrieri și meniurile de navigare.
- **Font Mono:** *JetBrains Mono* – utilizat pentru etichete (badges), cod, numere și detalii tehnice.
- **Paleta de Culori:** Culori din gama `brand` (nuanțe de albastru modern) și culori de accent (chilimbar/auriu) pentru elementele interactive.

## 📚 Materiale Bibliografice și Surse de Inspirație

În dezvoltarea acestui proiect au fost utilizate următoarele documentații oficiale și resurse academice:
1. **Documentația Oficială React:** [React Docs](https://react.dev) — utilizată pentru bunele practici în gestionarea stării (`useState`, `useEffect`) și structurarea componentelor.
2. **Documentația Tailwind CSS:** [TailwindCSS Documentation](https://tailwindcss.com/docs) — utilizată pentru implementarea claselor utilitare și extinderea temei native.
3. **Ghiduri de Routing:** [React Router v6 Guide](https://reactrouter.com) — sursa principală pentru configurarea routerului SPA și prevenirea erorilor de tip 404 la refresh (rezolvate în `netlify.toml`).
4. **Model de Inspirație Vizuală:** Nu a fost copiat un template sau model existent de site; structura vizuală a fost concepută de la zero de către echipă, iar generarea paletei cromatice s-a realizat prin asistența algoritmilor de design de pe platforma **tweakcn.com**.