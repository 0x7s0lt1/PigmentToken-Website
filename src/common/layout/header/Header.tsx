import {FC, useState} from "react";
import Link from "next/link";
import {Web3ModalProvider} from "@/common/layout/Web3Modal";
import Confetti from "@/modules/Confetti/Confetti";


const Header : FC = () => {

    const [isHolder, setIsHolder] = useState(false);

    return (
        <>
            <Web3ModalProvider/>
            <Confetti setIsHolder={setIsHolder}/>
            <div className="header-wrapper">
                <header className="header shadow">
                    <Link href={"/"} className="logo text-rubik">
                        &nbsp;&nbsp;&nbsp;Pigment Token
                    </Link>
                    <nav>
                        <Link href={"/blog"}>
                            Blog
                        </Link>
                        <Link href={"/about"}>
                            About
                        </Link>
                        {isHolder &&
                            <img src="/img/holder-badge.svg" className="holder-badge" alt="holder-bage"/>
                        }
                        <w3m-button loadingLabel="Wait a Pigment..." balance="hide"/>
                    </nav>
                </header>

            </div>
        </>
    )
}

export default Header;