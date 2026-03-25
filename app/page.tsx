export default function Home() {
  const whatsappLink =
    "https://wa.me/549294413880?text=Hola%20Simbiosis%20Miceliar%2C%20quiero%20recibir%20informaci%C3%B3n";
  const instagramLink = "https://instagram.com/simbiosismiceliar";
  const emailLink = "mailto:contacto@simbiosismiceliar.com.ar";

  return (
    <main className="min-h-screen bg-[#07110c] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(71,255,144,0.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(130,255,180,0.14),transparent_25%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#07110c]" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-16">
          <div className="max-w-xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-emerald-200 backdrop-blur">
              Club de cultivo · Calidad · Comunidad
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Simbiosis <span className="text-emerald-300">Miceliar</span>
            </h1>

            <p className="mt-5 text-xl text-emerald-100/90 md:text-2xl">
              Seguridad para tu salud
            </p>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/75 md:text-lg">
              Un espacio pensado para quienes valoran el cuidado, la
              trazabilidad y una comunidad seria, moderna y de alta calidad.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-emerald-300 px-6 py-3 font-medium text-[#07110c] shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5"
              >
                WhatsApp
              </a>

              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                Instagram
              </a>

              <a
                href="#contacto"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                Contacto
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="#membresias"
                className="rounded-2xl border border-emerald-300/30 bg-emerald-300/10 px-6 py-3 font-medium text-emerald-200 transition hover:bg-emerald-300/15"
              >
                Membresías
              </a>

              <a
                href={emailLink}
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                Email
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-semibold text-emerald-300">
                  100%
                </div>
                <div className="mt-1">enfoque en calidad</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-semibold text-emerald-300">
                  +
                </div>
                <div className="mt-1">acompañamiento cercano</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-semibold text-emerald-300">
                  24/7
                </div>
                <div className="mt-1">imagen premium</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-emerald-400/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-[#0f2619] via-[#112d1d] to-[#08110c] p-8">
                <div className="mb-10 flex items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-[0.25em] text-emerald-200/70">
                      Simbiosis Miceliar
                    </div>
                    <div className="mt-2 text-3xl font-semibold text-white">
                      La mejor calidad
                    </div>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-emerald-300/90" />
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl border border-emerald-200/10 bg-black/20 p-5">
                    <div className="text-sm text-emerald-200">Trazabilidad</div>
                    <div className="mt-2 text-white/80">
                      Procesos cuidados, seguimiento y enfoque responsable.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-emerald-200/10 bg-black/20 p-5">
                    <div className="text-sm text-emerald-200">Comunidad</div>
                    <div className="mt-2 text-white/80">
                      Un club orientado al acompañamiento y al cuidado de cada
                      integrante.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-emerald-200/10 bg-black/20 p-5">
                    <div className="text-sm text-emerald-200">Confianza</div>
                    <div className="mt-2 text-white/80">
                      Una identidad seria, moderna y profesional.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="beneficios"
        className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16"
      >
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70">
            Beneficios
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Un club con estética premium y mensaje claro
          </h2>
          <p className="mt-4 text-white/70">
            Diseñado para transmitir seguridad, salud, calidad y pertenencia,
            con una presencia moderna y atractiva.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Calidad superior",
              text: "Una imagen enfocada en excelencia, cuidado y detalle en cada aspecto visual.",
            },
            {
              title: "Comunidad responsable",
              text: "Comunicación clara, cercana y pensada para generar confianza desde el primer vistazo.",
            },
            {
              title: "Identidad sólida",
              text: "Base ideal para crecer luego con WhatsApp, formulario, membresías o panel de socios.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur"
            >
              <div className="h-12 w-12 rounded-2xl bg-emerald-300/90" />
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="membresias"
        className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-16"
      >
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/5 to-emerald-300/5 p-8 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70">
              Membresías
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Un ingreso claro y profesional
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/70">
              Esta sección puede mostrar requisitos, pasos de ingreso,
              beneficios y vías de contacto para solicitar información o iniciar
              el proceso.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Solicitud de ingreso",
              "Información por WhatsApp",
              "Seguimiento personalizado",
            ].map((line) => (
              <div
                key={line}
                className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white/80"
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70">
                Contacto
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Listo para dar el siguiente paso
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-white/70">
                Podés sumar tu Instagram real, mail real y después conectar un
                formulario si querés.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur">
              <div className="text-sm text-emerald-300">
                Simbiosis Miceliar
              </div>
              <div className="mt-2 text-lg">Seguridad para tu salud</div>

              <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +54 9 2944 13-880
                </a>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a href={emailLink}>contacto@simbiosismiceliar.com.ar</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
