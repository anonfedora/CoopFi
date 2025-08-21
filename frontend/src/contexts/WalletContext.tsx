"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Account } from "starknet";
import { provider } from "@/lib/contract";

interface WalletContextType {
  account: Account | null;
  address: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  error: string | null;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<Account | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if wallet is already connected on mount
  useEffect(() => {
    const checkConnection = async () => {
      try {
        // Check if there's a stored wallet connection
        const storedAddress = localStorage.getItem("starknet-wallet-address");
        if (storedAddress) {
          // In a real app, you'd validate the stored connection
          // For now, we'll just clear it and require reconnection
          localStorage.removeItem("starknet-wallet-address");
        }
      } catch (err) {
        console.error("Error checking wallet connection:", err);
      }
    };

    checkConnection();
  }, []);

  const connect = async () => {
    setIsConnecting(true);
    setError(null);

    try {
      // Check if wallet is available
      if (!window.starknet) {
        throw new Error("Starknet wallet not found. Please install ArgentX or Braavos.");
      }

      // Request connection
      const result = await window.starknet.request({
        type: "wallet_requestAccounts",
      });

      if (result.accounts && result.accounts.length > 0) {
        const selectedAccount = result.accounts[0];
        
        // Create a proper Account instance with the wallet's signer
        try {
          const account = new Account(
            provider,
            selectedAccount,
            window.starknet.account.signer
          );
          
          setAccount(account);
          setAddress(selectedAccount);
          setIsConnected(true);
          localStorage.setItem("starknet-wallet-address", selectedAccount);
        } catch (accountError) {
          console.error("Failed to create account instance:", accountError);
          // Fallback: store address but no account for read-only operations
          setAccount(null);
          setAddress(selectedAccount);
          setIsConnected(true);
          localStorage.setItem("starknet-wallet-address", selectedAccount);
        }
      } else {
        throw new Error("No accounts found");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to connect wallet";
      setError(errorMessage);
      console.error("Wallet connection error:", err);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = () => {
    setAccount(null);
    setAddress(null);
    setIsConnected(false);
    localStorage.removeItem("starknet-wallet-address");
  };

  const value: WalletContextType = {
    account,
    address,
    isConnected,
    isConnecting,
    connect,
    disconnect,
    error,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

// Extend Window interface for Starknet wallet
declare global {
  interface Window {
    starknet?: {
      request: (args: { type: string; [key: string]: any }) => Promise<any>;
      account: any;
      isConnected: boolean;
    };
  }
} 