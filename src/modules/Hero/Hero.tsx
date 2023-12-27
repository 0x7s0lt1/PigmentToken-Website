'use client'

import React, {FC,useEffect, useState} from "react";
import ReactTextransition,{ presets } from "react-text-transition";
import { getRandomInt } from "@/modules/utils";

const Hero: FC = () => {

    const [textIndex, setTextIndex] = useState(0);
    const texts = ["any artist.", "singers.", "painters.", "photographers.", "dancers.", "actors.", "entertainers."];

    useEffect(() => {
        let interval = setInterval(() => {

            setTextIndex(getRandomInt(0, texts.length - 1));

        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <>
            <section className="booking-wrapper mt-5 justify-content-start">
                <img src="/img/trans.png" alt={"image"} className="drone" />
                <div className="w50">
                    <h1>
                        With pigment token,<br/> you can support&nbsp;
                        <ReactTextransition
                            springConfig={presets.gentle}
                            className="big fw-bold"
                            delay={300}
                            inline
                        >
                            {texts[textIndex]}
                        </ReactTextransition>
                    </h1>
                    <span className="wheat">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </div>
            </section>
        </>
    )
}

export default Hero;