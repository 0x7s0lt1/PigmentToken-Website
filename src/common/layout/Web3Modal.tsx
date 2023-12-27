"use client"

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '1bcfe23b5a3b21d319fdb5cfc819af1a'

// 2. Set chains
const mainnet = {
    chainId: 137,
    name: 'Polygon Mainnet',
    currency: 'PGMT',
    explorerUrl: 'https://polygonscan.com',
    rpcUrl: 'https://polygon-rpc.com'
}

// 3. Create modal
const metadata = {
    name: 'PigmentToken',
    description: 'Support an artist with a pigment.',
    url: 'https://pigmentoken.org',
    icons: ['/img/trans.png']
}

createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet],
    tokens: {
        137: {
            address: '0xC76440DbdB9B42Ae2BF0269D12280614604d43e8',
            image: 'https://pgmt.vercel.app/img/trans.png'
        }
    },
    projectId
})

export function Web3ModalProvider() {
    return <></>;
}