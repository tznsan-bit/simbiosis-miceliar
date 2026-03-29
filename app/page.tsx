import Image from "next/image";

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "24px",
  backdropFilter: "blur(8px)",
};

export default function Home() {
  return (
    <main
      style={{
        background:
          "radial-gradient(circle at top, rgba(72,120,80,0.20), transparent 28%), linear-gradient(180deg, #07110b 0%, #0b0f0c 45%, #090909 100%)",
        color: "#f5f5f5",
        minHeight: "100vh",
        fontFamily:
          'Arial, Helvetica, sans-serif',
      }}
    >
      <section
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "24px 20px 90px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            padding: "10px 0 26px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <Image
              src="/logo-simbiosis.png"
              alt="Simbiosis Miceliar"
              width={64}
              height={64}
              priority
              style={{ borderRadius: "50%" }}
            />
            <div>
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  letterSpacing: "0.02em",
                }}
              >
                Simbiosis Miceliar
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.95rem",
                  marginTop: "4px",
                }}
              >
                Proyecto patagónico · comunidad · acompañamiento
              </div>
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href="#quienes-somos"
              style={{
                color: "rgba(255,255,255,0.82)",
                textDecoration: "none",
                fontSize: "0.96rem",
              }}
            >
              Quiénes somos
            </a>
            <a
              href="#acompanamiento"
              style={{
                color: "rgba(255,255,255,0.82)",
                textDecoration: "none",
                fontSize: "0.96rem",
              }}
            >
              Acompañamiento
            </a>
            <a
              href="#cultivo"
              style={{
                color: "rgba(255,255,255,0.82)",
                textDecoration: "none",
                fontSize: "0.96rem",
              }}
            >
              Cultivo
            </a>
            <a
              href="#contacto"
              style={{
                textDecoration: "none",
                background: "#c7a54b",
                color: "#111",
                padding: "12px 18px",
                borderRadius: "999px",
                fontWeight: 800,
                fontSize: "0.95rem",
              }}
            >
              Contacto
            </a>
          </nav>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "24px",
            alignItems: "stretch",
            marginTop: "10px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              ...cardStyle,
              padding: "38px",
              minHeight: "540px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)), linear-gradient(180deg, rgba(50,90,60,0.22), rgba(0,0,0,0.18))",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#d6d6d6",
                  fontSize: "0.9rem",
                  marginBottom: "18px",
                }}
              >
                Club de cultivo · Patagonia · comunidad real
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.7rem, 6vw, 5.2rem)",
                  lineHeight: 0.95,
                  margin: "0 0 18px",
                  letterSpacing: "-0.04em",
                  maxWidth: "820px",
                }}
              >
                Cercanía, identidad y acompañamiento en una propuesta seria y moderna
              </h1>

              <p
                style={{
                  fontSize: "1.12rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.82)",
                  maxWidth: "760px",
                  margin: 0,
                }}
              >
                Simbiosis Miceliar es un proyecto patagónico construido desde el
                vínculo cercano entre la asociación y cada persona que se acerca.
                Buscamos ofrecer una experiencia responsable, humana y bien guiada,
                con una identidad propia, actual y conectada con el territorio.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "26px",
              }}
            >
              <a
                href="https://wa.me/5492944138880"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  background: "#c7a54b",
                  color: "#111",
                  padding: "14px 20px",
                  borderRadius: "999px",
                  fontWeight: 800,
                }}
              >
                Escribinos por WhatsApp
              </a>

              <a
                href="#quienes-somos"
                style={{
                  textDecoration: "none",
                  color: "#f5f5f5",
                  border: "1px solid rgba(255,255,255,0.15)",
                  padding: "14px 20px",
                  borderRadius: "999px",
                  fontWeight: 700,
                }}
              >
                Conocer más
              </a>
            </div>
          </div>

          <div
            style={{
              borderRadius: "28px",
              overflow: "hidden",
              minHeight: "540px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.28)",
            }}
          >
            <Image
              src="/IMG_3967.jpeg"
              alt="Simbiosis Miceliar"
              width={1100}
              height={1400}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
            marginBottom: "72px",
          }}
        >
          <div style={cardStyle}>
            <div
              style={{
                fontSize: "0.88rem",
                color: "#c7a54b",
                fontWeight: 800,
                marginBottom: "10px",
                letterSpacing: "0.08em",
              }}
            >
              01
            </div>
            <h3 style={{ marginTop: 0, fontSize: "1.35rem" }}>Proyecto patagónico</h3>
            <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.7 }}>
              Una propuesta con identidad territorial, mirada propia y una forma de
              trabajo conectada con las personas y su realidad.
            </p>
          </div>

          <div style={cardStyle}>
            <div
              style={{
                fontSize: "0.88rem",
                color: "#c7a54b",
                fontWeight: 800,
                marginBottom: "10px",
                letterSpacing: "0.08em",
              }}
            >
              02
            </div>
            <h3 style={{ marginTop: 0, fontSize: "1.35rem" }}>Vínculo cercano</h3>
            <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.7 }}>
              Nos importa que el trato sea real, directo y humano, generando una
              relación próxima entre los socios y la asociación.
            </p>
          </div>

          <div style={cardStyle}>
            <div
              style={{
                fontSize: "0.88rem",
                color: "#c7a54b",
                fontWeight: 800,
                marginBottom: "10px",
                letterSpacing: "0.08em",
              }}
            >
              03
            </div>
            <h3 style={{ marginTop: 0, fontSize: "1.35rem" }}>Acompañamiento responsable</h3>
            <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.7 }}>
              Apostamos a una experiencia cuidada, seria y bien orientada, con
              información clara y acompañamiento en cada etapa.
            </p>
          </div>
        </section>

        <section
          id="quienes-somos"
          style={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: "24px",
            alignItems: "center",
            marginBottom: "72px",
          }}
        >
          <div
            style={{
              borderRadius: "28px",
              overflow: "hidden",
              minHeight: "470px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Image
              src="/IMG_3819.jpeg"
              alt="Comunidad Simbiosis Miceliar"
              width={1200}
              height={900}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div style={cardStyle}>
            <div
              style={{
                color: "#c7a54b",
                fontWeight: 800,
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
                marginBottom: "12px",
              }}
            >
              QUIÉNES SOMOS
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.02,
                margin: "0 0 16px",
              }}
            >
              Una asociación pensada para verse seria, sentirse cercana y transmitir confianza
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.8,
                fontSize: "1.04rem",
                marginBottom: "14px",
              }}
            >
              Simbiosis Miceliar nace con la idea de construir algo más que una
              estructura formal: un espacio donde la comunidad pueda encontrar
              cercanía, contención, identidad y una forma moderna de vincularse.
            </p>

            <p
              style={{
                color: "rgba(255,255,255,0.74)",
                lineHeight: 1.8,
                fontSize: "1.01rem",
                margin: 0,
              }}
            >
              Queremos que cada persona sienta que hay un proyecto real detrás:
              con presencia, criterio, estética cuidada y un trabajo que prioriza
              lo humano sin perder solidez.
            </p>
          </div>
        </section>

        <section
          id="acompanamiento"
          style={{
            marginBottom: "72px",
          }}
        >
          <div style={{ marginBottom: "22px" }}>
            <div
              style={{
                color: "#c7a54b",
                fontWeight: 800,
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
                marginBottom: "10px",
              }}
            >
              ACOMPAÑAMIENTO
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.04,
                margin: 0,
                maxWidth: "800px",
              }}
            >
              Un proceso guiado con cercanía, criterio y orientación clara
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Orientación personalizada</h3>
              <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.7 }}>
                Acompañamos a cada persona de forma cercana, buscando que el proceso
                resulte claro, prolijo y accesible.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Vinculación médica</h3>
              <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.7 }}>
                Contamos con médicos encargados de la vinculación a REPROCANN y
                ayudamos a las personas durante ese recorrido.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Comunidad y seguimiento</h3>
              <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.7 }}>
                Buscamos que la relación no termine en un primer contacto, sino que
                forme parte de un vínculo sostenido y cercano.
              </p>
            </div>
          </div>
        </section>

        <section
          id="cultivo"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            alignItems: "stretch",
            marginBottom: "72px",
          }}
        >
          <div style={cardStyle}>
            <div
              style={{
                color: "#c7a54b",
                fontWeight: 800,
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
                marginBottom: "12px",
              }}
            >
              CULTIVO
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.04,
                margin: "0 0 16px",
              }}
            >
              Una estética y una forma de trabajo conectadas con el cuidado
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.8,
                fontSize: "1.04rem",
                marginBottom: "14px",
              }}
            >
              La dimensión del cultivo también forma parte de nuestra identidad:
              orden, dedicación, criterio y una imagen cuidada que represente lo
              que queremos construir.
            </p>

            <p
              style={{
                color: "rgba(255,255,255,0.74)",
                lineHeight: 1.8,
                fontSize: "1.01rem",
                margin: 0,
              }}
            >
              No buscamos una estética improvisada, sino una presencia seria,
              moderna y coherente con una asociación que quiere transmitir nivel,
              confianza y pertenencia.
            </p>
          </div>

          <div
            style={{
              borderRadius: "28px",
              overflow: "hidden",
              minHeight: "480px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Image
              src="/cultivo-1.jpg"
              alt="Cultivo Simbiosis Miceliar"
              width={1200}
              height={900}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </section>

        <section
          style={{
            marginBottom: "72px",
          }}
        >
          <div
            style={{
              ...cardStyle,
              padding: "18px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 0.9fr",
                gap: "18px",
                alignItems: "stretch",
              }}
            >
              <div
                style={{
                  borderRadius: "22px",
                  overflow: "hidden",
                  minHeight: "360px",
                }}
              >
                <Image
                  src="/IMG_3967.jpeg"
                  alt="Identidad Simbiosis Miceliar"
                  width={1200}
                  height={900}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "8px 8px 8px 2px",
                }}
              >
                <div
                  style={{
                    color: "#c7a54b",
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    letterSpacing: "0.08em",
                    marginBottom: "12px",
                  }}
                >
                  IDENTIDAD
                </div>

                <h2
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    lineHeight: 1.03,
                    margin: "0 0 16px",
                  }}
                >
                  Una marca con presencia, estilo y cercanía
                </h2>

                <p
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.8,
                    fontSize: "1.03rem",
                    margin: 0,
                  }}
                >
                  Queremos que Simbiosis Miceliar se vea sólida, actual y atractiva,
                  sin perder sensibilidad humana. Una asociación que inspire
                  confianza, pertenencia y ganas de formar parte.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          style={{
            background:
              "linear-gradient(135deg, rgba(199,165,75,0.18), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "28px",
            padding: "34px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  color: "#c7a54b",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  letterSpacing: "0.08em",
                  marginBottom: "10px",
                }}
              >
                CONTACTO
              </div>

              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.03,
                  margin: "0 0 12px",
                }}
              >
                Conectate con Simbiosis Miceliar
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                  maxWidth: "700px",
                  margin: 0,
                }}
              >
                Si querés conocer más, recibir orientación o dar el primer paso para
                comunicarte con nosotros, escribinos directamente.
              </p>
            </div>

            <a
              href="https://wa.me/5492944138880"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                background: "#c7a54b",
                color: "#111",
                padding: "16px 22px",
                borderRadius: "999px",
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
            >
              Hablar por WhatsApp
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
