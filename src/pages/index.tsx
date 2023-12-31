"use client"

import React, {FC, useEffect, useState} from "react";
import AOS from "aos";

import 'aos/dist/aos.css';
import MainLayout from "@/common/layout/MainLayout";
import Header from "@/common/layout/header/Header";
import Footer from "@/common/layout/footer/Footer";
import Meta from "@/common/layout/Meta";
import Hero from "@/modules/Hero/Hero";
import DexLine from "@/modules/DexLine/DexLine";
import Confetti from "@/modules/Confetti/Confetti";

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
                <Hero/>
                <div>

                </div>

                <DexLine/>

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