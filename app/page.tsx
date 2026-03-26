export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0f0d] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_40%),radial-gradient(circle_at_right,rgba(250,204,21,0.10),transparent_30%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:py-28">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-300">
              Club de cultivo · Comunidad · Acompañamiento
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Simbiosis Miceliar
              <span className="block text-emerald-300">seguridad para tu bienestar</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              Un espacio pensado para acompañar procesos con seriedad, calidez y una identidad moderna.
              Información clara, atención cercana y una comunidad enfocada en el bienestar integral.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/549294413880"
                className="rounded-2xl bg-emerald-400 px-6 py-3 text-center font-semibold text-black transition hover:scale-[1.02]"
              >
                Hablar por WhatsApp
              </a>
              <a
                href="#info"
                className="rounded-2xl border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/5"
              >
                Ver más
              </a>
            </div>
          </div>

          <div className="grid w-full max-w-xl gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-emerald-300">Enfoque</p>
              <h3 className="mt-2 text-xl font-semibold">Acompañamiento responsable</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Orientación clara, trato humano y una propuesta seria para quienes buscan un espacio de confianza.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-yellow-300">Comunidad</p>
              <h3 className="mt-2 text-xl font-semibold">Red cercana</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Un proyecto con identidad propia, pensado para generar pertenencia y acompañamiento real.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:col-span-2">
              <p className="text-sm text-white/60">Estética</p>
              <h3 className="mt-2 text-xl font-semibold">Moderna, sobria y natural</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Una presencia digital limpia, elegante y fácil de navegar, alineada con la identidad de Simbiosis Miceliar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="info" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Qué ofrecemos</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Una web más clara y más profesional</h2>
          <p className="mt-4 text-white/70">
            Reforzamos la confianza con una estructura simple: presentación, beneficios, contacto directo y una identidad visual fuerte.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Identidad sólida',
              text: 'Tipografía fuerte, fondos oscuros y acentos verdes para transmitir seriedad y estilo.',
            },
            {
              title: 'Mensaje directo',
              text: 'Menos texto confuso y una propuesta clara desde el primer segundo.',
            },
            {
              title: 'Conversión',
              text: 'Botón de WhatsApp visible para que la gente pueda escribirte rápido.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-[#0f1714] p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-yellow-200/5 p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Contacto</p>
              <h2 className="mt-3 text-3xl font-bold">¿Querés sumarte o recibir más información?</h2>
              <p className="mt-4 text-white/75">
                Escribinos y te respondemos de forma directa. Podemos seguir mejorando esta web con secciones, preguntas frecuentes, testimonios e imagen de marca.
              </p>
            </div>
            <a
              href="https://wa.me/549294413880"
              className="rounded-2xl bg-white px-6 py-3 text-center font-semibold text-black transition hover:scale-[1.02]"
            >
              Escribir ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
