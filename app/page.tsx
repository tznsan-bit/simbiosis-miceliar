import Image from "next/image";

const whatsappNumber = "54294413880";
const whatsappMessage =
  "Hola, quiero recibir información sobre Simbiosis Miceliar.";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

function CannabisLeaf({
  className = "",
  rotate = "0deg",
}: {
  className?: string;
  rotate?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      style={{ transform: `rotate(${rotate})` }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M60 20C66 38 66 53 60 73C54 53 54 38 60 20Z" />
        <path d="M60 30C77 35 88 44 97 60C80 60 69 56 60 48" />
        <path d="M60 30C43 35 32 44 23 60C40 60 51 56 60 48" />
        <path d="M60 42C76 45 88 54 96 71C79 70 68 64 60 56" />
        <path d="M60 42C44 45 32 54 24 71C41 70 52 64 60 56" />
        <path d="M60 55C72 58 81 66 87 80C74 79 66 74 60 67" />
        <path d="M60 55C48 58 39 66 33 80C46 79 54 74 60 67" />
        <path d="M60 20V92" />
      </g>
    </svg>
  );
}

function PruningScissors({
  className = "",
  rotate = "0deg",
}: {
  className?: string;
  rotate?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      style={{ transform: `rotate(${rotate})` }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        opacity="0.16"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="36" cy="82" r="12" />
        <circle cx="65" cy="88" r="12" />
        <path d="M44 74L83 34" />
        <path d="M73 77L51 55" />
        <path d="M83 34L94 25" />
        <path d="M51 55L44 43" />
      </g>
    </svg>
  );
}

function RootLines({
  className = "",
  rotate = "0deg",
}: {
  className?: string;
  rotate?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      style={{ transform: `rotate(${rotate})` }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M80 20V56" />
        <path d="M80 56C80 76 67 83 58 94" />
        <path d="M80 56C80 76 94 84 104 95" />
        <path d="M58 94C50 103 48 113 46 126" />
        <path d="M104 95C113 104 116 113 118 127" />
        <path d="M78 74C70 82 69 91 69 102" />
        <path d="M85 75C93 83 94 92 95 104" />
        <path d="M68 102C61 109 58 117 56 130" />
        <path d="M96 104C104 111 108 118 111 131" />
      </g>
    </svg>
  );
}

function DecorativeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <CannabisLeaf
        className="absolute left-[3%] top-[7%] h-24 w-24 text-emerald-500 md:h-32 md:w-32"
        rotate="-18deg"
      />
      <CannabisLeaf
        className="absolute right-[6%] top-[14%] h-16 w-16 text-lime-400 md:h-24 md:w-24"
        rotate="22deg"
      />
      <PruningScissors
        className="absolute right-[8%] top-[34%] h-16 w-16 text-amber-300 md:h-24 md:w-24"
        rotate="-12deg"
      />
      <RootLines
        className="absolute left-[1%] top-[38%] h-28 w-28 text-emerald-300 md:h-40 md:w-40"
        rotate="-8deg"
      />
      <CannabisLeaf
        className="absolute right-[3%] top-[58%] h-24 w-24 text-emerald-400 md:h-32 md:w-32"
        rotate="-20deg"
      />
      <PruningScissors
        className="absolute left-[8%] bottom-[14%] h-16 w-16 text-amber-200 md:h-20 md:w-20"
        rotate="16deg"
      />
      <RootLines
        className="absolute right-[12%] bottom-[6%] h-24 w-24 text-lime-300 md:h-36 md:w-36"
        rotate="14deg"
      />
      <CannabisLeaf
        className="absolute left-[14%] bottom-[28%] h-14 w-14 text-emerald-200 md:h-20 md:w-20"
        rotate="10deg"
      />
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-white/70 md:text-lg">{text}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07110c] text-white">
      <DecorativeBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(61,145,93,0.18),transparent_34%),radial-gradient(circle_at_bottom,rgba(203,168,92,0.14),transparent_28%)]" />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10">
        <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 md:px-10">
          <div className="grid w-full items-center gap-14 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                Comunidad · Bienestar · Acompañamiento
              </p>

              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Una comunidad con identidad, cuidado y acompañamiento real
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                Simbiosis Miceliar es un espacio pensado para brindar orientación,
                cercanía y una presencia seria, humana y confiable.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
                >
                  Escribinos por WhatsApp
                </a>

                <a
                  href="#cultivo"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Ver sección cultivo
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400/10 via-transparent to-amber-200/10" />
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/logo-simbiosis.png"
                    alt="Logo Simbiosis Miceliar"
                    width={520}
                    height={520}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-6 md:px-10 md:py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Identidad seria</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Una presencia clara, prolija y coherente, con una estética sólida y
                una comunicación confiable.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Acompañamiento humano</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Cercanía, orientación y atención directa, con una mirada responsable
                y real.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Cuidado en cada etapa</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Seguimiento, dedicación y una construcción basada en compromiso,
                presencia y calidad.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <SectionTitle
            eyebrow="Quiénes somos"
            title="Una propuesta con identidad propia"
            text="Simbiosis Miceliar busca transmitir una imagen sólida, cercana y confiable. El objetivo es construir una comunidad con presencia real, acompañamiento humano y una estética que refleje cuidado, seriedad y conexión."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-[#0b1711]/90 p-7">
              <h3 className="text-lg font-semibold text-white">Comunidad</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Un espacio pensado para vincular personas, procesos y recorridos con
                una identidad compartida.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0b1711]/90 p-7">
              <h3 className="text-lg font-semibold text-white">Bienestar</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Una comunicación enfocada en transmitir calma, confianza y una
                presencia más humana.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0b1711]/90 p-7">
              <h3 className="text-lg font-semibold text-white">Acompañamiento</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Cercanía real, trato claro y una forma de orientar que prioriza el
                cuidado y la conexión.
              </p>
            </div>
          </div>
        </section>

        <section id="cultivo" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <SectionTitle
            eyebrow="Cultivo"
            title="Seguimiento, dedicación y cuidado en cada etapa"
            text="Esta sección refleja una parte esencial de la identidad visual del proyecto: imágenes reales, proceso, detalle y una estética conectada con el trabajo, el cuidado y la calidad."
          />

          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="relative h-[420px] w-full">
                <Image
                  src="/cultivo-1.jpg"
                  alt="Imagen de cultivo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07110c]/80 via-transparent to-transparent" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white">Cultivo con identidad</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  Las imágenes no aparecen como elementos sueltos, sino como parte de
                  una narrativa visual que transmite dedicación, observación y
                  presencia en cada etapa.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-[#0b1711]/90 p-5">
                  <h4 className="text-base font-semibold text-white">Cuidado</h4>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Atención y seguimiento real.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#0b1711]/90 p-5">
                  <h4 className="text-base font-semibold text-white">Proceso</h4>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Una estética ligada al trabajo.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#0b1711]/90 p-5">
                  <h4 className="text-base font-semibold text-white">Calidad</h4>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Presencia, detalle y dedicación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20 text-center md:px-10">
          <SectionTitle
            eyebrow="Cómo funciona"
            title="Un recorrido simple, claro y cercano"
            text="La idea es ofrecer una forma de contacto directa y una experiencia visual que inspire confianza desde el primer momento."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <span className="text-3xl font-semibold text-emerald-300">1</span>
              <h3 className="mt-3 text-lg font-semibold text-white">Nos escribís</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Primer contacto simple, directo y humano.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <span className="text-3xl font-semibold text-emerald-300">2</span>
              <h3 className="mt-3 text-lg font-semibold text-white">Te orientamos</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Acompañamiento claro con una comunicación cercana.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <span className="text-3xl font-semibold text-emerald-300">3</span>
              <h3 className="mt-3 text-lg font-semibold text-white">Coordinamos</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Un paso final prolijo, simple y ordenado.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/5 to-amber-200/10 p-8 text-center backdrop-blur-sm md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
              Contacto
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Empezá hoy con una atención clara y humana
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75">
              Si querés recibir más información o ponerte en contacto, escribinos
              directamente por WhatsApp.
            </p>

            <div className="mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <p className="mt-5 text-sm text-white/50">+54 2944 13 880</p>
          </div>
        </section>
      </div>
    </main>
  );
}
