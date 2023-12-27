import {FC} from "react";

const Footer: FC = () => {
    return (
        <footer className="footer container shadow">
            <div className="footer-inner shadow">
                <div className="d-flex align-items-center flex-wrap justify-content-center">
                    <img src='/img/p-logo.png'/>
                    <p className="text-white">© 2023 Pigment Token. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;