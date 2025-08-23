import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, DollarSign, TrendingUp, Wallet } from "lucide-react";

export default function YourCooperative() {
  const cooperativeData = {
    name: "Green Energy Cooperative",
    assets: {
      totalValue: "$2,450,000",
      usdcPool: "$1,200,000",
      ethPool: "$850,000", 
      usdtPool: "$400,000"
    },
    members: 156,
    yourStake: "$15,000",
    joinedDate: "March 15, 2024"
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-dm-sans font-bold text-foreground mb-2">
          Your Cooperative
        </h1>
        <p className="text-muted-foreground font-work-sans">
          Overview of your cooperative membership and assets.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Cooperative Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-dm-sans">
              <Users className="w-5 h-5 text-primary" />
              <span>Cooperative Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-work-sans font-medium text-foreground">
                {cooperativeData.name}
              </p>
              <p className="text-sm text-muted-foreground font-work-sans">
                Member since {cooperativeData.joinedDate}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-work-sans">Total Members</span>
              <Badge variant="secondary" className="font-work-sans">
                {cooperativeData.members}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-work-sans">Your Stake</span>
              <span className="font-work-sans font-medium text-secondary">
                {cooperativeData.yourStake}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Total Assets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-dm-sans">
              <DollarSign className="w-5 h-5 text-primary" />
              <span>Total Assets</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-dm-sans font-bold text-foreground mb-2">
              {cooperativeData.assets.totalValue}
            </div>
            <p className="text-sm text-muted-foreground font-work-sans">
              Combined liquidity pool value
            </p>
          </CardContent>
        </Card>

        {/* Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-dm-sans">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-dm-sans font-bold text-green-600 mb-2">
              +12.5%
            </div>
            <p className="text-sm text-muted-foreground font-work-sans">
              30-day growth rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Liquidity Pool Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 font-dm-sans">
            <Wallet className="w-5 h-5 text-primary" />
            <span>Liquidity Pool Assets</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-card border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-work-sans text-sm">USDC Pool</span>
                <Badge variant="outline" className="font-work-sans">Stable</Badge>
              </div>
              <div className="text-lg font-dm-sans font-semibold text-foreground">
                {cooperativeData.assets.usdcPool}
              </div>
            </div>
            
            <div className="p-4 bg-card border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-work-sans text-sm">ETH Pool</span>
                <Badge variant="outline" className="font-work-sans">Volatile</Badge>
              </div>
              <div className="text-lg font-dm-sans font-semibold text-foreground">
                {cooperativeData.assets.ethPool}
              </div>
            </div>
            
            <div className="p-4 bg-card border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-work-sans text-sm">USDT Pool</span>
                <Badge variant="outline" className="font-work-sans">Stable</Badge>
              </div>
              <div className="text-lg font-dm-sans font-semibold text-foreground">
                {cooperativeData.assets.usdtPool}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}