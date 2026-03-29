import Image from "next/image";

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "24px",
  backdropFilter: "blur(8px)",
};

const sectionTitleStyle: React.CSSProperties = {
  color: "#c7a54b",
  fontWeight: 800,
  fontSize: "0.9rem",
  letterSpacing: "0.08em",
  marginBottom: "10px",
};

export default function Home() {
  return (
    <main
      style={{
        background:
          "radial-gradient(circle at top, rgba(72,120,80,0.18), transparent 28%), linear-gradient(180deg, #07110b 0%, #0b0f0c 45%, #090909 100%)",
        color: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "Arial, Helvetica, sans-serif",
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
              href="#marco-legal"
              style={{
                color: "rgba(255,255,255,0.82)",
                textDecoration: "none",
                fontSize: "0.96rem",
              }}
            >
              REPROCANN y marco legal
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
                  fontSize: "clamp(2.8rem, 6vw, 5.3rem)",
                  lineHeight: 0.95,
                  margin: "0 0 18px",
                  letterSpacing: "-0.04em",
                  maxWidth: "820px",
                }}
              >
                Una comunidad seria, cercana y con identidad propia
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
                Simbiosis Miceliar es un proyecto patagónico que busca hacer las
                cosas bien: con presencia, criterio y una forma responsable de
                acompañar. Nos importa la calidad del vínculo, la claridad en cada
                proceso y una identidad que transmita confianza desde el primer
                contacto.
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
            <div style={sectionTitleStyle}>01</div>
            <h3 style={{ marginTop: 0, fontSize: "1.35rem" }}>Cercanía real</h3>
            <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.7 }}>
              Queremos que cada persona sienta que del otro lado hay un proyecto
              presente, humano y accesible.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={sectionTitleStyle}>02</div>
            <h3 style={{ marginTop: 0, fontSize: "1.35rem" }}>Criterio y seriedad</h3>
            <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.7 }}>
              Nos importa comunicar con claridad, acompañar bien y sostener una
              propuesta prolija en cada detalle.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={sectionTitleStyle}>03</div>
            <h3 style={{ marginTop: 0, fontSize: "1.35rem" }}>Identidad patagónica</h3>
            <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.7 }}>
              Nacemos desde el territorio, con una mirada propia y una forma de
              construir comunidad que valora el vínculo y la pertenencia.
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
            <div style={sectionTitleStyle}>QUIÉNES SOMOS</div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.02,
                margin: "0 0 16px",
              }}
            >
              Una asociación pensada para transmitir confianza, pertenencia y nivel
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.8,
                fontSize: "1.04rem",
                marginBottom: "14px",
              }}
            >
              Simbiosis Miceliar nace con una idea simple: construir un espacio
              serio, actual y cercano. No buscamos una presencia improvisada ni un
              vínculo distante, sino una comunidad donde la estética, el trato
              humano y la coherencia formen parte de lo mismo.
            </p>

            <p
              style={{
                color: "rgba(255,255,255,0.74)",
                lineHeight: 1.8,
                fontSize: "1.01rem",
                margin: 0,
              }}
            >
              Queremos que quien llegue sienta que detrás hay un proyecto real:
              con trabajo, presencia y una forma de acompañar que prioriza a las
              personas sin perder solidez.
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
            <div style={sectionTitleStyle}>ACOMPAÑAMIENTO</div>
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
              <h3 style={{ marginTop: 0 }}>Orientación cercana</h3>
              <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.7 }}>
                Cada proceso necesita escucha, claridad y una atención más humana.
                Buscamos que el primer contacto sea simple, prolijo y accesible.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Vinculación médica</h3>
              <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.7 }}>
                Contamos con médicos encargados de la vinculación a REPROCANN y
                acompañamos a las personas durante ese recorrido.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Seguimiento real</h3>
              <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.7 }}>
                Nos interesa construir un vínculo sostenido, no solo responder una
                consulta y desaparecer.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            alignItems: "stretch",
            marginBottom: "72px",
          }}
        >
          <div style={cardStyle}>
            <div style={sectionTitleStyle}>CULTIVO E IDENTIDAD</div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.04,
                margin: "0 0 16px",
              }}
            >
              Una presencia cuidada también habla de cómo trabajamos
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.8,
                fontSize: "1.04rem",
                marginBottom: "14px",
              }}
            >
              La manera en que cultivamos, mostramos y construimos nuestra
              identidad forma parte del mismo mensaje: orden, dedicación,
              coherencia y respeto por lo que hacemos.
            </p>

            <p
              style={{
                color: "rgba(255,255,255,0.74)",
                lineHeight: 1.8,
                fontSize: "1.01rem",
                margin: 0,
              }}
            >
              Queremos que Simbiosis Miceliar se vea como lo que busca ser: una
              asociación seria, contemporánea y con personalidad propia.
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
          id="marco-legal"
          style={{ marginBottom: "72px" }}
        >
          <div style={{ marginBottom: "22px" }}>
            <div style={sectionTitleStyle}>REPROCANN Y MARCO LEGAL</div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.04,
                margin: 0,
                maxWidth: "900px",
              }}
            >
              Información clara para entender cómo funciona hoy el acceso medicinal en Argentina
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
              <h3 style={{ marginTop: 0 }}>¿Qué es REPROCANN?</h3>
              <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.75, margin: 0 }}>
                Es el registro del programa nacional que permite autorizar el
                cultivo controlado de cannabis con fines medicinales, terapéuticos
                y/o paliativos del dolor para personas con indicación médica.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>¿Qué es un club?</h3>
              <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.75, margin: 0 }}>
                En este marco, un club o asociación funciona como una organización
                civil sin fines de lucro que busca acompañar, organizar y sostener
                un acceso responsable dentro de las reglas vigentes.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>¿Cómo funciona la ley?</h3>
              <p style={{ color: "rgba(255,255,255,0.76)", lineHeight: 1.75, margin: 0 }}>
                En Argentina, el uso medicinal se encuadra principalmente en la Ley
                27.350 y su reglamentación. El sistema contempla autocultivo,
                tercero cultivador y determinadas organizaciones autorizadas.
              </p>
            </div>
          </div>

          <div
            style={{
              ...cardStyle,
              marginTop: "18px",
              padding: "28px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "22px",
              }}
            >
              <div>
                <h3 style={{ marginTop: 0 }}>En resumen</h3>
                <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.8 }}>
                  El acceso medicinal no funciona como un mercado libre ni como una
                  lógica informal. Requiere indicación médica, inscripción cuando
                  corresponde y trazabilidad dentro del marco vigente.
                </p>
              </div>

              <div>
                <h3 style={{ marginTop: 0 }}>Nuestro enfoque</h3>
                <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.8 }}>
                  Por eso priorizamos la orientación clara, la vinculación médica y
                  un acompañamiento responsable para que cada persona entienda mejor
                  su camino y pueda dar pasos informados.
                </p>
              </div>
            </div>
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
                <div style={sectionTitleStyle}>IDENTIDAD</div>

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
              <div style={sectionTitleStyle}>CONTACTO</div>

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
                Si querés conocer más, recibir orientación o dar el primer paso
                para comunicarte con nosotros, escribinos directamente.
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
