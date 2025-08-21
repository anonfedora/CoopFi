"use client";

import { useState, useCallback } from "react";
import { useWallet } from "@/contexts/WalletContext";
import { 
  createContractInstance, 
  toU256, 
  fromU256, 
  formatAmount, 
  formatByteArray 
} from "@/lib/contract";
import type { Cooperative, Loan, Proposal, MembershipMetadata } from "@/lib/contract";

interface ContractCallResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface ContractCallOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export const useContract = () => {
  const { account, address } = useWallet();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const executeCall = useCallback(
    async <T>(
      callFn: () => Promise<T>,
      options: ContractCallOptions = {}
    ): Promise<T | null> => {
      if (!account && !address) {
        const errorMsg = "Wallet not connected";
        setError(errorMsg);
        options.onError?.(errorMsg);
        return null;
      }

      setLoading(true);
      setError(null);

      try {
        const result = await callFn();
        options.onSuccess?.(result);
        return result;
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Contract call failed";
        setError(errorMsg);
        options.onError?.(errorMsg);
        console.error("Contract call error:", err);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [account]
  );

  // Cooperative Management Functions
  const createCooperative = useCallback(
    async (name: string, description: string, interestRate: number, options?: ContractCallOptions) => {
      return executeCall(
        async () => {
          if (!account) {
            throw new Error("Account signing not available. Please connect a compatible wallet.");
          }
          
                  const contract = createContractInstance(account);
        const result = await contract.create_cooperative(
          formatByteArray(name),
          formatByteArray(description),
          toU256(interestRate * 100) // Convert percentage to basis points
        );
          return Number(fromU256(result));
        },
        options
      );
    },
    [executeCall, account]
  );

  const joinCooperative = useCallback(
    async (coopId: number, options?: ContractCallOptions) => {
      return executeCall(
        async () => {
          if (!account) {
            throw new Error("Account signing not available. Please connect a compatible wallet.");
          }
          
          const contract = createContractInstance(account);
          await contract.join_cooperative(toU256(coopId));
          return true;
        },
        options
      );
    },
    [executeCall, account]
  );

  const leaveCooperative = useCallback(
    async (coopId: number, options?: ContractCallOptions) => {
      return executeCall(
        async () => {
          if (!account) {
            throw new Error("Account signing not available. Please connect a compatible wallet.");
          }
          
          const contract = createContractInstance(account);
          await contract.leave_cooperative(toU256(coopId));
          return true;
        },
        options
      );
    },
    [executeCall, account]
  );

  const getCooperativeDetails = useCallback(
    async (coopId: number): Promise<Cooperative | null> => {
      try {
        const contract = createContractInstance();
        const result = await contract.get_cooperative_details(toU256(coopId));
        return result as Cooperative;
      } catch (err) {
        console.error("Error getting cooperative details:", err);
        return null;
      }
    },
    []
  );

  const getMemberList = useCallback(
    async (coopId: number): Promise<string[]> => {
      try {
        const contract = createContractInstance();
        const result = await contract.get_member_list(toU256(coopId));
        return result as string[];
      } catch (err) {
        console.error("Error getting member list:", err);
        return [];
      }
    },
    []
  );

  // Lending Pool Functions
  const stake = useCallback(
    async (coopId: number, amount: number, options?: ContractCallOptions) => {
      return executeCall(
        async () => {
          // TODO: Implement proper account signing for write operations
          throw new Error("Write operations not yet implemented. Please implement proper account signing.");
        },
        options
      );
    },
    [executeCall]
  );

  const withdrawStake = useCallback(
    async (coopId: number, amount: number, options?: ContractCallOptions) => {
      return executeCall(
        async () => {
          // TODO: Implement proper account signing for write operations
          throw new Error("Write operations not yet implemented. Please implement proper account signing.");
        },
        options
      );
    },
    [executeCall]
  );

  const getPoolBalance = useCallback(
    async (coopId: number): Promise<number> => {
      try {
        const contract = createContractInstance();
        const result = await contract.get_pool_balance(toU256(coopId));
        return formatAmount(result);
      } catch (err) {
        console.error("Error getting pool balance:", err);
        return 0;
      }
    },
    []
  );

  const getMemberStake = useCallback(
    async (coopId: number): Promise<number> => {
      if (!address) return 0;
      
      try {
        const contract = createContractInstance();
        const result = await contract.get_member_stake(address, toU256(coopId));
        return formatAmount(result);
      } catch (err) {
        console.error("Error getting member stake:", err);
        return 0;
      }
    },
    [address]
  );

  // Loan Functions
  const requestLoan = useCallback(
    async (
      coopId: number,
      amount: number,
      duration: number,
      purpose: string,
      options?: ContractCallOptions
    ) => {
      return executeCall(
        async () => {
          // TODO: Implement proper account signing for write operations
          throw new Error("Write operations not yet implemented. Please implement proper account signing.");
        },
        options
      );
    },
    [executeCall]
  );

  const voteOnLoan = useCallback(
    async (coopId: number, loanId: number, approve: boolean, options?: ContractCallOptions) => {
      return executeCall(
        async () => {
          // TODO: Implement proper account signing for write operations
          throw new Error("Write operations not yet implemented. Please implement proper account signing.");
        },
        options
      );
    },
    [executeCall]
  );

  const disburseLoan = useCallback(
    async (coopId: number, loanId: number, options?: ContractCallOptions) => {
      return executeCall(
        async () => {
          // TODO: Implement proper account signing for write operations
          throw new Error("Write operations not yet implemented. Please implement proper account signing.");
        },
        options
      );
    },
    [executeCall]
  );

  const repayLoan = useCallback(
    async (coopId: number, loanId: number, amount: number, options?: ContractCallOptions) => {
      return executeCall(
        async () => {
          // TODO: Implement proper account signing for write operations
          throw new Error("Write operations not yet implemented. Please implement proper account signing.");
        },
        options
      );
    },
    [executeCall]
  );

  const getLoanStatus = useCallback(
    async (loanId: number): Promise<Loan | null> => {
      try {
        const contract = createContractInstance();
        const result = await contract.get_loan_status(toU256(loanId));
        return result as Loan;
      } catch (err) {
        console.error("Error getting loan status:", err);
        return null;
      }
    },
    []
  );

  const getActiveLoans = useCallback(
    async (coopId: number): Promise<number[]> => {
      try {
        const contract = createContractInstance();
        const result = await contract.get_active_loans(toU256(coopId));
        return (result as any[]).map(loanId => Number(fromU256(loanId)));
      } catch (err) {
        console.error("Error getting active loans:", err);
        return [];
      }
    },
    []
  );

  const getLoanHistory = useCallback(
    async (): Promise<number[]> => {
      if (!address) return [];
      
      try {
        const contract = createContractInstance();
        const result = await contract.get_loan_history(address);
        return (result as any[]).map(loanId => Number(fromU256(loanId)));
      } catch (err) {
        console.error("Error getting loan history:", err);
        return [];
      }
    },
    [address]
  );

  // Governance Functions
  const proposeChange = useCallback(
    async (coopId: number, proposalType: string, newValue: number, options?: ContractCallOptions) => {
      return executeCall(
        async () => {
          // TODO: Implement proper account signing for write operations
          throw new Error("Write operations not yet implemented. Please implement proper account signing.");
        },
        options
      );
    },
    [executeCall]
  );

  const voteOnProposal = useCallback(
    async (coopId: number, proposalId: number, approve: boolean, options?: ContractCallOptions) => {
      return executeCall(
        async () => {
          // TODO: Implement proper account signing for write operations
          throw new Error("Write operations not yet implemented. Please implement proper account signing.");
        },
        options
      );
    },
    [executeCall]
  );

  const executeProposal = useCallback(
    async (coopId: number, proposalId: number, options?: ContractCallOptions) => {
      return executeCall(
        async () => {
          // TODO: Implement proper account signing for write operations
          throw new Error("Write operations not yet implemented. Please implement proper account signing.");
        },
        options
      );
    },
    [executeCall]
  );

  const getProposals = useCallback(
    async (coopId: number): Promise<Proposal[]> => {
      try {
        const contract = createContractInstance();
        const result = await contract.get_proposals(toU256(coopId));
        return result as Proposal[];
      } catch (err) {
        console.error("Error getting proposals:", err);
        return [];
      }
    },
    []
  );

  // NFT Functions
  const getMembershipMetadata = useCallback(
    async (tokenId: number): Promise<MembershipMetadata | null> => {
      try {
        const contract = createContractInstance();
        const result = await contract.get_membership_metadata(toU256(tokenId));
        return result as MembershipMetadata;
      } catch (err) {
        console.error("Error getting membership metadata:", err);
        return null;
      }
    },
    []
  );

  return {
    // State
    loading,
    error,
    
    // Cooperative Management
    createCooperative,
    joinCooperative,
    leaveCooperative,
    getCooperativeDetails,
    getMemberList,
    
    // Lending Pool
    stake,
    withdrawStake,
    getPoolBalance,
    getMemberStake,
    
    // Loans
    requestLoan,
    voteOnLoan,
    disburseLoan,
    repayLoan,
    getLoanStatus,
    getActiveLoans,
    getLoanHistory,
    
    // Governance
    proposeChange,
    voteOnProposal,
    executeProposal,
    getProposals,
    
    // NFT
    getMembershipMetadata,
  };
}; 