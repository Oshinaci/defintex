import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
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
      </section>
    </main>
  );
}
