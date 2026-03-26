export default function Page() {
  const features = [
    {
      title: 'Acompañamiento cercano',
      text: 'Un espacio con atención humana, orientación clara y una identidad seria desde el primer contacto.',
    },
    {
      title: 'Comunidad con identidad',
      text: 'Una propuesta moderna y confiable para quienes valoran pertenencia, estética y trato responsable.',
    },
    {
      title: 'Contacto directo',
      text: 'Acceso rápido por WhatsApp para resolver dudas, recibir información y empezar de forma simple.',
    },
  ];

  const steps = [
    'Nos escribís por WhatsApp.',
    'Te brindamos información clara y ordenada.',
    'Coordinamos el acompañamiento según tu necesidad.',
  ];

  const faqs = [
    {
      q: '¿Cómo puedo contactarme?',
      a: 'Podés escribir directamente por WhatsApp y recibir una respuesta rápida y personalizada.',
    },
    {
      q: '¿Qué tipo de información puedo pedir?',
      a: 'Podés consultar sobre la comunidad, la forma de contacto, el acompañamiento y los pasos para recibir más información.',
    },
    {
      q: '¿La atención es directa?',
      a: 'Sí, la idea es facilitar un canal simple, cercano y claro para que el primer contacto sea cómodo.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#08100d] text-white">
      <a
        href="https://wa.me/549294413880"
        className="fixed bottom-5 right-5 z-50 rounded-full border border-emerald-300/30 bg-emerald-400 px-5 py-3 text-sm font-semibold text-black shadow-2xl transition hover:scale-[1.03]"
      >
        WhatsApp
      </a>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.10),transparent_25%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:34px_34px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-300">
              Simbiosis Miceliar · Comunidad · Bienestar
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Una comunidad con
              <span className="block text-emerald-300">identidad, seriedad y acompañamiento real.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              Diseñamos una presencia clara, moderna y profesional para Simbiosis Miceliar. Un espacio pensado para transmitir confianza, cercanía y una estética premium desde el primer vistazo.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/549294413880"
                className="rounded-2xl bg-emerald-400 px-6 py-3 text-center font-semibold text-black transition hover:scale-[1.02]"
              >
                Escribinos por WhatsApp
              </a>
              <a
                href="#como-funciona"
                className="rounded-2xl border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/5"
              >
                Cómo funciona
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-emerald-300">Mensaje principal</p>
              <h3 className="mt-2 text-2xl font-semibold">Seguridad para tu bienestar</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Una propuesta visual fuerte, elegante y directa, con foco en cercanía y confianza.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#0f1714] p-5">
                <p className="text-sm text-yellow-300">Estética</p>
                <p className="mt-2 text-lg font-semibold">Oscura y premium</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#0f1714] p-5">
                <p className="text-sm text-emerald-300">Contacto</p>
                <p className="mt-2 text-lg font-semibold">Simple y directo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Beneficios</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Una página más prolija, más clara y más confiable</h2>
          <p className="mt-4 text-white/70">
            Mejoramos el mensaje, la estructura visual y el recorrido del usuario para que todo se entienda rápido y se vea mucho más profesional.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-[#0d1512] p-6 shadow-xl shadow-black/10">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-6 md:px-10 md:py-10">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Cómo funciona</p>
            <h2 className="mt-3 text-3xl font-bold">Un recorrido simple desde el primer mensaje</h2>
            <p className="mt-4 text-white/70">
              Ordenamos la experiencia para que la persona entienda rápido qué hacer, cómo escribir y qué esperar del contacto.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0d1512] p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 font-bold text-black">
                  {index + 1}
                </div>
                <p className="pt-1 text-white/80">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Preguntas frecuentes</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Respuestas claras para generar más confianza</h2>
        </div>

        <div className="grid gap-4">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-3xl border border-white/10 bg-[#0d1512] p-6">
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 md:px-10">
        <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-yellow-200/5 p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Contacto</p>
              <h2 className="mt-3 text-3xl font-bold">¿Querés recibir más información?</h2>
              <p className="mt-4 text-white/75">
                Escribinos directamente y seguí mejorando la presencia digital de tu proyecto con una imagen más sólida, moderna y confiable.
              </p>
            </div>
            <a
              href="https://wa.me/549294413880"
              className="rounded-2xl bg-white px-6 py-3 text-center font-semibold text-black transition hover:scale-[1.02]"
            >
              Hablar ahora
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#060b09]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <h3 className="text-xl font-semibold">Simbiosis Miceliar</h3>
            <p className="mt-2 text-sm text-white/60">Comunidad, estética y acompañamiento con identidad propia.</p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/70 md:items-end">
            <a href="https://wa.me/549294413880" className="transition hover:text-emerald-300">
              WhatsApp: +54 9 2944 13-880
            </a>
            <a href="https://instagram.com" className="transition hover:text-emerald-300">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
