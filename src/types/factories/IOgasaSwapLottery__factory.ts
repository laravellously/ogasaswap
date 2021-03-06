/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IOgasaSwapLottery,
  IOgasaSwapLotteryInterface,
} from "../IOgasaSwapLottery";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lotteryId",
        type: "uint256",
      },
      {
        internalType: "uint32[]",
        name: "_ticketNumbers",
        type: "uint32[]",
      },
    ],
    name: "buyTickets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lotteryId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_ticketIds",
        type: "uint256[]",
      },
      {
        internalType: "uint32[]",
        name: "_brackets",
        type: "uint32[]",
      },
    ],
    name: "claimTickets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lotteryId",
        type: "uint256",
      },
    ],
    name: "closeLottery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lotteryId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_autoInjection",
        type: "bool",
      },
    ],
    name: "drawFinalNumberAndMakeLotteryClaimable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lotteryId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "injectFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_priceTicketInCake",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_discountDivisor",
        type: "uint256",
      },
      {
        internalType: "uint256[6]",
        name: "_rewardsBreakdown",
        type: "uint256[6]",
      },
      {
        internalType: "uint256",
        name: "_treasuryFee",
        type: "uint256",
      },
    ],
    name: "startLottery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "viewCurrentLotteryId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_lotteryId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cursor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256",
      },
    ],
    name: "viewUserInfoForLotteryId",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint32[]",
        name: "",
        type: "uint32[]",
      },
      {
        internalType: "bool[]",
        name: "",
        type: "bool[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IOgasaSwapLottery__factory {
  static readonly abi = _abi;
  static createInterface(): IOgasaSwapLotteryInterface {
    return new utils.Interface(_abi) as IOgasaSwapLotteryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOgasaSwapLottery {
    return new Contract(address, _abi, signerOrProvider) as IOgasaSwapLottery;
  }
}
