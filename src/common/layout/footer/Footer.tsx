import {FC} from "react";
import Link from "next/link";
import Socials from "@/modules/Socials/Socials";

const Footer: FC = () => {
    return (
        <footer className="footer container shadow">
            <div className="footer-inner shadow">
                <div className="d-flex align-items-center flex-wrap justify-content-center">
                    <Link target="_blank" href={"https://polygonscan.com/token/0xc76440dbdb9b42ae2bf0269d12280614604d43e8"}>
                        <img alt='PolygonScan' src='/img/p-scan.svg'/>
                    </Link>
                    <p className="text-white">© 2023 Pigment Token. All rights reserved.</p>
                    <Socials/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;