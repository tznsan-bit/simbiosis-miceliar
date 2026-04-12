"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [ageVerified, setAgeVerified] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const saved = sessionStorage.getItem("ageVerified");
    setAgeVerified(saved === "true");
  }, []);

  const handleAgeYes = () => {
    sessionStorage.setItem("ageVerified", "true");
    setAgeVerified(true);
  };

  const handleAgeNo = () => {
    window.location.href = "https://www.google.com";
  };

  const faqs = [
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
      a: "Sí. Contamos con médicos encargados de la vinculación a REPROCANN, acompañando ese proceso con seriedad, criterio y cercanía.",
    },
    {
      q: "¿Ofrecen acompañamiento durante el proceso?",
      a: "Sí. Nuestro enfoque no termina en una respuesta aislada. Buscamos acompañar de manera cercana, ordenada y humana.",
    },
    {
      q: "¿La consulta es confidencial?",
      a: "Sí. Priorizamos el respeto, la privacidad y el cuidado de cada proceso personal.",
    },
    {
      q: "¿También trabajan formación y cultivo responsable?",
      a: "Sí. Promovemos una mirada integral que incluye formación, cultivo responsable, comunidad y construcción de saberes.",
    },
  ];

  return (
    <>
      {!ageVerified && (
        <div className="ageGate">
          <div className="ageBox">
            <div className="pill">Acceso al sitio</div>
            <h3>¿Sos mayor de edad?</h3>
            <p>Este sitio está dirigido a personas mayores de 18 años.</p>
            <div className="ageActions">
              <button className="btn btnPrimary" onClick={handleAgeYes}>
                Sí, soy mayor
              </button>
              <button className="btn btnSecondary" onClick={handleAgeNo}>
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="leaf leaf1">🍃</div>
      <div className="leaf leaf2">🍃</div>
      <div className="leaf leaf3">🍃</div>
      <div className="leaf leaf4">🍃</div>

      <header className="header">
        <div className="container nav">
          <a href="#inicio" className="brand">
            <img src="/logo.png" alt="Logo de Simbiosis Miceliar" className="brandLogo" />
            <div>
              <div className="brandTitle">Simbiosis Miceliar</div>
              <div className="brandSub">Proyecto patagónico</div>
            </div>
          </a>

          <nav className="navLinks">
            <a href="#quienes-somos">Quiénes somos</a>
            <a href="#como-trabajamos">Cómo trabajamos</a>
            <a href="#areas">Áreas</a>
            <a href="#reprocann">REPROCANN</a>
            <a href="#faq">Preguntas frecuentes</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container heroGrid">
            <div className="heroText">
              <div className="pill">Cannabis medicinal · Comunidad · Patagonia</div>
              <h1>Acompañamiento claro, humano y responsable</h1>
              <p className="heroLead">
                Proyecto patagónico de acompañamiento, formación y articulación en
                cannabis medicinal.
              </p>
              <p className="heroBody">
                En Simbiosis Miceliar trabajamos desde una mirada cercana, comunitaria y
                responsable, acompañando procesos de orientación, vinculación médica
                para REPROCANN, formación y seguimiento.
              </p>

              <div className="buttons">
                <a
                  className="btn btnPrimary"
                  href="https://wa.me/5492944138880?text=Hola%2C%20quiero%20recibir%20orientaci%C3%B3n."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hablar por WhatsApp
                </a>
                <a className="btn btnSecondary" href="#como-trabajamos">
                  Ver cómo trabajamos
                </a>
              </div>

              <div className="badges">
                <span>Proyecto patagónico</span>
                <span>Vinculación médica para REPROCANN</span>
                <span>Acompañamiento cercano</span>
                <span>Confidencialidad y cuidado</span>
              </div>
            </div>

            <div className="heroImage">
              <img src="/IMG_3967.jpeg" alt="Simbiosis Miceliar" />
              <div className="heroOverlay" />
            </div>
          </div>
        </section>

        <section className="trustStrip">
          <div className="container trustGrid">
            <div className="trustItem">
              <strong>Orientación personalizada</strong>
              <span>Escucha, claridad y acompañamiento según cada caso.</span>
            </div>
            <div className="trustItem">
              <strong>REPROCANN</strong>
              <span>Vinculación médica y proceso acompañado de forma ordenada.</span>
            </div>
            <div className="trustItem">
              <strong>Cultivo responsable</strong>
              <span>Formación, cuidado y construcción de saberes desde el territorio.</span>
            </div>
            <div className="trustItem">
              <strong>Comunidad real</strong>
              <span>Un espacio cercano, serio y humano.</span>
            </div>
          </div>
        </section>

        <section className="section" id="quienes-somos">
          <div className="container">
            <div className="pill">Quiénes somos</div>
            <h2>Una comunidad construida desde el territorio</h2>
            <p className="sectionLead">
              Simbiosis Miceliar es un proyecto patagónico que nace del vínculo cercano
              con las personas, la comunidad y el cuidado de los procesos.
            </p>

            <div className="twoCols">
              <div className="card">
                <p>
                  Creemos que el acceso a la información, la orientación responsable y
                  el acompañamiento humano hacen una diferencia real en los recorridos
                  vinculados al cannabis medicinal.
                </p>
              </div>
              <div className="card">
                <p>
                  Nuestro enfoque combina cercanía, seriedad, identidad territorial y
                  compromiso comunitario. Buscamos que cada persona encuentre un espacio
                  claro, respetuoso y confiable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="como-trabajamos">
          <div className="container">
            <div className="pill">Cómo trabajamos</div>
            <h2>Un recorrido simple, cuidado y ordenado</h2>
            <p className="sectionLead">
              Queremos que quien llega a Simbiosis entienda rápido qué hacemos y cómo
              empieza el proceso.
            </p>

            <div className="steps">
              <div className="step card">
                <div className="stepNum">1</div>
                <div>
                  <h3>Nos escribís</h3>
                  <p>
                    Recibimos tu consulta por WhatsApp y conocemos tu situación, tus
                    dudas y lo que necesitás orientar.
                  </p>
                </div>
              </div>

              <div className="step card">
                <div className="stepNum">2</div>
                <div>
                  <h3>Te orientamos</h3>
                  <p>
                    Brindamos una primera orientación clara, cercana y responsable para
                    ayudarte a entender el camino posible según tu caso.
                  </p>
                </div>
              </div>

              <div className="step card">
                <div className="stepNum">3</div>
                <div>
                  <h3>Te vinculamos</h3>
                  <p>
                    Cuando corresponde, articulamos la vinculación con profesionales
                    médicos para el proceso de REPROCANN.
                  </p>
                </div>
              </div>

              <div className="step card">
                <div className="stepNum">4</div>
                <div>
                  <h3>Acompañamos el seguimiento</h3>
                  <p>
                    Sostenemos una relación cercana, con continuidad y compromiso,
                    priorizando siempre el cuidado de cada proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="areas">
          <div className="container">
            <div className="pill">Áreas de trabajo</div>
            <h2>Qué hacemos en Simbiosis Miceliar</h2>
            <p className="sectionLead">
              Integramos orientación, acompañamiento, formación y comunidad desde una
              mirada responsable.
            </p>

            <div className="gridCards">
              <div className="card">
                <h3>Orientación inicial</h3>
                <p>
                  Escuchamos cada situación de forma personalizada para orientar con
                  claridad, respeto y criterio.
                </p>
              </div>
              <div className="card">
                <h3>Vinculación médica</h3>
                <p>
                  Contamos con médicos encargados de la vinculación a REPROCANN,
                  acompañando el proceso de manera seria y ordenada.
                </p>
              </div>
              <div className="card">
                <h3>Acompañamiento</h3>
                <p>
                  No trabajamos desde una lógica fría o automática. Buscamos presencia
                  real, seguimiento y cercanía.
                </p>
              </div>
              <div className="card">
                <h3>Formación</h3>
                <p>
                  Promovemos la circulación de saberes, el aprendizaje y una mirada
                  consciente sobre los procesos vinculados al cannabis medicinal.
                </p>
              </div>
              <div className="card">
                <h3>Cultivo responsable</h3>
                <p>
                  Entendemos el cultivo como parte de una perspectiva integral basada en
                  el cuidado, la responsabilidad y el territorio.
                </p>
              </div>
              <div className="card">
                <h3>Comunidad</h3>
                <p>
                  Sostenemos un vínculo cercano con quienes se acercan a Simbiosis,
                  priorizando escucha, confianza y acompañamiento humano.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="reprocann">
          <div className="container">
            <div className="highlight">
              <div className="pill">REPROCANN</div>
              <h2>Acompañamiento claro para un proceso sensible</h2>
              <p className="sectionLead">
                Sabemos que muchas personas llegan con dudas, desinformación o
                incertidumbre sobre REPROCANN.
              </p>
              <p>
                Por eso ofrecemos un acompañamiento claro y cercano, ayudando a ordenar
                el proceso y brindando orientación en cada etapa. Contamos con médicos
                encargados de la vinculación a REPROCANN y acompañamos a las personas
                para que puedan transitar ese camino con más claridad, resguardo y
                tranquilidad.
              </p>
              <p className="strongLine">
                Acompañamos con cercanía, seriedad y criterio, priorizando siempre el
                cuidado de cada proceso.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="cultivo">
          <div className="container">
            <div className="pill">Cultivo responsable y formación</div>
            <h2>Aprendizaje, cuidado y territorio</h2>

            <div className="twoCols">
              <div className="card imageCard">
                <img src="/IMG_3924.jpeg" alt="Cultivo responsable" />
              </div>
              <div className="card textCard">
                <p>
                  Entendemos el cultivo como parte de una mirada integral, basada en el
                  aprendizaje, la responsabilidad y el vínculo con el territorio.
                </p>
                <p>
                  Promovemos una perspectiva consciente sobre los procesos de cultivo,
                  el cuidado, la formación y la construcción de saberes, desde una
                  lógica seria, comunitaria y respetuosa.
                </p>
                <p>
                  Para nosotros, cultivar también es aprender, compartir conocimiento y
                  fortalecer una red construida desde la experiencia y la cercanía.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section gallerySection">
          <div className="container">
            <div className="pill">Identidad visual</div>
            <h2>Territorio, cuidado y comunidad</h2>
            <div className="galleryGrid">
              <div className="galleryCard large">
                <img src="/IMG_3819.jpeg" alt="Territorio y comunidad" />
              </div>
              <div className="galleryCard">
                <img src="/IMG_3967.jpeg" alt="Simbiosis Miceliar Patagonia" />
              </div>
              <div className="galleryCard">
                <img src="/IMG_3924.jpeg" alt="Cultivo y formación" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="pill">Preguntas frecuentes</div>
            <h2>Dudas comunes, respuestas claras</h2>

            <div className="faqList">
              {faqs.map((item, index) => (
                <div key={index} className={`faqItem ${openFaq === index ? "active" : ""}`}>
                  <button
                    className="faqQuestion"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span>{item.q}</span>
                    <span>{openFaq === index ? "−" : "+"}</span>
                  </button>
                  {openFaq === index && (
                    <div className="faqAnswer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section ctaSection">
          <div className="container">
            <div className="highlight">
              <div className="pill">Primer contacto</div>
              <h2>Estamos para acompañarte</h2>
              <p className="sectionLead">
                Si querés recibir orientación, conocer cómo trabajamos o iniciar un
                primer contacto, escribinos y te respondemos de forma cercana y clara.
              </p>
              <div className="buttons">
                <a
                  className="btn btnPrimary"
                  href="https://wa.me/5492944138880?text=Hola%2C%20quiero%20recibir%20orientaci%C3%B3n."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escribinos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contacto">
          <div className="container contactGrid">
            <div>
              <div className="pill">Contacto</div>
              <h2>Comunicate con nosotros</h2>
              <p className="sectionLead">
                Podés escribirnos para recibir orientación, realizar consultas o conocer
                más sobre nuestro trabajo.
              </p>

              <div className="contactList">
                <a
                  className="contactItem"
                  href="https://wa.me/5492944138880?text=Hola%2C%20quiero%20recibir%20orientaci%C3%B3n."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>WhatsApp</strong>
                  <span>+54 9 2944 13 8880</span>
                </a>

                <a
                  className="contactItem"
                  href="https://instagram.com/simbiosismiceliar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Instagram</strong>
                  <span>@simbiosismiceliar</span>
                </a>

                <div className="contactItem">
                  <strong>Ubicación</strong>
                  <span>Lago Puelo · Patagonia</span>
                </div>

                <div className="contactItem">
                  <strong>Sitio web</strong>
                  <span>simbiosismiceliar.com.ar</span>
                </div>
              </div>
            </div>

            <div className="card contactSide">
              <h3>Confidencialidad y cuidado</h3>
              <p>
                Trabajamos con respeto, escucha y confidencialidad en cada proceso,
                priorizando la tranquilidad de quienes se acercan a Simbiosis
                Miceliar.
              </p>

              <div className="miniPolicy">
                <strong>Privacidad</strong>
                <span>
                  La información compartida en el primer contacto se trata con cuidado y
                  reserva.
                </span>
              </div>

              <div className="buttons">
                <a
                  className="btn btnSecondary"
                  href="https://wa.me/5492944138880?text=Hola%2C%20quiero%20recibir%20orientaci%C3%B3n."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escribir ahora
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerWrap">
          <div>
            <h3>Simbiosis Miceliar</h3>
            <p>
              Proyecto patagónico de acompañamiento, formación y articulación en
              cannabis medicinal.
            </p>
            <p className="footerLine">
              Hecho con identidad territorial, cercanía humana y compromiso comunitario.
            </p>
          </div>

          <div className="footerInfo">
            <p><strong>WhatsApp:</strong> +54 9 2944 13 8880</p>
            <p><strong>Instagram:</strong> @simbiosismiceliar</p>
            <p><strong>Ubicación:</strong> Lago Puelo · Patagonia</p>
            <p><strong>Web:</strong> simbiosismiceliar.com.ar</p>
          </div>
        </div>
      </footer>

      <a
        className="whatsappFloat"
        href="https://wa.me/5492944138880?text=Hola%2C%20quiero%20recibir%20orientaci%C3%B3n."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        ✆
      </a>

      <style jsx global>{`
        :root {
          --bg: #09100b;
          --bg2: #101913;
          --card: rgba(255, 255, 255, 0.05);
          --line: rgba(255, 255, 255, 0.08);
          --text: #f4f2ec;
          --muted: #c6c9c1;
          --green: #9cc77e;
          --green2: #7faa61;
          --gold: #d8b96a;
          --shadow: 0 14px 40px rgba(0, 0, 0, 0.25);
          --radius: 24px;
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
          background:
            radial-gradient(circle at top left, rgba(156, 199, 126, 0.08), transparent 30%),
            radial-gradient(circle at top right, rgba(216, 185, 106, 0.08), transparent 25%),
            linear-gradient(180deg, #09100b 0%, #0f1711 100%);
          color: var(--text);
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          display: block;
          max-width: 100%;
        }

        .container {
          width: min(100% - 32px, var(--max));
          margin: 0 auto;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(8, 13, 10, 0.74);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav {
          min-height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .brandLogo {
          width: 52px;
          height: 52px;
          object-fit: cover;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.06);
        }

        .brandTitle {
          font-weight: 800;
          font-size: 1rem;
        }

        .brandSub {
          color: var(--muted);
          font-size: 0.84rem;
        }

        .navLinks {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
        }

        .navLinks a {
          color: var(--muted);
          font-size: 0.95rem;
          transition: 0.2s ease;
        }

        .navLinks a:hover {
          color: var(--text);
        }

        .hero {
          padding: 96px 0 56px;
          position: relative;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 40px;
          align-items: center;
        }

        .heroText h1 {
          font-size: clamp(2.7rem, 6vw, 5.1rem);
          line-height: 1.02;
          margin: 0 0 18px;
          letter-spacing: -1px;
          max-width: 720px;
        }

        .pill {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.04);
          color: var(--green);
          font-size: 13px;
          margin-bottom: 16px;
        }

        .heroLead,
        .sectionLead {
          font-size: clamp(1.05rem, 2vw, 1.22rem);
          color: var(--muted);
          max-width: 760px;
        }

        .heroBody,
        .card p,
        .highlight p,
        .contactItem span,
        .footer p,
        .faqAnswer p,
        .miniPolicy span,
        .trustItem span {
          color: var(--muted);
        }

        .heroBody {
          max-width: 760px;
          margin-top: 16px;
          font-size: 1rem;
          line-height: 1.75;
        }

        .badges {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .badges span {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--line);
          font-size: 0.94rem;
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
          background: linear-gradient(135deg, var(--green), var(--green2));
          color: #08100b;
          box-shadow: var(--shadow);
        }

        .btnPrimary:hover {
          transform: translateY(-2px);
        }

        .btnSecondary {
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--line);
          color: var(--text);
        }

        .btnSecondary:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .heroImage {
          position: relative;
          min-height: 560px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: var(--shadow);
        }

        .heroImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6, 10, 7, 0.05), rgba(6, 10, 7, 0.5));
        }

        .trustStrip {
          padding: 0 0 28px;
        }

        .trustGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .trustItem {
          padding: 18px 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid var(--line);
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .section {
          padding: 84px 0;
        }

        h2 {
          font-size: clamp(2rem, 4vw, 3.1rem);
          line-height: 1.08;
          margin: 0 0 16px;
        }

        h3 {
          margin: 0 0 10px;
          font-size: 1.18rem;
        }

        .twoCols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 30px;
        }

        .gridCards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 30px;
        }

        .card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 28px;
          box-shadow: var(--shadow);
        }

        .steps {
          display: grid;
          gap: 18px;
          margin-top: 34px;
        }

        .step {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .stepNum {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gold), #a88d50);
          color: #10110d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          flex-shrink: 0;
        }

        .highlight {
          padding: 34px;
          border-radius: 28px;
          background: linear-gradient(
            135deg,
            rgba(156, 199, 126, 0.14),
            rgba(216, 185, 106, 0.12)
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: var(--shadow);
        }

        .strongLine {
          margin-top: 18px;
          font-weight: 700;
          color: var(--text) !important;
        }

        .imageCard {
          overflow: hidden;
          padding: 0;
          min-height: 380px;
        }

        .imageCard img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .textCard p + p {
          margin-top: 16px;
        }

        .gallerySection {
          padding-top: 10px;
        }

        .galleryGrid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.8fr;
          gap: 18px;
          margin-top: 28px;
        }

        .galleryCard {
          border-radius: 24px;
          overflow: hidden;
          min-height: 280px;
          border: 1px solid var(--line);
          box-shadow: var(--shadow);
          background: rgba(255, 255, 255, 0.05);
        }

        .galleryCard.large {
          min-height: 420px;
        }

        .galleryCard img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .faqList {
          display: grid;
          gap: 14px;
          margin-top: 26px;
        }

        .faqItem {
          border: 1px solid var(--line);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
          overflow: hidden;
        }

        .faqQuestion {
          width: 100%;
          background: transparent;
          color: var(--text);
          border: 0;
          padding: 20px 22px;
          font-size: 1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          text-align: left;
        }

        .faqAnswer {
          padding: 0 22px 20px;
        }

        .ctaSection {
          padding-top: 20px;
        }

        .contactGrid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: stretch;
        }

        .contactList {
          display: grid;
          gap: 14px;
          margin-top: 22px;
        }

        .contactItem {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--line);
          transition: 0.2s ease;
        }

        a.contactItem:hover {
          background: rgba(255, 255, 255, 0.07);
        }

        .contactSide {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .miniPolicy {
          margin-top: 20px;
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 30px 0 40px;
          background: rgba(0, 0, 0, 0.12);
        }

        .footerWrap {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footerLine {
          margin-top: 10px;
        }

        .footerInfo p {
          margin: 0 0 8px;
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
          color: var(--muted);
          margin: 0 0 24px;
        }

        .ageActions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .leaf {
          position: absolute;
          opacity: 0.06;
          font-size: 54px;
          user-select: none;
          pointer-events: none;
        }

        .leaf1 {
          top: 180px;
          left: 2%;
          transform: rotate(-14deg);
        }

        .leaf2 {
          top: 780px;
          right: 4%;
          transform: rotate(18deg);
        }

        .leaf3 {
          top: 1480px;
          left: 4%;
          transform: rotate(10deg);
        }

        .leaf4 {
          top: 2300px;
          right: 6%;
          transform: rotate(-8deg);
        }

        @media (max-width: 1080px) {
          .heroGrid,
          .twoCols,
          .contactGrid {
            grid-template-columns: 1fr;
          }

          .gridCards,
          .trustGrid,
          .galleryGrid {
            grid-template-columns: 1fr 1fr;
          }

          .galleryCard.large {
            grid-column: span 2;
          }

          .heroImage {
            min-height: 400px;
          }
        }

        @media (max-width: 760px) {
          .header {
            position: static;
          }

          .nav {
            flex-direction: column;
            align-items: flex-start;
            padding: 16px 0;
          }

          .navLinks {
            gap: 12px 16px;
          }

          .hero {
            padding: 56px 0 28px;
          }

          .section {
            padding: 68px 0;
          }

          .gridCards,
          .trustGrid,
          .galleryGrid {
            grid-template-columns: 1fr;
          }

          .galleryCard.large {
            grid-column: auto;
            min-height: 280px;
          }

          .heroImage {
            min-height: 300px;
          }

          .card,
          .highlight {
            padding: 22px;
          }

          .buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }

          .whatsappFloat {
            width: 58px;
            height: 58px;
            right: 14px;
            bottom: 14px;
          }
        }
      `}</style>
    </>
  );
}
