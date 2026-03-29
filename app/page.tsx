export default function HomePage() {
  return (
    <main className="page">
      <div className="backgroundDecor">
        <span className="float decor1">✦</span>
        <span className="float decor2">✂</span>
        <span className="float decor3">❋</span>
        <span className="float decor4">✦</span>
        <span className="float decor5">✂</span>
        <span className="float decor6">❋</span>
      </div>

      <section className="hero">
        <div className="overlay" />
        <img
          src="/IMG_3967.jpeg"
          alt="Cultivo de Simbiosis Miceliar"
          className="heroImage"
        />

        <div className="heroContent">
          <div className="badge">Asociación civil • Lago Puelo • Patagonia</div>
          <h1>Simbiosis Miceliar</h1>
          <p className="heroText">
            Cultivo, acompañamiento y desarrollo comunitario con identidad
            territorial, perspectiva de salud y trabajo responsable.
          </p>

          <div className="heroButtons">
            <a
              href="https://wa.me/549294413880"
              target="_blank"
              rel="noopener noreferrer"
              className="primaryBtn"
            >
              WhatsApp
            </a>

            <a href="#cultivo" className="secondaryBtn">
              Ver cultivo
            </a>
          </div>
        </div>
      </section>

      <section className="intro section">
        <div className="sectionHeader">
          <span className="miniTag">Nuestra identidad</span>
          <h2>Una propuesta seria, humana y cercana</h2>
        </div>

        <div className="introGrid">
          <div className="card glass">
            <h3>Quiénes somos</h3>
            <p>
              Simbiosis Miceliar es una asociación enfocada en el trabajo
              comunitario, el cultivo responsable y la construcción de espacios
              seguros de acompañamiento, información y desarrollo.
            </p>
          </div>

          <div className="card glass">
            <h3>Nuestra mirada</h3>
            <p>
              Buscamos unir naturaleza, organización y compromiso social en una
              propuesta con raíces patagónicas, estética cuidada y enfoque
              humano.
            </p>
          </div>

          <div className="card glass">
            <h3>Compromiso</h3>
            <p>
              Promovemos buenas prácticas, trabajo transparente, cercanía con
              las personas y una construcción institucional sólida.
            </p>
          </div>
        </div>
      </section>

      <section id="cultivo" className="section">
        <div className="sectionHeader">
          <span className="miniTag">Cultivo</span>
          <h2>Nuestro entorno de trabajo</h2>
          <p className="sectionText">
            Un espacio vivo, en contacto con la naturaleza, donde el cultivo se
            integra con el territorio y el cuidado del proceso.
          </p>
        </div>

        <div className="gallery">
          <article className="galleryCard large">
            <img src="/IMG_3967.jpeg" alt="Vista general del cultivo" />
            <div className="galleryInfo">
              <h3>Espacio de cultivo</h3>
              <p>
                Un entorno verde, natural y organizado, pensado para sostener
                procesos con dedicación y presencia real.
              </p>
            </div>
          </article>

          <article className="galleryCard">
            <img src="/IMG_3924.jpeg" alt="Floración detalle 1" />
            <div className="galleryInfo">
              <h3>Detalle de floración</h3>
              <p>
                Seguimiento cercano del desarrollo, observando estructura,
                resina y evolución de cada etapa.
              </p>
            </div>
          </article>

          <article className="galleryCard">
            <img src="/IMG_3819.jpeg" alt="Floración detalle 2" />
            <div className="galleryInfo">
              <h3>Observación y cuidado</h3>
              <p>
                Procesos atendidos con paciencia, criterio y una mirada integral
                del cultivo.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section valuesSection">
        <div className="sectionHeader">
          <span className="miniTag">Valores</span>
          <h2>Lo que nos representa</h2>
        </div>

        <div className="valuesGrid">
          <div className="valueItem">
            <h3>Territorio</h3>
            <p>Raíz patagónica, identidad local y vínculo real con el entorno.</p>
          </div>
          <div className="valueItem">
            <h3>Cuidado</h3>
            <p>Respeto por los procesos, las personas y la calidad del trabajo.</p>
          </div>
          <div className="valueItem">
            <h3>Comunidad</h3>
            <p>Construcción colectiva, cercanía humana y acompañamiento.</p>
          </div>
          <div className="valueItem">
            <h3>Seriedad</h3>
            <p>Una propuesta clara, prolija y con visión institucional.</p>
          </div>
        </div>
      </section>

      <section className="contact section">
        <div className="contactBox">
          <span className="miniTag">Contacto</span>
          <h2>Hablemos</h2>
          <p>
            Si querés comunicarte con Simbiosis Miceliar, podés escribirnos por
            WhatsApp.
          </p>

          <a
            href="https://wa.me/549294413880"
            target="_blank"
            rel="noopener noreferrer"
            className="primaryBtn"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(69, 122, 70, 0.18), transparent 30%),
            radial-gradient(circle at bottom right, rgba(144, 101, 42, 0.16), transparent 28%),
            linear-gradient(180deg, #07110b 0%, #0b1710 40%, #101a13 100%);
          color: #f4f0e8;
          font-family: Arial, Helvetica, sans-serif;
        }

        .backgroundDecor {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .float {
          position: absolute;
          opacity: 0.08;
          font-size: 28px;
          animation: drift 10s ease-in-out infinite;
        }

        .decor1 { top: 10%; left: 4%; }
        .decor2 { top: 22%; right: 6%; animation-delay: 1s; }
        .decor3 { top: 48%; left: 3%; animation-delay: 2s; }
        .decor4 { bottom: 18%; right: 8%; animation-delay: 3s; }
        .decor5 { bottom: 10%; left: 8%; animation-delay: 1.5s; }
        .decor6 { top: 70%; right: 3%; animation-delay: 2.5s; }

        .hero,
        .section {
          position: relative;
          z-index: 1;
        }

        .hero {
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 36px 18px;
        }

        .heroImage {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.45) saturate(0.95);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to bottom, rgba(6, 12, 8, 0.28), rgba(6, 12, 8, 0.72)),
            linear-gradient(to right, rgba(7, 17, 11, 0.72), rgba(7, 17, 11, 0.28));
          z-index: 1;
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 950px;
          width: 100%;
          text-align: center;
          padding: 30px 18px;
        }

        .badge,
        .miniTag {
          display: inline-block;
          border: 1px solid rgba(244, 240, 232, 0.2);
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(10px);
          color: #e9dfc9;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 13px;
          letter-spacing: 0.4px;
          margin-bottom: 18px;
        }

        h1 {
          margin: 0;
          font-size: clamp(42px, 8vw, 86px);
          line-height: 0.95;
          letter-spacing: -1px;
          color: #f8f4eb;
        }

        .heroText {
          max-width: 760px;
          margin: 22px auto 0;
          font-size: clamp(17px, 2.3vw, 22px);
          line-height: 1.7;
          color: rgba(248, 244, 235, 0.9);
        }

        .heroButtons {
          margin-top: 28px;
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .primaryBtn,
        .secondaryBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 170px;
          padding: 14px 22px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.2s ease, opacity 0.2s ease, background 0.2s ease;
        }

        .primaryBtn {
          background: linear-gradient(135deg, #d7b16a, #b18645);
          color: #10100d;
          box-shadow: 0 10px 30px rgba(177, 134, 69, 0.28);
        }

        .secondaryBtn {
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.06);
          color: #f4f0e8;
          backdrop-filter: blur(10px);
        }

        .primaryBtn:hover,
        .secondaryBtn:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        .section {
          padding: 78px 18px;
          max-width: 1240px;
          margin: 0 auto;
        }

        .sectionHeader {
          max-width: 760px;
          margin-bottom: 28px;
        }

        h2 {
          margin: 0;
          font-size: clamp(30px, 5vw, 52px);
          line-height: 1.08;
          color: #f8f4eb;
        }

        .sectionText {
          margin-top: 14px;
          color: rgba(244, 240, 232, 0.74);
          font-size: 17px;
          line-height: 1.7;
        }

        .introGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 10px;
        }

        .glass {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
        }

        .card {
          padding: 26px;
          border-radius: 22px;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.16);
        }

        .card h3,
        .galleryInfo h3,
        .valueItem h3 {
          margin: 0 0 12px 0;
          font-size: 22px;
          color: #efe3c8;
        }

        .card p,
        .galleryInfo p,
        .valueItem p,
        .contactBox p {
          margin: 0;
          color: rgba(244, 240, 232, 0.76);
          line-height: 1.75;
          font-size: 16px;
        }

        .gallery {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 18px;
          align-items: stretch;
        }

        .galleryCard {
          overflow: hidden;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.18);
        }

        .galleryCard img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          display: block;
        }

        .galleryCard.large img {
          height: 100%;
          min-height: 460px;
        }

        .galleryInfo {
          padding: 20px;
        }

        .valuesGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .valueItem {
          padding: 24px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contact {
          padding-bottom: 110px;
        }

        .contactBox {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
          padding: 42px 26px;
          border-radius: 28px;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.03));
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 16px 50px rgba(0, 0, 0, 0.16);
        }

        .contactBox .primaryBtn {
          margin-top: 22px;
        }

        @keyframes drift {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(6deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @media (max-width: 1024px) {
          .introGrid,
          .valuesGrid,
          .gallery {
            grid-template-columns: 1fr 1fr;
          }

          .galleryCard.large {
            grid-column: span 2;
          }

          .galleryCard.large img {
            min-height: 380px;
          }
        }

        @media (max-width: 640px) {
          .hero {
            min-height: 88vh;
            padding: 20px 14px;
          }

          .heroContent {
            padding: 18px 8px;
          }

          .section {
            padding: 58px 14px;
          }

          .introGrid,
          .valuesGrid,
          .gallery {
            grid-template-columns: 1fr;
          }

          .galleryCard.large {
            grid-column: auto;
          }

          .galleryCard img,
          .galleryCard.large img {
            height: 300px;
            min-height: unset;
          }

          .primaryBtn,
          .secondaryBtn {
            width: 100%;
            max-width: 320px;
          }

          .float {
            font-size: 22px;
          }
        }
      `}</style>
    </main>
  );
}
