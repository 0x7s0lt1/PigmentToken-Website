'use client'

import {FC,useEffect, useState} from "react";
import { useWeb3ModalAccount,useWeb3ModalProvider } from '@web3modal/ethers/react'
import { BrowserProvider, Contract} from 'ethers'
import {Abi as ContractAbi, Address as ContractAddress} from "@/common/contract/pigment";
import confetti from "canvas-confetti";

type Props = {
    setIsHolder: any
};

const Confetti: FC<Props> = ({setIsHolder}) => {

    const { walletProvider } = useWeb3ModalProvider();
    const { address, chainId, isConnected } = useWeb3ModalAccount();

    const checkPGMTOnWallet = async () => {

        if (isConnected) {
            if(walletProvider !== undefined){
                const provider = new BrowserProvider(walletProvider);
                const contract = new Contract(ContractAddress, ContractAbi, provider);

                const balance = await contract.balanceOf(address);

                if(balance !== "0n"){
                    setIsHolder(true);
                    confetti();
                }else{
                    setIsHolder(false);
                }

            }

        }else{
            setIsHolder(false);
        }
    }

    useEffect( ()=>{
        checkPGMTOnWallet();
    },[isConnected]);

    return (
        <>

        </>
    )
}

export default Confetti;