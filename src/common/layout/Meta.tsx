import Head from "next/head";
import {FC, useEffect} from "react";

type Props = {
    title: string;
    description: string;
    favIcon?: string;
    themeColor?: string;
    ogUrl?: string;
    ogType?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
}
const Meta : FC<Props> = ({
                            title = "PigmentToken",
                            description = "Support an artist with a pigment.",
                            favIcon = "/img/trans.png",
                            themeColor = "#fee221",
                            ogUrl = "https://pigmentoken.org",
                            ogType = "website",
                            ogTitle = "PigmentToken",
                            ogDescription = "Support an artist with a pigment.",
                            ogImage = "https://pigmentoken.org/img/og-min.png",
                          }) => {

    useEffect(() => {

        // MS CLARITY
        (function(c, l, a, r, i, t, y) {
            c[a as any] = c[a as any] || function() {
                // @ts-ignore
                (c[a as any].q = c[a as any].q || []).push(arguments)
            };
            // @ts-ignore
            t = l.createElement(r);
            // @ts-ignore
            t.async = 1;
            // @ts-ignore
            t.src = "https://www.clarity.ms/tag/" + i;
            // @ts-ignore
            y = l.getElementsByTagName(r)[0];
            // @ts-ignore
            y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "kd6hnl6qd6");

        // GOOGLE ANALYTICS
        // @ts-ignore
        window.dataLayer = window.dataLayer || [];
        // @ts-ignore
        function gtag(){dataLayer.push(arguments);}
        // @ts-ignore
        gtag('js', new Date());

        // @ts-ignore
        gtag('config', 'G-3HNCJE62LP');

    },[]);

    // @ts-ignore
    return (
        <Head>

            <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="icon" type="image/png" href={favIcon}/>
            <meta name="theme-color" content={themeColor}/>


            <meta property="og:url" content={ogUrl}/>
            <meta property="og:type" content={ogType}/>
            <meta property="og:title" content={ogTitle}/>
            <meta property="og:description" content={ogDescription}/>
            <meta property="og:image" content={ogImage}/>

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-3HNCJE62LP"></script>

        </Head>
    )
}

export default Meta;