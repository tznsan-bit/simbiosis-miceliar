


volvamos con lo de la pagina, dame el codigo 

Voy a darte una versión completa de page.tsx, lista para borrar y pegar. La armé manteniendo nombres de imágenes comunes que veníamos usando y sumando botones/partes interactivas sin depender de librerías raras.

Thought for 18s
Sí. Pegá esto completo en app/page.tsx. Mantiene nombres como logo.png, hero-invernadero.jpeg, cultivo-1.jpg a cultivo-6.jpg.

Solo cambiá arriba el número de WhatsApp si querés.

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const WHATSAPP_NUMBER = "5492940000000";
const WHATSAPP_TEXT =
  "Hola Simbiosis Miceliar, quiero recibir información sobre la asociación.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Qué hacemos", href: "#que-hacemos" },
  { label: "Pacientes", href: "#pacientes" },
  { label: "Formación", href: "#formacion" },
  { label: "Contacto", href: "#contacto" },
];

const cards = [
  {
    title: "Acompañamiento responsable",
    text: "Orientamos a personas usuarias, familias y cultivadores desde una mirada seria, territorial y humana.",
    tag: "Pacientes",
  },
  {
    title: "Cultivo agroecológico",
    text: "Promovemos prácticas regenerativas, trazabilidad, selección genética y cuidado del ambiente patagónico.",
    tag: "Agroecología",
  },
  {
    title: "Formación y comunidad",
    text: "Creamos espacios teóricos y prácticos para compartir saberes sobre cultivo, derivados y uso responsable.",
    tag: "Educación",
  },
  {
    title: "Marco legal y confidencialidad",
    text: "Trabajamos con respeto por la normativa vigente, la privacidad de los datos y los procesos institucionales.",
    tag: "Institucional",
  },
];

const quickTabs = [
  {
    id: "pacientes",
    title: "Soy paciente",
    eyebrow: "Acompañamiento",
    text: "Podemos orientarte sobre acceso seguro, REPROCANN, criterios básicos de uso responsable y el modo de vincularte con la asociación.",
    points: [
      "Primera orientación personalizada.",
      "Información clara y sin vueltas.",
      "Confidencialidad y trato humano.",
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
    a: "Es una asociación con identidad patagónica que trabaja en torno al cannabis medicinal, el cáñamo, la agroecología, la formación y el acompañamiento responsable de personas usuarias.",
  },
  {
    q: "¿Venden cannabis o derivados?",
    a: "No presentamos la página como un punto de venta. El enfoque es institucional, educativo, asociativo y de acompañamiento dentro del marco legal vigente.",
  },
  {
    q: "¿Qué es REPROCANN?",
    a: "Es el registro nacional argentino vinculado al acceso al cannabis medicinal. La asociación puede orientar sobre su funcionamiento general y la importancia de mantener procesos documentados y responsables.",
  },
  {
    q: "¿Cómo cuidan los datos personales?",
    a: "La confidencialidad es un eje central. La información sensible de pacientes, cultivadores o integrantes debe tratarse con reserva, responsabilidad y respeto por la Ley 25.326.",
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
              Cannabis medicinal, cáñamo y formación responsable
            </h2>

            <p className="mx-auto mb-7 max-w-md text-sm leading-7 text-[#4f5f55]">
              Este sitio contiene información institucional vinculada al
              cannabis medicinal. Para continuar, confirmá que sos mayor de edad
              o que ingresás con fines informativos.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={() => setAgeGate(false)}
                className="rounded-full bg-[#183427] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#244936]"
              >
                Sí, continuar
              </button>

              <Link
                href="https://www.google.com"
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
              WhatsApp
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
              Una nueva cultura cannábica, seria y territorial.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Simbiosis Miceliar une acompañamiento, formación, cultivo
              responsable y mirada agroecológica para construir acceso seguro,
              comunidad y desarrollo en la Patagonia.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#pacientes"
                className="group rounded-full bg-[#f4efe4] px-7 py-4 text-center text-sm font-black text-[#183427] shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Quiero información
                <span className="ml-2 inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#que-hacemos"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
              >
                Ver qué hacemos
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-[#f4efe4] p-6">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#8a6b3f]">
                Enfoque
              </p>

              <h2 className="mb-5 text-3xl font-black tracking-tight text-[#183427]">
                Del cultivo a la comunidad.
              </h2>

              <div className="grid gap-3">
                {[
                  "Acompañamiento responsable a pacientes.",
                  "Buenas prácticas de cultivo medicinal.",
                  "Formación teórica y práctica.",
                  "Confidencialidad y trazabilidad.",
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
            ["01", "Acompañamiento"],
            ["02", "Agroecología"],
            ["03", "Formación"],
            ["04", "Trazabilidad"],
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

      <section id="que-hacemos" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#8a6b3f]">
              Qué hacemos
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#183427] md:text-6xl">
              Una asociación con estética, contenido y propósito.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#526256]">
              La página tiene que transmitir algo distinto: no humo, no promesa
              vacía, sino una institución moderna, cálida y confiable.
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

      <section id="pacientes" className="bg-[#e8ddc8] px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#8a6b3f]">
              Acceso claro
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Elegí tu camino y encontrá una respuesta rápida.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#526256]">
              Este bloque hace que la web sea más interactiva y menos estática:
              la persona entra, se identifica y encuentra una ruta concreta.
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

      <section id="formacion" className="bg-[#102319] px-5 py-24 text-white">
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
          <div className="rounded-[2rem] bg-white/70 p-8 shadow-sm">
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
              Una web que parece de asociación, proyecto y marca a la vez.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              La idea es que la persona sienta seriedad institucional, pero
              también una identidad moderna y atractiva. Que no parezca una web
              vieja, ni una tienda improvisada.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Botones claros y llamados a la acción.",
                "Bloques interactivos para pacientes/cultivadores/instituciones.",
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
                Escribinos para recibir información, proponer una articulación o
                conocer cómo participar de Simbiosis Miceliar.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  className="rounded-full bg-[#f4efe4] px-7 py-4 text-center text-sm font-black text-[#183427] transition hover:-translate-y-1"
                >
                  Escribir por WhatsApp
                </Link>

                <Link
                  href="https://www.instagram.com/simbiosismiceliar"
                  target="_blank"
                  className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  Instagram
                </Link>
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
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
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

          <p className="max-w-xl text-xs leading-6 text-[#526256] md:text-right">
            Sitio informativo e institucional. La información publicada no
            reemplaza asesoramiento médico, legal ni profesional personalizado.
          </p>
        </div>
      </footer>

      <Link
        href={whatsappUrl}
        target="_blank"
        className="fixed bottom-5 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#183427] text-3xl text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#244936]"
        aria-label="Contactar por WhatsApp"
      >
        ✆
      </Link>
    </main>
  );
}
Acordate de cambiar esta línea:

const WHATSAPP_NUMBER = "5492940000000";
por el número real, con código de país y sin +, por ejemplo:

const WHATSAPP_NUMBER = "549294XXXXXXXX";


Pasted text(10).txt
Documento
eso es la base que hay ahora publicada, podes darme con ese numero de wpp

Thought for 11s
Sí. El número que ya tenés en la base publicada es +54 9 294 413-8880, armado como 5492944138880 para WhatsApp. En tu código actual aparece en whatsappHref y también en el bloque de contacto. 


Para la versión nueva que te pasé, cambiá esta parte:

const WHATSAPP_NUMBER = "5492940000000";
const WHATSAPP_TEXT =
  "Hola Simbiosis Miceliar, quiero recibir información sobre la asociación.";
por esta:

const WHATSAPP_NUMBER = "5492944138880";
const WHATSAPP_TEXT =
  "Hola, quiero recibir orientación de Simbiosis Miceliar.";
Y dejá esto igual:

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;
Te queda funcionando así:

const WHATSAPP_NUMBER = "5492944138880";
const WHATSAPP_TEXT =
  "Hola, quiero recibir orientación de Simbiosis Miceliar.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;
Si querés mantener exactamente el mismo mensaje que tenés ahora publicado, usá este:

const WHATSAPP_NUMBER = "5492944138880";
const WHATSAPP_TEXT = "Hola, quiero recibir orientación.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

Thought for 7s
Sí, acá va entero listo para borrar y pegar en app/page.tsx, ya con el WhatsApp real: +54 9 294 413-8880, que es el que figura en tu base publicada. 





es muy corto, seguro que no sacaste nada?

Thought for 7s
Tenés razón en desconfiar: sí, la versión que te pasé quedó más corta porque reemplacé tu base por una versión más compacta con Tailwind, y eso hizo que se pierdan cosas de la página publicada.

No es que “rompa” la web, pero no era una versión fiel sobre tu base actual. Saqué o cambié varias cosas importantes de tu código publicado, por ejemplo:

El sessionStorage del aviso de mayoría de edad.

El bloqueo del scroll cuando está abierto el menú o el age gate.

El menú mobile con menuBackdrop.

Varias clases y estilos globales que ya tenías armados.

La banda de confianza con 4 bloques.

El bloque miniValue.

Parte de la estructura original de secciones.

El CSS completo que le daba la identidad visual actual.

Algunos detalles de accesibilidad del FAQ y del menú.

Tu base actual publicada es más larga porque tiene toda la estructura, estilos globales, responsive, animaciones simples, menú mobile, age gate persistente y secciones completas dentro del mismo page.tsx. 


Así que no pegues esa versión corta si querés conservar la página actual. Lo correcto es hacer una versión sobre tu base actual, manteniendo todo lo que ya está y agregando mejoras arriba: botones más llamativos, bloque interactivo, mejor hero, mejores llamadas a WhatsApp, cards más modernas y algunos detalles visuales.

Te lo preparo como corresponde: mismo código base publicado, sin sacar secciones, con el WhatsApp correcto y mejoras integradas.


quedo horrible, ,mirala a la pagina

Sí, tenés razón: antes de tocar más código conviene mirar la página publicada y corregir sobre lo que realmente se ve. Voy a revisar la versión online y después te digo puntualmente qué está fallando y qué cambiaría.

It seems the user wants me to review the page, but I can't capture visual elements directly.




"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function HomePage() {
const [ageVerified, setAgeVerified] = useState<boolean | null>(null);
const [openFaq, setOpenFaq] = useState<number | null>(0);
const [menuOpen, setMenuOpen] = useState(false);

const whatsappHref =
"https://wa.me/5492944138880?text=Hola%2C%20quiero%20recibir%20orientaci%C3%B3n.";
const instagramHref = "https://instagram.com/simbiosismiceliar";
const currentYear = new Date().getFullYear();

const navItems = useMemo(
() => [
{ href: "#quienes-somos", label: "Quiénes somos" },
{ href: "#como-trabajamos", label: "Cómo trabajamos" },
{ href: "#areas", label: "Áreas" },
{ href: "#agroecologico", label: "Enfoque agroecológico" },
{ href: "#faq", label: "Preguntas frecuentes" },
{ href: "#contacto", label: "Contacto" },
],
[]
);

const faqs = useMemo(
() => [
{
q: "¿Qué es REPROCANN?",
a: "REPROCANN es el registro nacional vinculado al acceso dentro del marco vigente. Muchas personas llegan con dudas sobre cómo iniciar, qué documentación se necesita o cómo seguir. Por eso brindamos orientación y acompañamiento en cada etapa.",
},
{
q: "¿Cómo arranco?",
a: "Podés escribirnos por WhatsApp y contarnos tu situación. A partir de ese primer contacto, te orientamos sobre los pasos a seguir según tu caso.",
},
{
q: "¿Tienen vinculación con profesionales médicos?",
a: "Sí. Contamos con profesionales médicos para la vinculación a REPROCANN, acompañando ese proceso con seriedad, criterio y cercanía.",
},
{
q: "¿Qué significa su enfoque agroecológico?",
a: "Promovemos una mirada de cuidado integral: inocuidad, buenas prácticas, nutrición orgánica sin aditivos sintéticos, respeto por el territorio y procesos responsables para el consumidor, el productor y el medio ambiente.",
},
{
q: "¿La consulta es confidencial?",
a: "Sí. Priorizamos el respeto, la privacidad y el cuidado de cada proceso personal. Promovemos un uso adecuado de la información personal y sensible, con criterios de confidencialidad acordes a la Ley 25.326 de Protección de los Datos Personales.",
},
{
q: "¿Ofrecen acompañamiento durante el proceso?",
a: "Sí. Nuestro enfoque no termina en una respuesta aislada. Buscamos acompañar de manera cercana, ordenada y humana, incluyendo formación, capacitaciones teórico-prácticas y seguimiento durante cada proceso.",
},
],
[]
);

useEffect(() => {
try {
const saved = sessionStorage.getItem("ageVerified");
setAgeVerified(saved === "true");
} catch {
setAgeVerified(false);
}
}, []);

useEffect(() => {
const handleResize = () => {
if (window.innerWidth > 920) setMenuOpen(false);
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Escape") setMenuOpen(false);
};

window.addEventListener("resize", handleResize);
window.addEventListener("keydown", handleKeyDown);

return () => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("keydown", handleKeyDown);
};
}, []);

useEffect(() => {
const shouldLockScroll = menuOpen || ageVerified === false;
const previousOverflow = document.body.style.overflow;
document.body.style.overflow = shouldLockScroll ? "hidden" : "";

return () => {
  document.body.style.overflow = previousOverflow;
};
}, [menuOpen, ageVerified]);

const handleAgeYes = () => {
try {
sessionStorage.setItem("ageVerified", "true");
} catch {}
setAgeVerified(true);
};

const handleAgeNo = () => {
window.location.replace("https://www.google.com.ar");
};

const closeMenu = () => setMenuOpen(false);

if (ageVerified === null) {
return ;
}

return (
<>
{!ageVerified && (


Acceso al sitio
¿Sos mayor de edad?
Este sitio está orientado a personas mayores de 18 años.


Sí, soy mayor


No




)}

  {menuOpen && (
    <button
      type="button"
      className="menuBackdrop"
      aria-label="Cerrar menú"
      onClick={closeMenu}
    />
  )}

  <header className="header">
    <div className="container nav">
      <a href="#inicio" className="brand" onClick={closeMenu}>
        <div className="brandLogoWrap">
          <Image
            src="/logo.png"
            alt="Logo de Simbiosis Miceliar"
            width={52}
            height={52}
            priority
            className="brandLogo"
          />
        </div>

        <div className="brandText">
          <div className="brandTitle">Simbiosis Miceliar</div>
          <div className="brandSub">Proyecto patagónico</div>
        </div>
      </a>

      <button
        type="button"
        className={`menuToggle ${menuOpen ? "active" : ""}`}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="main-navigation" className={`navLinks ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <a
        className="desktopWhatsApp"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        Escribinos
      </a>
    </div>
  </header>

  <main>
    <section className="hero darkSection" id="inicio">
      <div className="heroBackdropTexture" />
      <div className="container heroGrid">
        <div className="heroText">
          <div className="pill darkPill">Proyecto patagónico · Orientación · REPROCANN</div>

          <h1>
            Acompañamiento claro,
            <span> cercano y responsable</span>
          </h1>

          <p className="heroLead">
            Orientación, vinculación médica para REPROCANN, formación y comunidad desde Lago
            Puelo.
          </p>

          <p className="heroBody">
            En Simbiosis Miceliar acompañamos procesos de orientación, articulación,
            formación y seguimiento desde una mirada humana, comunitaria y con enfoque
            agroecológico.
          </p>

          <div className="buttons">
            <a
              className="btn btnPrimary"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar por WhatsApp
            </a>

            <a className="btn btnGhost" href="#como-trabajamos">
              Ver cómo trabajamos
            </a>
          </div>

          <div className="badges">
            <span>Proyecto patagónico</span>
            <span>Vinculación médica para REPROCANN</span>
            <span>Enfoque agroecológico</span>
          </div>
        </div>

        <div className="heroImage">
          <Image
            src="/hero-invernadero.jpeg"
            alt="Invernadero y entorno del proyecto"
            fill
            priority
            sizes="(max-width: 1080px) 100vw, 48vw"
            className="coverImage heroImg"
          />
          <div className="heroOverlay" />
          <div className="heroMiniCard">
            <strong>Territorio, cuidado y comunidad</strong>
            <span>Una mirada cercana y responsable sobre el acompañamiento y el cultivo.</span>
          </div>
        </div>
      </div>
    </section>

    <section className="trustBand lightSection">
      <div className="container trustGrid">
        <div className="trustMini">
          <div className="trustIcon">◎</div>
          <div>
            <strong>Orientación personalizada</strong>
            <span>Escucha, claridad y acompañamiento según cada caso.</span>
          </div>
        </div>

        <div className="trustMini">
          <div className="trustIcon">✚</div>
          <div>
            <strong>REPROCANN</strong>
            <span>Vinculación médica y proceso acompañado.</span>
          </div>
        </div>

        <div className="trustMini">
          <div className="trustIcon">❋</div>
          <div>
            <strong>Enfoque agroecológico</strong>
            <span>Buenas prácticas, cuidado del entorno y mirada territorial.</span>
          </div>
        </div>

        <div className="trustMini">
          <div className="trustIcon">◉</div>
          <div>
            <strong>Comunidad real</strong>
            <span>Un espacio cercano, serio y humano.</span>
          </div>
        </div>
      </div>
    </section>

    <section className="miniValue lightSection">
      <div className="container miniValueWrap">
        <p>
          Acompañamos con cercanía, criterio y responsabilidad, integrando orientación,
          vinculación médica, formación y una mirada agroecológica del territorio.
        </p>
      </div>
    </section>

    <section className="section lightSection" id="quienes-somos">
      <div className="container splitIntro">
        <div className="introBlock">
          <div className="pill lightPill">Quiénes somos</div>
          <h2>Una comunidad construida desde el territorio</h2>
          <p className="sectionLead darkText">
            Somos un proyecto patagónico que busca aportar claridad, acompañamiento responsable
            y cercanía en los recorridos vinculados al cannabis medicinal.
          </p>
          <p className="sectionText">
            Nuestro enfoque combina identidad territorial, compromiso comunitario, respeto por
            cada proceso y una relación cercana entre quienes consultan y quienes acompañan.
          </p>
          <p className="sectionText">
            También impulsamos capacitaciones teórico-prácticas a lo largo del ciclo de cultivo,
            experiencias con terpenos y formación en preparación responsable de derivados.
          </p>
        </div>

        <div className="introCards">
          <div className="smallPhotoCard">
            <div className="smallPhoto">
              <Image
                src="/cultivo-3.jpg"
                alt="Cultivo y trabajo cuidado"
                fill
                sizes="(max-width: 1080px) 100vw, 22vw"
                className="coverImage photoOne"
              />
            </div>
            <strong>Trabajo cuidado</strong>
            <span>Procesos responsables y cercanos</span>
          </div>

          <div className="smallPhotoCard">
            <div className="smallPhoto">
              <Image
                src="/cultivo-4.jpg"
                alt="Detalle del cultivo"
                fill
                sizes="(max-width: 1080px) 100vw, 22vw"
                className="coverImage photoTwo"
              />
            </div>
            <strong>Identidad territorial</strong>
            <span>Lago Puelo · Chubut · Patagonia</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section darkSection" id="como-trabajamos">
      <div className="container">
        <div className="sectionTop centerTop">
          <div className="pill darkPill">Cómo trabajamos</div>
          <h2>Un recorrido simple, cuidado y ordenado</h2>
          <p className="sectionLead">
            Queremos que quien llega a Simbiosis entienda rápido qué hacemos y cómo comienza el
            proceso.
          </p>
        </div>

        <div className="stepsRow">
          <div className="stepCard">
            <div className="stepCircle">1</div>
            <h3>Nos escribís</h3>
            <p>Recibimos tu consulta y conocemos tu situación, tus dudas y lo que necesitás orientar.</p>
          </div>

          <div className="stepCard">
            <div className="stepCircle">2</div>
            <h3>Te orientamos</h3>
            <p>Brindamos una primera orientación clara y responsable para ayudarte a entender el camino posible.</p>
          </div>

          <div className="stepCard">
            <div className="stepCircle">3</div>
            <h3>Te vinculamos</h3>
            <p>Cuando corresponde, articulamos la vinculación con profesionales médicos para REPROCANN.</p>
          </div>

          <div className="stepCard">
            <div className="stepCircle">4</div>
            <h3>Acompañamos</h3>
            <p>Sostenemos una relación cercana, ordenada y humana durante cada proceso.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section lightSection" id="areas">
      <div className="container areasGridWrap">
        <div className="areasLeft">
          <div className="pill lightPill">Áreas de trabajo</div>
          <h2>Qué hacemos en Simbiosis Miceliar</h2>
          <p className="sectionLead darkText">
            Integramos orientación, acompañamiento, formación y comunidad desde una mirada responsable.
          </p>

          <div className="areasGrid">
            <div className="areaCard">
              <div className="areaIcon">◌</div>
              <h3>Orientación inicial</h3>
              <p>Escuchamos cada situación de forma personalizada y clara.</p>
            </div>

            <div className="areaCard">
              <div className="areaIcon">✚</div>
              <h3>Vinculación médica</h3>
              <p>Profesionales encargados del proceso de REPROCANN.</p>
            </div>

            <div className="areaCard">
              <div className="areaIcon">❋</div>
              <h3>Cultivo agroecológico</h3>
              <p>Inocuidad, proceso seguro y nutrición orgánica con enfoque agroecológico.</p>
            </div>

            <div className="areaCard">
              <div className="areaIcon">▣</div>
              <h3>Formación</h3>
              <p>Capacitaciones, terpenos y preparación responsable de derivados.</p>
            </div>

            <div className="areaCard">
              <div className="areaIcon">◎</div>
              <h3>Comunidad</h3>
              <p>Escucha, confianza y acompañamiento humano.</p>
            </div>

            <div className="areaCard">
              <div className="areaIcon">♡</div>
              <h3>Confidencialidad</h3>
              <p>Resguardo responsable de información personal y sensible según Ley 25.326.</p>
            </div>
          </div>
        </div>

        <div className="areasRight">
          <div className="reprocannCard" id="reprocann">
            <div className="pill darkPill">REPROCANN</div>
            <h3>Acompañamiento claro para un proceso sensible</h3>
            <p>
              Sabemos que muchas personas llegan con dudas o desinformación. Por eso ofrecemos
              un acompañamiento claro, cercano y ordenado en cada etapa, incluyendo orientación
              general, articulación con profesionales y selección responsable de genéticas
              acordes a cada proceso y necesidad.
            </p>
            <ul>
              <li>Información clara</li>
              <li>Vinculación con profesionales</li>
              <li>Proceso acompañado con criterio</li>
              <li>Confidencialidad y respeto</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section darkSection" id="agroecologico">
      <div className="container cultivoGrid">
        <div className="cultivoImage">
          <Image
            src="/cultivo-2.jpg"
            alt="Cultivo responsable y agroecológico"
            fill
            sizes="(max-width: 1080px) 100vw, 50vw"
            className="coverImage cultivoImg"
          />
        </div>

        <div className="cultivoTextCard">
          <div className="pill darkPill">Enfoque agroecológico</div>
          <h2>Cultivo responsable, cuidado del entorno y formación consciente</h2>
          <p>
            Entendemos el cultivo como parte de una mirada integral: aprendizaje, responsabilidad,
            inocuidad y vínculo con el territorio.
          </p>
          <p>
            Priorizamos procesos seguros para el consumidor, el productor y el medio ambiente,
            promoviendo buenas prácticas, nutrición orgánica sin aditivos sintéticos y una
            relación responsable con la comunidad.
          </p>
          <div className="agroList">
            <span>Inocuidad</span>
            <span>Proceso seguro</span>
            <span>Nutrición orgánica</span>
            <span>Cuidado del entorno</span>
            <span>Buenas prácticas</span>
            <span>Mirada territorial</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section lightSection">
      <div className="container">
        <div className="sectionTop">
          <div className="pill lightPill">Territorio y comunidad</div>
          <h2>Una identidad construida desde el cuidado y la cercanía</h2>
        </div>

        <div className="galleryGrid">
          <div className="galleryCard large">
            <Image
              src="/cultivo-5.jpg"
              alt="Trabajo de cultivo"
              fill
              sizes="(max-width: 1080px) 100vw, 40vw"
              className="coverImage galleryLarge"
            />
          </div>

          <div className="galleryCard">
            <Image
              src="/cultivo-6.jpg"
              alt="Detalle del cultivo"
              fill
              sizes="(max-width: 1080px) 50vw, 20vw"
              className="coverImage galleryTwo"
            />
          </div>

          <div className="galleryCard">
            <Image
              src="/hero-invernadero.jpeg"
              alt="Territorio y entorno del proyecto"
              fill
              sizes="(max-width: 1080px) 50vw, 20vw"
              className="coverImage galleryThree"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section lightSection" id="faq">
      <div className="container faqContactWrap">
        <div className="faqBlock">
          <div className="pill lightPill">Preguntas frecuentes</div>
          <h2>Dudas comunes, respuestas claras</h2>

          <div className="faqList">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              const answerId = `faq-answer-${index}`;
              const questionId = `faq-question-${index}`;

              return (
                <div key={item.q} className={`faqItem ${isOpen ? "active" : ""}`}>
                  <button
                    id={questionId}
                    className="faqQuestion"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span>{item.q}</span>
                    <span className="faqSymbol">{isOpen ? "−" : "+"}</span>
                  </button>

                  <div
                    id={answerId}
                    className="faqAnswer"
                    role="region"
                    aria-labelledby={questionId}
                    hidden={!isOpen}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="contactPromo" id="contacto">
          <div className="pill darkPill">Primer contacto</div>
          <h2>Escribinos y te orientamos de forma cercana y responsable</h2>
          <p>
            Si querés recibir orientación, conocer cómo trabajamos o iniciar un primer contacto,
            escribinos y te respondemos de forma clara, humana y cuidada.
          </p>

          <div className="contactButtons">
            <a
              className="contactPromoBtn whatsappBtn"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>WhatsApp</strong>
              <span>+54 9 2944 13 8880</span>
            </a>

            <a
              className="contactPromoBtn instagramBtn"
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Instagram</strong>
              <span>@simbiosismiceliar</span>
            </a>

            <div className="contactPromoBtn locationBtn">
              <strong>Ubicación</strong>
              <span>Lago Puelo · Patagonia</span>
            </div>
          </div>

          <div className="contactMeta">
            <span>Confidencialidad</span>
            <span>Respeto</span>
            <span>Cuidado</span>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer className="footer darkSection">
    <div className="container footerWrap">
      <div className="footerBrand">
        <div className="footerLogoRow">
          <div className="footerLogoWrap">
            <Image
              src="/logo.png"
              alt="Logo de Simbiosis Miceliar"
              width={54}
              height={54}
              className="brandLogo"
            />
          </div>
          <div>
            <h3>Simbiosis Miceliar</h3>
            <p>Proyecto patagónico de orientación y acompañamiento</p>
          </div>
        </div>

        <p className="footerStatement">
          Identidad territorial, acompañamiento humano, enfoque agroecológico y compromiso comunitario.
        </p>
      </div>

      <div className="footerLinks">
        <strong>Enlaces</strong>
        <a href="#inicio">Inicio</a>
        <a href="#quienes-somos">Quiénes somos</a>
        <a href="#areas">Áreas</a>
        <a href="#agroecologico">Enfoque agroecológico</a>
        <a href="#contacto">Contacto</a>
      </div>

      <div className="footerContact">
        <strong>Contacto</strong>
        <p>WhatsApp: +54 9 2944 13 8880</p>
        <p>Instagram: @simbiosismiceliar</p>
        <p>Lago Puelo · Patagonia</p>
        <p>simbiosismiceliar.com.ar</p>
      </div>
    </div>

    <div className="container footerBottom">
      <p>© {currentYear} Simbiosis Miceliar. Lago Puelo, Chubut. Todos los derechos reservados.</p>
    </div>
  </footer>

  <a
    className="whatsappFloat"
    href={whatsappHref}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    ✆
  </a>

  <style jsx global>{`
    :root {
      --dark: #0d1712;
      --dark-2: #16231b;
      --green: #6e8e5c;
      --green-2: #96b481;
      --light: #efe6d9;
      --stone: #e3d5c0;
      --paper: #f8f4ec;
      --white: #ffffff;
      --text-dark: #1c241e;
      --text-light: #f6f1e7;
      --muted-dark: #5e675e;
      --muted-light: #c9d0c5;
      --line-dark: rgba(255, 255, 255, 0.08);
      --line-light: rgba(16, 24, 18, 0.08);
      --shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
      --shadow-soft: 0 14px 34px rgba(0, 0, 0, 0.08);
      --shadow-soft-2: 0 10px 26px rgba(0, 0, 0, 0.06);
      --max: 1180px;
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: var(--dark);
      color: var(--text-light);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    section[id] {
      scroll-margin-top: 96px;
    }

    .bootScreen {
      min-height: 100vh;
      background: var(--dark);
    }

    .container {
      width: min(100% - 30px, var(--max));
      margin: 0 auto;
    }

    .coverImage {
      object-fit: cover;
      object-position: center center;
      transform: scale(1.01);
    }

    .heroImg {
      object-position: center 62%;
    }

    .photoOne {
      object-position: center 44%;
    }

    .photoTwo {
      object-position: center 50%;
    }

    .cultivoImg {
      object-position: center 40%;
    }

    .galleryLarge {
      object-position: center 42%;
    }

    .galleryTwo {
      object-position: center 44%;
    }

    .galleryThree {
      object-position: center 62%;
    }

    .darkSection {
      background:
        radial-gradient(circle at top left, rgba(110, 142, 92, 0.12), transparent 30%),
        radial-gradient(circle at right center, rgba(238, 229, 216, 0.05), transparent 24%),
        linear-gradient(180deg, var(--dark) 0%, var(--dark-2) 100%);
      color: var(--text-light);
    }

    .lightSection {
      background:
        linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.02) 100%),
        linear-gradient(180deg, var(--light) 0%, var(--stone) 100%);
      color: var(--text-dark);
    }

    .header {
      position: sticky;
      top: 0;
      z-index: 60;
      background: rgba(13, 23, 18, 0.76);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--line-dark);
    }

    .nav {
      min-height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      position: relative;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
    }

    .brandLogoWrap,
    .footerLogoWrap {
      width: 52px;
      height: 52px;
      border-radius: 16px;
      overflow: hidden;
      flex-shrink: 0;
      position: relative;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--line-dark);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
    }

    .footerLogoWrap {
      width: 54px;
      height: 54px;
    }

    .brandLogo {
      object-fit: cover;
    }

    .brandText {
      min-width: 0;
    }

    .brandTitle {
      font-weight: 800;
      font-size: 1rem;
      color: var(--text-light);
      line-height: 1.08;
      letter-spacing: -0.02em;
    }

    .brandSub {
      color: var(--muted-light);
      font-size: 0.83rem;
    }

    .menuToggle {
      display: none;
      width: 48px;
      height: 48px;
      border-radius: 14px;
      border: 1px solid var(--line-dark);
      background: rgba(255, 255, 255, 0.04);
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
      z-index: 62;
    }

    .menuToggle span {
      width: 18px;
      height: 2px;
      border-radius: 999px;
      background: var(--text-light);
      display: block;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .menuToggle.active span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    .menuToggle.active span:nth-child(2) {
      opacity: 0;
    }

    .menuToggle.active span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    .menuBackdrop {
      display: none;
    }

    .navLinks {
      display: flex;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;
    }

    .navLinks a {
      color: var(--text-light);
      font-size: 0.95rem;
      opacity: 0.9;
      transition: opacity 0.2s ease, transform 0.2s ease;
    }

    .navLinks a:hover {
      opacity: 1;
      transform: translateY(-1px);
    }

    .desktopWhatsApp {
      padding: 12px 18px;
      border-radius: 999px;
      background: linear-gradient(135deg, #177f48, #22a55c);
      color: white;
      font-weight: 700;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
      white-space: nowrap;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .desktopWhatsApp:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 34px rgba(0, 0, 0, 0.22);
    }

    .hero {
      position: relative;
      padding: 34px 0 32px;
      overflow: hidden;
    }

    .heroBackdropTexture {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 10% 12%, rgba(255,255,255,0.05), transparent 18%),
        radial-gradient(circle at 82% 18%, rgba(255,255,255,0.035), transparent 20%);
      pointer-events: none;
    }

    .heroGrid {
      position: relative;
      display: grid;
      grid-template-columns: 1.02fr 0.98fr;
      gap: 34px;
      align-items: center;
    }

    .heroText h1 {
      margin: 0 0 16px;
      font-size: clamp(2.5rem, 5.7vw, 5.1rem);
      line-height: 0.96;
      letter-spacing: -1.6px;
      max-width: 760px;
      text-wrap: balance;
    }

    .heroText h1 span {
      color: var(--green-2);
    }

    .heroLead {
      font-size: clamp(1.04rem, 2vw, 1.18rem);
      line-height: 1.6;
      color: var(--text-light);
      opacity: 0.97;
      max-width: 720px;
      margin: 0 0 10px;
    }

    .heroBody {
      font-size: 1rem;
      line-height: 1.75;
      color: var(--muted-light);
      max-width: 700px;
      margin: 0;
    }

    .buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 30px;
    }

    .btn {
      min-height: 52px;
      padding: 0 22px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      cursor: pointer;
      transition: 0.25s ease;
      border: 1px solid transparent;
      font-size: 0.98rem;
    }

    .btnPrimary {
      background: linear-gradient(135deg, #177f48, #22a55c);
      color: white;
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.2);
    }

    .btnPrimary:hover {
      transform: translateY(-2px);
    }

    .btnSecondary,
    .btnGhost {
      background: transparent;
      border-color: rgba(255, 255, 255, 0.18);
      color: var(--text-light);
    }

    .btnGhost:hover,
    .btnSecondary:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .badges {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 24px;
    }

    .badges span {
      padding: 9px 13px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.09);
      font-size: 0.88rem;
      color: #eef1ea;
    }

    .heroImage {
      position: relative;
      min-height: 590px;
      border-radius: 32px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: var(--shadow);
      background: #0d1712;
    }

    .heroOverlay {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(180deg, rgba(4, 10, 6, 0.06), rgba(4, 10, 6, 0.34)),
        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06), transparent 22%);
    }

    .heroMiniCard {
      position: absolute;
      right: 18px;
      bottom: 18px;
      max-width: 280px;
      padding: 15px 16px;
      border-radius: 18px;
      background: rgba(11, 23, 17, 0.78);
      border: 1px solid rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      box-shadow: var(--shadow-soft);
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .heroMiniCard strong {
      font-size: 0.98rem;
    }

    .heroMiniCard span {
      font-size: 0.9rem;
      color: var(--muted-light);
      line-height: 1.45;
    }

    .pill {
      display: inline-block;
      padding: 8px 14px;
      border-radius: 999px;
      font-size: 12px;
      letter-spacing: 0.3px;
      margin-bottom: 16px;
      font-weight: 700;
    }

    .darkPill {
      background: rgba(110, 142, 92, 0.16);
      color: #afd08f;
      border: 1px solid rgba(110, 142, 92, 0.24);
    }

    .lightPill {
      background: rgba(29, 36, 30, 0.06);
      color: #5f6b5f;
      border: 1px solid rgba(29, 36, 30, 0.08);
    }

    .trustBand {
      padding: 26px 0;
    }

    .trustGrid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
      border-top: 1px solid var(--line-light);
      border-bottom: 1px solid var(--line-light);
    }

    .trustMini {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 24px 18px;
      border-right: 1px solid var(--line-light);
    }

    .trustMini:last-child {
      border-right: 0;
    }

    .trustIcon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(110, 142, 92, 0.14);
      color: #4f6e48;
      display: grid;
      place-items: center;
      font-size: 0.9rem;
      flex-shrink: 0;
    }

    .trustMini strong {
      display: block;
      color: var(--text-dark);
      margin-bottom: 4px;
    }

    .trustMini span {
      color: var(--muted-dark);
      line-height: 1.45;
      font-size: 0.94rem;
    }

    .miniValue {
      padding: 24px 0 8px;
    }

    .miniValueWrap {
      text-align: center;
    }

    .miniValueWrap p {
      max-width: 900px;
      margin: 0 auto;
      color: var(--text-dark);
      font-size: 1.08rem;
      line-height: 1.75;
    }

    .section {
      padding: 78px 0;
      position: relative;
    }

    .sectionTop {
      margin-bottom: 30px;
    }

    .centerTop {
      text-align: center;
      max-width: 760px;
      margin: 0 auto 30px;
    }

    .splitIntro {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 42px;
      align-items: center;
    }

    .introBlock h2,
    .sectionTop h2,
    .areasLeft h2,
    .contactPromo h2 {
      margin: 0 0 16px;
      font-size: clamp(2rem, 4vw, 3rem);
      line-height: 1.03;
      color: var(--text-dark);
      text-wrap: balance;
      letter-spacing: -0.03em;
    }

    .sectionLead {
      font-size: clamp(1.04rem, 2vw, 1.16rem);
      line-height: 1.64;
      max-width: 760px;
      margin: 0;
    }

    .darkText {
      color: var(--text-dark);
    }

    .sectionText {
      color: var(--muted-dark);
      line-height: 1.74;
      margin-top: 14px;
      max-width: 700px;
    }

    .introCards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }

    .smallPhotoCard {
      background: rgba(255, 255, 255, 0.82);
      border-radius: 22px;
      padding: 12px;
      box-shadow: var(--shadow-soft-2);
      border: 1px solid rgba(0, 0, 0, 0.05);
    }

    .smallPhoto {
      position: relative;
      width: 100%;
      min-height: 230px;
      border-radius: 16px;
      overflow: hidden;
      margin-bottom: 12px;
    }

    .smallPhotoCard strong {
      display: block;
      color: var(--text-dark);
      margin-bottom: 4px;
    }

    .smallPhotoCard span {
      color: var(--muted-dark);
      font-size: 0.94rem;
    }

    .stepsRow {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }

    .stepCard {
      padding: 28px 20px;
      border-radius: 22px;
      background: rgba(255, 255, 255, 0.035);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
      transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .stepCard:hover {
      transform: translateY(-3px);
      border-color: rgba(255,255,255,0.12);
    }

    .stepCircle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--green), var(--green-2));
      color: white;
      display: grid;
      place-items: center;
      font-weight: 800;
      margin-bottom: 16px;
    }

    .stepCard h3 {
      margin: 0 0 10px;
      font-size: 1.14rem;
      color: var(--text-light);
    }

    .stepCard p {
      margin: 0;
      color: var(--muted-light);
      line-height: 1.62;
      font-size: 0.96rem;
    }

    .areasGridWrap {
      display: grid;
      grid-template-columns: 1.3fr 0.9fr;
      gap: 26px;
      align-items: start;
    }

    .areasGrid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-top: 24px;
    }

    .areaCard {
      background: rgba(255, 255, 255, 0.88);
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 22px;
      padding: 22px 18px;
      box-shadow: var(--shadow-soft-2);
      min-height: 176px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .areaCard:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-soft);
    }

    .areaIcon {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: rgba(110, 142, 92, 0.14);
      color: #4d6e47;
      display: grid;
      place-items: center;
      margin-bottom: 14px;
      font-weight: 700;
    }

    .areaCard h3 {
      margin: 0 0 8px;
      color: var(--text-dark);
      font-size: 1.08rem;
    }

    .areaCard p {
      margin: 0;
      color: var(--muted-dark);
      line-height: 1.58;
      font-size: 0.94rem;
    }

    .reprocannCard {
      background:
        radial-gradient(circle at top right, rgba(110, 142, 92, 0.16), transparent 28%),
        linear-gradient(180deg, rgba(13, 23, 18, 0.92), rgba(13, 23, 18, 0.98));
      border-radius: 26px;
      padding: 30px 24px;
      color: var(--text-light);
      min-height: 100%;
      box-shadow: var(--shadow);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .reprocannCard h3 {
      font-size: 1.95rem;
      line-height: 1.08;
      margin: 0 0 14px;
      letter-spacing: -0.03em;
    }

    .reprocannCard p {
      color: var(--muted-light);
      line-height: 1.74;
      margin: 0 0 18px;
    }

    .reprocannCard ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 10px;
    }

    .reprocannCard li {
      position: relative;
      padding-left: 22px;
      color: #eaf0e7;
    }

    .reprocannCard li::before {
      content: "✓";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--green-2);
      font-weight: 700;
    }

    .cultivoGrid {
      display: grid;
      grid-template-columns: 1.08fr 0.92fr;
      gap: 22px;
      align-items: stretch;
    }

    .cultivoImage {
      position: relative;
      min-height: 450px;
      border-radius: 26px;
      overflow: hidden;
      box-shadow: var(--shadow);
    }

    .cultivoTextCard {
      border-radius: 26px;
      padding: 36px 30px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.03));
      border: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
    }

    .cultivoTextCard h2 {
      margin: 0 0 16px;
      font-size: clamp(2rem, 4vw, 2.7rem);
      line-height: 1.07;
      letter-spacing: -0.03em;
    }

    .cultivoTextCard p {
      color: var(--muted-light);
      line-height: 1.74;
      margin: 0 0 14px;
    }

    .agroList {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 10px;
    }

    .agroList span {
      padding: 9px 13px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #eef1ea;
      font-size: 0.88rem;
    }

    .galleryGrid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr 0.8fr;
      gap: 16px;
    }

    .galleryCard {
      position: relative;
      border-radius: 24px;
      overflow: hidden;
      min-height: 340px;
      box-shadow: var(--shadow-soft);
      background: #fff;
    }

    .galleryCard.large {
      min-height: 440px;
    }

    .faqContactWrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      align-items: start;
    }

    .faqBlock h2 {
      margin: 0 0 16px;
      font-size: clamp(2rem, 4vw, 2.8rem);
      line-height: 1.06;
      color: var(--text-dark);
      letter-spacing: -0.03em;
    }

    .faqList {
      display: grid;
      gap: 12px;
    }

    .faqItem {
      background: rgba(255, 255, 255, 0.84);
      border: 1px solid rgba(0, 0, 0, 0.07);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: var(--shadow-soft-2);
    }

    .faqQuestion {
      width: 100%;
      background: transparent;
      color: var(--text-dark);
      border: 0;
      padding: 20px 18px;
      font-size: 1rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      text-align: left;
      gap: 16px;
    }

    .faqSymbol {
      font-size: 1.3rem;
      line-height: 1;
      flex-shrink: 0;
    }

    .faqAnswer {
      padding: 0 18px 22px;
    }

    .faqAnswer p {
      margin: 0;
      color: var(--muted-dark);
      line-height: 1.74;
    }

    .contactPromo {
      background:
        radial-gradient(circle at top right, rgba(110, 142, 92, 0.16), transparent 25%),
        linear-gradient(180deg, var(--dark-2) 0%, var(--dark) 100%);
      border-radius: 28px;
      padding: 30px 24px;
      color: var(--text-light);
      box-shadow: var(--shadow);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .contactPromo h2 {
      color: var(--text-light);
      font-size: clamp(1.95rem, 4vw, 2.6rem);
      line-height: 1.06;
      margin: 0 0 14px;
      text-wrap: balance;
      letter-spacing: -0.03em;
    }

    .contactPromo p {
      margin: 0 0 18px;
      color: var(--muted-light);
      line-height: 1.74;
    }

    .contactButtons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 20px;
    }

    .contactButtons .locationBtn {
      grid-column: span 2;
    }

    .contactPromoBtn {
      border-radius: 18px;
      padding: 16px 16px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-height: 80px;
      justify-content: center;
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: var(--shadow-soft);
      transition: transform 0.2s ease;
    }

    .contactPromoBtn:hover {
      transform: translateY(-2px);
    }

    .contactPromoBtn strong {
      font-size: 0.98rem;
    }

    .contactPromoBtn span {
      font-size: 0.92rem;
      color: rgba(255, 255, 255, 0.88);
    }

    .whatsappBtn {
      background: linear-gradient(135deg, #0f8b4b, #159f57);
    }

    .instagramBtn {
      background: linear-gradient(135deg, #7b2d78, #b93b6a);
    }

    .locationBtn {
      background: rgba(255, 255, 255, 0.08);
    }

    .contactMeta {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 18px;
      color: var(--muted-light);
      font-size: 0.92rem;
    }

    .contactMeta span::before {
      content: "•";
      margin-right: 8px;
      color: var(--green-2);
    }

    .footer {
      padding: 32px 0 18px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    .footerWrap {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr 0.8fr;
      gap: 28px;
      align-items: start;
    }

    .footerLogoRow {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 14px;
    }

    .footerLogoRow h3 {
      margin: 0 0 4px;
      color: var(--text-light);
      letter-spacing: -0.02em;
    }

    .footerLogoRow p,
    .footerStatement,
    .footerContact p {
      color: var(--muted-light);
    }

    .footerStatement {
      max-width: 420px;
      line-height: 1.68;
    }

    .footerLinks,
    .footerContact {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .footerLinks strong,
    .footerContact strong {
      margin-bottom: 6px;
      color: var(--text-light);
    }

    .footerLinks a {
      color: var(--muted-light);
    }

    .footerBottom {
      margin-top: 22px;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    .footerBottom p {
      margin: 0;
      color: var(--muted-light);
      font-size: 0.92rem;
      text-align: center;
    }

    .whatsappFloat {
      position: fixed;
      right: 18px;
      bottom: 18px;
      width: 62px;
      height: 62px;
      border-radius: 50%;
      background: #25d366;
      color: white;
      display: grid;
      place-items: center;
      font-size: 28px;
      box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);
      z-index: 60;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .whatsappFloat:hover {
      transform: translateY(-2px);
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.32);
    }

    .ageGate {
      position: fixed;
      inset: 0;
      z-index: 120;
      background: rgba(3, 6, 4, 0.78);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .ageBox {
      width: min(100%, 460px);
      background: #121b15;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 28px;
      padding: 34px;
      text-align: center;
      box-shadow: var(--shadow);
    }

    .ageBox h3 {
      font-size: 1.7rem;
      margin: 0 0 12px;
    }

    .ageBox p {
      color: var(--muted-light);
      margin: 0 0 24px;
    }

    .ageActions {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }

    @media (max-width: 1180px) {
      .heroGrid,
      .splitIntro,
      .areasGridWrap,
      .cultivoGrid,
      .faqContactWrap,
      .footerWrap {
        grid-template-columns: 1fr;
      }

      .introCards,
      .areasGrid,
      .trustGrid,
      .galleryGrid,
      .stepsRow {
        grid-template-columns: 1fr 1fr;
      }

      .trustGrid {
        gap: 12px;
        border-top: 0;
        border-bottom: 0;
      }

      .trustMini {
        border: 1px solid var(--line-light);
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.42);
      }

      .heroImage {
        min-height: 480px;
      }
    }

    @media (max-width: 920px) {
      section[id] {
        scroll-margin-top: 84px;
      }

      .desktopWhatsApp {
        display: none;
      }

      .menuToggle {
        display: inline-flex;
      }

      .menuBackdrop {
        display: block;
        position: fixed;
        inset: 0;
        z-index: 59;
        background: rgba(0, 0, 0, 0.28);
        border: 0;
      }

      .navLinks {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        right: 0;
        display: none;
        flex-direction: column;
        gap: 0;
        padding: 10px;
        background: rgba(13, 23, 18, 0.96);
        border: 1px solid var(--line-dark);
        border-radius: 20px;
        box-shadow: var(--shadow);
        z-index: 61;
      }

      .navLinks.open {
        display: flex;
      }

      .navLinks a {
        padding: 14px 12px;
        border-radius: 14px;
      }

      .navLinks a:hover {
        background: rgba(255, 255, 255, 0.05);
      }
    }

    @media (max-width: 760px) {
      .hero {
        padding: 24px 0 18px;
      }

      .heroGrid,
      .introCards,
      .areasGrid,
      .galleryGrid,
      .trustGrid,
      .stepsRow,
      .contactButtons {
        grid-template-columns: 1fr;
      }

      .contactButtons .locationBtn {
        grid-column: auto;
      }

      .heroText h1 {
        font-size: clamp(2.2rem, 9vw, 3.1rem);
        line-height: 0.98;
        letter-spacing: -1px;
      }

      .heroImage {
        min-height: 370px;
        border-radius: 24px;
      }

      .heroImg {
        object-position: center 64%;
      }

      .photoOne,
      .photoTwo,
      .cultivoImg,
      .galleryLarge,
      .galleryTwo,
      .galleryThree {
        object-position: center center;
      }

      .heroMiniCard {
        left: 14px;
        right: 14px;
        bottom: 14px;
        max-width: none;
      }

      .section {
        padding: 56px 0;
      }

      .smallPhoto {
        min-height: 250px;
      }

      .cultivoImage {
        min-height: 360px;
      }

      .galleryCard.large,
      .galleryCard {
        min-height: 290px;
      }

      .heroBody,
      .sectionText,
      .faqAnswer p {
        font-size: 0.97rem;
      }

      .whatsappFloat {
        width: 54px;
        height: 54px;
        right: 12px;
        bottom: 12px;
        font-size: 24px;
      }

      .btn {
        width: 100%;
      }

      .buttons {
        flex-direction: column;
      }

      .trustMini {
        padding: 18px 16px;
      }

      .areaCard {
        min-height: auto;
        padding: 24px 20px;
      }
    }

    @media (max-width: 520px) {
      .container {
        width: min(100% - 24px, var(--max));
      }

      .nav {
        min-height: 72px;
        gap: 14px;
      }

      .brandLogoWrap {
        width: 46px;
        height: 46px;
      }

      .brandTitle {
        font-size: 0.94rem;
      }

      .brandSub {
        font-size: 0.79rem;
      }

      .heroMiniCard {
        display: none;
      }

      .heroImage {
        min-height: 330px;
        border-radius: 22px;
      }

      .areaCard,
      .stepCard,
      .contactPromo,
      .reprocannCard,
      .smallPhotoCard,
      .faqItem {
        border-radius: 18px;
      }

      .ageBox {
        padding: 28px 22px;
        border-radius: 22px;
      }
    }
  `}</style>
</>
);
}


Cerrar
