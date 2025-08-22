import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  TrendingUp, 
  Wallet, 
  Clock,
  AlertCircle,
  Eye
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Earnings() {
  const [walletConnected, setWalletConnected] = useState(false);

  const basicEarnings = {
    totalEarned: "$1,234.56",
    monthlyEarning: "$456.78",
    activeStakes: 3
  };

  const detailedEarnings = [
    {
      pool: "wUSDC",
      earned: "$567.89",
      pending: "$23.45",
      apy: "8.5%",
      period: "Last 30 days"
    },
    {
      pool: "wETH", 
      earned: "$345.67",
      pending: "$15.23",
      apy: "12.3%",
      period: "Last 30 days"
    },
    {
      pool: "wUSDT",
      earned: "$321.00",
      pending: "$8.90",
      apy: "7.8%", 
      period: "Last 30 days"
    }
  ];

  const handleConnectWallet = () => {
    // Simulate wallet connection
    setWalletConnected(true);
  };

  const handleClaimRewards = (pool: string) => {
    console.log(`Claiming rewards from ${pool}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-dm-sans font-bold text-foreground mb-2">
          Your Earnings
        </h1>
        <p className="text-muted-foreground font-work-sans">
          Track your staking rewards and earnings across all pools.
        </p>
      </div>

      {!walletConnected && (
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <div className="flex-1">
                <p className="font-work-sans font-medium text-orange-900">
                  Connect your wallet to view detailed earnings
                </p>
                <p className="text-sm text-orange-700 font-work-sans">
                  Basic earnings information is shown below. Connect your wallet for full details.
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="font-work-sans bg-orange-600 hover:bg-orange-700">
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-dm-sans">Connect Your Wallet</DialogTitle>
                    <DialogDescription className="font-work-sans">
                      Choose a wallet to connect and access your detailed earnings information.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3 pt-4">
                    <Button 
                      onClick={handleConnectWallet}
                      className="w-full font-work-sans bg-secondary hover:bg-secondary/90"
                    >
                      MetaMask
                    </Button>
                    <Button 
                      onClick={handleConnectWallet}
                      variant="outline" 
                      className="w-full font-work-sans"
                    >
                      WalletConnect
                    </Button>
                    <Button 
                      onClick={handleConnectWallet}
                      variant="outline" 
                      className="w-full font-work-sans"
                    >
                      Coinbase Wallet
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Basic Earnings Overview */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-dm-sans">
              <DollarSign className="w-5 h-5 text-primary" />
              <span>Total Earned</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-dm-sans font-bold text-foreground">
              {basicEarnings.totalEarned}
            </div>
            <p className="text-sm text-muted-foreground font-work-sans">
              All-time earnings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-dm-sans">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Monthly Earnings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-dm-sans font-bold text-secondary">
              {basicEarnings.monthlyEarning}
            </div>
            <p className="text-sm text-muted-foreground font-work-sans">
              Last 30 days
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-dm-sans">
              <Clock className="w-5 h-5 text-primary" />
              <span>Active Stakes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-dm-sans font-bold text-foreground">
              {basicEarnings.activeStakes}
            </div>
            <p className="text-sm text-muted-foreground font-work-sans">
              Earning rewards
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Earnings (only shown if wallet connected) */}
      {walletConnected && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-dm-sans">
              <Eye className="w-5 h-5 text-primary" />
              <span>Detailed Earnings Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {detailedEarnings.map((earning, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-work-sans font-medium text-lg">
                        {earning.pool} Pool
                      </h3>
                      <p className="text-sm text-muted-foreground font-work-sans">
                        {earning.period}
                      </p>
                    </div>
                    <Badge variant="secondary" className="font-work-sans">
                      {earning.apy} APY
                    </Badge>
                  </div>
                  
                  <div className="grid gap-3 md:grid-cols-3">
                    <div>
                      <p className="text-sm text-muted-foreground font-work-sans">
                        Total Earned
                      </p>
                      <p className="font-dm-sans font-semibold text-foreground">
                        {earning.earned}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground font-work-sans">
                        Pending Rewards
                      </p>
                      <p className="font-dm-sans font-semibold text-secondary">
                        {earning.pending}
                      </p>
                    </div>
                    
                    <div className="flex items-end">
                      <Button 
                        size="sm"
                        onClick={() => handleClaimRewards(earning.pool)}
                        className="font-work-sans bg-secondary hover:bg-secondary/90"
                      >
                        Claim Rewards
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Earnings History Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 font-dm-sans">
            <Clock className="w-5 h-5 text-primary" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-work-sans">wUSDC Rewards Claimed</p>
                <p className="text-sm text-muted-foreground font-work-sans">
                  2 days ago
                </p>
              </div>
              <span className="font-dm-sans font-semibold text-green-600">
                +$23.45
              </span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-work-sans">wETH Rewards Claimed</p>
                <p className="text-sm text-muted-foreground font-work-sans">
                  5 days ago
                </p>
              </div>
              <span className="font-dm-sans font-semibold text-green-600">
                +$15.23
              </span>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="font-work-sans">wUSDT Rewards Claimed</p>
                <p className="text-sm text-muted-foreground font-work-sans">
                  1 week ago
                </p>
              </div>
              <span className="font-dm-sans font-semibold text-green-600">
                +$8.90
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}