import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({})
      }
    } catch (e) {
      // AdSense not loaded yet
    }
  }, [])

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <header style={{ borderBottom: '1px solid #eee', paddingBottom: 16, marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, margin: 0 }}>Mi Sitio</h1>
        <p style={{ color: '#666', marginTop: 8 }}>
          Sitio con Google AdSense integrado.
        </p>
      </header>

      <main>
        <p>
          Bienvenido. El codigo de AdSense ya esta incluido en el <code>&lt;head&gt;</code> de esta pagina.
        </p>
      </main>

      <footer style={{ marginTop: 48, paddingTop: 16, borderTop: '1px solid #eee', color: '#999', fontSize: 14 }}>
        &copy; {new Date().getFullYear()} Mi Sitio
      </footer>
    </div>
  )
