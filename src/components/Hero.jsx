export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex flex-col justify-center pt-16"
    >
      <div className="absolute top-16 left-0 w-full h-[700px] z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/home.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10 z-10">
        <div className="md:col-span-7">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            Who We <span className="text-white/90">are.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/80">
            Fyris is where Design, Technology & Marketing converge to build the
            future.
          </p>
        </div>

        <div className="md:col-span-5">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-lg backdrop-blur">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="mt-4 text-sm leading-6 text-white/80">
              Fyris was born from a simple idea: great digital experiences don’t
              just happen — they’re thoughtfully designed, precisely engineered,
              and strategically grown. We’re a collective of designers,
              technologists, and marketers united by curiosity and a shared
              passion for what’s next. From the first sketch to the last line of
              code, we care about the details that turn ideas into seamless,
              scalable products.
            </p>

            <div className="mt-8 flex gap-10">
              <div>
                <div className="text-5xl font-bold">3.3k</div>
                <p className="mt-2 text-xs uppercase text-white/70">
                  Satisfied clients
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold">1.1k</div>
                <p className="mt-2 text-xs uppercase text-white/70">
                  Employees on staff
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 z-10">
        <p className="max-w-7xl mx-auto px-4 py-6 text-white/85 text-2xl">
          We’re not just builders. We’re partners <br />
          invested in your growth.
        </p>
      </div>
    </section>
  );
}
