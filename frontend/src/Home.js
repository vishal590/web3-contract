import React, {useEffect, useState} from "react";
import abi from "./utils/simpleContract.json";

import {ethers} from "ethers";


// const Home = () => {
//     const contractAddress = "0x05951b0d583b022d0ec88c4d03a943fd0cc1784f";
//     const contractABI = abi.abi;
//     const [currentAccount, setCurrentAccount] = useState("");

//     const checkIfWalletConnected = async () => {
//         try{
//             const {ethereum} = window;

//             const accounts = await ethereum.request({method: "eth_accounts"});

//             if(accounts.length !== 0){
//                 const account = accounts[0];
//                 setCurrentAccount(account);
//             }else{
//                 alert("check your wallet is connected")
//             }
//         }catch(err){
//             alert("something wrong");       
//         }
//     };

//     const connectWallet = async () => {
//         try{
//             const {ethereum} = window;

//             if(!ethereum){
//                 alert("Make sure your metamask connected");
//                 return;
//             }

//             const accounts = await ethereum.request({method: "eth_requestAccounts"});
//             setCurrentAccount(accounts[0]);
//         }catch(err){
//             alert("something wrong");
//         }
//     };


//     const getVal = async () => {
//         try{

//         }
//     }


//   return (
//     <>
          // <div>
          //   <p>Val1: {val1}</p>
          //   <p>Val2: {val2}</p>
          // </div>

//     </>
//   )
// }

const Home = async() =>  {
    
    // const contractAddress = "0x05951b0d583b022d0ec88c4d03a943fd0cc1784f";
    // const contractABI = abi.abi;
    // const [currentAccount, setCurrentAccount] = useState("");
    // const [val1, setVal1] = useState(null);
    // const [val2, setVal2] = useState(null);

    // try{
    //     const {ethereum} = window;
  
    //     if(ethereum) {
    //       const provider = new ethers.providers.Web3Provider(ethereum);
    //       const signer = provider.getSigner();
    //       const web3Contract = new ethers.Contract(
    //         contractAddress,
    //         contractABI,
    //         signer 
    //       );

    //       const result1 = await web3Contract.val1();
    //       const result2 = await web3Contract.val2();
    //       setVal1(result1);
    //       setVal2(result2);
    //     }else{
    //         console.log("Ethereum object doesn't exist!");
    //       }

    // }catch(err){
    //     console.log(err)
    // }
    
      
    
    
    return (
      <>
        <div>
          <p>Val1: </p>
          <p>Val2:f </p>
        </div>
      </>
    );
}
  

export default Home