import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Waves, TrendingUp, Shield, Zap } from "lucide-react";

const pools = [
  {
    id: 1,
    name: "Wrapped USDC",
    symbol: "wUSDC",
    apy: "8.5%",
    tvl: "$1,200,000",
    risk: "Low",
    description: "Stable yield farming with wrapped USDC tokens",
    icon: Shield,
    color: "text-blue-600"
  },
  {
    id: 2, 
    name: "Wrapped ETH",
    symbol: "wETH",
    apy: "12.3%",
    tvl: "$850,000",
    risk: "Medium",
    description: "Higher yield potential with Ethereum exposure",
    icon: Zap,
    color: "text-purple-600"
  },
  {
    id: 3,
    name: "Wrapped USDT",
    symbol: "wUSDT",
    apy: "7.8%",
    tvl: "$400,000",
    risk: "Low",
    description: "Conservative stablecoin strategy with consistent returns",
    icon: Shield,
    color: "text-green-600"
  }
];

export default function Pools() {
  const getRiskBadgeVariant = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-800 border-green-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "High":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleStakeInPool = (poolName: string) => {
    console.log(`Staking in ${poolName}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-dm-sans font-bold text-foreground mb-2">
          Liquidity Pools
        </h1>
        <p className="text-muted-foreground font-work-sans">
          Explore available pools and their yield opportunities.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pools.map((pool) => (
          <Card key={pool.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <pool.icon className={`w-6 h-6 ${pool.color}`} />
                  </div>
                  <div>
                    <CardTitle className="font-dm-sans">
                      {pool.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-work-sans">
                      {pool.symbol}
                    </p>
                  </div>
                </div>
                <Badge 
                  className={`${getRiskBadgeVariant(pool.risk)} font-work-sans`}
                  variant="outline"
                >
                  {pool.risk} Risk
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-foreground font-work-sans text-sm">
                {pool.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-work-sans text-muted-foreground">
                    APY
                  </span>
                  <span className="font-dm-sans font-semibold text-secondary text-lg">
                    {pool.apy}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-work-sans text-muted-foreground">
                    TVL
                  </span>
                  <span className="font-work-sans font-medium">
                    {pool.tvl}
                  </span>
                </div>
              </div>

              <Button 
                onClick={() => handleStakeInPool(pool.name)}
                className="w-full font-work-sans bg-secondary hover:bg-secondary/90"
              >
                Stake in Pool
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pool Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 font-dm-sans">
            <Waves className="w-5 h-5 text-primary" />
            <span>Pool Statistics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-4 bg-card border rounded-lg">
              <div className="text-2xl font-dm-sans font-bold text-foreground mb-1">
                $2.45M
              </div>
              <p className="text-sm text-muted-foreground font-work-sans">
                Total Value Locked
              </p>
            </div>
            
            <div className="text-center p-4 bg-card border rounded-lg">
              <div className="text-2xl font-dm-sans font-bold text-secondary mb-1">
                9.5%
              </div>
              <p className="text-sm text-muted-foreground font-work-sans">
                Average APY
              </p>
            </div>
            
            <div className="text-center p-4 bg-card border rounded-lg">
              <div className="text-2xl font-dm-sans font-bold text-foreground mb-1">
                3
              </div>
              <p className="text-sm text-muted-foreground font-work-sans">
                Active Pools
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}