import React, {FC} from "react";
import PageUp from "@/common/layout/PageUp";

type Props = {
    children: React.ReactNode
}
const MainLayout: FC<Props> = ({children}) => {
    return(
        <>
            <section className="container">
                {children}
            </section>
            <PageUp />
        </>
    )
}

export default MainLayout;