export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          Powered by Ethereum Layer 2
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Defintex
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          A decentralized value exchange protocol that transforms time,
          skills, and services into trustless digital assets secured on
          blockchain.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90">
            Launch App
          </button>

          <button className="rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10">
            Read Docs
          </button>
        </div>
      </section>
    </main>
  );
}
