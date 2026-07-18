import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600/20 to-blue-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}
        <div>
          <Badge>
            Ethereum Layer 2 • AI Powered
          </Badge>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">
            Exchange
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Value
            </span>
            ,
            <br />
            Not Just Money.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Defintex enables people to exchange time, skills,
            and services through AI-powered matching with
            trustless settlement on Ethereum Layer 2.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>
              Launch App
            </Button>

            <Button variant="outline">
              Whitepaper
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          <DashboardPreview />
        </div>

      </div>
    </section>
  );
}
