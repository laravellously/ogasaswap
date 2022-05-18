/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IVotes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVotes__factory>;
    getContractFactory(
      name: "IERC3156FlashBorrower",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC3156FlashBorrower__factory>;
    getContractFactory(
      name: "IERC3156FlashLender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC3156FlashLender__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "ERC20FlashMint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20FlashMint__factory>;
    getContractFactory(
      name: "ERC20Votes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Votes__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Greeter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Greeter__factory>;
    getContractFactory(
      name: "OgasaCrowdSale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OgasaCrowdSale__factory>;
    getContractFactory(
      name: "OgasaDrop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OgasaDrop__factory>;
    getContractFactory(
      name: "OgasaToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OgasaToken__factory>;
    getContractFactory(
      name: "TokenVesting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenVesting__factory>;

    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IVotes",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVotes>;
    getContractAt(
      name: "IERC3156FlashBorrower",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC3156FlashBorrower>;
    getContractAt(
      name: "IERC3156FlashLender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC3156FlashLender>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "ERC20FlashMint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20FlashMint>;
    getContractAt(
      name: "ERC20Votes",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Votes>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Greeter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Greeter>;
    getContractAt(
      name: "OgasaCrowdSale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OgasaCrowdSale>;
    getContractAt(
      name: "OgasaDrop",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OgasaDrop>;
    getContractAt(
      name: "OgasaToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OgasaToken>;
    getContractAt(
      name: "TokenVesting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenVesting>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}