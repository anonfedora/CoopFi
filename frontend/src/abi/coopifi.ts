import { Abi } from "starknet";

export const coopifiAbi: Abi = [
    {
        "name": "CooperativeManagementImpl",
        "type": "impl",
        "interface_name": "coopifi_contracts::CoopiFi::ICooperativeManagement"
    },
    {
        "name": "core::byte_array::ByteArray",
        "type": "struct",
        "members": [
            {
                "name": "data",
                "type": "core::array::Array::<core::bytes_31::bytes31>"
            },
            {
                "name": "pending_word",
                "type": "core::felt252"
            },
            {
                "name": "pending_word_len",
                "type": "core::integer::u32"
            }
        ]
    },
    {
        "name": "core::integer::u256",
        "type": "struct",
        "members": [
            {
                "name": "low",
                "type": "core::integer::u128"
            },
            {
                "name": "high",
                "type": "core::integer::u128"
            }
        ]
    },
    {
        "name": "core::bool",
        "type": "enum",
        "variants": [
            {
                "name": "False",
                "type": "()"
            },
            {
                "name": "True",
                "type": "()"
            }
        ]
    },
    {
        "name": "coopifi_contracts::CoopiFi::Cooperative",
        "type": "struct",
        "members": [
            {
                "name": "name",
                "type": "core::byte_array::ByteArray"
            },
            {
                "name": "description",
                "type": "core::byte_array::ByteArray"
            },
            {
                "name": "admin",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "interest_rate",
                "type": "core::integer::u256"
            },
            {
                "name": "pool_balance",
                "type": "core::integer::u256"
            },
            {
                "name": "is_active",
                "type": "core::bool"
            },
            {
                "name": "liquidation_threshold",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "name": "coopifi_contracts::CoopiFi::ICooperativeManagement",
        "type": "interface",
        "items": [
            {
                "name": "create_cooperative",
                "type": "function",
                "inputs": [
                    {
                        "name": "name",
                        "type": "core::byte_array::ByteArray"
                    },
                    {
                        "name": "description",
                        "type": "core::byte_array::ByteArray"
                    },
                    {
                        "name": "interest_rate",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::integer::u256"
                    }
                ],
                "state_mutability": "external"
            },
            {
                "name": "join_cooperative",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "leave_cooperative",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "get_cooperative_details",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "coopifi_contracts::CoopiFi::Cooperative"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "get_member_list",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::array::Array::<core::starknet::contract_address::ContractAddress>"
                    }
                ],
                "state_mutability": "view"
            }
        ]
    },
    {
        "name": "LendingPoolImpl",
        "type": "impl",
        "interface_name": "coopifi_contracts::CoopiFi::ILendingPool"
    },
    {
        "name": "coopifi_contracts::CoopiFi::ILendingPool",
        "type": "interface",
        "items": [
            {
                "name": "stake",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "amount",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "withdraw_stake",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "amount",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "get_pool_balance",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::integer::u256"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "get_member_stake",
                "type": "function",
                "inputs": [
                    {
                        "name": "user",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::integer::u256"
                    }
                ],
                "state_mutability": "view"
            }
        ]
    },
    {
        "name": "LoanLifecycleImpl",
        "type": "impl",
        "interface_name": "coopifi_contracts::CoopiFi::ILoanLifecycle"
    },
    {
        "name": "coopifi_contracts::CoopiFi::Loan",
        "type": "struct",
        "members": [
            {
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "name": "loan_id",
                "type": "core::integer::u256"
            },
            {
                "name": "borrower",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "amount",
                "type": "core::integer::u256"
            },
            {
                "name": "duration",
                "type": "core::integer::u64"
            },
            {
                "name": "purpose",
                "type": "core::byte_array::ByteArray"
            },
            {
                "name": "status",
                "type": "core::felt252"
            },
            {
                "name": "votes_for",
                "type": "core::integer::u256"
            },
            {
                "name": "votes_against",
                "type": "core::integer::u256"
            },
            {
                "name": "amount_repaid",
                "type": "core::integer::u256"
            },
            {
                "name": "start_time",
                "type": "core::integer::u64"
            },
            {
                "name": "collateral_required",
                "type": "core::integer::u256"
            },
            {
                "name": "collateral_ratio",
                "type": "core::integer::u256"
            },
            {
                "name": "is_undercollateralized",
                "type": "core::bool"
            }
        ]
    },
    {
        "name": "coopifi_contracts::CoopiFi::ILoanLifecycle",
        "type": "interface",
        "items": [
            {
                "name": "request_loan",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "amount",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "duration",
                        "type": "core::integer::u64"
                    },
                    {
                        "name": "purpose",
                        "type": "core::byte_array::ByteArray"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::integer::u256"
                    }
                ],
                "state_mutability": "external"
            },
            {
                "name": "vote_on_loan",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "loan_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "approve",
                        "type": "core::bool"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "disburse_loan",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "loan_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "repay_loan",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "loan_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "amount",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "get_loan_status",
                "type": "function",
                "inputs": [
                    {
                        "name": "loan_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "coopifi_contracts::CoopiFi::Loan"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "get_active_loans",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::array::Array::<core::integer::u256>"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "get_loan_history",
                "type": "function",
                "inputs": [
                    {
                        "name": "user",
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::array::Array::<core::integer::u256>"
                    }
                ],
                "state_mutability": "view"
            }
        ]
    },
    {
        "name": "GovernanceImpl",
        "type": "impl",
        "interface_name": "coopifi_contracts::CoopiFi::IGovernance"
    },
    {
        "name": "coopifi_contracts::CoopiFi::Proposal",
        "type": "struct",
        "members": [
            {
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "name": "proposal_id",
                "type": "core::integer::u256"
            },
            {
                "name": "proposer",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "proposal_type",
                "type": "core::felt252"
            },
            {
                "name": "new_value",
                "type": "core::integer::u256"
            },
            {
                "name": "votes_for",
                "type": "core::integer::u256"
            },
            {
                "name": "votes_against",
                "type": "core::integer::u256"
            },
            {
                "name": "executed",
                "type": "core::bool"
            },
            {
                "name": "timestamp",
                "type": "core::integer::u64"
            }
        ]
    },
    {
        "name": "coopifi_contracts::CoopiFi::IGovernance",
        "type": "interface",
        "items": [
            {
                "name": "propose_change",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "proposal_type",
                        "type": "core::felt252"
                    },
                    {
                        "name": "new_value",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "vote_on_proposal",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "proposal_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "approve",
                        "type": "core::bool"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "execute_proposal",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "proposal_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "get_proposals",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::array::Array::<coopifi_contracts::CoopiFi::Proposal>"
                    }
                ],
                "state_mutability": "view"
            }
        ]
    },
    {
        "name": "MembershipNFTImpl",
        "type": "impl",
        "interface_name": "coopifi_contracts::CoopiFi::IMembershipNFT"
    },
    {
        "name": "coopifi_contracts::CoopiFi::MembershipMetadata",
        "type": "struct",
        "members": [
            {
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "name": "name",
                "type": "core::byte_array::ByteArray"
            },
            {
                "name": "description",
                "type": "core::byte_array::ByteArray"
            },
            {
                "name": "interest_rate",
                "type": "core::integer::u256"
            },
            {
                "name": "pool_balance",
                "type": "core::integer::u256"
            },
            {
                "name": "is_member",
                "type": "core::bool"
            },
            {
                "name": "member_count",
                "type": "core::integer::u256"
            },
            {
                "name": "member_index",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "name": "coopifi_contracts::CoopiFi::IMembershipNFT",
        "type": "interface",
        "items": [
            {
                "name": "get_nft_owner",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "member",
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::bool"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "get_member_nft_id",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "member",
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::integer::u256"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "get_nft_cooperative",
                "type": "function",
                "inputs": [
                    {
                        "name": "token_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::integer::u256"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "burn_membership_nft",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "member",
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "transfer_membership_nft",
                "type": "function",
                "inputs": [
                    {
                        "name": "coop_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "from",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "to",
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "get_membership_metadata",
                "type": "function",
                "inputs": [
                    {
                        "name": "token_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "coopifi_contracts::CoopiFi::MembershipMetadata"
                    }
                ],
                "state_mutability": "view"
            }
        ]
    },
    {
        "name": "CollateralManagementImpl",
        "type": "impl",
        "interface_name": "coopifi_contracts::CoopiFi::ICollateralManagement"
    },
    {
        "name": "coopifi_contracts::CoopiFi::ICollateralManagement",
        "type": "interface",
        "items": [
            {
                "name": "add_collateral",
                "type": "function",
                "inputs": [
                    {
                        "name": "loan_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "collateral_type",
                        "type": "core::felt252"
                    },
                    {
                        "name": "amount",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "remove_collateral",
                "type": "function",
                "inputs": [
                    {
                        "name": "loan_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "collateral_type",
                        "type": "core::felt252"
                    },
                    {
                        "name": "amount",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "liquidate_loan",
                "type": "function",
                "inputs": [
                    {
                        "name": "loan_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "get_collateral_ratio",
                "type": "function",
                "inputs": [
                    {
                        "name": "loan_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::integer::u256"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "get_collateral_value",
                "type": "function",
                "inputs": [
                    {
                        "name": "loan_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::integer::u256"
                    }
                ],
                "state_mutability": "view"
            }
        ]
    },
    {
        "name": "FlashLoanImpl",
        "type": "impl",
        "interface_name": "coopifi_contracts::CoopiFi::IFlashLoan"
    },
    {
        "name": "coopifi_contracts::CoopiFi::IFlashLoan",
        "type": "interface",
        "items": [
            {
                "name": "flash_loan",
                "type": "function",
                "inputs": [
                    {
                        "name": "asset",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "amount",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "params",
                        "type": "core::byte_array::ByteArray"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "execute_operation",
                "type": "function",
                "inputs": [
                    {
                        "name": "asset",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "amount",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "premium",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "initiator",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "params",
                        "type": "core::byte_array::ByteArray"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::bool"
                    }
                ],
                "state_mutability": "external"
            }
        ]
    },
    {
        "name": "MultiAssetManagementImpl",
        "type": "impl",
        "interface_name": "coopifi_contracts::CoopiFi::IMultiAssetManagement"
    },
    {
        "name": "coopifi_contracts::CoopiFi::IMultiAssetManagement",
        "type": "interface",
        "items": [
            {
                "name": "add_supported_asset",
                "type": "function",
                "inputs": [
                    {
                        "name": "asset",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "oracle",
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "set_collateral_ratio",
                "type": "function",
                "inputs": [
                    {
                        "name": "asset_type",
                        "type": "core::felt252"
                    },
                    {
                        "name": "ratio",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "set_flash_loan_fee",
                "type": "function",
                "inputs": [
                    {
                        "name": "asset",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "fee_bps",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "get_asset_price",
                "type": "function",
                "inputs": [
                    {
                        "name": "asset",
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::integer::u256"
                    }
                ],
                "state_mutability": "view"
            }
        ]
    },
    {
        "name": "ERC721MixinImpl",
        "type": "impl",
        "interface_name": "openzeppelin_token::erc721::interface::ERC721ABI"
    },
    {
        "name": "core::array::Span::<core::felt252>",
        "type": "struct",
        "members": [
            {
                "name": "snapshot",
                "type": "@core::array::Array::<core::felt252>"
            }
        ]
    },
    {
        "name": "openzeppelin_token::erc721::interface::ERC721ABI",
        "type": "interface",
        "items": [
            {
                "name": "balance_of",
                "type": "function",
                "inputs": [
                    {
                        "name": "account",
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::integer::u256"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "owner_of",
                "type": "function",
                "inputs": [
                    {
                        "name": "token_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "safe_transfer_from",
                "type": "function",
                "inputs": [
                    {
                        "name": "from",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "to",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "token_id",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "data",
                        "type": "core::array::Span::<core::felt252>"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "transfer_from",
                "type": "function",
                "inputs": [
                    {
                        "name": "from",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "to",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "token_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "approve",
                "type": "function",
                "inputs": [
                    {
                        "name": "to",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "token_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "set_approval_for_all",
                "type": "function",
                "inputs": [
                    {
                        "name": "operator",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "approved",
                        "type": "core::bool"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "get_approved",
                "type": "function",
                "inputs": [
                    {
                        "name": "token_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "is_approved_for_all",
                "type": "function",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "operator",
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::bool"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "supports_interface",
                "type": "function",
                "inputs": [
                    {
                        "name": "interface_id",
                        "type": "core::felt252"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::bool"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "name",
                "type": "function",
                "inputs": [],
                "outputs": [
                    {
                        "type": "core::byte_array::ByteArray"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "symbol",
                "type": "function",
                "inputs": [],
                "outputs": [
                    {
                        "type": "core::byte_array::ByteArray"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "token_uri",
                "type": "function",
                "inputs": [
                    {
                        "name": "token_id",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::byte_array::ByteArray"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "balanceOf",
                "type": "function",
                "inputs": [
                    {
                        "name": "account",
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::integer::u256"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "ownerOf",
                "type": "function",
                "inputs": [
                    {
                        "name": "tokenId",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "safeTransferFrom",
                "type": "function",
                "inputs": [
                    {
                        "name": "from",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "to",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "tokenId",
                        "type": "core::integer::u256"
                    },
                    {
                        "name": "data",
                        "type": "core::array::Span::<core::felt252>"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "transferFrom",
                "type": "function",
                "inputs": [
                    {
                        "name": "from",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "to",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "tokenId",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "setApprovalForAll",
                "type": "function",
                "inputs": [
                    {
                        "name": "operator",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "approved",
                        "type": "core::bool"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "getApproved",
                "type": "function",
                "inputs": [
                    {
                        "name": "tokenId",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "isApprovedForAll",
                "type": "function",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "core::starknet::contract_address::ContractAddress"
                    },
                    {
                        "name": "operator",
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::bool"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "tokenURI",
                "type": "function",
                "inputs": [
                    {
                        "name": "tokenId",
                        "type": "core::integer::u256"
                    }
                ],
                "outputs": [
                    {
                        "type": "core::byte_array::ByteArray"
                    }
                ],
                "state_mutability": "view"
            }
        ]
    },
    {
        "name": "OwnableMixinImpl",
        "type": "impl",
        "interface_name": "openzeppelin_access::ownable::interface::OwnableABI"
    },
    {
        "name": "openzeppelin_access::ownable::interface::OwnableABI",
        "type": "interface",
        "items": [
            {
                "name": "owner",
                "type": "function",
                "inputs": [],
                "outputs": [
                    {
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "state_mutability": "view"
            },
            {
                "name": "transfer_ownership",
                "type": "function",
                "inputs": [
                    {
                        "name": "new_owner",
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "renounce_ownership",
                "type": "function",
                "inputs": [],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "transferOwnership",
                "type": "function",
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "core::starknet::contract_address::ContractAddress"
                    }
                ],
                "outputs": [],
                "state_mutability": "external"
            },
            {
                "name": "renounceOwnership",
                "type": "function",
                "inputs": [],
                "outputs": [],
                "state_mutability": "external"
            }
        ]
    },
    {
        "name": "constructor",
        "type": "constructor",
        "inputs": [
            {
                "name": "owner",
                "type": "core::starknet::contract_address::ContractAddress"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "openzeppelin_token::erc721::erc721::ERC721Component::Transfer",
        "type": "event",
        "members": [
            {
                "kind": "key",
                "name": "from",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "key",
                "name": "to",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "key",
                "name": "token_id",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "openzeppelin_token::erc721::erc721::ERC721Component::Approval",
        "type": "event",
        "members": [
            {
                "kind": "key",
                "name": "owner",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "key",
                "name": "approved",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "key",
                "name": "token_id",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "openzeppelin_token::erc721::erc721::ERC721Component::ApprovalForAll",
        "type": "event",
        "members": [
            {
                "kind": "key",
                "name": "owner",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "key",
                "name": "operator",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "data",
                "name": "approved",
                "type": "core::bool"
            }
        ]
    },
    {
        "kind": "enum",
        "name": "openzeppelin_token::erc721::erc721::ERC721Component::Event",
        "type": "event",
        "variants": [
            {
                "kind": "nested",
                "name": "Transfer",
                "type": "openzeppelin_token::erc721::erc721::ERC721Component::Transfer"
            },
            {
                "kind": "nested",
                "name": "Approval",
                "type": "openzeppelin_token::erc721::erc721::ERC721Component::Approval"
            },
            {
                "kind": "nested",
                "name": "ApprovalForAll",
                "type": "openzeppelin_token::erc721::erc721::ERC721Component::ApprovalForAll"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
        "type": "event",
        "members": [
            {
                "kind": "key",
                "name": "previous_owner",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "key",
                "name": "new_owner",
                "type": "core::starknet::contract_address::ContractAddress"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
        "type": "event",
        "members": [
            {
                "kind": "key",
                "name": "previous_owner",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "key",
                "name": "new_owner",
                "type": "core::starknet::contract_address::ContractAddress"
            }
        ]
    },
    {
        "kind": "enum",
        "name": "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
        "type": "event",
        "variants": [
            {
                "kind": "nested",
                "name": "OwnershipTransferred",
                "type": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred"
            },
            {
                "kind": "nested",
                "name": "OwnershipTransferStarted",
                "type": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted"
            }
        ]
    },
    {
        "kind": "enum",
        "name": "openzeppelin_introspection::src5::SRC5Component::Event",
        "type": "event",
        "variants": []
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::CooperativeCreated",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "admin",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "data",
                "name": "name",
                "type": "core::byte_array::ByteArray"
            },
            {
                "kind": "data",
                "name": "description",
                "type": "core::byte_array::ByteArray"
            },
            {
                "kind": "data",
                "name": "interest_rate",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::MemberJoined",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "member",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "data",
                "name": "token_id",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::MemberLeft",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "member",
                "type": "core::starknet::contract_address::ContractAddress"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::StakeDeposited",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "member",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "data",
                "name": "amount",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::StakeWithdrawn",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "member",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "data",
                "name": "amount",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::LoanRequested",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "loan_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "borrower",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "data",
                "name": "amount",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "purpose",
                "type": "core::byte_array::ByteArray"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::LoanVoted",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "loan_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "voter",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "data",
                "name": "approve",
                "type": "core::bool"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::LoanApproved",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "loan_id",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::LoanDisbursed",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "loan_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "amount",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::LoanRepaid",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "loan_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "amount",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::ProposalCreated",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "proposal_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "proposer",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "data",
                "name": "proposal_type",
                "type": "core::felt252"
            },
            {
                "kind": "data",
                "name": "new_value",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::ProposalVoted",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "proposal_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "voter",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "data",
                "name": "approve",
                "type": "core::bool"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::ProposalExecuted",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "coop_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "proposal_id",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::CollateralAdded",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "loan_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "asset_type",
                "type": "core::felt252"
            },
            {
                "kind": "data",
                "name": "amount",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "value_usd",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::CollateralRemoved",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "loan_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "asset_type",
                "type": "core::felt252"
            },
            {
                "kind": "data",
                "name": "amount",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "value_usd",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::LoanLiquidated",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "loan_id",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "liquidator",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "data",
                "name": "collateral_value",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "reward_amount",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::FlashLoanExecuted",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "asset",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "data",
                "name": "amount",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "premium",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "initiator",
                "type": "core::starknet::contract_address::ContractAddress"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::AssetSupported",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "asset",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "data",
                "name": "oracle",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "kind": "data",
                "name": "collateral_ratio",
                "type": "core::integer::u256"
            },
            {
                "kind": "data",
                "name": "flash_loan_fee",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "struct",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::CollateralRatioUpdated",
        "type": "event",
        "members": [
            {
                "kind": "data",
                "name": "asset_type",
                "type": "core::felt252"
            },
            {
                "kind": "data",
                "name": "new_ratio",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "kind": "enum",
        "name": "coopifi_contracts::CoopiFi::CoopiFi::Event",
        "type": "event",
        "variants": [
            {
                "kind": "flat",
                "name": "ERC721Event",
                "type": "openzeppelin_token::erc721::erc721::ERC721Component::Event"
            },
            {
                "kind": "flat",
                "name": "OwnableEvent",
                "type": "openzeppelin_access::ownable::ownable::OwnableComponent::Event"
            },
            {
                "kind": "flat",
                "name": "SRC5Event",
                "type": "openzeppelin_introspection::src5::SRC5Component::Event"
            },
            {
                "kind": "nested",
                "name": "CooperativeCreated",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::CooperativeCreated"
            },
            {
                "kind": "nested",
                "name": "MemberJoined",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::MemberJoined"
            },
            {
                "kind": "nested",
                "name": "MemberLeft",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::MemberLeft"
            },
            {
                "kind": "nested",
                "name": "StakeDeposited",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::StakeDeposited"
            },
            {
                "kind": "nested",
                "name": "StakeWithdrawn",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::StakeWithdrawn"
            },
            {
                "kind": "nested",
                "name": "LoanRequested",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::LoanRequested"
            },
            {
                "kind": "nested",
                "name": "LoanVoted",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::LoanVoted"
            },
            {
                "kind": "nested",
                "name": "LoanApproved",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::LoanApproved"
            },
            {
                "kind": "nested",
                "name": "LoanDisbursed",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::LoanDisbursed"
            },
            {
                "kind": "nested",
                "name": "LoanRepaid",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::LoanRepaid"
            },
            {
                "kind": "nested",
                "name": "ProposalCreated",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::ProposalCreated"
            },
            {
                "kind": "nested",
                "name": "ProposalVoted",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::ProposalVoted"
            },
            {
                "kind": "nested",
                "name": "ProposalExecuted",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::ProposalExecuted"
            },
            {
                "kind": "nested",
                "name": "CollateralAdded",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::CollateralAdded"
            },
            {
                "kind": "nested",
                "name": "CollateralRemoved",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::CollateralRemoved"
            },
            {
                "kind": "nested",
                "name": "LoanLiquidated",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::LoanLiquidated"
            },
            {
                "kind": "nested",
                "name": "FlashLoanExecuted",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::FlashLoanExecuted"
            },
            {
                "kind": "nested",
                "name": "AssetSupported",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::AssetSupported"
            },
            {
                "kind": "nested",
                "name": "CollateralRatioUpdated",
                "type": "coopifi_contracts::CoopiFi::CoopiFi::CollateralRatioUpdated"
            }
        ]
    }
]