import Image from "next/image";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#0b0f0c", color: "#f5f5f5", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 20px 80px",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "48px",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            paddingBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <Image
              src="/logo-simbiosis.png"
              alt="Simbiosis Miceliar"
              width={72}
              height={72}
              priority
              style={{ borderRadius: "50%" }}
            />
            <div>
              <h1 style={{ margin: 0, fontSize: "1.8rem" }}>Simbiosis Miceliar</h1>
              <p style={{ margin: "6px 0 0", color: "rgba(255,255,255,0.72)" }}>
                Proyecto patagónico de cultivo y acompañamiento responsable
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5492944138880"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#c7a54b",
              color: "#111",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: "999px",
              fontWeight: 700,
            }}
          >
            WhatsApp
          </a>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "28px",
            alignItems: "center",
            marginBottom: "64px",
          }}
        >
          <div>
            <p
              style={{
                display: "inline-block",
                margin: "0 0 14px",
                padding: "8px 12px",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "999px",
                color: "#d5d5d5",
                fontSize: "0.92rem",
              }}
            >
              Asociación · Comunidad · Patagonia
            </p>

            <h2 style={{ fontSize: "3rem", lineHeight: 1.05, margin: "0 0 16px" }}>
              Un proyecto patagónico con cercanía, compromiso y acompañamiento real
            </h2>

            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.82)",
                maxWidth: "700px",
              }}
            >
              En Simbiosis Miceliar trabajamos desde el territorio, con un vínculo cercano entre
              quienes forman parte de la asociación y cada persona que se acerca. Promovemos un
              acceso cuidado, responsable y humano, acompañando también la vinculación con médicos
              y el proceso de orientación para REPROCANN.
            </p>
          </div>

          <div style={{ borderRadius: "24px", overflow: "hidden" }}>
            <Image
              src="/IMG_3967.jpeg"
              alt="Simbiosis Miceliar Patagonia"
              width={900}
              height={700}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </section>

        <section style={{ marginBottom: "64px" }}>
          <h3 style={{ fontSize: "2rem", marginBottom: "18px" }}>Quiénes somos</h3>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.82)",
              maxWidth: "950px",
            }}
          >
            Somos un proyecto patagónico que busca construir un espacio serio, cercano y
            responsable. Nuestra propuesta pone en el centro a las personas, el acompañamiento
            respetuoso y el trabajo colectivo. Creemos en una comunidad donde el vínculo entre los
            socios y la asociación sea real, accesible y basado en la confianza.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "20px",
            marginBottom: "64px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "22px",
              padding: "24px",
            }}
          >
            <h4 style={{ marginTop: 0 }}>Acompañamiento</h4>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>
              Brindamos orientación cercana y responsable para que cada persona se sienta contenida
              y bien guiada.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "22px",
              padding: "24px",
            }}
          >
            <h4 style={{ marginTop: 0 }}>Vinculación médica</h4>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>
              Contamos con médicos encargados de la vinculación a REPROCANN y ayudamos a las
              personas durante ese proceso.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "22px",
              padding: "24px",
            }}
          >
            <h4 style={{ marginTop: 0 }}>Identidad territorial</h4>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>
              Nacemos desde la Patagonia, con una mirada propia, cercana al territorio y a las
              necesidades reales de nuestra comunidad.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: "64px" }}>
          <h3 style={{ fontSize: "2rem", marginBottom: "18px" }}>Galería</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            <div style={{ borderRadius: "20px", overflow: "hidden" }}>
              <Image
                src="/cultivo-1.jpg"
                alt="Cultivo"
                width={900}
                height={700}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            <div style={{ borderRadius: "20px", overflow: "hidden" }}>
              <Image
                src="/IMG_3819.jpeg"
                alt="Imagen Simbiosis 1"
                width={900}
                height={700}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            <div style={{ borderRadius: "20px", overflow: "hidden" }}>
              <Image
                src="/IMG_3924.jpeg"
                alt="Imagen Simbiosis 2"
                width={900}
                height={700}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </section>

        <section
          style={{
            background: "linear-gradient(135deg, rgba(199,165,75,0.18), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "32px",
            marginBottom: "40px",
          }}
        >
          <h3 style={{ fontSize: "2rem", marginTop: 0 }}>Contacto</h3>
          <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.8, marginBottom: "18px" }}>
            Si querés comunicarte con nosotros, recibir orientación o conocer más sobre la
            asociación, escribinos.
          </p>

          <a
            href="https://wa.me/5492944138880"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#c7a54b",
              color: "#111",
              textDecoration: "none",
              padding: "14px 20px",
              borderRadius: "999px",
              fontWeight: 700,
            }}
          >
            Escribir por WhatsApp
          </a>
        </section>
      </section>
    </main>
  );
}
