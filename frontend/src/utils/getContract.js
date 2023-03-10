import ContractAbi from "./simpleContract.json";
import { ethers } from "ethers";

export default function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  // get random wallet address, so anyone can browse without connect their wallet

  let contract = new ethers.Contract(
    "0x5A56Cee325F01FA5129C521BF0f1aE0F89b60E19",
    ContractAbi.abi,
    signer
  );
  return contract;
}
