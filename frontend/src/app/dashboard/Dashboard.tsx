import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, TrendingUp } from "lucide-react";

const cooperatives = [
  {
    id: 1,
    name: "Green Energy Cooperative",
    members: 156,
    type: "Energy",
    description: "Renewable energy investment pool focused on solar and wind projects."
  },
  {
    id: 2,
    name: "Urban Agriculture Co-op",
    members: 89,
    type: "Agriculture",
    description: "Supporting local farmers and sustainable agriculture initiatives."
  },
  {
    id: 3,
    name: "Tech Innovation Collective",
    members: 234,
    type: "Technology",
    description: "Collaborative funding for emerging technology startups and projects."
  },
  {
    id: 4,
    name: "Community Housing Fund",
    members: 67,
    type: "Real Estate",
    description: "Affordable housing development and community investment program."
  },
];

export default function Dashboard() {
  const handleJoinCooperative = (cooperativeName: string) => {
    // Handle join logic here
    console.log(`Joining ${cooperativeName}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-dm-sans font-bold text-foreground mb-2">
          Dashboard
        </h1>
        <p className="text-muted-foreground font-work-sans">
          Explore and join cooperatives that align with your investment goals.
        </p>
      </div>

      <div className="grid gap-6">
        {cooperatives.map((cooperative) => (
          <Card key={cooperative.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-dm-sans text-xl">
                      {cooperative.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-work-sans">
                      {cooperative.type}
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={() => handleJoinCooperative(cooperative.name)}
                  className="font-work-sans bg-secondary hover:bg-secondary/90"
                >
                  Join
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-work-sans mb-4">
                {cooperative.description}
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span className="font-work-sans">{cooperative.members} members</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}