'use client'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f4f6fa',
      color: '#002868',
      fontFamily: "'Source Code Pro', monospace",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px',
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 600,
          marginBottom: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>
          FENNLAND FORUM
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#6b7a99',
          letterSpacing: '0.12em',
          marginBottom: '40px',
          lineHeight: 1.8,
        }}>
          EMERGENCY SPECIAL SESSION · UNGA/SEP/FF/2024/001
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginTop: '40px',
        }}>
          <a href="/login?delegation=usa" style={{
            padding: '20px',
            border: '2px solid #BF0A30',
            color: '#BF0A30',
            textDecoration: 'none',
            textTransform: 'uppercase',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(191, 10, 48, 0.1)'
            e.currentTarget.style.borderColor = '#8a0720'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = '#BF0A30'
          }}>
            🇺🇸 USA Dossier
          </a>
        </div>
        <p style={{
          fontSize: '11px',
          color: '#6b7a99',
          marginTop: '30px',
          letterSpacing: '0.08em',
        }}>
          CONFIDENTIAL · EYES ONLY
        </p>
      </div>
    </div>
  )
}
