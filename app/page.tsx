export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,160,120,0.18),transparent_35%),radial-gradient(circle_at_right,rgba(255,255,255,0.05),transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            Comunidad · Bienestar · Acompañamiento
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Una comunidad con identidad, seriedad y acompañamiento real
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
                Simbiosis Miceliar es un espacio pensado para transmitir
                confianza, cercanía y una estética profesional desde el primer
                contacto.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/549294413880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#3fa46a] px-6 py-4 text-center text-base font-semibold text-white transition hover:scale-[1.02] hover:bg-[#4ab978]"
                >
                  Escribinos por WhatsApp
                </a>

                <a
                  href="#como-funciona"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Cómo funciona
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.25em] text-[#7ed9a2]">
                  Mensaje principal
                </p>
                <h2 className="mt-4 text-3xl font-bold">
                  Seguridad para tu bienestar
                </h2>
                <p className="mt-4 leading-relaxed text-white/75">
                  Una propuesta visual fuerte, elegante y directa, con foco en
                  cercanía, confianza y claridad.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm text-white/60">Estética</p>
                    <p className="mt-1 font-semibold">Oscura y premium</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm text-white/60">Contacto</p>
                    <p className="mt-1 font-semibold">Simple y directo</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm text-white/60">Identidad</p>
                    <p className="mt-1 font-semibold">Seria y confiable</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm text-white/60">Atención</p>
                    <p className="mt-1 font-semibold">Humana y cercana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7ed9a2]">
            Qué ofrecemos
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Una página más prolija, más clara y más confiable
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Mejoramos el mensaje, la estructura visual y el recorrido del usuario
            para que todo se entienda rápido y se vea mucho más profesional.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Acompañamiento cercano</h3>
            <p className="mt-4 leading-relaxed text-white/70">
              Un espacio con atención humana, orientación clara y una identidad
              seria desde el primer contacto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Comunidad con identidad</h3>
            <p className="mt-4 leading-relaxed text-white/70">
              Una propuesta moderna y confiable para quienes valoran
              pertenencia, estética y trato responsable.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Contacto directo</h3>
            <p className="mt-4 leading-relaxed text-white/70">
              Acceso rápido por WhatsApp para resolver dudas, recibir
              información y empezar de forma simple.
            </p>
          </div>
        </div>
      </section>

      <section
        id="como-funciona"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#7ed9a2]">
              Cómo funciona
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Un recorrido simple desde el primer mensaje
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Ordenamos la experiencia para que la persona entienda rápido qué
              hacer, cómo escribir y qué esperar del contacto.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-[#121218] p-8">
              <div className="mb-4 text-4xl font-bold text-[#7ed9a2]">1</div>
              <h3 className="text-xl font-semibold">Nos escribís</h3>
              <p className="mt-3 text-white/70">
                Primer contacto simple por WhatsApp, sin vueltas ni pasos
                innecesarios.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#121218] p-8">
              <div className="mb-4 text-4xl font-bold text-[#7ed9a2]">2</div>
              <h3 className="text-xl font-semibold">Te orientamos</h3>
              <p className="mt-3 text-white/70">
                Brindamos información clara, ordenada y fácil de entender.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#121218] p-8">
              <div className="mb-4 text-4xl font-bold text-[#7ed9a2]">3</div>
              <h3 className="text-xl font-semibold">Coordinamos</h3>
              <p className="mt-3 text-white/70">
                Acompañamos el proceso según la necesidad de cada persona.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#101117] to-[#151a17] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#7ed9a2]">
                Contacto
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Empezá hoy con una atención clara y humana
              </h2>
              <p className="mt-4 text-white/70">
                Estamos para acompañarte con una comunicación directa,
                profesional y cercana.
              </p>
            </div>

            <div className="flex justify-start md:justify-end">
              <a
                href="https://wa.me/549294413880"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#3fa46a] px-8 py-4 text-base font-semibold text-white transition hover:scale-[1.02] hover:bg-[#4ab978]"
              >
                Ir a WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
