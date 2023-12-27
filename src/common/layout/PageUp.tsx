import {FC, useEffect, useState} from "react";
import Link from "next/link";
import {ArrowUp} from "react-bootstrap-icons";

const PageUp : FC = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if(window.scrollY > 50) {
                setVisible(true);
            }else {
               setVisible(false);
            }
        })
    }, []);

    return (
        <>
            {visible &&
                <Link href={"#"} style={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                    color: "",
                    textDecoration: "none",
                    background: "transparent",
                    border: "1px solid wheat",
                }} className="rounded p-xl-3 text-light shadow" >
                    <ArrowUp></ArrowUp>
                </Link>
            }
        </>
    )
  
}

export default PageUp;