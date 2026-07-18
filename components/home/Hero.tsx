import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <Badge>Ethereum Layer 2 • AI Powered</Badge>

        <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Exchange Value,
          <br />
          Not Just Money.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Defintex is a decentralized value exchange protocol that enables
          people to trade time, skills, and services through AI-powered
          matching and trustless on-chain settlement.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button>Launch App</Button>

          <Button variant="outline">
            Read Whitepaper
          </Button>
        </div>
      </div>
    </section>
  );
}
