import './App.css'

const checks = [
  'Modern React app scaffolded with Vite',
  'Dependencies installed and build verified locally',
  'Deployment workflow prepared for GitHub Pages',
  'Ready for push-based hosted delivery from this workstation',
]

function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Max workstation proof</p>
        <h1>Modern web app delivery is ready.</h1>
        <p className="lede">
          This minimal application proves the current workstation can create,
          build, version, and prepare a real React app for hosted deployment.
        </p>
      </section>

      <section className="panel">
        <h2>What this proof includes</h2>
        <ul className="checklist">
          {checks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Stack</h2>
          <p>React 19 + Vite 8 + npm</p>
        </article>
        <article className="card">
          <h2>Deployment target</h2>
          <p>GitHub Pages via GitHub Actions</p>
        </article>
        <article className="card">
          <h2>Why it matters</h2>
          <p>Fastest clean path from local code to a real hosted URL.</p>
        </article>
      </section>
    </main>
  )
}

export default App
