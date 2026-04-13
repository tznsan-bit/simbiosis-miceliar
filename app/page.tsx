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
                  <p>
                    Cultivo responsable con enfoque agroecológico, priorizando inocuidad, procesos
                    seguros para el consumidor, el productor y el medio ambiente, y nutrición
                    orgánica sin aditivos sintéticos.
                  </p>
                </div>

                <div className="areaCard">
                  <div className="areaIcon">▣</div>
                  <h3>Formación</h3>
                  <p>
                    Capacitaciones teórico-prácticas a lo largo del ciclo de cultivo, experiencias
                    con terpenos y formación en preparación de derivados.
                  </p>
                </div>

                <div className="areaCard">
                  <div className="areaIcon">◎</div>
                  <h3>Comunidad</h3>
                  <p>Escucha, confianza y acompañamiento humano.</p>
                </div>

                <div className="areaCard">
                  <div className="areaIcon">♡</div>
                  <h3>Confidencialidad</h3>
                  <p>
                    Cuidamos el uso adecuado de la información personal y sensible, con criterios
                    de confidencialidad y resguardo acordes a la Ley 25.326.
                  </p>
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
                  src="/cultivo-1.jpg"
                  alt="Imagen del proyecto"
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
                        <span>{isOpen ? "−" : "+"}</span>
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
          --light: #eee5d8;
          --stone: #e2d3bd;
          --white: #ffffff;
          --text-dark: #1d241e;
          --text-light: #f5f1e8;
          --muted-dark: #5f685f;
          --muted-light: #c9d0c5;
          --line-dark: rgba(255, 255, 255, 0.08);
          --line-light: rgba(16, 24, 18, 0.08);
          --shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
          --shadow-soft: 0 10px 22px rgba(0, 0, 0, 0.07);
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
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        section[id] {
          scroll-margin-top: 92px;
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
          object-position: center 40%;
        }

        .darkSection {
          background:
            radial-gradient(circle at top left, rgba(110, 142, 92, 0.12), transparent 28%),
            radial-gradient(circle at right center, rgba(238, 229, 216, 0.06), transparent 24%),
            linear-gradient(180deg, var(--dark) 0%, var(--dark-2) 100%);
          color: var(--text-light);
        }

        .lightSection {
          background: linear-gradient(180deg, var(--light) 0%, var(--stone) 100%);
          color: var(--text-dark);
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 60;
          background: rgba(13, 23, 18, 0.82);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--line-dark);
        }

        .nav {
          min-height: 78px;
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
          border-radius: 14px;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--line-dark);
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
          line-height: 1.1;
        }

        .brandSub {
          color: var(--muted-light);
          font-size: 0.84rem;
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
          transition: opacity 0.2s ease;
        }

        .navLinks a:hover {
          opacity: 1;
        }

        .desktopWhatsApp {
          padding: 12px 18px;
          border-radius: 999px;
          background: linear-gradient(135deg, #177f48, #22a55c);
          color: white;
          font-weight: 700;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
          white-space: nowrap;
        }

        .hero {
          padding: 30px 0 28px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 34px;
          align-items: center;
        }

        .heroText h1 {
          margin: 0 0 16px;
          font-size: clamp(2.45rem, 5.5vw, 4.9rem);
          line-height: 0.98;
          letter-spacing: -1.3px;
          max-width: 720px;
          text-wrap: balance;
        }

        .heroText h1 span {
          color: var(--green-2);
        }

        .heroLead {
          font-size: clamp(1.04rem, 2vw, 1.18rem);
          line-height: 1.6;
          color: var(--text-light);
          opacity: 0.96;
          max-width: 720px;
          margin: 0 0 10px;
        }

        .heroBody {
          font-size: 1rem;
          line-height: 1.72;
          color: var(--muted-light);
          max-width: 700px;
          margin: 0;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
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
        }

        .btnPrimary {
          background: linear-gradient(135deg, #177f48, #22a55c);
          color: white;
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.2);
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
          margin-top: 22px;
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
          min-height: 560px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: var(--shadow);
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(4, 10, 6, 0.08), rgba(4, 10, 6, 0.34));
        }

        .heroMiniCard {
          position: absolute;
          right: 18px;
          bottom: 18px;
          max-width: 270px;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(11, 23, 17, 0.78);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
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
          line-height: 1.4;
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
          padding: 24px 0;
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
          width: 34px;
          height: 34px;
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
          padding: 22px 0 6px;
        }

        .miniValueWrap {
          text-align: center;
        }

        .miniValueWrap p {
          max-width: 880px;
          margin: 0 auto;
          color: var(--text-dark);
          font-size: 1.08rem;
          line-height: 1.7;
        }

        .section {
          padding: 72px 0;
        }

        .sectionTop {
          margin-bottom: 28px;
        }

        .centerTop {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 28px;
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
          line-height: 1.05;
          color: var(--text-dark);
          text-wrap: balance;
        }

        .sectionLead {
          font-size: clamp(1.04rem, 2vw, 1.16rem);
          line-height: 1.62;
          max-width: 760px;
          margin: 0;
        }

        .darkText {
          color: var(--text-dark);
        }

        .sectionText {
          color: var(--muted-dark);
          line-height: 1.7;
          margin-top: 14px;
          max-width: 700px;
        }

        .introCards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .smallPhotoCard {
          background: rgba(255, 255, 255, 0.88);
          border-radius: 18px;
          padding: 12px;
          box-shadow: var(--shadow-soft);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .smallPhoto {
          position: relative;
          width: 100%;
          min-height: 220px;
          border-radius: 14px;
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
          padding: 26px 20px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        .stepCircle {
          width: 38px;
          height: 38px;
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
          line-height: 1.6;
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
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 18px;
          padding: 22px 18px;
          box-shadow: var(--shadow-soft);
          min-height: 170px;
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
          line-height: 1.55;
          font-size: 0.94rem;
        }

        .reprocannCard {
          background:
            radial-gradient(circle at top right, rgba(110, 142, 92, 0.16), transparent 28%),
            linear-gradient(180deg, rgba(13, 23, 18, 0.92), rgba(13, 23, 18, 0.98));
          border-radius: 22px;
          padding: 28px 24px;
          color: var(--text-light);
          min-height: 100%;
          box-shadow: var(--shadow);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .reprocannCard h3 {
          font-size: 1.95rem;
          line-height: 1.1;
          margin: 0 0 14px;
        }

        .reprocannCard p {
          color: var(--muted-light);
          line-height: 1.7;
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
          min-height: 430px;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .cultivoTextCard {
          border-radius: 24px;
          padding: 34px 30px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.03));
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cultivoTextCard h2 {
          margin: 0 0 16px;
          font-size: clamp(2rem, 4vw, 2.7rem);
          line-height: 1.1;
        }

        .cultivoTextCard p {
          color: var(--muted-light);
          line-height: 1.72;
          margin: 0 0 14px;
        }

        .agroList {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 8px;
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
          border-radius: 22px;
          overflow: hidden;
          min-height: 330px;
          box-shadow: var(--shadow-soft);
          background: #fff;
        }

        .galleryCard.large {
          min-height: 420px;
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
          line-height: 1.08;
          color: var(--text-dark);
        }

        .faqList {
          display: grid;
          gap: 12px;
        }

        .faqItem {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(0, 0, 0, 0.07);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: var(--shadow-soft);
        }

        .faqQuestion {
          width: 100%;
          background: transparent;
          color: var(--text-dark);
          border: 0;
          padding: 18px 18px;
          font-size: 1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          text-align: left;
        }

        .faqAnswer {
          padding: 0 18px 18px;
        }

        .faqAnswer p {
          margin: 0;
          color: var(--muted-dark);
          line-height: 1.65;
        }

        .contactPromo {
          background:
            radial-gradient(circle at top right, rgba(110, 142, 92, 0.16), transparent 25%),
            linear-gradient(180deg, var(--dark-2) 0%, var(--dark) 100%);
          border-radius: 24px;
          padding: 28px 24px;
          color: var(--text-light);
          box-shadow: var(--shadow);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contactPromo h2 {
          color: var(--text-light);
          font-size: clamp(1.9rem, 4vw, 2.6rem);
          line-height: 1.08;
          margin: 0 0 14px;
          text-wrap: balance;
        }

        .contactPromo p {
          margin: 0 0 18px;
          color: var(--muted-light);
          line-height: 1.72;
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
          border-radius: 16px;
          padding: 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-height: 78px;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: var(--shadow-soft);
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
          padding: 28px 0 18px;
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
        }

        .footerLogoRow p,
        .footerStatement,
        .footerContact p {
          color: var(--muted-light);
        }

        .footerStatement {
          max-width: 420px;
          line-height: 1.65;
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
          transition: transform 0.2s ease;
        }

        .whatsappFloat:hover {
          transform: translateY(-2px);
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
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.45);
          }

          .heroImage {
            min-height: 460px;
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
            font-size: clamp(2.15rem, 9vw, 3rem);
            line-height: 1;
            letter-spacing: -0.9px;
          }

          .heroImage {
            min-height: 360px;
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
            padding: 54px 0;
          }

          .smallPhoto {
            min-height: 250px;
          }

          .cultivoImage {
            min-height: 360px;
          }

          .galleryCard.large,
          .galleryCard {
            min-height: 280px;
          }

          .heroBody,
          .sectionText,
          .faqAnswer p {
            font-size: 0.97rem;
          }

          .whatsappFloat {
            width: 58px;
            height: 58px;
            right: 14px;
            bottom: 14px;
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
