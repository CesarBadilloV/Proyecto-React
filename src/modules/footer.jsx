// ─── EDITA TUS DATOS AQUÍ ────────────────────────────────────────────────────
const CONTACT = {
  name: "César Iván Badillo Valerio",
  email: "cesar.badillov@gmail.com",
  phone: "8994521825",          // solo números, sin espacios
  linkedin: "césar-badillo-valerio-2894b536b/",                 // ej: "cesar-badillo"  → linkedin.com/in/cesar-badillo
  github: "CesarBadilloV",                   // ej: "cesarbadillo"   → github.com/cesarbadillo
  instagram: "j4sutuli",                // ej: "cesar.dev"      → instagram.com/cesar.dev
};

// ─── ICONS ───────────────────────────────────────────────────────────────────
const icons = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
};

// ─── LINK ITEM ────────────────────────────────────────────────────────────────
function FooterLink({ href, icon, label, sublabel }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="footer-link">
      <span className="footer-link-icon">{icon}</span>
      <span className="footer-link-text">
        <span className="footer-link-label">{label}</span>
        {sublabel && <span className="footer-link-sublabel">{sublabel}</span>}
      </span>
    </a>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" />

      {/* Línea decorativa superior */}
      <div className="footer-top-line" />

      <div className="footer-inner">

        {/* Nombre + tagline */}
        <div className="footer-brand">
          <h2 className="footer-name">{CONTACT.name}</h2>
          <p className="footer-tagline">
            TSU · Desarrollo de Software Multiplataforma
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <FooterLink
            href={`mailto:${CONTACT.email}`}
            icon={icons.email}
            label="Correo"
            sublabel={CONTACT.email}
          />
          <FooterLink
            href={`https://wa.me/52${CONTACT.phone}`}
            icon={icons.phone}
            label="WhatsApp"
            sublabel={`+52 ${CONTACT.phone}`}
          />
          <FooterLink
            href={CONTACT.linkedin ? `https://linkedin.com/in/${CONTACT.linkedin}` : ""}
            icon={icons.linkedin}
            label="LinkedIn"
            sublabel={CONTACT.linkedin ? `in/${CONTACT.linkedin}` : ""}
          />
          <FooterLink
            href={CONTACT.github ? `https://github.com/${CONTACT.github}` : ""}
            icon={icons.github}
            label="GitHub"
            sublabel={CONTACT.github ? `@${CONTACT.github}` : ""}
          />
          <FooterLink
            href={CONTACT.instagram ? `https://instagram.com/${CONTACT.instagram}` : ""}
            icon={icons.instagram}
            label="Instagram"
            sublabel={CONTACT.instagram ? `@${CONTACT.instagram}` : ""}
          />
        </div>

        {/* Copyright */}
        <p className="footer-copy">© {year} {CONTACT.name} · Hecho con React</p>
      </div>
    </footer>
  );
}