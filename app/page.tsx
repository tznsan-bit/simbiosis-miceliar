export default function HomePage() {
  return (
    <main className="page">
      <header className="header">
        <div className="container header-inner">
          <div>
            <div className="brand-title">Simbiosis Miceliar</div>
            <div className="brand-subtitle">Naturaleza · Cuidado · Criterio</div>
          </div>

          <nav className="nav">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#comunidad">Comunidad</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div>
            <span className="badge">Comunidad responsable</span>
            <h1>
              Cultivo consciente,
              <br />
              calidad y seguridad
              <br />
              para una comunidad responsable.
            </h1>

            <p>
              Una propuesta con identidad natural, mirada moderna y compromiso
              con la confianza, el acompañamiento y la calidad.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#nosotros">
                Conocenos
              </a>
              <a className="btn btn-secondary" href="#contacto">
                Contacto
              </a>
            </div>
          </div>

          <div className="hero-card">
            <h3>Seguridad para tu tranquilidad</h3>
            <ul className="hero-list">
              <li>Procesos cuidados y una identidad construida desde el detalle.</li>
              <li>Estética seria, moderna y coherente con nuestros valores.</li>
              <li>Vínculos cercanos, confianza y acompañamiento real.</li>
              <li>Comunidad, criterio y responsabilidad como base.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="nosotros">
        <div className="container">
          <h2 className="section-title">Una identidad construida desde la confianza</h2>
          <p className="section-text">
            En Simbiosis Miceliar creemos en una forma de hacer las cosas con
            criterio, sensibilidad y presencia. Apostamos a la calidad, la
            responsabilidad y a construir una imagen sólida, cercana y
            coherente.
          </p>

          <div className="cards">
            <article className="card">
              <h3>Calidad</h3>
              <p>
                Cuidamos cada detalle para brindar una experiencia prolija,
                seria y confiable.
              </p>
            </article>

            <article className="card">
              <h3>Seguridad</h3>
              <p>
                Responsabilidad, confianza y una estética que transmite orden,
                solidez y criterio.
              </p>
            </article>

            <article className="card">
              <h3>Comunidad</h3>
              <p>
                Vínculos cercanos, acompañamiento real y una identidad
                construida con coherencia.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="comunidad">
        <div className="container">
          <h2 className="section-title">Comunidad, criterio y acompañamiento</h2>
          <p className="section-text">
            Buscamos desarrollar una presencia clara, moderna y humana, donde la
            comunidad sea parte central de la experiencia. Nuestra identidad se
            construye desde la confianza, el cuidado y la seriedad.
          </p>
        </div>
      </section>

      <section className="section" id="contacto">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-box">
            <p>
              Para consultas o más información, escribinos por WhatsApp al{" "}
              <strong>+54 9 2944 13-880</strong>.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          © 2026 Simbiosis Miceliar. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
