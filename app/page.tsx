export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0F0D] text-[#F5F3EE] selection:bg-[#B79A63] selection:text-[#0B0F0D]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,154,99,0.14),transparent_25%),radial-gradient(circle_at_left,rgba(111,139,109,0.14),transparent_30%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 md:px-10">
          <header className="flex items-center justify-between py-4">
            <div>
              <p className="font-serif text-2xl tracking-wide text-[#E7DFD1] md:text-3xl">
                Simbiosis Miceliar
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#6F8B6D]">
                Naturaleza · Cuidado · Criterio
              </p>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-[#E7DFD1]/85 md:flex">
              <a href="#inicio" className="transition hover:text-[#B79A63]">Inicio</a>
              <a href="#nosotros" className="transition hover:text-[#B79A63]">Nosotros</a>
              <a href="#comunidad" className="transition hover:text-[#B79A63]">Comunidad</a>
              <a href="#contacto" className="transition hover:text-[#B79A63]">Contacto</a>
            </nav>
          </header>

          <div
            id="inicio"
            className="relative flex flex-1 items-center py-16 md:py-24"
          >
            <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="mb-6 inline-flex items-center rounded-full border border-[#B79A63]/30 bg-[#163126]/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#B79A63] backdrop-blur">
                  Comunidad responsable
                </div>

                <h1 className="max-w-4xl font-serif text-5xl leading-tight text-[#F5F3EE] md:text-7xl">
                  Cultivo consciente,
                  <span className="block text-[#E7DFD1]">calidad y seguridad</span>
                  <span className="block text-[#6F8B6D]">para una comunidad responsable.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#E7DFD1]/80 md:text-lg">
                  Una propuesta con identidad natural, mirada moderna y compromiso con la confianza,
                  el acompañamiento y la calidad.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#nosotros"
                    className="rounded-full border border-[#B79A63] px-7 py-3 text-center text-sm font-medium text-[#F5F3EE] transition hover:bg-[#B79A63] hover:text-[#0B0F0D]"
                  >
                    Conocenos
                  </a>
                  <a
                    href="https://wa.me/549294413880"
                    className="rounded-full bg-[#163126] px-7 py-3 text-center text-sm font-medium text-[#F5F3EE] transition hover:bg-[#2D4A3A]"
                  >
                    Contacto
                  </a>
                </div>

                <p className="mt-8 text-sm uppercase tracking-[0.28em] text-[#B79A63]/90">
                  Seguridad para tu tranquilidad.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#B79A63]/10 via-transparent to-[#6F8B6D]/10 blur-2xl" />
                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-md">
                  <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#B79A63]">Identidad</span>
                    <span className="h-2 w-2 rounded-full bg-[#6F8B6D]" />
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-3xl border border-white/10 bg-[#0F1613] p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-[#6F8B6D]">Calidad</p>
                      <p className="mt-2 text-sm leading-7 text-[#E7DFD1]/80">
                        Procesos cuidados, imagen prolija y una experiencia construida desde el detalle.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-[#0F1613] p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-[#6F8B6D]">Seguridad</p>
                      <p className="mt-2 text-sm leading-7 text-[#E7DFD1]/80">
                        Responsabilidad, confianza y una estética que transmite solidez y criterio.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-[#0F1613] p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-[#6F8B6D]">Comunidad</p>
                      <p className="mt-2 text-sm leading-7 text-[#E7DFD1]/80">
                        Vínculos cercanos, acompañamiento real y una identidad construida con coherencia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#B79A63]">Nosotros</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-[#F5F3EE] md:text-5xl">
              Una identidad construida desde la confianza
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <p className="text-base leading-8 text-[#E7DFD1]/85 md:text-lg">
              En Simbiosis Miceliar creemos en una forma de hacer las cosas más consciente, más cuidada y
              más humana. Buscamos unir calidad, responsabilidad y comunidad en una experiencia cercana,
              estética y profesional.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Calidad',
              text: 'Cuidamos cada detalle para ofrecer una experiencia sólida, prolija y confiable.',
            },
            {
              title: 'Seguridad',
              text: 'Trabajamos desde una mirada responsable, priorizando el cuidado y la tranquilidad.',
            },
            {
              title: 'Comunidad',
              text: 'Creemos en los vínculos, el acompañamiento y la construcción de confianza a largo plazo.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-[#101614] p-8 transition hover:-translate-y-1 hover:border-[#B79A63]/40 hover:bg-[#131b18]"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl border border-[#B79A63]/30 bg-[#163126]/60" />
              <h3 className="font-serif text-2xl text-[#F5F3EE]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#E7DFD1]/75">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#163126] to-[#0F1613] p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-[#B79A63]">Identidad</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#F5F3EE] md:text-5xl">
              Una marca con raíz natural y visión moderna
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#E7DFD1]/80 md:text-lg">
              Nuestra identidad nace del encuentro entre naturaleza, criterio y diseño. Tomamos la
              inspiración de lo orgánico, la precisión de una estética limpia y la calidez de una comunidad
              que valora el cuidado, la calidad y la conexión real.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2" id="comunidad">
            {[
              'Estética cuidada',
              'Mirada consciente',
              'Cercanía real',
              'Calidad sostenida',
            ].map((title) => (
              <div
                key={title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#6F8B6D]">Lo que nos define</p>
                <h3 className="mt-4 font-serif text-2xl text-[#F5F3EE]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#E7DFD1]/75">
                  Una presencia clara, humana y coherente en cada detalle de la experiencia.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10 md:py-14">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-[#B79A63]/20 bg-[#111715] px-8 py-14 text-center md:px-16 md:py-20">
          <p className="font-serif text-4xl leading-tight text-[#F5F3EE] md:text-6xl">
            Seguridad para tu tranquilidad.
            <span className="block text-[#B79A63]">Calidad para tu confianza.</span>
            <span className="block text-[#6F8B6D]">Comunidad para crecer.</span>
          </p>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="rounded-[2.2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#B79A63]">Contacto</p>
          <h2 className="mt-4 font-serif text-4xl text-[#F5F3EE] md:text-5xl">Conectemos</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#E7DFD1]/80 md:text-lg">
            Si querés conocer más sobre Simbiosis Miceliar, sumarte a la comunidad o ponerte en contacto,
            escribinos.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/549294413880"
              className="rounded-full border border-[#B79A63] px-8 py-3 text-sm font-medium text-[#F5F3EE] transition hover:bg-[#B79A63] hover:text-[#0B0F0D]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#E7DFD1]/65 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-xl text-[#F5F3EE]">Simbiosis Miceliar</p>
            <p className="mt-1">Naturaleza, cuidado y criterio.</p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a href="https://instagram.com" className="transition hover:text-[#B79A63]">Instagram</a>
            <a href="https://wa.me/549294413880" className="transition hover:text-[#B79A63]">WhatsApp</a>
            <span>Lago Puelo, Chubut</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
