import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Shield,
  Calculator
} from "lucide-react";

export default function Stake() {
  const [stakeAmount, setStakeAmount] = useState("");
  const [selectedPool, setSelectedPool] = useState("wUSDC");

  const pools = [
    { name: "wUSDC", apy: "8.5%", risk: "Low", minStake: "100" },
    { name: "wETH", apy: "12.3%", risk: "Medium", minStake: "0.1" },
    { name: "wUSDT", apy: "7.8%", risk: "Low", minStake: "100" },
  ];

  const selectedPoolData = pools.find(pool => pool.name === selectedPool);
  const estimatedReturns = stakeAmount ? 
    (parseFloat(stakeAmount) * (parseFloat(selectedPoolData?.apy || "0") / 100)).toFixed(2) 
    : "0.00";

  const handleStake = () => {
    console.log(`Staking ${stakeAmount} in ${selectedPool}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-dm-sans font-bold text-foreground mb-2">
          Stake Tokens
        </h1>
        <p className="text-muted-foreground font-work-sans">
          Stake your tokens in liquidity pools to earn rewards.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Staking Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-dm-sans">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Stake Tokens</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Pool Selection */}
            <div className="space-y-2">
              <Label className="font-work-sans">Select Pool</Label>
              <div className="grid gap-2">
                {pools.map((pool) => (
                  <div
                    key={pool.name}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedPool === pool.name
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedPool(pool.name)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-work-sans font-medium">
                          {pool.name}
                        </span>
                        <Badge 
                          variant="outline" 
                          className="ml-2 font-work-sans text-xs"
                        >
                          {pool.risk} Risk
                        </Badge>
                      </div>
                      <span className="font-dm-sans font-semibold text-secondary">
                        {pool.apy}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="stakeAmount" className="font-work-sans">
                Amount to Stake
              </Label>
              <Input
                id="stakeAmount"
                type="number"
                placeholder={`Min: ${selectedPoolData?.minStake || "0"}`}
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                className="font-work-sans"
              />
              <p className="text-sm text-muted-foreground font-work-sans">
                Minimum stake: {selectedPoolData?.minStake} {selectedPool}
              </p>
            </div>

            {/* Estimated Returns */}
            <div className="p-4 bg-secondary/10 rounded-lg border">
              <div className="flex items-center space-x-2 mb-2">
                <Calculator className="w-4 h-4 text-secondary" />
                <span className="font-work-sans font-medium">Estimated Annual Returns</span>
              </div>
              <div className="text-2xl font-dm-sans font-bold text-secondary">
                ${estimatedReturns}
              </div>
              <p className="text-sm text-muted-foreground font-work-sans">
                Based on current APY of {selectedPoolData?.apy}
              </p>
            </div>

            <Button 
              onClick={handleStake}
              className="w-full font-work-sans bg-secondary hover:bg-secondary/90"
              disabled={!stakeAmount || parseFloat(stakeAmount) < parseFloat(selectedPoolData?.minStake || "0")}
            >
              Stake Tokens
            </Button>
          </CardContent>
        </Card>

        {/* Staking Info & Current Stakes */}
        <div className="space-y-6">
          {/* Current Stakes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 font-dm-sans">
                <DollarSign className="w-5 h-5 text-primary" />
                <span>Your Current Stakes</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-work-sans font-medium">wUSDC Pool</span>
                  <Badge variant="secondary" className="font-work-sans">Active</Badge>
                </div>
                <div className="text-lg font-dm-sans font-semibold">$5,000</div>
                <p className="text-sm text-muted-foreground font-work-sans">
                  Earning 8.5% APY
                </p>
              </div>
              
              <div className="text-center py-4 text-muted-foreground font-work-sans">
                <p>No other active stakes</p>
              </div>
            </CardContent>
          </Card>

          {/* Staking Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 font-dm-sans">
                <Shield className="w-5 h-5 text-primary" />
                <span>Staking Benefits</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-secondary mt-0.5" />
                <div>
                  <p className="font-work-sans font-medium">Daily Rewards</p>
                  <p className="text-sm text-muted-foreground font-work-sans">
                    Earn rewards distributed daily to your wallet
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-secondary mt-0.5" />
                <div>
                  <p className="font-work-sans font-medium">Compound Growth</p>
                  <p className="text-sm text-muted-foreground font-work-sans">
                    Automatic compounding for maximum returns
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-secondary mt-0.5" />
                <div>
                  <p className="font-work-sans font-medium">Insurance Protected</p>
                  <p className="text-sm text-muted-foreground font-work-sans">
                    Your stakes are protected by smart contract insurance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}