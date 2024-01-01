import React, {FC, useState} from "react";
import PageUp from "@/common/layout/PageUp";
import Header from "@/common/layout/header/Header";

type Props = {
    children: React.ReactNode
}
const MainLayout: FC<Props> = ({children}) => {

    return(
        <>
            <section className="container">
                <Header/>
                {children}
            </section>
            <PageUp />
        </>
    )
}

export default MainLayout;