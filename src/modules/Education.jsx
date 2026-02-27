// ─── DATA ─────────────────────────────────────────────────────────────────────
const education = [
  {
    id: 3,
    degree: "Ingenieria en Tecnologias de la Información",
    area: "Área: Desarrollo y Gestión de Software",
    institution: "Universidad Tecnológica de Tamaulipas Norte",
    location: "Reynosa, Tamaulipas",
    period: "2026 – Actualidad",
    status: "cursando",
    current: true,
  },
  {
    id: 2,
    degree: "TSU en Tecnologías de la Información",
    area: "Área: Desarrollo de Software Multiplataforma",
    institution: "Universidad Tecnológica de Tamaulipas Norte",
    location: "Reynosa, Tamaulipas",
    period: "2023 – 2025",
    status: null,
    current: false,
  },
  {
    id: 1,
    degree: "Bachillerato Técnico",
    area: "Especialidad: Mecánica Industrial",
    institution: 'CBIS No. 7 "José María Morelos y Pavón"',
    location: "Reynosa, Tamaulipas",
    period: "2019 – 2022",
    status: null,
    current: false,
  },
];

const languages = [
  { name: "Inglés", level: "C1", ref: "Marco Común Europeo de Referencia" },
  { name: "Lengua de Señas Mexicana", level: "Intermedio", ref: null },
];

const skills = {
  tools: [
    "Word",
    "PowerPoint",
    "Excel",
    "Teams",
    "Canva",
    "PowerBI",
    "Git",
    "GitHub",
  ],
  languages: ["HTML", "CSS", "JavaScript", "C#", "C++", "Python", "PHP"],
  frameworks: ["Apache Cordova", "React.js", "Flutter","Microsoft .NET"],
  certifications: [
    { title: "Introduction to IoT", org: "Cisco", hours: 78 },
    { title: "Networking Essentials", org: "Cisco", hours: 78 },
    { title: "Haz de Tu Idea un Negocio", org: "CONDUSEF", hours: 50 },
    { title: "Introduccion a la Ciberseguridad", org: "Cisco", hours: 78 },
  ],
  soft: [
    "Colaboración en equipos técnicos",
    "Resolución estructurada de problemas",
    "Liderazgo responsable",
    "Gestión eficiente de prioridades",
    "Comunicación clara en entornos técnicos",
    "Adaptabilidad tecnológica",
    "Compromiso con la mejora continua",
  ],
};

// ─── SECTION HEADER ───────────────────────────────────────────────────────────
function SectionHeader({ label }) {
  return (
    <div className="edu-section-header">
      <span className="edu-section-label">▸ {label} ◂</span>
      <div className="edu-section-line" />
    </div>
  );
}

// ─── TAG ──────────────────────────────────────────────────────────────────────
function Tag({ children, accent }) {
  return (
    <span className={`tag ${accent ? "tag--accent" : ""}`}>{children}</span>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Education() {
  return (
    <section className="edu-wrapper">
      {/* ── EDUCACIÓN ──────────────────────────────────────────────── */}
      <div className="edu-block">
        <SectionHeader label="EDUCACIÓN" />
        <div className="edu-grid">
          {education.map((e) => (
            <div
              key={e.id}
              className={`card edu-card ${e.current ? "edu-card--current" : ""}`}
            >
              <span className="card-number">
                {String(e.id).padStart(2, "0")}
              </span>

              {e.current && <span className="edu-badge">EN CURSO</span>}

              <h3 className="card-title">{e.degree}</h3>
              <p className="edu-area">{e.area}</p>

              <div className="edu-meta">
                <span className="edu-institution">{e.institution}</span>
                <span className="edu-location">📍 {e.location}</span>
              </div>

              <span className="card-date">{e.period}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── IDIOMAS ────────────────────────────────────────────────── */}
      <div className="edu-block">
        <SectionHeader label="IDIOMAS" />
        <div className="edu-lang-row">
          {languages.map((l) => (
            <div key={l.name} className="card edu-lang-card">
              <div className="edu-lang-level">{l.level}</div>
              <h3 className="card-title">{l.name}</h3>
              {l.ref && <p className="edu-lang-ref">{l.ref}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* ── COMPETENCIAS ───────────────────────────────────────────── */}
      <div className="edu-block">
        <SectionHeader label="COMPETENCIAS Y HABILIDADES" />
        <div className="edu-skills-grid">
          {/* Herramientas */}
          <div className="card edu-skill-card">
            <h3 className="card-title">Herramientas</h3>
            <div className="card-tags">
              {skills.tools.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          {/* Lenguajes */}
          <div className="card edu-skill-card">
            <h3 className="card-title">Lenguajes de Programación</h3>
            <div className="card-tags">
              {skills.languages.map((t) => (
                <Tag key={t} accent>
                  {t}
                </Tag>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="card edu-skill-card">
            <h3 className="card-title">Frameworks</h3>
            <div className="card-tags">
              {skills.frameworks.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          {/* Habilidades blandas */}
          <div className="card edu-skill-card">
            <h3 className="card-title">Habilidades Blandas</h3>
            <div className="card-tags">
              {skills.soft.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          {/* Certificaciones — ocupa ancho completo */}
          <div className="card edu-skill-card edu-skill-card--full">
            <h3 className="card-title">Certificaciones</h3>
            <ul className="card-list">
              {skills.certifications.map((c) => (
                <li key={c.title}>
                  <strong>{c.org}</strong> — {c.title}
                  <span className="edu-cert-hours"> · {c.hours} hrs</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
