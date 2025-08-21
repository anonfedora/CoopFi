"use client";

import React from "react";
import { useWallet } from "@/contexts/WalletContext";
import { Button } from "@/components/ui/button";

export const WalletConnect: React.FC = () => {
  const { isConnected, isConnecting, address, connect, disconnect, error } = useWallet();

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">
          Connected: {formatAddress(address)}
        </div>
        <Button
          onClick={disconnect}
          variant="outline"
          size="sm"
          className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
        >
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={connect}
        disabled={isConnecting}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        {isConnecting ? "Connecting..." : "Connect Wallet"}
      </Button>
      
      {error && (
        <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
          {error}
        </div>
      )}
      
      <div className="text-xs text-gray-500">
        Install ArgentX or Braavos to connect your Starknet wallet
      </div>
    </div>
  );
}; 