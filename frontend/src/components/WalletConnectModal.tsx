"use client";

import React, { useState } from "react";
import { useWallet } from "@/contexts/WalletContext";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WalletConnectModal: React.FC<WalletConnectModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { isConnected, isConnecting, address, connect, disconnect, error } = useWallet();
  const [showDisconnect, setShowDisconnect] = useState(false);

  const handleConnect = async () => {
    try {
      await connect();
      onClose(); // Close modal after successful connection
    } catch (err) {
      // Error is handled in the context
      console.error("Connection failed:", err);
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setShowDisconnect(false);
    onClose();
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  if (isConnected && address) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Wallet Connected"
        className="max-w-sm"
      >
        <div className="space-y-4">
          <div className="text-center">
            <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-900">
              Successfully Connected
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {formatAddress(address)}
            </p>
          </div>

          <div className="flex space-x-3">
            <Button
              onClick={() => setShowDisconnect(true)}
              variant="outline"
              className="flex-1 bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
            >
              Disconnect
            </Button>
            <Button onClick={onClose} className="flex-1">
              Continue
            </Button>
          </div>

          {/* Disconnect confirmation */}
          {showDisconnect && (
            <Modal
              isOpen={showDisconnect}
              onClose={() => setShowDisconnect(false)}
              title="Confirm Disconnect"
              className="max-w-sm"
            >
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Are you sure you want to disconnect your wallet?
                </p>
                <div className="flex space-x-3">
                  <Button
                    onClick={() => setShowDisconnect(false)}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleDisconnect}
                    className="flex-1 bg-red-600 hover:bg-red-700"
                  >
                    Disconnect
                  </Button>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Connect Wallet"
      className="max-w-md"
    >
      <div className="space-y-6">
        {/* Wallet Options */}
        <div className="space-y-3">
          <div className="text-sm text-gray-600 text-center">
            Choose your Starknet wallet to connect
          </div>
          
          <Button
            onClick={handleConnect}
            disabled={isConnecting}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isConnecting ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Connecting...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <svg
                  className="h-5 w-5"
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
                <span>Connect Wallet</span>
              </div>
            )}
          </Button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 p-3">
            <div className="flex items-center space-x-2">
              <svg
                className="h-4 w-4 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm text-red-600">{error}</span>
            </div>
          </div>
        )}

        {/* Help Text */}
        <div className="text-xs text-gray-500 text-center space-y-2">
          <p>Supported wallets:</p>
          <div className="flex justify-center space-x-4">
            <span className="bg-gray-100 px-2 py-1 rounded">ArgentX</span>
            <span className="bg-gray-100 px-2 py-1 rounded">Braavos</span>
          </div>
          <p className="mt-2">
            Don&apos;t have a wallet?{" "}
            <a
              href="https://www.argent.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Get ArgentX
            </a>{" "}
            or{" "}
            <a
              href="https://braavos.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Get Braavos
            </a>
          </p>
        </div>
      </div>
    </Modal>
  );
}; 