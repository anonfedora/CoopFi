import { Contract, RpcProvider, Account, cairo } from "starknet";
import { coopifiAbi } from "@/abi/coopifi";

// Contract configuration
export const CONTRACT_ADDRESS = "0x079e44174141753a6ba9f0a25df423f59ee292fbb5e5eae316f4b278aca07b92";
export const NFT_CONTRACT_ADDRESS = "0x079e44174141753a6ba9f0a25df423f59ee292fbb5e5eae316f4b278aca07b92";

// Provider setup
export const provider = new RpcProvider({ 
  nodeUrl: process.env.NEXT_PUBLIC_RPC_URL || "https://starknet-mainnet.infura.io/v3/your-api-key"
});

// Contract instance
export const getContract = (account?: Account) => {
  if (!account) {
    return new Contract(coopifiAbi, CONTRACT_ADDRESS, provider);
  }
  return new Contract(coopifiAbi, CONTRACT_ADDRESS, account);
};

// Type definitions for contract data
export interface Cooperative {
  name: string;
  description: string;
  admin: string;
  interest_rate: { low: string; high: string };
  pool_balance: { low: string; high: string };
  is_active: boolean;
  liquidation_threshold: { low: string; high: string };
}

export interface Loan {
  coop_id: { low: string; high: string };
  loan_id: { low: string; high: string };
  borrower: string;
  amount: { low: string; high: string };
  duration: string;
  purpose: string;
  status: string;
  votes_for: { low: string; high: string };
  votes_against: { low: string; high: string };
  amount_repaid: { low: string; high: string };
  start_time: string;
  collateral_required: { low: string; high: string };
  collateral_ratio: { low: string; high: string };
  is_undercollateralized: boolean;
}

export interface Proposal {
  coop_id: { low: string; high: string };
  proposal_id: { low: string; high: string };
  proposer: string;
  proposal_type: string;
  new_value: { low: string; high: string };
  votes_for: { low: string; high: string };
  votes_against: { low: string; high: string };
  executed: boolean;
  timestamp: string;
}

export interface MembershipMetadata {
  coop_id: { low: string; high: string };
  name: string;
  description: string;
  interest_rate: { low: string; high: string };
  pool_balance: { low: string; high: string };
  is_member: boolean;
  member_count: { low: string; high: string };
  member_index: { low: string; high: string };
}

// Helper functions for u256 conversion
export const toU256 = (value: string | number) => {
  return cairo.uint256(value);
};

export const fromU256 = (u256: { low: string; high: string }) => {
  return BigInt(u256.low) + (BigInt(u256.high) << BigInt(128));
};

export const formatAmount = (amount: { low: string; high: string }, decimals: number = 18) => {
  const value = fromU256(amount);
  return Number(value) / Math.pow(10, decimals);
};

export const parseAmount = (amount: number, decimals: number = 18) => {
  return toU256(Math.floor(amount * Math.pow(10, decimals)));
};

// Utility functions for ByteArray conversion (similar to the sample)
export const formatByteArray = (
  text: string
): { data: string[]; pending_word: string; pending_word_len: number } => {
  // Convert string to byte array format
  const bytes = Array.from(text).map((char) =>
    char.charCodeAt(0).toString(16).padStart(2, "0")
  );
  const chunks = [];

  // Split into 31-byte chunks (bytes31)
  for (let i = 0; i < bytes.length; i += 62) {
    const chunk = bytes.slice(i, i + 62).join("");
    chunks.push(`0x${chunk.padEnd(62, "0")}`);
  }

  return {
    data: chunks,
    pending_word: "0x0",
    pending_word_len: 0,
  };
};

// Contract instance creation helper
export const createContractInstance = (account?: Account): Contract => {
  if (account) {
    return new Contract(coopifiAbi, CONTRACT_ADDRESS, account);
  }
  return new Contract(coopifiAbi, CONTRACT_ADDRESS, provider);
}; 