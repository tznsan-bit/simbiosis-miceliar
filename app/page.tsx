import Image from "next/image";

const pilares = [
  {
    n: "01",
    titulo: "Cercanía real",
    texto:
      "Queremos que cada persona sienta que del otro lado hay un proyecto presente, accesible y con una forma humana de acompañar.",
  },
  {
    n: "02",
    titulo: "Criterio y seriedad",
    texto:
      "Nos importa comunicar con claridad, sostener procesos prolijos y trabajar con responsabilidad en cada detalle.",
  },
  {
    n: "03",
    titulo: "Identidad patagónica",
    texto:
      "Simbiosis Miceliar es un proyecto patagónico, con una forma propia de construir comunidad, vínculo y pertenencia.",
  },
];

const legalCards = [
  {
    titulo: "Qué es REPROCANN",
    texto:
      "Es el registro nacional que permite encuadrar el acceso al cannabis medicinal dentro del marco vigente para pacientes, cultivadores y organizaciones autorizadas.",
  },
  {
    titulo: "Qué es un club",
    texto:
      "Un club de cultivo es una comunidad organizada que trabaja con criterios internos, trazabilidad, acompañamiento y una lógica responsable de acceso.",
  },
  {
    titulo: "Cómo lo entendemos",
    texto:
      "Nos movemos con una mirada seria del marco legal argentino, priorizando el acceso seguro, el acompañamiento y la claridad en cada proceso.",
  },
];

const servicios = [
  "Acompañamiento cercano y orientación clara",
  "Vinculación con médicos para REPROCANN",
  "Comunidad con identidad patagónica",
  "Información accesible para quienes recién empiezan",
  "Criterio, presencia y seguimiento responsable",
  "Proyecto pensado desde el vínculo y la confianza",
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#051009] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,90,58,0.34),transparent_26%),radial-gradient(circle_at_top_right,rgba(196,160,75,0.14),transparent_20%),radial-gradient(circle_at_bottom,rgba(22,61,43,0.22),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
      </div>

      <section className="mx-auto w-full max-w-7xl px-4 pb-8 pt-5 sm:px-6 lg:px-8 lg:pb-14 lg:pt-8">
        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr] lg:gap-5">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur md:p-7 lg:p-10">
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80">
              Club de cultivo · Patagonia · comunidad real
            </div>

            <h1 className="max-w-[10ch] text-[42px] font-semibold leading-[0.96] tracking-[-0.05em] sm:text-[58px] lg:text-[84px]">
              Una comunidad seria, cercana y con identidad propia
            </h1>

            <p className="mt-6 max-w-2xl text-[18px] leading-[1.8] text-white/78 sm:text-[19px] lg:text-[21px]">
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
                className="inline-flex items-center justify-center rounded-full bg-[#d6b250] px-6 py-3.5 text-[15px] font-semibold text-[#0b110d] transition hover:scale-[1.02]"
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
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] sm:min-h-[420px] lg:min-h-full">
            <Image
              src="/IMG_3967.jpeg"
              alt="Cultivo de Simbiosis Miceliar"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051009]/80 via-[#051009]/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-[22px] border border-white/10 bg-black/20 p-4 backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d6b250]">
                Simbiosis Miceliar
              </p>
              <p className="mt-2 text-sm leading-6 text-white/82">
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
              key={item.n}
              className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 md:p-6"
            >
              <span className="text-sm font-semibold tracking-[0.22em] text-[#d6b250]">
                {item.n}
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
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d6b250]">
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

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {servicios.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] sm:min-h-[480px]">
            <Image
              src="/IMG_3819.jpeg"
              alt="Comunidad y cultivo en Patagonia"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051009]/70 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d6b250]">
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

          <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 md:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d6b250]">
              Acompañamiento
            </p>

            <h3 className="mt-4 text-[32px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[42px]">
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
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d6b250]">
              Información clara
            </p>
            <h3 className="mt-4 text-[36px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[48px] lg:text-[64px]">
              Cannabis, comunidad y marco legal
            </h3>
            <p className="mt-5 text-[17px] leading-[1.85] text-white/75 sm:text-[18px]">
              Mucha gente llega con dudas. Por eso elegimos explicar de forma
              breve, clara y seria cómo entendemos el acceso, el acompañamiento
              y el funcionamiento de un proyecto como este.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {legalCards.map((card) => (
              <article
                key={card.titulo}
                className="rounded-[24px] border border-white/10 bg-black/20 p-5"
              >
                <h4 className="text-[24px] font-medium leading-[1.1] tracking-[-0.03em]">
                  {card.titulo}
                </h4>
                <p className="mt-4 text-[15px] leading-7 text-white/72">
                  {card.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-8 pt-4 sm:px-6 lg:px-8 lg:pb-14">
        <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(214,178,80,0.16),rgba(255,255,255,0.03))] p-6 md:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d6b250]">
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

            <div>
              <a
                href="https://wa.me/5492944138880"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#d6b250] px-7 py-3.5 text-[15px] font-semibold text-[#0c120d] transition hover:scale-[1.02]"
              >
                +54 9 2944 138880
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="flex flex-col gap-4 rounded-[24px] border border-white/10 bg-white/[0.02] px-5 py-5 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-medium text-white/78">Simbiosis Miceliar</span>{" "}
            · Proyecto patagónico
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
