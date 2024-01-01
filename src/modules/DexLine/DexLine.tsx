import Link from "next/link";
import {FC} from "react";

const DexLine: FC = () => {

    return (
        <>
            <div className="d-flex align-items-center flex-wrap">

                <div className="w-100 px-lg-5 m-p">
                    <h1 className="text-rubik">Swap some on a DEX</h1>
                    <p>
                        Pigment token offers seamless liquidity through its compatibility with various decentralized
                        exchanges (DEX). Users can effortlessly swap Pigment on any DEX supporting its trading pairs,
                        providing flexibility and accessibility in the cryptocurrency ecosystem.
                    </p>
                </div>
                <div className="stick dex-line-wrapper rounded-5 shadow bg-ligh px-2 w-100" data-aos="zoom-in-up">
                    <Link href="https://info.uniswap.org/#/polygon/pools/0x530d01625ced24f0fd98056bef6454961393a15b"
                          target="_blank">
                        <img className="dex-btn-img" src="/img/uniswap/UNI-Price.webp" alt="uniswap"/>
                    </Link>
                    <Link href="https://app.1inch.io/#/137/simple/swap/PGMT/USDT" target="_blank">
                        <img className="dex-btn-img" src="/img/1inch/What-is-1inch-Crypto.webp" alt="1inch"/>
                    </Link>
                    {/*<Link href="https://pancakeswap.finance/" target="_blank">*/}
                    {/*    <img className="dex-btn-img" src="/img/pancakeswap/PancakeSwap_CAKE_token-social.jpg" alt="pancakeswap"/>*/}
                    {/*</Link>*/}
                    <Link href="https://www.vizslaswap.com/" target="_blank">
                        <img className="dex-btn-img" src="/img/vizslaswap/NpHOQ7clngTc4DhH.jpg" alt="vizslaswap"/>
                    </Link>
                    <Link href="https://www.sushi.com/swap?chainId=137&token0=NATIVE&token1=0xC76440DbdB9B42Ae2BF0269D12280614604d43e8" target="_blank">
                        <img className="dex-btn-img" src="/img/sushiswap/sushiswap.jpeg" alt="sushiswap"/>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default DexLine;