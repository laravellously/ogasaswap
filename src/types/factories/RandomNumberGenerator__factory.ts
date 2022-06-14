/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RandomNumberGenerator,
  RandomNumberGeneratorInterface,
} from "../RandomNumberGenerator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vrfCoordinator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_linkToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_seed",
        type: "uint256",
      },
    ],
    name: "getRandomNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "keyHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestLotteryId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRequestId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ogasaSwapLottery",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "randomResult",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256",
      },
    ],
    name: "rawFulfillRandomness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32",
      },
    ],
    name: "setKeyHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ogasaSwapLottery",
        type: "address",
      },
    ],
    name: "setLotteryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "viewLatestLotteryId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "viewRandomResult",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256",
      },
    ],
    name: "withdrawTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516200131838038062001318833981016040819052610031916100cf565b6001600160601b0319606083811b821660a05282901b1660805261005a6100553390565b610061565b5050610101565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80516001600160a01b03811681146100ca57600080fd5b919050565b600080604083850312156100e1578182fd5b6100ea836100b3565b91506100f8602084016100b3565b90509250929050565b60805160601c60a05160601c6111e4620001346000396000818161051e0152610b1001526000610ad401526111e46000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806394985ddd116100b2578063ddca3f4311610081578063ef11e8e311610066578063ef11e8e314610245578063f2fde38b14610265578063fbe5d9171461027857600080fd5b8063ddca3f4314610233578063eed8e1ee1461023c57600080fd5b806394985ddd146101ec57806398544710146101ff578063a1c4f55a14610212578063b37217a41461022057600080fd5b806361728f39116100ee57806361728f391461018957806369fe0e2d14610192578063715018a6146101a55780638da5cb5b146101ad57600080fd5b806306b091f9146101205780631aa46f59146101355780632a332b2a1461015157806342619f6614610164575b600080fd5b61013361012e366004610fb7565b610280565b005b61013e60045481565b6040519081526020015b60405180910390f35b61013361015f366004610f9d565b61032b565b6005546101749063ffffffff1681565b60405163ffffffff9091168152602001610148565b61013e60035481565b6101336101a0366004611000565b6103f3565b610133610479565b60015473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610148565b6101336101fa366004611018565b610506565b61013361020d366004611000565b6105af565b60055463ffffffff16610174565b61013361022e366004611000565b610635565b61013e60065481565b61013e60075481565b6002546101c79073ffffffffffffffffffffffffffffffffffffffff1681565b610133610273366004610f9d565b610731565b60075461013e565b60015473ffffffffffffffffffffffffffffffffffffffff163314610306576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b61032773ffffffffffffffffffffffffffffffffffffffff83163383610861565b5050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146103ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102fd565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff163314610474576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102fd565b600655565b60015473ffffffffffffffffffffffffffffffffffffffff1633146104fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102fd565b61050460006108f3565b565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146105a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f4f6e6c7920565246436f6f7264696e61746f722063616e2066756c66696c6c0060448201526064016102fd565b610327828261096a565b60015473ffffffffffffffffffffffffffffffffffffffff163314610630576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102fd565b600355565b60025473ffffffffffffffffffffffffffffffffffffffff1633146106b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4f6e6c79204f67617361537761704c6f7474657279000000000000000000000060448201526064016102fd565b60035461071f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4d75737420686176652076616c6964206b65792068617368000000000000000060448201526064016102fd565b61072b60035482610ad0565b60045550565b60015473ffffffffffffffffffffffffffffffffffffffff1633146107b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102fd565b73ffffffffffffffffffffffffffffffffffffffff8116610855576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016102fd565b61085e816108f3565b50565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526108ee908490610c66565b505050565b6001805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b81600454146109d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f57726f6e6720726571756573744964000000000000000000000000000000000060448201526064016102fd565b6109e2620f424082611175565b6109ef90620f4240611108565b600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff92909216919091179055600254604080517f80a06160000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff909216916380a06160916004808201926020929091908290030181600087803b158015610a9157600080fd5b505af1158015610aa5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac99190611039565b6007555050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f000000000000000000000000000000000000000000000000000000000000000084866000604051602001610b4d929190918252602082015260400190565b6040516020818303038152906040526040518463ffffffff1660e01b8152600401610b7a939291906110b7565b602060405180830381600087803b158015610b9457600080fd5b505af1158015610ba8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcc9190610fe0565b5060008381526020818152604080832054815180840188905280830185905230606082015260808082018390528351808303909101815260a090910190925281519183019190912086845292909152610c26906001611108565b6000858152602081815260409182902092909255805180830187905280820184905281518082038301815260609091019091528051910120949350505050565b6000610cc8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610d729092919063ffffffff16565b8051909150156108ee5780806020019051810190610ce69190610fe0565b6108ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016102fd565b6060610d818484600085610d8b565b90505b9392505050565b606082471015610e1d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016102fd565b73ffffffffffffffffffffffffffffffffffffffff85163b610e9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102fd565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610ec4919061109b565b60006040518083038185875af1925050503d8060008114610f01576040519150601f19603f3d011682016040523d82523d6000602084013e610f06565b606091505b5091509150610f16828286610f21565b979650505050505050565b60608315610f30575081610d84565b825115610f405782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fd91906110f5565b803573ffffffffffffffffffffffffffffffffffffffff81168114610f9857600080fd5b919050565b600060208284031215610fae578081fd5b610d8482610f74565b60008060408385031215610fc9578081fd5b610fd283610f74565b946020939093013593505050565b600060208284031215610ff1578081fd5b81518015158114610d84578182fd5b600060208284031215611011578081fd5b5035919050565b6000806040838503121561102a578182fd5b50508035926020909101359150565b60006020828403121561104a578081fd5b5051919050565b60008151808452611069816020860160208601611145565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082516110ad818460208701611145565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff841681528260208201526060604082015260006110ec6060830184611051565b95945050505050565b602081526000610d846020830184611051565b60008219821115611140577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500190565b60005b83811015611160578181015183820152602001611148565b8381111561116f576000848401525b50505050565b6000826111a9577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b50069056fea26469706673582212202620b87f89fbd3249eab84bc731bd5fa343d15d95b51269ad8d31d562e243e8064736f6c63430008040033";

export class RandomNumberGenerator__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _vrfCoordinator: string,
    _linkToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RandomNumberGenerator> {
    return super.deploy(
      _vrfCoordinator,
      _linkToken,
      overrides || {}
    ) as Promise<RandomNumberGenerator>;
  }
  getDeployTransaction(
    _vrfCoordinator: string,
    _linkToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _vrfCoordinator,
      _linkToken,
      overrides || {}
    );
  }
  attach(address: string): RandomNumberGenerator {
    return super.attach(address) as RandomNumberGenerator;
  }
  connect(signer: Signer): RandomNumberGenerator__factory {
    return super.connect(signer) as RandomNumberGenerator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RandomNumberGeneratorInterface {
    return new utils.Interface(_abi) as RandomNumberGeneratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RandomNumberGenerator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RandomNumberGenerator;
  }
}
