"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const WHATSAPP_NUMBER = "5492944138880";
const WHATSAPP_TEXT = "Hola, quiero recibir orientación de Simbiosis Miceliar.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

const instagramUrl = "https://instagram.com/simbiosismiceliar";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "Áreas", href: "#areas" },
  { label: "Agroecología", href: "#agroecologia" },
  { label: "Contacto", href: "#contacto" },
];

const cards = [
  {
    title: "Orientación clara",
    text: "Acompañamos consultas vinculadas al cannabis medicinal con información simple, humana y responsable.",
    tag: "Inicio",
  },
  {
    title: "Vinculación médica",
    text: "Articulamos con profesionales médicos para procesos vinculados a REPROCANN cuando corresponde.",
    tag: "REPROCANN",
  },
  {
    title: "Cultivo agroecológico",
    text: "Promovemos buenas prácticas, nutrición orgánica, cuidado del suelo y respeto por el territorio.",
    tag: "Agroecología",
  },
  {
    title: "Formación y comunidad",
    text: "Impulsamos espacios de aprendizaje, capacitaciones y construcción colectiva de conocimiento.",
    tag: "Formación",
  },
];

const quickTabs = [
  {
    id: "pacientes",
    title: "Soy paciente",
    eyebrow: "Acompañamiento",
    text: "Podemos orientarte sobre acceso responsable, REPROCANN, vinculación médica y primeros pasos según tu situación.",
    points: [
      "Primera orientación personalizada.",
      "Trato cercano y confidencial.",
      "Información clara para tomar decisiones.",
    ],
    cta: "Consultar como paciente",
  },
  {
    id: "cultivadores",
    title: "Soy cultivador/a",
    eyebrow: "Buenas prácticas",
    text: "Buscamos construir una red seria de cultivadores con mirada agroecológica, trazabilidad y compromiso comunitario.",
    points: [
      "Criterios de cultivo responsable.",
      "Seguimiento de procesos.",
      "Prácticas libres de agrotóxicos.",
    ],
    cta: "Quiero participar",
  },
  {
    id: "instituciones",
    title: "Soy institución",
    eyebrow: "Articulación",
    text: "Promovemos vínculos con organismos, equipos técnicos, profesionales, espacios educativos y proyectos productivos.",
    points: [
      "Convenios y colaboración.",
      "Proyectos con impacto territorial.",
      "Desarrollo medicinal e industrial.",
    ],
    cta: "Proponer articulación",
  },
];

const faqs = [
  {
    q: "¿Qué es Simbiosis Miceliar?",
    a: "Es un proyecto patagónico de orientación, acompañamiento, formación y comunidad vinculado al cannabis medicinal, el cáñamo y la agroecología.",
  },
  {
    q: "¿Qué es REPROCANN?",
    a: "REPROCANN es el registro nacional vinculado al acceso al cannabis medicinal. Muchas personas llegan con dudas sobre cómo iniciar, qué documentación necesitan o cómo continuar. Por eso brindamos orientación y acompañamiento.",
  },
  {
    q: "¿Tienen vinculación con profesionales médicos?",
    a: "Sí. Contamos con profesionales médicos para acompañar procesos vinculados a REPROCANN con seriedad, criterio y cercanía.",
  },
  {
    q: "¿La consulta es confidencial?",
    a: "Sí. Priorizamos el respeto, la privacidad y el cuidado de cada proceso personal. La información sensible debe tratarse con responsabilidad y criterios de confidencialidad.",
  },
  {
    q: "¿Qué significa el enfoque agroecológico?",
    a: "Significa trabajar con buenas prácticas, cuidado del suelo, nutrición orgánica, inocuidad, respeto por el territorio y procesos responsables para el consumidor, el productor y el ambiente.",
  },
];

const gallery = [
  {
    src: "/cultivo-1.jpg",
    title: "Cultivo vivo",
    text: "Procesos cuidados desde la observación diaria.",
  },
  {
    src: "/cultivo-2.jpg",
    title: "Territorio",
    text: "Una identidad construida desde la Patagonia.",
  },
  {
    src: "/cultivo-3.jpg",
    title: "Agroecología",
    text: "Suelos sanos, prácticas limpias y mirada regenerativa.",
  },
  {
    src: "/cultivo-4.jpg",
    title: "Genéticas",
    text: "Selección orientada a necesidades concretas.",
  },
  {
    src: "/cultivo-5.jpg",
    title: "Comunidad",
    text: "Aprendizaje, cooperación y acompañamiento.",
  },
  {
    src: "/cultivo-6.jpg",
    title: "Trazabilidad",
    text: "Procesos claros para construir confianza.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ageGate, setAgeGate] = useState(true);
  const [activeTab, setActiveTab] = useState("pacientes");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const selectedTab =
    quickTabs.find((tab) => tab.id === activeTab) ?? quickTabs[0];

  const currentYear = new Date().getFullYear();

  return (
    <main
      id="inicio"
      className="min-h-screen overflow-hidden bg-[#f4efe4] text-[#183427]"
    >
      {ageGate && (
        <section className="fixed inset-0 z-[100] flex items-center justify-center bg-[#102319]/90 px-5 backdrop-blur-xl">
          <div className="max-w-xl rounded-[2rem] border border-white/15 bg-[#f4efe4] p-8 text-center shadow-2xl">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#183427]">
              <Image
                src="/logo.png"
                alt="Simbiosis Miceliar"
                width={52}
                height={52}
                className="h-14 w-14 object-contain"
              />
            </div>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-[#8a6b3f]">
              Sitio informativo
            </p>

            <h2 className="mb-4 text-3xl font-black tracking-tight text-[#183427] md:text-4xl">
              ¿Sos mayor de edad?
            </h2>

            <p className="mx-auto mb-7 max-w-md text-sm leading-7 text-[#4f5f55]">
              Este sitio contiene información institucional vinculada al
              cannabis medicinal, el cáñamo y la agroecología. Para continuar,
              confirmá que sos mayor de 18 años.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={() => setAgeGate(false)}
                className="rounded-full bg-[#183427] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#244936]"
              >
                Sí, continuar
              </button>

              <Link
                href="https://www.google.com.ar"
                className="rounded-full border border-[#183427]/20 px-7 py-4 text-sm font-bold text-[#183427] transition hover:-translate-y-1 hover:bg-white"
              >
                No, salir
              </Link>
            </div>
          </div>
        </section>
      )}

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#102319]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="#inicio" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4efe4]">
              <Image
                src="/logo.png"
                alt="Simbiosis Miceliar"
                width={34}
                height={34}
                className="h-9 w-9 object-contain"
              />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-white">
                Simbiosis
              </p>
              <p className="text-xs font-medium text-white/65">Miceliar</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/75 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={whatsappUrl}
              target="_blank"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#183427]"
            >
              Escribinos
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
            aria-label="Abrir menú"
          >
            <span className="text-2xl">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#102319] px-5 pb-5 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-white/80 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href={whatsappUrl}
                target="_blank"
                className="mt-2 rounded-2xl bg-[#f4efe4] px-4 py-3 text-center text-sm font-black text-[#183427]"
              >
                Escribir por WhatsApp
              </Link>
            </nav>
          </div>
        )}
      </header>

      <section className="relative min-h-screen pt-24">
        <div className="absolute inset-0">
          <Image
            src="/hero-invernadero.jpeg"
            alt="Cultivo agroecológico en Patagonia"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#102319]/95 via-[#102319]/75 to-[#8a6b3f]/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,239,228,0.22),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(130,161,92,0.22),transparent_30%)]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#f4efe4] backdrop-blur">
              Patagonia · Cannabis medicinal · Agroecología
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
              Acompañamiento claro, cercano y responsable.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Simbiosis Miceliar une orientación, vinculación médica para
              REPROCANN, formación y comunidad desde Lago Puelo, con una mirada
              humana, seria y agroecológica.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href={whatsappUrl}
                target="_blank"
                className="group rounded-full bg-[#f4efe4] px-7 py-4 text-center text-sm font-black text-[#183427] shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Hablar por WhatsApp
                <span className="ml-2 inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#como-trabajamos"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
              >
                Ver cómo trabajamos
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Proyecto patagónico",
                "REPROCANN",
                "Enfoque agroecológico",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-[#f4efe4] p-6">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#8a6b3f]">
                Enfoque
              </p>

              <h2 className="mb-5 text-3xl font-black tracking-tight text-[#183427]">
                Del territorio a la comunidad.
              </h2>

              <div className="grid gap-3">
                {[
                  "Orientación personalizada.",
                  "Vinculación médica para REPROCANN.",
                  "Formación teórica y práctica.",
                  "Cultivo agroecológico y buenas prácticas.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/70 p-4"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#183427] text-sm text-white">
                      ✓
                    </span>
                    <p className="text-sm font-bold text-[#314437]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#183427] p-5 text-white">
                <p className="text-sm font-semibold leading-6 text-white/80">
                  “Simbiosis” porque nada crece solo: crece el suelo, la planta,
                  la comunidad y el conocimiento compartido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#183427]/10 bg-[#183427] px-5 py-5 text-[#f4efe4]">
        <div className="mx-auto grid max-w-7xl gap-4 text-center md:grid-cols-4">
          {[
            ["01", "Orientación"],
            ["02", "REPROCANN"],
            ["03", "Agroecología"],
            ["04", "Formación"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-sm font-black text-[#d8c394]">{num}</p>
              <p className="mt-1 text-lg font-black">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quienes-somos" className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#8a6b3f]">
              Quiénes somos
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#183427] md:text-6xl">
              Una comunidad construida desde el territorio.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#526256]">
              Somos un proyecto patagónico que busca aportar claridad,
              acompañamiento responsable y cercanía en los recorridos vinculados
              al cannabis medicinal.
            </p>

            <p className="mt-4 text-base leading-8 text-[#526256]">
              Nuestro enfoque combina identidad territorial, compromiso
              comunitario, respeto por cada proceso y una relación cercana entre
              quienes consultan y quienes acompañan.
            </p>

            <p className="mt-4 text-base leading-8 text-[#526256]">
              También impulsamos capacitaciones teórico-prácticas, experiencias
              vinculadas a terpenos, preparación responsable de derivados y
              formación durante el ciclo de cultivo.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-[2rem] bg-white/75 p-4 shadow-sm">
              <div className="relative mb-4 h-64 overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/cultivo-3.jpg"
                  alt="Cultivo y trabajo cuidado"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-black">Trabajo cuidado</h3>
              <p className="mt-2 text-sm leading-6 text-[#526256]">
                Procesos responsables, cercanos y con mirada comunitaria.
              </p>
            </article>

            <article className="rounded-[2rem] bg-white/75 p-4 shadow-sm sm:translate-y-10">
              <div className="relative mb-4 h-64 overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/cultivo-4.jpg"
                  alt="Identidad territorial"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-black">Identidad territorial</h3>
              <p className="mt-2 text-sm leading-6 text-[#526256]">
                Lago Puelo, Chubut, Patagonia: una forma propia de construir.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="como-trabajamos" className="bg-[#102319] px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#d8c394]">
              Cómo trabajamos
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Un recorrido simple, cuidado y ordenado.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              Queremos que quien llega a Simbiosis entienda rápido qué hacemos y
              cómo comienza el proceso.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Nos escribís",
                text: "Recibimos tu consulta y conocemos tu situación, tus dudas y lo que necesitás orientar.",
              },
              {
                step: "2",
                title: "Te orientamos",
                text: "Brindamos una primera orientación clara y responsable para ayudarte a entender el camino posible.",
              },
              {
                step: "3",
                title: "Te vinculamos",
                text: "Cuando corresponde, articulamos la vinculación con profesionales médicos para REPROCANN.",
              },
              {
                step: "4",
                title: "Acompañamos",
                text: "Sostenemos una relación cercana, ordenada y humana durante cada proceso.",
              },
            ].map((item) => (
              <article
                key={item.step}
                className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-2 hover:bg-white/[0.1]"
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4efe4] text-lg font-black text-[#183427]">
                  {item.step}
                </span>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#8a6b3f]">
              Áreas de trabajo
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#183427] md:text-6xl">
              Qué hacemos en Simbiosis Miceliar.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#526256]">
              Integramos orientación, acompañamiento, formación y comunidad
              desde una mirada responsable.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <article
                key={card.title}
                className="group rounded-[2rem] border border-[#183427]/10 bg-white/65 p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <span className="mb-10 inline-flex rounded-full bg-[#183427]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#183427]">
                  {card.tag}
                </span>

                <h3 className="mb-4 text-2xl font-black tracking-tight">
                  {card.title}
                </h3>

                <p className="text-sm leading-7 text-[#526256]">{card.text}</p>

                <div className="mt-8 h-10 w-10 rounded-full bg-[#183427] text-center text-2xl leading-10 text-white transition group-hover:rotate-45">
                  +
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8ddc8] px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#8a6b3f]">
              Acceso claro
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Elegí tu camino y encontrá una respuesta rápida.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#526256]">
              Este bloque hace que la web sea más interactiva: la persona entra,
              se identifica y encuentra una ruta concreta.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {quickTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-3 text-sm font-black transition ${
                    activeTab === tab.id
                      ? "bg-[#183427] text-white shadow-lg"
                      : "bg-white/70 text-[#183427] hover:bg-white"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#183427] p-4 shadow-2xl">
            <div className="rounded-[1.5rem] bg-[#f4efe4] p-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#8a6b3f]">
                {selectedTab.eyebrow}
              </p>

              <h3 className="text-4xl font-black tracking-[-0.04em]">
                {selectedTab.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-[#526256]">
                {selectedTab.text}
              </p>

              <div className="mt-7 grid gap-3">
                {selectedTab.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl bg-white p-4"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#183427] text-white">
                      ✓
                    </span>
                    <p className="text-sm font-bold">{point}</p>
                  </div>
                ))}
              </div>

              <Link
                href={whatsappUrl}
                target="_blank"
                className="mt-8 inline-flex rounded-full bg-[#183427] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#244936]"
              >
                {selectedTab.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="agroecologia" className="bg-[#102319] px-5 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="/cultivo-2.jpg"
              alt="Cultivo responsable y agroecológico"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#d8c394]">
              Enfoque agroecológico
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-5xl">
              Cultivo responsable, cuidado del entorno y formación consciente.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/70">
              Entendemos el cultivo como parte de una mirada integral:
              aprendizaje, responsabilidad, inocuidad y vínculo con el
              territorio.
            </p>

            <p className="mt-4 text-base leading-8 text-white/70">
              Priorizamos procesos seguros para el consumidor, el productor y el
              medio ambiente, promoviendo buenas prácticas, nutrición orgánica
              sin aditivos sintéticos y una relación responsable con la
              comunidad.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Inocuidad",
                "Proceso seguro",
                "Nutrición orgánica",
                "Cuidado del entorno",
                "Buenas prácticas",
                "Mirada territorial",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(138,107,63,0.16),transparent_28%),radial-gradient(circle_at_90%_50%,rgba(24,52,39,0.13),transparent_30%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#8a6b3f]">
                Identidad visual
              </p>

              <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Más Patagonia, menos plantilla genérica.
              </h2>
            </div>

            <Link
              href="#contacto"
              className="rounded-full border border-[#183427]/20 px-6 py-4 text-center text-sm font-black transition hover:-translate-y-1 hover:bg-[#183427] hover:text-white"
            >
              Contactar
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <article
                key={item.src}
                className="group relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#183427] shadow-xl"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102319]/90 via-[#102319]/25 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <h3 className="text-3xl font-black tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102319] px-5 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#d8c394]">
              Formación
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Aprender haciendo, con criterio y responsabilidad.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              Una asociación fuerte no solo comunica: enseña, registra,
              acompaña y construye cultura.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                step: "01",
                title: "Introducción al marco legal",
                text: "Información general sobre cannabis medicinal, registros, límites y responsabilidades.",
              },
              {
                step: "02",
                title: "Cultivo medicinal responsable",
                text: "Buenas prácticas, suelo vivo, nutrición orgánica, genética y seguimiento.",
              },
              {
                step: "03",
                title: "Derivados y uso consciente",
                text: "Conceptos introductorios sobre preparados, seguridad, trazabilidad y acompañamiento.",
              },
              {
                step: "04",
                title: "Comunidad y territorio",
                text: "Construcción de redes, participación institucional y proyectos productivos locales.",
              },
            ].map((item) => (
              <article
                key={item.step}
                className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.1]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f4efe4] text-sm font-black text-[#183427]">
                    {item.step}
                  </span>

                  <div>
                    <h3 className="text-2xl font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/65">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div id="faq" className="rounded-[2rem] bg-white/70 p-8 shadow-sm">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#8a6b3f]">
              Preguntas frecuentes
            </p>

            <h2 className="mb-8 text-4xl font-black tracking-[-0.04em]">
              Claro, directo y sin humo.
            </h2>

            <div className="grid gap-3">
              {faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-3xl border border-[#183427]/10 bg-[#f4efe4]"
                >
                  <button
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-black">{faq.q}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#183427] text-xl text-white">
                      {activeFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  {activeFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-sm leading-7 text-[#526256]">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#183427] p-8 text-white shadow-2xl">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d8c394]/20 blur-2xl" />

            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#d8c394]">
              Diferencial
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em]">
              Una web seria, moderna y con identidad propia.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              La idea es que la persona sienta confianza institucional, pero
              también una identidad actual, cercana y atractiva. Que no parezca
              una web vieja, ni una tienda improvisada.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Botones claros y llamados a la acción.",
                "Bloques interactivos para pacientes, cultivadores e instituciones.",
                "Estética patagónica, orgánica y profesional.",
                "Mensajes alineados con legalidad y confianza.",
              ].map((text) => (
                <div
                  key={text}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-bold text-white/80"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="px-5 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#102319] text-white shadow-2xl">
          <div className="grid lg:grid-cols-[1fr_0.8fr]">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#d8c394]">
                Contacto
              </p>

              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Sumate a una red seria, humana y territorial.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Escribinos para recibir orientación, proponer una articulación o
                conocer cómo participar de Simbiosis Miceliar.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  className="rounded-full bg-[#f4efe4] px-7 py-4 text-center text-sm font-black text-[#183427] transition hover:-translate-y-1"
                >
                  WhatsApp: +54 9 2944 13 8880
                </Link>

                <Link
                  href={instagramUrl}
                  target="_blank"
                  className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  Instagram
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Confidencialidad", "Respeto", "Cuidado"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-bold text-white/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[360px]">
              <Image
                src="/cultivo-6.jpg"
                alt="Simbiosis Miceliar contacto"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#102319] via-[#102319]/30 to-transparent lg:bg-gradient-to-l" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#183427]/10 px-5 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#183427]">
                <Image
                  src="/logo.png"
                  alt="Simbiosis Miceliar"
                  width={34}
                  height={34}
                  className="h-9 w-9 object-contain"
                />
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em]">
                  Simbiosis Miceliar
                </p>
                <p className="text-xs text-[#526256]">
                  Cannabis medicinal · Cáñamo · Patagonia
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#526256]">
              Identidad territorial, acompañamiento humano, enfoque
              agroecológico y compromiso comunitario.
            </p>
          </div>

          <div>
            <strong className="mb-4 block text-sm uppercase tracking-[0.18em]">
              Enlaces
            </strong>

            <div className="grid gap-2 text-sm text-[#526256]">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <strong className="mb-4 block text-sm uppercase tracking-[0.18em]">
              Contacto
            </strong>

            <div className="grid gap-2 text-sm text-[#526256]">
              <p>WhatsApp: +54 9 2944 13 8880</p>
              <p>Instagram: @simbiosismiceliar</p>
              <p>Lago Puelo · Patagonia</p>
              <p>simbiosismiceliar.com.ar</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-[#183427]/10 pt-6 text-center">
          <p className="text-xs leading-6 text-[#526256]">
            © {currentYear} Simbiosis Miceliar. Sitio informativo e
            institucional. La información publicada no reemplaza asesoramiento
            médico, legal ni profesional personalizado.
          </p>
        </div>
      </footer>

      <Link
        href={whatsappUrl}
        target="_blank"
        className="fixed bottom-5 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#1ebe5d]"
        aria-label="Contactar por WhatsApp"
      >
        ✆
      </Link>
    </main>
  );
}
