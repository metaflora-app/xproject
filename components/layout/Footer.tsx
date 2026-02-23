"use client";

export function Footer() {
  return (
    <footer style={{ paddingTop: 120, paddingBottom: 80, background: '#000' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', paddingLeft: 60, paddingRight: 60 }}>

        {/* 3 колонки */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginBottom: 80 }}>

          {/* Левая колонка */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 64,
              lineHeight: 0.9,
              letterSpacing: '0.02em',
              color: '#f5f5f0',
              textTransform: 'uppercase',
              margin: 0
            }}>
              we would love<br />to hear from you.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', fontWeight: 300, maxWidth: 320, margin: 0 }}>
              feel free to reach out if you want to collaborate with us,<br />
              or simply have a question.
            </p>
            <a
              href="mailto:contact@metaflora.io"
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                display: 'inline-block',
                borderBottom: '1px solid transparent',
                transition: 'border-color 0.2s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.6)')}
              onMouseLeave={e => (e.currentTarget.style.borderBottomColor = 'transparent')}
            >
              contact@metaflora.io →
            </a>
          </div>

          {/* Центральная колонка */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 8 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>
              our address
            </span>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', fontWeight: 300, margin: 0 }}>
              unit 01<br />
              digital ecosystem district<br />
              internet<br />
              planet earth
            </p>
            <p style={{ fontSize: 11, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.25)', marginTop: 16, margin: 0 }}>
              registered in meta layer
            </p>
          </div>

          {/* Правая колонка */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 8 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>
              navigation
            </span>
            {['home', 'projects', 'submit', 'about'].map((item) => (
              <a
                key={item}
                href={item === 'home' ? '/' : item === 'projects' ? '/projects' : '#'}
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                  display: 'block'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#222', marginBottom: 32 }} />

        {/* Copyright */}
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', margin: 0 }}>
          © METAFLORA* XProject 2026
        </p>
      </div>
    </footer>
  );
}
