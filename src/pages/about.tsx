import React, {FC} from "react";
import MainLayout from "@/common/layout/MainLayout";
import Header from "@/common/layout/header/Header";
import Footer from "@/common/layout/footer/Footer";
import Meta from "@/common/layout/Meta";
import Image from "next/image";

const About: FC = () => {
    return (
        <>
            <MainLayout>
                <Meta title={"About"} description={"PigmentToken"} />
                <Header />
                <div className="d-flex align-items-center">
                    <Image
                        data-aos="fade-right"
                        className="placeholder-img w-50 mt-5 rounded shadow"
                        alt={"image"}
                        src={"/img/tile.png"}
                        width={1000}
                        height={1000}
                    />
                    <div className="w-50 p-xl-2 wheat d-flex justify-content-center align-items-center">
                        <span className="w-75">
                            <h1>ABOUT</h1>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </div>
                </div>
                <div className="my-5 rounded-5 shadow bg-ligh p-lg-5 w-100" style={{background:"rgba(53,59,46,0.1)"}} data-aos="zoom-in-up" ></div>
                <div className="my-5 rounded-5 shadow bg-ligh p-lg-5 w-100" style={{background:"rgba(53,59,46,0.1)"}} data-aos="zoom-in-up" ></div>
                <div className="my-5 rounded-5 shadow bg-ligh p-lg-5 w-100" style={{background:"rgba(53,59,46,0.1)"}} data-aos="zoom-in-up" ></div>
                <div className="placeholder"></div>
            </MainLayout>
            <Footer />
        </>
    )
}

export default About;