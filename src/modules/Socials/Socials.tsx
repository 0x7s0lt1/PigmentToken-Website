import Link from "next/link";
import {Github, Reddit, Telegram, Twitter} from "react-bootstrap-icons";
import {FC} from "react";

const Socials: FC = () => {
    return (
        <div>
            <Link href="https://www.reddit.com/r/pigmentoken/" target="_blank" className="px-2">
                <Reddit className="text-white" size={20}/>
            </Link>
            <Link href="https://twitter.com/PigmentToken" target="_blank" className="px-2">
                <Twitter className="text-white" size={20}/>
            </Link>
            <Link href="https://t.me/pigment_token" target="_blank" className="px-2">
                <Telegram className="text-white" size={20}/>
            </Link>
            <Link href="https://github.com/0x7s0lt1/Pigment" target="_blank" className="px-2">
                <Github className="text-white" size={20}/>
            </Link>
        </div>
    )
}

export default Socials;