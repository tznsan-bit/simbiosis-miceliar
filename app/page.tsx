"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function HomePage() {
  const [ageVerified, setAgeVerified] = useState<boolean | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("paciente");

  const whatsappHref =
    "https://wa.me/5492944138880?text=Hola%2C%20quiero%20recibir%20orientaci%C3%B3n%20de%20Simbiosis%20Miceliar.";
  const instagramHref = "https://instagram.com/simbiosismiceliar";
  const currentYear = new Date().getFullYear();

  const navItems = useMemo(
    () => [
      { href: "#quienes-somos", label: "Quiénes somos" },
      { href: "#como-trabajamos", label: "Cómo trabajamos" },
      { href: "#areas", label: "Áreas" },
      { href: "#lineas", label: "Líneas de trabajo" },
      { href: "#agroecologico", label: "Enfoque agroecológico" },
      { href: "#faq", label: "Preguntas frecuentes" },
      { href: "#contacto", label: "Contacto" },
    ],
    []
  );

  const pathCards = useMemo(
    () => [
      {
        id: "paciente",
        label: "Soy paciente",
        eyebrow: "Orientación inicial",
        title: "Te ayudamos a ordenar los primeros pasos",
        text: "Nos contás tu situación y vemos qué necesitás: orientación general, vinculación médica, información sobre REPROCANN o acompañamiento para avanzar con más claridad.",
        points: [
          "Primera orientación",
          "Pasos claros",
          "Reserva y cuidado de datos",
        ],
      },
      {
        id: "cultivador",
        label: "Soy cultivador/a",
        eyebrow: "Buenas prácticas",
        title: "Cultivar mejor también es cuidar mejor",
        text: "Nos interesa el cultivo desde la base: suelo vivo, nutrición orgánica, observación, buenas prácticas y plantas sanas. No pensamos el cannabis separado del ambiente donde crece.",
        points: [
          "Buenas prácticas de cultivo",
          "Suelo vivo y nutrición orgánica",
          "Formación y seguimiento",
        ],
      },
      {
        id: "institucion",
        label: "Soy institución",
        eyebrow: "Articulación territorial",
        title: "Articulamos proyectos que tengan sentido real",
        text: "Buscamos vincularnos con instituciones, profesionales, productores y espacios educativos para desarrollar proyectos concretos alrededor del cannabis medicinal, el cáñamo y la agroecología.",
        points: [
          "Equipos técnicos y profesionales",
          "Proyectos comunitarios",
          "Cáñamo medicinal e industrial",
        ],
      },
    ],
    []
  );

  const selectedPath =
    pathCards.find((item) => item.id === activePath) ?? pathCards[0];

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
    return <div className="bootScreen" aria-hidden="true" />;
  }

  return (
    <>
      {!ageVerified && (
        <div
          className="ageGate"
          role="dialog"
          aria-modal="true"
          aria-labelledby="age-gate-title"
        >
          <div className="ageBox">
            <div className="pill darkPill">Acceso al sitio</div>
            <h3 id="age-gate-title">¿Sos mayor de edad?</h3>
            <p>Este sitio está orientado a personas mayores de 18 años.</p>
            <div className="ageActions">
              <button className="btn btnPrimary" type="button" onClick={handleAgeYes}>
                Sí, soy mayor
              </button>
              <button className="btn btnSecondary" type="button" onClick={handleAgeNo}>
                No
              </button>
            </div>
          </div>
        </div>
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
              <div className="pill darkPill">Cannabis medicinal · Patagonia · Agroecología</div>

              <h1>
                Cannabis medicinal
                <span> desde la Patagonia</span>
              </h1>

              <p className="heroLead">
                Orientación para REPROCANN, cultivo agroecológico, formación y comunidad desde Lago
                Puelo.
              </p>

              <p className="heroBody">
                Trabajamos con personas que buscan ordenar su acceso al cannabis medicinal, aprender a cultivar mejor y ser parte de una red seria, cercana y con identidad patagónica.
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
                <span>Patagonia</span>
                <span>REPROCANN y orientación médica</span>
                <span>Cultivo agroecológico</span>
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
                <strong>Patagonia, suelo vivo y comunidad</strong>
                <span>Un proyecto que crece desde Lago Puelo, con cultivo cuidado y procesos claros.</span>
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
                <span>Te ayudamos a ordenar dudas y primeros pasos.</span>
              </div>
            </div>

            <div className="trustMini">
              <div className="trustIcon">✚</div>
              <div>
                <strong>REPROCANN</strong>
                <span>Orientación y vinculación con profesionales.</span>
              </div>
            </div>

            <div className="trustMini">
              <div className="trustIcon">❋</div>
              <div>
                <strong>Enfoque agroecológico</strong>
                <span>Suelo vivo, nutrición orgánica y buenas prácticas.</span>
              </div>
            </div>

            <div className="trustMini">
              <div className="trustIcon">◉</div>
              <div>
                <strong>Comunidad real</strong>
                <span>Una red real, con trabajo sostenido y presencia local.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="miniValue lightSection">
          <div className="container miniValueWrap">
            <p>
              Desde Lago Puelo impulsamos una forma de trabajar el cannabis medicinal que combina orientación, formación, cultivo agroecológico y vínculos reales con la comunidad.
            </p>
          </div>
        </section>

        <section className="pathSection lightSection">
          <div className="container pathWrap">
            <div className="pathIntro">
              <div className="pill lightPill">Acceso rápido</div>
              <h2>Encontrá por dónde empezar</h2>
              <p>
                No todos llegan con la misma duda. Por eso ordenamos la información según lo que estés buscando.
              </p>

              <div className="pathButtons">
                {pathCards.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`pathButton ${activePath === item.id ? "active" : ""}`}
                    onClick={() => setActivePath(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pathDetail">
              <div className="pill darkPill">{selectedPath.eyebrow}</div>
              <h3>{selectedPath.title}</h3>
              <p>{selectedPath.text}</p>

              <div className="pathPoints">
                {selectedPath.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>

              <a
                className="btn btnPrimary pathCta"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section lightSection" id="quienes-somos">
          <div className="container splitIntro">
            <div className="introBlock">
              <div className="pill lightPill">Quiénes somos</div>
              <h2>Un proyecto nacido en la Patagonia</h2>
              <p className="sectionLead darkText">
                Simbiosis Miceliar nace en Lago Puelo, en una zona donde la naturaleza, el cultivo y la comunidad tienen un peso real. Desde ahí trabajamos para acercar información clara sobre cannabis medicinal.
              </p>
              <p className="sectionText">
                No queremos una página que prometa de más ni hable difícil. Queremos que quien llegue entienda qué hacemos, cómo trabajamos y con quién puede hablar.
              </p>
              <p className="sectionText">
                También impulsamos formación práctica: cultivo, suelo, nutrición orgánica, terpenos, buenas prácticas y preparación responsable de derivados.
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
                <span>Cultivo, seguimiento y trabajo constante</span>
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
              <h2>Un recorrido simple y sin vueltas</h2>
              <p className="sectionLead">
                La idea es que no tengas que adivinar por dónde empezar. Primero ordenamos la consulta y después vemos el camino posible.
              </p>
            </div>

            <div className="stepsRow">
              <div className="stepCard">
                <div className="stepCircle">1</div>
                <h3>Nos escribís</h3>
                <p>Nos contás qué necesitás y cuál es tu situación.</p>
              </div>

              <div className="stepCard">
                <div className="stepCircle">2</div>
                <h3>Te orientamos</h3>
                <p>Te explicamos las opciones de forma simple, sin vueltas raras.</p>
              </div>

              <div className="stepCard">
                <div className="stepCircle">3</div>
                <h3>Te vinculamos</h3>
                <p>Si corresponde, te orientamos para la vinculación médica vinculada a REPROCANN.</p>
              </div>

              <div className="stepCard">
                <div className="stepCircle">4</div>
                <h3>Acompañamos</h3>
                <p>Después seguimos disponibles para acompañar dudas, formación y próximos pasos.</p>
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
                Trabajamos en distintas áreas, pero con una misma idea: cannabis medicinal bien explicado, cultivo cuidado y procesos claros.
              </p>

              <div className="areasGrid">
                <div className="areaCard">
                  <div className="areaIcon">◌</div>
                  <h3>Orientación inicial</h3>
                  <p>Ordenamos dudas y primeros pasos según cada caso.</p>
                </div>

                <div className="areaCard">
                  <div className="areaIcon">✚</div>
                  <h3>Vinculación médica</h3>
                  <p>Vinculación médica para procesos relacionados a REPROCANN.</p>
                </div>

                <div className="areaCard">
                  <div className="areaIcon">❋</div>
                  <h3>Cultivo agroecológico</h3>
                  <p>Suelo vivo, nutrición orgánica, observación y buenas prácticas.</p>
                </div>

                <div className="areaCard">
                  <div className="areaIcon">▣</div>
                  <h3>Formación</h3>
                  <p>Capacitaciones sobre cultivo, terpenos y derivados.</p>
                </div>

                <div className="areaCard">
                  <div className="areaIcon">◎</div>
                  <h3>Comunidad</h3>
                  <p>Una red cercana, con trabajo real y continuidad.</p>
                </div>

                <div className="areaCard">
                  <div className="areaIcon">♡</div>
                  <h3>Confidencialidad</h3>
                  <p>Cuidado de la información personal y sensible.</p>
                </div>
              </div>
            </div>

            <div className="areasRight">
              <div className="reprocannCard" id="reprocann">
                <div className="pill darkPill">REPROCANN</div>
                <h3>REPROCANN explicado de forma clara</h3>
                <p>
                  Muchas personas escuchan hablar de REPROCANN, pero no saben por dónde empezar, qué documentación necesitan o cómo seguir. En Simbiosis buscamos ordenar ese camino, orientar la consulta y vincular con profesionales cuando corresponde.
                </p>
                <ul>
                  <li>Información simple</li>
                  <li>Vinculación médica</li>
                  <li>Acompañamiento durante el proceso</li>
                  <li>Reserva y cuidado de datos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section lightSection" id="lineas">
          <div className="container linesWrap">
            <div className="linesIntro">
              <div className="pill lightPill">Elaboraciones, cáñamo y líneas de trabajo</div>
              <h2>No pensamos en “productos” aislados, sino en procesos completos</h2>
              <p>
                En Simbiosis Miceliar trabajamos distintas líneas vinculadas al cannabis medicinal,
                el cáñamo, la formación y el cultivo agroecológico. La idea no es mostrar un catálogo,
                sino contar qué áreas venimos desarrollando y hacia dónde queremos crecer.
              </p>
            </div>

            <div className="linesGrid">
              <article className="lineCard featuredLine">
                <div className="lineTop">
                  <span>01</span>
                  <strong>Medicinal</strong>
                </div>
                <h3>Preparados y derivados</h3>
                <p>
                  Formación, acompañamiento e información sobre derivados de uso medicinal dentro
                  del marco vigente, priorizando criterios de cuidado, trazabilidad y orientación
                  adecuada.
                </p>
              </article>

              <article className="lineCard">
                <div className="lineTop">
                  <span>02</span>
                  <strong>Agroecología</strong>
                </div>
                <h3>Cultivo con suelo vivo</h3>
                <p>
                  Trabajamos el cultivo desde la base: suelo, agua, nutrición orgánica, preparados
                  biológicos, prevención y observación diaria de las plantas.
                </p>
              </article>

              <article className="lineCard">
                <div className="lineTop">
                  <span>03</span>
                  <strong>Cáñamo</strong>
                </div>
                <h3>Desarrollo industrial y ambiental</h3>
                <p>
                  El cáñamo abre posibilidades productivas, educativas y ambientales. Queremos
                  impulsarlo desde Patagonia con proyectos serios, articulados y sostenibles.
                </p>
              </article>

              <article className="lineCard esperanzaLine">
                <div className="lineTop">
                  <span>04</span>
                  <strong>Proyecto</strong>
                </div>
                <h3>Sembrando Esperanza</h3>
                <p>
                  Una línea de trabajo para articular cannabis medicinal, cáñamo, formación y comunidad.
                  Un espacio para sembrar proyectos concretos, con sentido local y mirada a futuro.
                </p>
              </article>
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
              <h2>Cultivo agroecológico: desde el suelo hasta la planta</h2>
              <p>
                Para nosotros el cultivo empieza antes de la planta. Empieza en el suelo, en el agua, en la nutrición, en la observación diaria y en la decisión de no apurar procesos.
              </p>
              <p>
                Trabajamos con una mirada agroecológica: suelo vivo, materia orgánica, preparados biológicos, prevención, manejo limpio y respeto por el entorno patagónico. La calidad final depende de todo ese camino.
              </p>
              <div className="agroList">
                <span>Inocuidad</span>
                <span>Procesos limpios</span>
                <span>Nutrición orgánica</span>
                <span>Cuidado del ambiente</span>
                <span>Buenas prácticas</span>
                <span>Patagonia</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section lightSection">
          <div className="container">
            <div className="sectionTop">
              <div className="pill lightPill">Territorio y comunidad</div>
              <h2>Una identidad que nace del cultivo y la Patagonia</h2>
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
              <h2>Preguntas frecuentes</h2>

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
              <h2>Escribinos y vemos cómo orientarte</h2>
              <p>
                Si querés consultar por REPROCANN, formación, cultivo agroecológico o articulaciones, escribinos. Primero escuchamos la situación y después vemos cómo seguir.
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
                <p>Cannabis medicinal y agroecología desde Patagonia</p>
              </div>
            </div>

            <p className="footerStatement">
              Cannabis medicinal, agroecología, formación y comunidad desde Lago Puelo.
            </p>
          </div>

          <div className="footerLinks">
            <strong>Enlaces</strong>
            <a href="#inicio">Inicio</a>
            <a href="#quienes-somos">Quiénes somos</a>
            <a href="#areas">Áreas</a>
            <a href="#lineas">Líneas de trabajo</a>
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

        .pathSection {
          padding: 54px 0 72px;
        }

        .pathWrap {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 24px;
          align-items: stretch;
        }

        .pathIntro,
        .pathDetail {
          border-radius: 28px;
          padding: 30px 24px;
          box-shadow: var(--shadow-soft-2);
        }

        .pathIntro {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .pathIntro h2 {
          margin: 0 0 12px;
          color: var(--text-dark);
          font-size: clamp(2rem, 4vw, 2.8rem);
          line-height: 1.04;
          letter-spacing: -0.03em;
        }

        .pathIntro p {
          margin: 0;
          color: var(--muted-dark);
          line-height: 1.72;
          font-size: 1rem;
        }

        .pathButtons {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 24px;
        }

        .pathButton {
          border: 1px solid rgba(13, 23, 18, 0.1);
          background: rgba(255, 255, 255, 0.72);
          color: var(--text-dark);
          border-radius: 18px;
          padding: 16px 16px;
          text-align: left;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }

        .pathButton:hover {
          transform: translateY(-2px);
        }

        .pathButton.active {
          background: linear-gradient(135deg, var(--dark-2), var(--dark));
          color: var(--text-light);
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: var(--shadow-soft);
        }

        .pathDetail {
          background:
            radial-gradient(circle at top right, rgba(110, 142, 92, 0.16), transparent 28%),
            linear-gradient(180deg, rgba(13, 23, 18, 0.94), rgba(13, 23, 18, 0.99));
          color: var(--text-light);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pathDetail h3 {
          margin: 0 0 14px;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.03;
          letter-spacing: -0.04em;
        }

        .pathDetail p {
          margin: 0;
          color: var(--muted-light);
          line-height: 1.75;
          font-size: 1rem;
        }

        .pathPoints {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .pathPoints span {
          padding: 9px 13px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #eef1ea;
          font-size: 0.88rem;
        }

        .pathCta {
          margin-top: 26px;
          width: fit-content;
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

        .linesWrap {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 28px;
          align-items: start;
        }

        .linesIntro {
          position: sticky;
          top: 110px;
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 28px;
          padding: 30px 24px;
          box-shadow: var(--shadow-soft-2);
        }

        .linesIntro h2 {
          margin: 0 0 14px;
          color: var(--text-dark);
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.04;
          letter-spacing: -0.03em;
          text-wrap: balance;
        }

        .linesIntro p {
          margin: 0;
          color: var(--muted-dark);
          line-height: 1.74;
          font-size: 1rem;
        }

        .linesGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .lineCard {
          min-height: 250px;
          border-radius: 24px;
          padding: 22px 20px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: var(--shadow-soft-2);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .lineCard:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-soft);
        }

        .featuredLine,
        .esperanzaLine {
          background:
            radial-gradient(circle at top right, rgba(110, 142, 92, 0.16), transparent 30%),
            linear-gradient(180deg, #17241c 0%, #0d1712 100%);
          color: var(--text-light);
          border-color: rgba(255, 255, 255, 0.08);
        }

        .lineTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 26px;
        }

        .lineTop span {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(110, 142, 92, 0.16);
          color: #4f6e48;
          display: grid;
          place-items: center;
          font-size: 0.86rem;
          font-weight: 800;
        }

        .featuredLine .lineTop span,
        .esperanzaLine .lineTop span {
          background: rgba(255, 255, 255, 0.08);
          color: var(--green-2);
        }

        .lineTop strong {
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(13, 23, 18, 0.06);
          color: var(--muted-dark);
          font-size: 0.82rem;
        }

        .featuredLine .lineTop strong,
        .esperanzaLine .lineTop strong {
          background: rgba(255, 255, 255, 0.07);
          color: var(--muted-light);
        }

        .lineCard h3 {
          margin: 0 0 12px;
          color: var(--text-dark);
          font-size: 1.45rem;
          line-height: 1.08;
          letter-spacing: -0.02em;
        }

        .featuredLine h3,
        .esperanzaLine h3 {
          color: var(--text-light);
        }

        .lineCard p {
          margin: 0;
          color: var(--muted-dark);
          line-height: 1.68;
          font-size: 0.96rem;
        }

        .featuredLine p,
        .esperanzaLine p {
          color: var(--muted-light);
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
          .footerWrap,
          .pathWrap {
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

          .pathSection {
          padding: 54px 0 72px;
        }

        .pathWrap {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 24px;
          align-items: stretch;
        }

        .pathIntro,
        .pathDetail {
          border-radius: 28px;
          padding: 30px 24px;
          box-shadow: var(--shadow-soft-2);
        }

        .pathIntro {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .pathIntro h2 {
          margin: 0 0 12px;
          color: var(--text-dark);
          font-size: clamp(2rem, 4vw, 2.8rem);
          line-height: 1.04;
          letter-spacing: -0.03em;
        }

        .pathIntro p {
          margin: 0;
          color: var(--muted-dark);
          line-height: 1.72;
          font-size: 1rem;
        }

        .pathButtons {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 24px;
        }

        .pathButton {
          border: 1px solid rgba(13, 23, 18, 0.1);
          background: rgba(255, 255, 255, 0.72);
          color: var(--text-dark);
          border-radius: 18px;
          padding: 16px 16px;
          text-align: left;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }

        .pathButton:hover {
          transform: translateY(-2px);
        }

        .pathButton.active {
          background: linear-gradient(135deg, var(--dark-2), var(--dark));
          color: var(--text-light);
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: var(--shadow-soft);
        }

        .pathDetail {
          background:
            radial-gradient(circle at top right, rgba(110, 142, 92, 0.16), transparent 28%),
            linear-gradient(180deg, rgba(13, 23, 18, 0.94), rgba(13, 23, 18, 0.99));
          color: var(--text-light);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pathDetail h3 {
          margin: 0 0 14px;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.03;
          letter-spacing: -0.04em;
        }

        .pathDetail p {
          margin: 0;
          color: var(--muted-light);
          line-height: 1.75;
          font-size: 1rem;
        }

        .pathPoints {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .pathPoints span {
          padding: 9px 13px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #eef1ea;
          font-size: 0.88rem;
        }

        .pathCta {
          margin-top: 26px;
          width: fit-content;
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
          .faqItem,
          .pathIntro,
          .pathDetail {
            border-radius: 18px;
          }

          .ageBox {
            padding: 28px 22px;
            border-radius: 22px;
          }
        }

        /* AJUSTES FINALES MOBILE / CONTRASTE */
        .darkSection .sectionTop h2,
        .darkSection .centerTop h2 {
          color: var(--text-light);
        }

        .darkSection .sectionLead {
          color: var(--muted-light);
        }

        @media (max-width: 760px) {
          .pathWrap {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .pathIntro,
          .pathDetail {
            width: 100% !important;
            max-width: 100% !important;
            padding: 24px 18px !important;
            border-radius: 22px !important;
          }

          .pathIntro h2,
          .pathDetail h3 {
            font-size: clamp(2.05rem, 10vw, 2.8rem) !important;
            line-height: 1.04 !important;
            letter-spacing: -0.04em !important;
          }

          .pathIntro p,
          .pathDetail p {
            font-size: 1rem !important;
            line-height: 1.65 !important;
          }

          .pathButtons {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }

          .pathButton {
            width: 100% !important;
            padding: 15px 16px !important;
            border-radius: 16px !important;
            font-size: 1rem !important;
          }

          .pathPoints {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 9px !important;
          }

          .pathPoints span {
            width: 100% !important;
          }

          .pathCta {
            width: 100% !important;
          }

          .sectionTop h2,
          .introBlock h2,
          .areasLeft h2,
          .faqBlock h2,
          .contactPromo h2 {
            font-size: clamp(2rem, 9.5vw, 2.8rem) !important;
            line-height: 1.06 !important;
          }

          .footerBottom {
            padding-bottom: 56px;
          }
        }

        @media (max-width: 520px) {
          .pathIntro,
          .pathDetail {
            border-radius: 20px !important;
          }

          .pathIntro h2,
          .pathDetail h3 {
            font-size: clamp(2rem, 10vw, 2.55rem) !important;
          }
        }


        @media (max-width: 1180px) {
          .linesWrap {
            grid-template-columns: 1fr !important;
          }

          .linesIntro {
            position: relative !important;
            top: auto !important;
          }
        }

        @media (max-width: 760px) {
          .linesGrid {
            grid-template-columns: 1fr !important;
          }

          .linesIntro,
          .lineCard {
            border-radius: 18px !important;
          }

          .lineCard {
            min-height: auto !important;
          }
        }

      `}</style>
    </>
  );
}
