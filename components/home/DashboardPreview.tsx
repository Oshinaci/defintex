import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function DashboardPreview() {
  return (
    <Card className="w-full max-w-md border-white/15 bg-white/5 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Wallet Balance</p>
          <h2 className="mt-1 text-3xl font-bold text-white">
            250 TC
          </h2>
        </div>

        <Badge variant="success">
          Connected
        </Badge>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <span className="text-gray-300">
            Reputation
          </span>

          <span className="font-semibold text-green-400">
            98.7
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <span className="text-gray-300">
            AI Matching
          </span>

          <span className="font-semibold text-violet-400">
            Active
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <span className="text-gray-300">
            Escrow
          </span>

          <span className="font-semibold text-cyan-400">
            Secured
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <span className="text-gray-300">
            Exchange
          </span>

          <span className="font-semibold text-white">
            12 Active
          </span>
        </div>
      </div>
    </Card>
  );
}
