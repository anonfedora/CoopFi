"use client";

import React, { useState, useEffect } from "react";
import { WalletConnectModal } from "@/components/WalletConnectModal";
import { useContract } from "@/hooks/useContract";
import { useWallet } from "@/contexts/WalletContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Cooperative } from "@/lib/contract";

export default function AppPage() {
  const { isConnected, address } = useWallet();
  const {
    createCooperative,
    joinCooperative,
    getCooperativeDetails,
    getPoolBalance,
    getMemberStake,
    loading,
    error,
  } = useContract();

  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const [cooperatives, setCooperatives] = useState<Cooperative[]>([]);
  const [selectedCoopId, setSelectedCoopId] = useState<number | null>(null);
  const [poolBalance, setPoolBalance] = useState<number>(0);
  const [memberStake, setMemberStake] = useState<number>(0);

  // Form states
  const [coopName, setCoopName] = useState("");
  const [coopDescription, setCoopDescription] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [joinCoopId, setJoinCoopId] = useState("");

  // Load cooperative data
  useEffect(() => {
    if (selectedCoopId) {
      loadCooperativeData(selectedCoopId);
    }
  }, [selectedCoopId]);

  const loadCooperativeData = async (coopId: number) => {
    try {
      const balance = await getPoolBalance(coopId);
      setPoolBalance(balance);
      
      if (isConnected) {
        const stake = await getMemberStake(coopId);
        setMemberStake(stake);
      }
    } catch (err) {
      console.error("Error loading cooperative data:", err);
    }
  };

  const handleCreateCooperative = async () => {
    if (!coopName || !coopDescription || !interestRate) {
      alert("Please fill in all fields");
      return;
    }

    const rate = parseFloat(interestRate);
    if (isNaN(rate) || rate < 0) {
      alert("Please enter a valid interest rate");
      return;
    }

    const result = await createCooperative(coopName, coopDescription, rate, {
      onSuccess: (coopId) => {
        alert(`Cooperative created successfully! ID: ${coopId}`);
        setCoopName("");
        setCoopDescription("");
        setInterestRate("");
        // Refresh cooperatives list
        // In a real app, you'd fetch the updated list
      },
      onError: (error) => {
        alert(`Failed to create cooperative: ${error}`);
      },
    });
  };

  const handleJoinCooperative = async () => {
    if (!joinCoopId) {
      alert("Please enter a cooperative ID");
      return;
    }

    const coopId = parseInt(joinCoopId);
    if (isNaN(coopId) || coopId <= 0) {
      alert("Please enter a valid cooperative ID");
      return;
    }

    const result = await joinCooperative(coopId, {
      onSuccess: () => {
        alert("Successfully joined cooperative!");
        setJoinCoopId("");
        // Refresh data
        loadCooperativeData(coopId);
      },
      onError: (error) => {
        alert(`Failed to join cooperative: ${error}`);
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                CoopiFi Dashboard
              </h1>
              <p className="text-gray-600">
                Manage your cooperatives, stake funds, and participate in lending
              </p>
            </div>
            
            {/* Wallet Status Badge */}
            <div className="flex items-center space-x-3">
              {isConnected && address ? (
                <button
                  onClick={() => setIsWalletModalOpen(true)}
                  className="flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 hover:bg-green-100 transition-colors cursor-pointer"
                >
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-green-800">
                    {address.slice(0, 6)}...{address.slice(-4)}
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => setIsWalletModalOpen(true)}
                  className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                  <span className="text-sm font-medium text-gray-600">
                    Wallet Not Connected
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Wallet Connection */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Wallet Connection</h2>
          {isConnected && address ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-600">
                  Connected: {address.slice(0, 6)}...{address.slice(-4)}
                </span>
              </div>
              <Button
                onClick={() => setIsWalletModalOpen(true)}
                variant="outline"
                size="sm"
              >
                Manage Wallet
              </Button>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Connect your Starknet wallet to start using CoopiFi
              </p>
              <Button
                onClick={() => setIsWalletModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Connect Wallet
              </Button>
            </div>
          )}
        </div>

        {isConnected ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Create Cooperative */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Create Cooperative</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    value={coopName}
                    onChange={(e) => setCoopName(e.target.value)}
                    placeholder="Enter cooperative name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <Input
                    value={coopDescription}
                    onChange={(e) => setCoopDescription(e.target.value)}
                    placeholder="Enter description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interest Rate (%)
                  </label>
                  <Input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="5.0"
                    step="0.1"
                    min="0"
                  />
                </div>
                <Button
                  onClick={handleCreateCooperative}
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  {loading ? "Creating..." : "Create Cooperative"}
                </Button>
              </div>
            </div>

            {/* Join Cooperative */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Join Cooperative</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cooperative ID
                  </label>
                  <Input
                    type="number"
                    value={joinCoopId}
                    onChange={(e) => setJoinCoopId(e.target.value)}
                    placeholder="Enter cooperative ID"
                    min="1"
                  />
                </div>
                <Button
                  onClick={handleJoinCooperative}
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {loading ? "Joining..." : "Join Cooperative"}
                </Button>
              </div>
            </div>

            {/* Cooperative Overview */}
            <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Cooperative Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-900">Pool Balance</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    ${poolBalance.toFixed(2)}
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-900">Your Stake</h3>
                  <p className="text-2xl font-bold text-green-600">
                    ${memberStake.toFixed(2)}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-medium text-purple-900">Status</h3>
                  <p className="text-lg font-semibold text-purple-600">
                    {selectedCoopId ? "Active" : "Select Cooperative"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-gray-600">
              Connect your wallet to start using CoopiFi
            </p>
          </div>
        )}

        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Wallet Connection Modal */}
        <WalletConnectModal
          isOpen={isWalletModalOpen}
          onClose={() => setIsWalletModalOpen(false)}
        />

        {/* Floating Action Button for Wallet */}
        <button
          onClick={() => setIsWalletModalOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          title="Connect Wallet"
        >
          {isConnected ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
