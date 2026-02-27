import { useState, useRef } from "react";

// ─── DATA — edita con tu info real ───────────────────────────────────────────
const timelineData = [
  {
    id: 1,
    type: "project",
    title: "Aplicación Web de Atención al Cliente",
    company: "Proyecto Integrador — Taller Los 3 Valerio",
    period: "Ago 2024 – Dic 2024",
    location: "Proyecto Escolar — UTTN",
    tags: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
    summary: "Plataforma web con landing de publicidad y dashboard de gestión operativa para taller de restauración de bolsas de aire y cinturones de seguridad.",
    details: `Proyecto integrador desarrollado en colaboración con un taller especializado en restauración y reparación de bolsas de aire y cinturones de seguridad.

La solución constaba de dos módulos principales:
▸ Sitio web público orientado a la captación de clientes y difusión de servicios.
▸ Dashboard administrativo para el seguimiento de órdenes de trabajo, asignación de técnicos y registro de costos por servicio.

Mis responsabilidades:
▸ Diseño e implementación del esquema de base de datos en MySQL.
▸ Desarrollo del backend en PHP con conexión directa a base de datos vía XAMPP.
▸ Integración entre la capa de presentación (frontend) y la lógica del servidor.

Stack tecnológico: XAMPP · PHP · MySQL · HTML · CSS`,
  },
  {
    id: 2,
    type: "project",
    title: "Aplicación Móvil de Registro de Viajes",
    company: "Proyecto de Clase — UTTN",
    period: "Ene 2025 – Abr 2025",
    location: "Proyecto Escolar — UTTN",
    tags: ["C#", "JavaScript", "HTML", "CSS", "API REST"],
    summary: "App con mapa interactivo, registro de viajes y reseñas, integrando APIs externas y una API propia desarrollada desde cero.",
    details: `Aplicación desarrollada como proyecto de clase, enfocada en el registro y exploración de viajes realizados o planeados.

Funcionalidades principales:
▸ Mapa interactivo con integración de API de geolocalización externa.
▸ Panel para registrar y gestionar viajes deseados y realizados.
▸ Módulo de reseñas con valoraciones por destino.

Este proyecto marcó mi primer acercamiento formal al diseño e implementación de APIs REST propias, así como al consumo de servicios externos.

Mis responsabilidades:
▸ Diseño y administración de la base de datos.
▸ Desarrollo y documentación de la API REST propia en C#.
▸ Implementación del backend y su integración con el frontend.

Stack tecnológico: C# · JavaScript · HTML · CSS`,
  },
  {
    id: 3,
    type: "project",
    title: "Sistema de Gestión de Préstamos Bibliotecarios",
    company: "Proyecto Institucional — UTTN",
    period: "May 2025 – Ago 2025",
    location: "Proyecto Escolar — UTTN",
    tags: ["PHP", "JavaScript", "Docker", "XAMPP"],
    summary: "Mejora y reestructuración de un sistema existente de préstamo de libros: rediseño de interfaz, optimización de lógica de negocio y consultas a base de datos.",
    details: `Intervención sobre un sistema previamente desarrollado para la biblioteca de la UTTN, con el objetivo de modernizar su arquitectura y mejorar la experiencia de usuario.

Alcance del proyecto:
▸ Rediseño de la interfaz para mejorar usabilidad y presentación visual.
▸ Reestructuración de módulos clave de la lógica de negocio.
▸ Optimización y refactorización de consultas a base de datos para mejorar el rendimiento.
▸ Containerización del entorno con Docker para facilitar el despliegue.

Mis responsabilidades:
▸ Refactorización del backend en PHP.
▸ Optimización de consultas y estructura de la base de datos.
▸ Configuración del entorno con Docker.

Stack tecnológico: PHP · JavaScript · XAMPP · Docker`,
  },
  {
    id: 4,
    type: "internship",
    title: "Estadías Profesionales — Practicante IT",
    company: "IWT Filtertek",
    period: "Ago 2025 – Actualidad",
    location: "Reynosa, Tamps.",
    tags: ["Node.js", "JavaScript", "Microsoft SQL", "HTML", "CSS"],
    summary: "Desarrollo full stack de dos sistemas internos de gestión: centralización de documentos de entrenamiento y digitalización de solicitudes de servicios IT.",
    details: `Estadías profesionales en IWT Filtertek desempeñando el rol de Practicante de IT, con participación activa en el desarrollo de soluciones de software para necesidades internas de la empresa.

Proyectos desarrollados de forma independiente como único desarrollador (full stack):

▸ Sistema de Gestión de Documentos de Entrenamiento
  Plataforma que centraliza la información sobre los programas de entrenamiento asignados a cada empleado. Permitió generar reportes automatizados durante auditorías, reduciendo significativamente los tiempos de búsqueda y validación de registros.

▸ Sistema Digital de Llenado de Formularios IT
  Solución diseñada para estandarizar y validar las solicitudes de servicios internos de IT. Eliminó los errores recurrentes en el llenado manual de formularios mediante flujos guiados y validación en tiempo real.

En ambos proyectos asumí la responsabilidad completa del ciclo de desarrollo:
▸ Diseño e implementación de base de datos en Microsoft SQL Server.
▸ Desarrollo del backend y construcción de la API REST con Node.js.
▸ Implementación del frontend (HTML · CSS · JavaScript).
▸ Integración end-to-end de todas las capas de la aplicación.

Stack tecnológico: Node.js · JavaScript · Microsoft SQL · HTML · CSS`,
  },
  {
  id: 5,
  type: "project",
  title: "Dice Roller — Aplicación Web con Motor de Cálculo en API",
  company: "Proyecto Personal",
  period: "2025",
  location: "Desarrollo Independiente",
  tags: ["C#", "HTML", "CSS", "JavaScript", "API REST"],
  summary: "Aplicación web para simulación de tiradas de dados mediante algoritmos probabilísticos implementados en una API REST desarrollada en C#.",
  details: `Aplicación desarrollada como proyecto personal, enfocada en la simulación precisa de tiradas de dados utilizadas en juegos de mesa y entornos de rol.

Funcionalidades principales:
▸ Generación de tiradas configurables (d4, d6, d8, d10, d12, d20, etc.).
▸ Implementación de lógica probabilística y validación de parámetros desde el backend.
▸ Comunicación frontend-backend mediante consumo de API REST.

La arquitectura del proyecto separa claramente la capa de presentación y la capa lógica, delegando todo el procesamiento matemático y algorítmico a una API desarrollada en C#, mientras que el frontend ligero en HTML, CSS y JavaScript se encarga de la interacción con el usuario.

Mis responsabilidades:
▸ Diseño de la arquitectura general del sistema.
▸ Desarrollo completo de la API REST en C#.
▸ Implementación de los algoritmos de generación aleatoria y validación.
▸ Desarrollo del frontend y su integración con el backend.

Stack tecnológico: C# · HTML · CSS · JavaScript`
},
{
  id: 6,
  type: "project",
  title: "Simulador Visual del Algoritmo Torre de Hanói",
  company: "Proyecto Académico",
  period: "2025",
  location: "UTTN",
  tags: ["Python", "Tkinter", "Algoritmos"],
  summary: "Aplicación de escritorio que demuestra visualmente el funcionamiento recursivo del algoritmo Torre de Hanói.",
  details: `Aplicación desarrollada con fines educativos para visualizar paso a paso la ejecución del algoritmo recursivo de la Torre de Hanói.

Funcionalidades principales:
▸ Representación gráfica dinámica del movimiento de discos.
▸ Ejecución automática y modo paso a paso.
▸ Visualización de complejidad en función del número de discos.

El proyecto enfatiza la comprensión de recursividad, pila de llamadas y análisis de complejidad temporal O(2^n).

Mis responsabilidades:
▸ Implementación del algoritmo recursivo.
▸ Desarrollo de interfaz gráfica con Tkinter.
▸ Integración entre lógica algorítmica y representación visual.
▸ Pruebas funcionales del sistema.

Stack tecnológico: Python · Tkinter · Algoritmos`
},
{
  id: 7,
  type: "project",
  title: "Prototipo Web para Gestión de Campañas RPG",
  company: "Proyecto Personal",
  period: "2024",
  location: "Desarrollo Independiente",
  tags: ["React", "JavaScript", "Node.js", "API REST"],
  summary: "Plataforma web para gestión centralizada de personajes, sesiones y recursos para juegos de rol.",
  details: `Aplicación diseñada para centralizar herramientas comúnmente dispersas en juegos de rol de mesa, integrando gestión de personajes, control de sesiones y utilidades complementarias.

Funcionalidades principales:
▸ Creación y edición de fichas de personaje.
▸ Registro estructurado de sesiones.
▸ Integración con motor de tiradas de dados vía API.

La arquitectura implementa un modelo cliente-servidor con frontend desacoplado y backend orientado a servicios, permitiendo escalabilidad modular.

Mis responsabilidades:
▸ Diseño completo de la arquitectura del sistema.
▸ Desarrollo del frontend en React.
▸ Implementación del backend y endpoints REST.
▸ Modelado de base de datos y pruebas de integración.

Stack tecnológico: React · JavaScript · Node.js · API REST`
},
{
  id: 8,
  type: "project",
  title: "FocusAgenda — Planificador con Temporizador Pomodoro",
  company: "Proyecto Personal",
  period: "2025",
  location: "Desarrollo Independiente",
  tags: ["JavaScript", "HTML", "CSS", "IndexedDB"],
  summary: "Aplicación web de productividad que integra temporizador Pomodoro con planificación de tareas y almacenamiento local persistente.",
  details: `Aplicación desarrollada como solución personal enfocada en la gestión del tiempo y organización de tareas, especialmente orientada a usuarios que requieren estructuras simples y efectivas de concentración.

Funcionalidades principales:
▸ Temporizador Pomodoro configurable con ciclos automáticos.
▸ Planificador diario con almacenamiento persistente mediante IndexedDB.
▸ Gestión de tareas con estados dinámicos y control de progreso.

El proyecto implementa una arquitectura frontend modular con separación clara entre lógica de negocio y manipulación del DOM, garantizando mantenibilidad y escalabilidad futura.

Mis responsabilidades:
▸ Diseño de la arquitectura del frontend.
▸ Implementación de la lógica del temporizador y persistencia local.
▸ Modelado de datos en IndexedDB.
▸ Diseño de interfaz y experiencia de usuario.

Stack tecnológico: JavaScript · HTML · CSS · IndexedDB`
},
];


// ─── DETAIL PAGE ──────────────────────────────────────────────────────────────
function DetailPage({ item, onBack }) {
  const isInternship = item.type === "internship";

  return (
    <div className="tl-detail">
      <div className="tl-detail-inner">

        <button className="tl-back-btn" onClick={onBack}>← VOLVER</button>

        <span className={`tl-badge ${isInternship ? "tl-badge--internship" : "tl-badge--project"}`}>
          {isInternship ? "▸ PRÁCTICAS PROFESIONALES" : "▸ PROYECTO ESCOLAR"}
        </span>

        <h2 className="tl-detail-title">{item.title}</h2>
        <div className="tl-detail-divider" />

        <div className="tl-detail-meta">
          <div className="tl-meta-item">
            <span className="tl-meta-label">Período</span>
            <span className="tl-meta-value">{item.period}</span>
          </div>
          <div className="tl-meta-item">
            <span className="tl-meta-label">Lugar</span>
            <span className="tl-meta-value">{item.location}</span>
          </div>
          <div className="tl-meta-item tl-meta-item--full">
            <span className="tl-meta-label">Organización</span>
            <span className="tl-meta-value">{item.company}</span>
          </div>
        </div>

        <div className="tl-detail-tags-section">
          <span className="tl-meta-label">Tecnologías</span>
          <div className="card-tags">
            {item.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        <p className="tl-detail-body">{item.details}</p>
      </div>
    </div>
  );
}

// ─── TIMELINE CARD ────────────────────────────────────────────────────────────
function TimelineCard({ item, index, onClick }) {
  const isInternship = item.type === "internship";
  const above = index % 2 === 0;

  return (
    <div className="tl-item">

      {/* Spacer — mantiene altura uniforme en las que van abajo */}
      {!above && <div className="tl-spacer" />}

      {/* Card — reutiliza .card de carousel.css */}
      <div
        className={`card tl-card ${isInternship ? "tl-card--internship" : "tl-card--project"} ${above ? "tl-card--above" : "tl-card--below"}`}
        onClick={onClick}
      >
        <span className="card-number">{String(index + 1).padStart(2, "0")}</span>

        <span className={`tl-badge tl-badge--sm ${isInternship ? "tl-badge--internship" : "tl-badge--project"}`}>
          {isInternship ? "▸ PRÁCTICAS" : "▸ PROYECTO"}
        </span>

        <h3 className="card-title">{item.title}</h3>
        <div className="card-date">{item.period}</div>
        <p className="tl-summary">{item.summary}</p>

        <div className="card-tags">
          {item.tags.slice(0, 3).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <span className="tl-hint">VER DETALLES →</span>
      </div>

      {/* Conector + nodo central */}
      <div className="tl-connector" />
      <div className={`tl-node ${isInternship ? "tl-node--square" : "tl-node--circle"}`} />
      <div className="tl-connector" />

      {/* Spacer inferior */}
      {above && <div className="tl-spacer" />}
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function Timeline() {
  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null);
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, sl: 0 });

  const onMouseDown = (e) => {
    dragging.current = false;
    dragStart.current = { x: e.pageX, sl: scrollRef.current.scrollLeft };

    const onMove = (ev) => {
      const dx = ev.pageX - dragStart.current.x;
      if (Math.abs(dx) > 5) dragging.current = true;
      scrollRef.current.scrollLeft = dragStart.current.sl - dx;
    };
    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  return (
    <>
      {selected && <DetailPage item={selected} onBack={() => setSelected(null)} />}

      <section className="tl-section">

        <div className="tl-header">
          <h2 className="tl-header-title">▸ EXPERIENCIA &amp; PROYECTOS ◂</h2>
          <div className="tl-header-line" />
        </div>

        {/* Flechas de navegación */}
        <button className="tl-arrow tl-arrow--left"  onClick={() => scroll(-1)}>‹</button>
        <button className="tl-arrow tl-arrow--right" onClick={() => scroll(1)}>›</button>

        <div className="tl-track">
          {/* Línea horizontal central */}
          <div className="tl-center-line" />

          <div
            ref={scrollRef}
            className="tl-scroll"
            onMouseDown={onMouseDown}
          >
            {timelineData.map((item, i) => (
              <TimelineCard
                key={item.id}
                item={item}
                index={i}
                onClick={() => { if (!dragging.current) setSelected(item); }}
              />
            ))}
          </div>
        </div>

        <p className="tl-hint-global">← ARRASTRA O USA LAS FLECHAS → · CLICK PARA VER DETALLES</p>
      </section>
    </>
  );
}