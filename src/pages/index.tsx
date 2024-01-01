"use client"

import React, {FC, useEffect} from "react";
import AOS from "aos";

import 'aos/dist/aos.css';
import MainLayout from "@/common/layout/MainLayout";
import Header from "@/common/layout/header/Header";
import Footer from "@/common/layout/footer/Footer";
import Meta from "@/common/layout/Meta";
import Hero from "@/modules/Hero/Hero";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Index : FC = () => {

    useEffect(() => {
        AOS.init({
            disable: 'mobile',
            once: true,
        });
    }, []);

    return (
        <>
            <MainLayout>
                <Meta title={"PigmentToken"} description={"PigmentToken"} />
                <Header/>
                <Hero/>
                <div>

                </div>
                <div className="stick  px-2 w-100"
                     data-aos="zoom-in-up">

                    <Link href="https://info.uniswap.org/#/polygon/pools/0x530d01625ced24f0fd98056bef6454961393a15b" target="_blank">
                        <img className="dex-btn-img" src="/img/uniswap/UNI-Price.webp" alt="uniswap"/>
                    </Link>
                    <Link href="https://app.1inch.io/#/137/simple/swap/PGMT/USDT" target="_blank">
                        <img className="dex-btn-img" src="/img/1inch/What-is-1inch-Crypto.webp" alt="1inch"/>
                    </Link>
                    <Link href="https://pancakeswap.finance/" target="_blank">
                        <img className="dex-btn-img" src="/img/pancakeswap/PancakeSwap_CAKE_token-social.jpg" alt="1inch"/>
                    </Link>
                    <Link href="https://www.vizslaswap.com/" target="_blank">
                        <img className="dex-btn-img" src="/img/vizslaswap/NpHOQ7clngTc4DhH.jpg" alt="1inch"/>
                    </Link>
                    <Link href="https://www.vizslaswap.com/" target="_blank">
                        <img className="dex-btn-img" src="/img/sushiswap/sushiswap.jpeg" alt="1inch"/>
                    </Link>

                </div>
                <div className="stick my-5 rounded-5 shadow bg-ligh p-lg-5 w-100" style={{background: "rgba(115, 43, 11, 0.2)"}}
                     data-aos="zoom-in-up"></div>
                <div className="stick my-5 rounded-5 shadow bg-ligh p-lg-5 w-100" style={{background: "rgba(115, 43, 11, 0.2)"}}
                     data-aos="zoom-in-up"></div>
            </MainLayout>
            <Footer/>
        </>
    )
}

export default Index;