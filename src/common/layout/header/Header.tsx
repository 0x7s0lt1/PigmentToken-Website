import {FC} from "react";
import Link from "next/link";
import {Web3ModalProvider} from "@/common/layout/Web3Modal";


const Header : FC = () => {

    return (
        <>
            <Web3ModalProvider/>
            <div className="header-wrapper">
                <header className="header shadow">
                    <Link href={"/"} className="logo">
                        &nbsp;&nbsp;&nbsp;Pigment Token
                    </Link>
                    <nav>
                        <Link href={"/blog"}>
                            Blog
                        </Link>
                        <Link href={"/about"}>
                            About
                        </Link>
                        <w3m-button loadingLabel="Wait a Pigment..."/>
                    </nav>
                </header>

            </div>
        </>
    )
}

export default Header;