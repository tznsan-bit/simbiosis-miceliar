import Image from "next/image";

const pilares = [
  {
    numero: "01",
    titulo: "Cercanía real",
    texto:
      "Nos importa que cada persona sienta que del otro lado hay un proyecto presente, accesible y con una forma cercana de acompañar.",
  },
  {
    numero: "02",
    titulo: "Criterio y seriedad",
    texto:
      "Trabajamos con claridad, responsabilidad y una mirada prolija en cada proceso. Hacer las cosas bien también es una forma de cuidar.",
  },
  {
    numero: "03",
    titulo: "Identidad patagónica",
    texto:
      "Simbiosis Miceliar es un proyecto patagónico con una forma propia de construir comunidad, pertenencia y confianza.",
  },
];

const pasos = [
  {
    titulo: "Primer contacto",
    texto:
      "Escuchamos cada consulta con atención y tratamos de orientar de forma clara, cercana y comprensible desde el inicio.",
  },
  {
    titulo: "Orientación y acompañamiento",
    texto:
      "Brindamos información ordenada para que cada persona entienda mejor el proceso y pueda ubicarse dentro del marco correspondiente.",
  },
  {
    titulo: "Vinculación para REPROCANN",
    texto:
      "Contamos con médicos encargados de la vinculación a REPROCANN y ayudamos a las personas en ese recorrido.",
  },
  {
    titulo: "Seguimiento responsable",
    texto:
      "Buscamos sostener un vínculo real, con presencia y seriedad, más allá del primer mensaje o la primera consulta.",
  },
];

const legalCards = [
  {
    titulo: "Qué es REPROCANN",
    texto:
      "Es el registro nacional vinculado al acceso al cannabis medicinal dentro del marco vigente, para pacientes, cultivadores y organizaciones autorizadas.",
  },
  {
    titulo: "Qué es un club de cultivo",
    texto:
      "Es una comunidad organizada que acompaña procesos con criterios internos, seriedad, trazabilidad y una lógica responsable de acceso.",
  },
  {
    titulo: "Cómo entendemos la ley",
    texto:
      "Nos movemos con una mirada responsable del marco legal argentino, priorizando el acceso seguro, la información clara y el acompañamiento.",
  },
];

const valores = [
  "Proyecto patagónico",
  "Comunidad real",
  "Acompañamiento cercano",
  "Orientación clara",
  "Criterio y responsabilidad",
  "Identidad propia",
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#04100a] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(35,102,66,0.35),transparent_28%),radial-gradient(circle_at_top_right,rgba(205,171,84,0.14),transparent_22%),radial-gradient(circle_at_bottom,rgba(16,55,38,0.24),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#04100a]/75 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5 sm:h-12 sm:w-12">
              <Image
                src="/logo-simbiosis.png"
                alt="Logo Simbiosis Miceliar"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="min-w-0 leading-tight">
              <p className="truncate text-[11px] font-semibold tracking-[0.18em] text-white/95 sm:text-xs">
                SIMBIOSIS MICELIAR
              </p>
              <p className="text-[11px] text-white/50 sm:text-xs">
                Proyecto patagónico
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#quienes-somos" className="transition hover:text-white">
              Quiénes somos
            </a>
            <a href="#cultivo" className="transition hover:text-white">
              Cultivo
            </a>
            <a href="#reprocann" className="transition hover:text-white">
              REPROCANN
            </a>
            <a href="#contacto" className="transition hover:text-white">
              Contacto
            </a>
          </nav>

          <a
            href="https://wa.me/5492944138880"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#d7b353] px-5 py-2.5 text-sm font-semibold text-[#0b110d] transition hover:scale-[1.02] md:inline-flex"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-16 lg:pt-10">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-5">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur md:p-8 lg:p-10">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80">
              Club de cultivo · Patagonia · comunidad real
            </div>

            <h1 className="mt-6 max-w-[11ch] text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[58px] lg:text-[86px]">
              Una comunidad seria, cercana y con identidad propia
            </h1>

            <p className="mt-6 max-w-2xl text-[18px] leading-[1.85] text-white/78 sm:text-[19px] lg:text-[21px]">
              Simbiosis Miceliar es un proyecto patagónico que busca hacer las
              cosas bien: con presencia, criterio y una forma responsable de
              acompañar. Nos importa la calidad del vínculo, la claridad en cada
              proceso y una identidad que transmita confianza desde el primer
              contacto.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://wa.me/5492944138880"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#d7b353] px-6 py-3.5 text-[15px] font-semibold text-[#0b110d] transition hover:scale-[1.02]"
              >
                Escribinos por WhatsApp
              </a>

              <a
                href="#quienes-somos"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 py-3.5 text-[15px] font-medium text-white/88 transition hover:bg-white/[0.06]"
              >
                Conocé el proyecto
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {valores.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] sm:min-h-[440px] lg:min-h-full">
            <Image
              src="/IMG_3967.jpeg"
              alt="Cultivo de Simbiosis Miceliar"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04100a]/85 via-[#04100a]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-[22px] border border-white/10 bg-black/25 p-4 backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d7b353]">
                Simbiosis Miceliar
              </p>
              <p className="mt-2 text-sm leading-6 text-white/82 sm:text-[15px]">
                Proyecto patagónico con una mirada seria, cercana y enfocada en
                construir comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pilares.map((item) => (
            <article
              key={item.numero}
              className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 md:p-6"
            >
              <span className="text-sm font-semibold tracking-[0.22em] text-[#d7b353]">
                {item.numero}
              </span>
              <h2 className="mt-4 text-[28px] font-medium leading-[1.05] tracking-[-0.03em] sm:text-[32px]">
                {item.titulo}
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-white/72">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="quienes-somos"
        className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14"
      >
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7b353]">
              Quiénes somos
            </p>

            <h3 className="mt-5 max-w-[12ch] text-[38px] font-semibold leading-[0.96] tracking-[-0.04em] sm:text-[52px] lg:text-[72px]">
              Una asociación pensada para transmitir confianza
            </h3>

            <p className="mt-6 text-[17px] leading-[1.9] text-white/78 sm:text-[18px]">
              Construimos un espacio con identidad propia, vínculo cercano y una
              forma seria de acompañar. Nos interesa que cada persona que se
              acerca encuentre claridad, escucha y una comunidad presente.
            </p>

            <p className="mt-5 text-[17px] leading-[1.9] text-white/78 sm:text-[18px]">
              Entendemos el cannabis desde una perspectiva responsable,
              comunitaria y humana. Por eso priorizamos procesos prolijos,
              comunicación clara y una presencia real en cada instancia.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7b353]">
                Cómo trabajamos
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {pasos.map((item) => (
                  <div
                    key={item.titulo}
                    className="rounded-[22px] border border-white/10 bg-black/20 p-4"
                  >
                    <h4 className="text-[18px] font-medium tracking-[-0.02em] text-white">
                      {item.titulo}
                    </h4>
                    <p className="mt-3 text-[15px] leading-7 text-white/72">
                      {item.texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cultivo"
        className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14"
      >
        <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] sm:min-h-[440px]">
            <Image
              src="/IMG_3819.jpeg"
              alt="Comunidad y cultivo en Patagonia"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04100a]/75 via-transparent to-transparent" />
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7b353]">
              Cultivo
            </p>

            <h3 className="mt-4 text-[36px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[48px] lg:text-[64px]">
              Una mirada responsable sobre el cultivo
            </h3>

            <p className="mt-6 text-[17px] leading-[1.9] text-white/78 sm:text-[18px]">
              Para nosotros el cultivo no es un detalle decorativo: es parte
              central del proyecto. Le damos importancia a la calidad, al
              seguimiento, a la observación y a sostener una práctica coherente
              con lo que comunicamos.
            </p>

            <p className="mt-5 text-[17px] leading-[1.9] text-white/78 sm:text-[18px]">
              Buscamos una forma de trabajo ordenada, seria y consciente, donde
              el vínculo entre comunidad, acompañamiento e información tenga una
              base real. No se trata solo de cultivar, sino de hacerlo con
              criterio.
            </p>
          </div>
        </div>
      </section>

      <section
        id="reprocann"
        className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14"
      >
        <div className="grid gap-5 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(215,179,83,0.12),rgba(255,255,255,0.03))] p-6 md:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7b353]">
              Acompañamiento
            </p>

            <h3 className="mt-4 text-[34px] font-semibold leading-[1] tracking-[-0.04em] sm:text-[46px] lg:text-[58px]">
              Vinculación y orientación para REPROCANN
            </h3>

            <p className="mt-6 text-[17px] leading-[1.9] text-white/78 sm:text-[18px]">
              Contamos con médicos encargados de la vinculación a REPROCANN y
              acompañamos a las personas en ese proceso para que puedan
              orientarse con mayor claridad dentro del marco correspondiente.
            </p>

            <p className="mt-5 text-[17px] leading-[1.9] text-white/78 sm:text-[18px]">
              Sabemos que muchas consultas llegan con dudas, desinformación o
              inseguridad. Por eso buscamos brindar una referencia cercana,
              seria y comprensible desde el primer contacto.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7b353]">
              Información clara
            </p>

            <h3 className="mt-4 text-[32px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[42px] lg:text-[52px]">
              Cannabis, comunidad y marco legal
            </h3>

            <div className="mt-8 grid gap-4">
              {legalCards.map((card) => (
                <article
                  key={card.titulo}
                  className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                >
                  <h4 className="text-[22px] font-medium leading-[1.1] tracking-[-0.03em]">
                    {card.titulo}
                  </h4>
                  <p className="mt-4 text-[15px] leading-7 text-white/72">
                    {card.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="mx-auto w-full max-w-7xl px-4 pb-10 pt-4 sm:px-6 lg:px-8 lg:pb-16"
      >
        <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(215,179,83,0.16),rgba(255,255,255,0.03))] p-6 md:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7b353]">
                Contacto
              </p>
              <h3 className="mt-4 text-[34px] font-semibold leading-[1] tracking-[-0.04em] sm:text-[46px] lg:text-[58px]">
                Hablemos
              </h3>
              <p className="mt-5 text-[17px] leading-[1.85] text-white/78">
                Si querés conocer más sobre Simbiosis Miceliar, escribirnos es
                la mejor manera de empezar. Respondemos con cercanía, claridad y
                una mirada seria sobre cada consulta.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5492944138880"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#d7b353] px-7 py-3.5 text-[15px] font-semibold text-[#0c120d] transition hover:scale-[1.02]"
              >
                +54 9 2944 138880
              </a>

              <span className="text-sm text-white/60">
                simbiosismiceliar.com.ar
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="flex flex-col gap-4 rounded-[24px] border border-white/10 bg-white/[0.02] px-5 py-5 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
              <Image
                src="/logo-simbiosis.png"
                alt="Logo Simbiosis Miceliar"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-medium text-white/78">
                Simbiosis Miceliar
              </span>{" "}
              · Club de cultivo · Proyecto patagónico
            </div>
          </div>

          <div className="flex flex-col gap-1 md:items-end">
            <span>simbiosismiceliar.com.ar</span>
            <span>WhatsApp: +54 9 2944 138880</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
