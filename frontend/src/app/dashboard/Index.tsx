import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-dm-sans font-bold mb-4 text-foreground">
          Welcome to CoopiFi
        </h1>
        <p className="text-xl text-muted-foreground font-work-sans mb-8">
          Decentralized cooperative finance platform
        </p>
        <Button 
          asChild
          className="font-work-sans bg-secondary hover:bg-secondary/90 px-8 py-3 text-lg"
        >
          <Link to="/dashboard">Open App</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
