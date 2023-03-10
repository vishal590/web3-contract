import React,{useState,useEffect} from 'react'
// import getContract from "./utils/getContract";
import ContractAbi from "./utils/simpleContract.json";
import { ethers } from "ethers";


const Home = () => {

    let value1;
    let value2;
    let value3;
    let setvalue1;

    const [newV1, setNewV1] = useState(0);
    const [newV2, setNewV2] = useState(0);
    const [newV3, setNewV3] = useState('');
    const [currentAccount, setCurrentAccount] = useState("");
    const [walletConnected, setWalletConnected] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
 
    const handleMouseLeave = () => {
       setIsHover(false);
    };

      const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        setCurrentAccount(account);
        setWalletConnected(true);
      } else {
        alert("check your wallet is connected")
        setWalletConnected(false);
        return;
      }
    } catch (err) {
      console.log(`${err.message}`);
    }
  };

   const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Make sure you have MetaMask Connected");
        return;
      }else{
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            setCurrentAccount(accounts[0]);
            alert("Wallet is connected")
        }
    } catch (err) {
      console.log(`${err.message}`);
    }
  };


    
    // useEffect(() => {
        const setData = async () => {
            try {
                // const contract = await getContract();
                const contractAddress = "0x6fB2C57b67dc3Fb85F2b2D3271eBCc25d724ef1d";
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();

                let contract = new ethers.Contract(
                    contractAddress,
                    ContractAbi.abi,
                    signer
                );

                if(newV1 === 0){
                    alert("Please enter a 1 value");
                    return;
                }else if(newV2 === 0){
                    alert("Pleae enter a 2 value");
                    return;
                }else if(newV3 === ""){
                    alert("Plase enter message");
                    return;
                }else{
                    
                    value1 = await contract.setVal1(newV1);
                    value2 = await contract.setVal2(newV2);
                    value3 = await contract.setVal3(newV3);
                    setNewV1(value1);
                    setNewV2(value2);
                    setNewV3(value3);
                    
                }
            }catch(err){
                console.log(err);
            }

    }



        const fetchData = async () => {
            try {
                // const contract = await getContract();
                const contractAddress = "0x6fB2C57b67dc3Fb85F2b2D3271eBCc25d724ef1d";
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                
                
                let contract = new ethers.Contract(
                    contractAddress,
                    ContractAbi.abi,
                    signer
                );

                 value1 = await contract.val1();
                 value2 = await contract.val2();
                 value3 = await contract.val3();
                 setNewV1(value1 ? Number(value1) : 0);
                 setNewV2(value2 ? Number(value2) : 0);
                 setNewV3(value3);
                 
    
            }catch(err){
                console.log(err);
            }
        }

        function getBalance() {
            fetchData(); 
        }

        function setBalance() {
            setData(); 
        }  
   

        useEffect(() => {
            checkIfWalletIsConnected();
        },[]);
        

    // },[]);

        const boxStyle = {
            color: isHover ? '#2d7eff' : 'white',
            border: isHover ? '5px solid #2d7eff' : '5px solid transparent',
            transition: '.2s ease',
            bordeRadius: '50px',
            backgroundColor: isHover ? 'white' : '#2d7eff',
            transform: isHover ? 'scale(1.1)' : 'scale(1)',
            fontSize: '16px',
        }

      



  return (
    <>
        <div style={{padding:'80px 0', fontSize:'20px'}}>

            <p>First Value: {newV1}</p>
            <p><input type="text" onChange={e => setNewV1(e.target.value)}  /></p>
            <p>Second Value: {newV2}</p>
            <p><input type = "text" onChange={e => setNewV2(e.target.value)} /></p>
            <p>Third Value: {newV3}</p>
            <p><input type = "text" onChange={e => setNewV3(e.target.value)} /></p>

            <button 
                style={{fontSize: '16px',}} 
                onClick={setBalance}>Set Balance</button>

            <p><button
                style={{fontSize: '16px',}} 
                onClick={getBalance}
                >Get Balance</button></p>

            <p><button onClick={connectWallet}  
                style={boxStyle} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                > Connect wallet
            </button>
            </p>
        </div>
    </>
  )
}

export default Home