export default function HomePage() {
  return (
    <main className="page">
      <header className="header">
        <div className="headerInner">
          <a href="#inicio" className="logoWrap" aria-label="Simbiosis Miceliar">
            <img src="/logo.png" alt="Logo Simbiosis Miceliar" className="logo" />
          </a>

          <nav className="nav">
            <a href="#inicio">Inicio</a>
            <a href="#quienes-somos">Quiénes somos</a>
            <a href="#que-hacemos">Qué hacemos</a>
            <a href="#cultivo">Cultivo</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            href="https://wa.me/5492944138880"
            target="_blank"
            rel="noopener noreferrer"
            className="headerBtn"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="heroBg">
          <img src="/IMG_3967.jpeg" alt="Cultivo en Simbiosis Miceliar" />
          <div className="heroOverlay" />
        </div>

        <div className="heroContent">
          <span className="eyebrow">Proyecto patagónico • enfoque agroecológico</span>
          <h1>Simbiosis Miceliar</h1>
          <p className="heroText">
            Un espacio construido desde la cercanía, el cuidado y el compromiso,
            con una mirada seria, moderna y patagónica.
          </p>

          <div className="heroActions">
            <a
              href="https://wa.me/5492944138880"
              target="_blank"
              rel="noopener noreferrer"
              className="primaryBtn"
            >
              Escribinos
            </a>

            <a href="#quienes-somos" className="secondaryBtn">
              Conocé el proyecto
            </a>
          </div>
        </div>
      </section>

      <section id="quienes-somos" className="section introSection">
        <div className="sectionTop">
          <span className="sectionTag">Quiénes somos</span>
          <h2>Una comunidad cercana, con identidad propia</h2>
        </div>

        <div className="introLead">
          <p>
            Simbiosis Miceliar es un proyecto patagónico que apuesta a construir
            una comunidad cercana, donde el vínculo entre los socios y la
            asociación sea real, cuidado y presente. Nos mueve la idea de
            acompañar con seriedad, calidez y compromiso, creando un espacio con
            identidad propia, mirada agroecológica y proyección moderna.
          </p>
        </div>

        <div className="introGrid">
          <article className="card">
            <h3>Asociación</h3>
            <p>
              Entendemos la asociación como un espacio de encuentro, pertenencia
              y construcción compartida, donde cada socio forma parte de una
              propuesta con sentido y dirección.
            </p>
          </article>

          <article className="card">
            <h3>Enfoque</h3>
            <p>
              Trabajamos desde una mirada agroecológica, contemporánea y
              cuidada, integrando compromiso, estética y una manera consciente
              de pensar cada proceso.
            </p>
          </article>

          <article className="card">
            <h3>Compromiso</h3>
            <p>
              Queremos que Simbiosis Miceliar sea un espacio cercano y
              confiable, donde el acompañamiento, la dedicación y la seriedad se
              perciban en cada paso.
            </p>
          </article>
        </div>
      </section>

      <section className="section valuesSection">
        <div className="sectionTop">
          <span className="sectionTag">Nuestros valores</span>
          <h2>Una forma de hacer las cosas con presencia real</h2>
        </div>

        <div className="valuesGrid">
          <article className="valueCard">
            <h3>Seriedad</h3>
            <p>
              Trabajamos con responsabilidad, criterio y una visión clara de lo
              que queremos construir.
            </p>
          </article>

          <article className="valueCard">
            <h3>Cuidado</h3>
            <p>
              Ponemos atención en las personas, los procesos y la manera en que
              llevamos adelante cada etapa.
            </p>
          </article>

          <article className="valueCard">
            <h3>Agroecología</h3>
            <p>
              Valoramos prácticas conscientes, respetuosas del entorno y
              alineadas con una producción cuidada.
            </p>
          </article>

          <article className="valueCard">
            <h3>Acompañamiento</h3>
            <p>
              Creemos en la cercanía, la escucha y el apoyo real a quienes se
              vinculan con la asociación.
            </p>
          </article>
        </div>
      </section>

      <section id="que-hacemos" className="section servicesSection">
        <div className="sectionTop">
          <span className="sectionTag">Qué hacemos</span>
          <h2>Un trabajo serio, cercano y bien orientado</h2>
          <p className="sectionText">
            Desarrollamos una propuesta ordenada y comprometida, articulando
            acompañamiento, orientación y vinculación para personas que buscan
            información, seguimiento y procesos cuidados.
          </p>
        </div>

        <div className="servicesGrid">
          <article className="serviceCard">
            <h3>Acompañamiento a personas</h3>
            <p>
              Brindamos orientación y contención a quienes buscan un espacio
              serio, claro y responsable.
            </p>
          </article>

          <article className="serviceCard">
            <h3>Vinculación a REPROCANN</h3>
            <p>
              Contamos con médicos encargados de la vinculación a REPROCANN y
              acompañamos a las personas en ese proceso de manera ordenada y
              cercana.
            </p>
          </article>

          <article className="serviceCard">
            <h3>Articulación médica</h3>
            <p>
              Promovemos un abordaje responsable, con intervención profesional y
              seguimiento acorde a cada situación.
            </p>
          </article>

          <article className="serviceCard">
            <h3>Desarrollo asociativo</h3>
            <p>
              Construimos una propuesta moderna, organizada y comprometida con
              una visión patagónica, agroecológica y comunitaria.
            </p>
          </article>
        </div>
      </section>

      <section className="trustBand">
        <div className="trustBandInner">
          <div>Acompañamiento serio</div>
          <div>Vinculación médica a REPROCANN</div>
          <div>Enfoque agroecológico</div>
        </div>
      </section>

      <section id="cultivo" className="section cultivationSection">
        <div className="sectionTop">
          <span className="sectionTag">Cultivo</span>
          <h2>Cultivo cuidado, mirada agroecológica</h2>
          <p className="sectionText">
            Entendemos el cultivo como un proceso que requiere observación,
            criterio, dedicación y respeto por cada etapa. Nuestra mirada
            combina cuidado, presencia real y una forma consciente de trabajar.
          </p>
        </div>

        <div className="galleryGrid">
          <article className="galleryCard">
            <div className="galleryImageWrap">
              <img src="/IMG_3924.jpeg" alt="Detalle de floración" />
            </div>
            <div className="galleryInfo">
              <h3>Detalle de floración</h3>
              <p>
                Observación cercana del desarrollo, la estructura y la evolución
                del proceso.
              </p>
            </div>
          </article>

          <article className="galleryCard">
            <div className="galleryImageWrap">
              <img src="/IMG_3819.jpeg" alt="Seguimiento y cuidado del cultivo" />
            </div>
            <div className="galleryInfo">
              <h3>Seguimiento y cuidado</h3>
              <p>
                Una práctica atenta, paciente y enfocada en sostener calidad y
                coherencia en cada etapa.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="contacto" className="section contactSection">
        <div className="contactBox">
          <span className="sectionTag">Contacto</span>
          <h2>Hablemos</h2>
          <p>
            Si querés comunicarte con Simbiosis Miceliar, podés escribirnos por
            WhatsApp.
          </p>

          <div className="contactMeta">
            <span>Lago Puelo, Patagonia</span>
            <span>+54 9 2944 138880</span>
          </div>

          <a
            href="https://wa.me/5492944138880"
            target="_blank"
            rel="noopener noreferrer"
            className="primaryBtn"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <img src="/logo.png" alt="Logo Simbiosis Miceliar" className="footerLogo" />
          <p>Simbiosis Miceliar</p>
          <span>Lago Puelo, Patagonia</span>
        </div>
      </footer>

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(72, 112, 72, 0.12), transparent 25%),
            radial-gradient(circle at bottom right, rgba(165, 123, 65, 0.12), transparent 22%),
            linear-gradient(180deg, #07110b 0%, #0b1710 35%, #0f1813 100%);
          color: #f3efe6;
          font-family: Arial, Helvetica, sans-serif;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(14px);
          background: rgba(7, 17, 11, 0.52);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .headerInner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .logoWrap {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo {
          height: 48px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 24px;
          flex: 1;
          justify-content: center;
        }

        .nav a {
          color: rgba(243, 239, 230, 0.84);
          text-decoration: none;
          font-size: 15px;
          transition: opacity 0.2s ease;
        }

        .nav a:hover {
          opacity: 1;
        }

        .headerBtn,
        .primaryBtn,
        .secondaryBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .headerBtn {
          padding: 12px 18px;
          border-radius: 14px;
          background: linear-gradient(135deg, #d6b06a, #b88746);
          color: #16130f;
          white-space: nowrap;
        }

        .headerBtn:hover,
        .primaryBtn:hover,
        .secondaryBtn:hover {
          transform: translateY(-1px);
          opacity: 0.96;
        }

        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .heroBg {
          position: absolute;
          inset: 0;
        }

        .heroBg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 42%;
          display: block;
          filter: brightness(0.54) saturate(0.92);
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to bottom, rgba(5, 11, 7, 0.32), rgba(5, 11, 7, 0.72)),
            linear-gradient(to right, rgba(7, 17, 11, 0.7), rgba(7, 17, 11, 0.3));
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 920px;
          padding: 80px 18px 60px;
          text-align: center;
        }

        .eyebrow,
        .sectionTag {
          display: inline-flex;
          align-items: center;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #e8ddc5;
          font-size: 13px;
          margin-bottom: 18px;
        }

        h1 {
          margin: 0;
          font-size: clamp(44px, 8vw, 92px);
          line-height: 0.96;
          letter-spacing: -1.8px;
          color: #f8f4ec;
        }

        .heroText {
          max-width: 720px;
          margin: 20px auto 0;
          font-size: clamp(18px, 2.1vw, 23px);
          line-height: 1.7;
          color: rgba(248, 244, 236, 0.9);
        }

        .heroActions {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primaryBtn,
        .secondaryBtn {
          min-width: 180px;
          padding: 15px 22px;
          border-radius: 16px;
        }

        .primaryBtn {
          background: linear-gradient(135deg, #d6b06a, #b88746);
          color: #16130f;
          box-shadow: 0 12px 30px rgba(184, 135, 70, 0.24);
        }

        .secondaryBtn {
          color: #f3efe6;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(8px);
        }

        .section {
          max-width: 1240px;
          margin: 0 auto;
          padding: 88px 18px;
        }

        .sectionTop {
          max-width: 760px;
          margin-bottom: 28px;
        }

        h2 {
          margin: 0;
          font-size: clamp(32px, 5vw, 54px);
          line-height: 1.06;
          color: #f8f4ec;
        }

        .sectionText,
        .introLead p,
        .contactBox p {
          margin: 16px 0 0;
          font-size: 17px;
          line-height: 1.8;
          color: rgba(243, 239, 230, 0.76);
        }

        .introLead {
          max-width: 980px;
          margin-bottom: 26px;
        }

        .introGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .card,
        .valueCard,
        .serviceCard,
        .galleryCard,
        .contactBox {
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.045);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
        }

        .card,
        .valueCard,
        .serviceCard {
          padding: 26px;
        }

        .card h3,
        .valueCard h3,
        .serviceCard h3,
        .galleryInfo h3 {
          margin: 0 0 12px;
          font-size: 22px;
          color: #ebdec2;
        }

        .card p,
        .valueCard p,
        .serviceCard p,
        .galleryInfo p {
          margin: 0;
          color: rgba(243, 239, 230, 0.74);
          line-height: 1.75;
          font-size: 16px;
        }

        .valuesGrid,
        .servicesGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .trustBand {
          padding: 0 18px;
        }

        .trustBandInner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 22px 24px;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(214, 176, 106, 0.12), rgba(255, 255, 255, 0.04));
          border: 1px solid rgba(214, 176, 106, 0.16);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          text-align: center;
          color: #f0e4ca;
          font-weight: 600;
        }

        .galleryGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .galleryCard {
          overflow: hidden;
        }

        .galleryImageWrap {
          height: 420px;
          overflow: hidden;
        }

        .galleryImageWrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .galleryGrid .galleryCard:first-child .galleryImageWrap img {
          object-position: center center;
        }

        .galleryGrid .galleryCard:last-child .galleryImageWrap img {
          object-position: center 38%;
        }

        .galleryInfo {
          padding: 22px;
        }

        .contactSection {
          padding-bottom: 110px;
        }

        .contactBox {
          max-width: 860px;
          margin: 0 auto;
          padding: 42px 28px;
          text-align: center;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.065), rgba(255, 255, 255, 0.03));
        }

        .contactMeta {
          margin: 18px 0 24px;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          color: #e9dcc0;
          font-weight: 600;
        }

        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 26px 18px 40px;
        }

        .footerInner {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
          color: rgba(243, 239, 230, 0.72);
        }

        .footerLogo {
          height: 46px;
          width: auto;
          object-fit: contain;
        }

        .footerInner p,
        .footerInner span {
          margin: 0;
        }

        @media (max-width: 1080px) {
          .nav {
            gap: 16px;
          }

          .introGrid {
            grid-template-columns: 1fr;
          }

          .valuesGrid,
          .servicesGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .galleryGrid {
            grid-template-columns: 1fr;
          }

          .galleryImageWrap {
            height: 360px;
          }
        }

        @media (max-width: 780px) {
          .headerInner {
            flex-wrap: wrap;
            justify-content: center;
          }

          .nav {
            order: 3;
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px 18px;
          }

          .logo {
            height: 42px;
          }

          .hero {
            min-height: 88vh;
          }

          .heroBg img {
            object-position: center 34%;
          }

          .trustBandInner,
          .valuesGrid,
          .servicesGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 64px 14px;
          }

          .headerInner {
            padding: 12px 14px;
          }

          .heroContent {
            padding: 70px 14px 50px;
          }

          .heroActions {
            flex-direction: column;
            align-items: center;
          }

          .primaryBtn,
          .secondaryBtn,
          .headerBtn {
            width: 100%;
            max-width: 320px;
          }

          .galleryImageWrap {
            height: 300px;
          }

          .contactBox {
            padding: 34px 20px;
          }
        }
      `}</style>
    </main>
  );
}
