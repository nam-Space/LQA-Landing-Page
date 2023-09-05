import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import LqaNavbar from "../components/Header/LqaNavbar";
import LqaBody from "../components/Body/LqaBody";
import Footer from "../components/Footer/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import SnowfallEffect from "../components/SnowfallEffect";
import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';

export default function Home() {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(window.location.href);
    }, [url]);

    return (
        <div>
            <Head>
                <title>LQA</title>
                <meta
                    name="description"
                    content="Made by Nam Nguyễn"
                />
                <link rel="canonical" href={url} />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://unpkg.com/aos@2.3.1/dist/aos.css"
                    rel="stylesheet"
                ></link>
            </Head>
            <Helmet>
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "Event",
              "name": "Tên sự kiện",
              "description": "Mô tả sự kiện",
              "startDate": "2023-09-15T19:00:00+07:00",
              "endDate": "2023-09-15T21:00:00+07:00",
              "location": {
                "@type": "Place",
                "name": "Địa điểm sự kiện",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Địa chỉ",
                  "addressLocality": "Thành phố",
                  "addressRegion": "Khu vực",
                  "postalCode": "Mã bưu điện",
                  "addressCountry": "Quốc gia"
                }
              },
              "url": "https://www.example.com/su-kien"
            }
          `}
                </script>
            </Helmet>

            <SnowfallEffect />
            <LqaNavbar />
            <LqaBody />
            <Footer />
        </div>
    );
}
