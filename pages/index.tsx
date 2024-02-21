import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import LqaNavbar from "../components/Header/LqaNavbar";
import LqaBody from "../components/Body/LqaBody";
import Footer from "../components/Footer/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import SnowfallEffect from "../components/SnowfallEffect";
import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import ImageOg from '../assets/img/cyber-security.jpg'

export default function Home() {

  return (
    <div>
      <Head>
        <title>LQA</title>
        <meta
          name="description"
          content="Made by Nam Nguyễn"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        <meta property="og:image" content={ImageOg.src} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="150" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E8HGH3VEBS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E8HGH3VEBS');
            `,
          }}
        ></script>
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
