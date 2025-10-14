import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { Carousel, Row, Col, Space, Typography, Card } from "antd";
import rekitadvisory from "../assets/images/rekitadvisory.png";
import investmentgoals from "../assets/images/investmentgoals.png";
import experience from "../assets/images/experience.png";

import tower from "../assets/images/tower-mobile.jpeg";

import lifestyle from "../assets/images/lifestyle.png";
import wealth from "../assets/images/wealth.png";
import goal from "../assets/images/goal.png";
import succession from "../assets/images/succession.png";
import taxplanning from "../assets/images/taxplanning.png";
import homeCarouselOne from "../assets/images/homeCarouselOneNew.jpg"
import homeCarouselThree from "../assets/images/home-carousel-3.jpeg"
import homeCarouselFour from "../assets/images/home-carousel-4.jpeg"
import homeCarouselSix from "../assets/images/home-carousel-1.jpeg"
import taxPlanning from "../assets/images/tax-planning.jpeg"
import babe from "../assets/images/babe.jpeg";
import babe2 from "../assets/images/babe2.jpeg";
import babe3 from "../assets/images/babe3.jpeg";
import babe4 from "../assets/images/babe4.jpeg";
import babe5 from "../assets/images/babe5.jpeg";
import Modal from "../components/Modal";
import ZohoCampaign from "../components/Zoho";

import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import NextStep from "../components/NextStep";
import Footer from "../components/Footer";
import ServicesWrapper from "../components/SericesWrapper";
import AppLayout from "../layouts/AppLayout";
import ServiceWrapperContainer from "../containers/ServiceWrapperContainer";
import { useRouter } from "next/router";
import Link from "next/link";
import { getTheAmountOfTimes } from "../helpers";

const contentStyle = {
  // height: "543px",
  color: "#fff",
  // lineHeight: "150px",
  textAlign: "center",
  // background: "#364d79",
  background: "blue",
  display: "flex",
  position: "relative",
  zIndex: 1,
};

const SliderBox = ({ title, desc, btnText }) => {
  const route = useRouter();
  const navigate = () => {
    route.push("/coming-soon");
  };
  return (
    <div className="left-[10px] right-[10px] lg:right-0 bottom-16 lg:bottom-32 w-11/12 lg:w-5/12 gap-y-4 lg:gap-y-8 flex flex-col lg:left-[50px] text-left z-30 absolute">
      <div className="uppercase leading-[1.8rem] lg:leading-[3.8rem] w-[684] font-semibold text-white font-raleway text-lg lg:text-3xl drop-shadow-2xl shadow-black">
        {title}{" "}
      </div>
      <div className="open-sans w-full lg:w-[756] font-inter font-semibold text-white text-xs lg:text-lg leading-[1.2rem] lg:leading-[1.8rem] drop-shadow-2xl shadow-black">
        {desc}
      </div>
      <div>
        <Link href="/coming-soon" legacyBehavior>
    
            <Button
              text={btnText}
              shape="round"
              size="large"
              className="mybtn highlighted_btn font-bold"
              style={{
                padding: ".5rem 2rem",
                minHeight: "3rem",
                fontSize: ".8rem",
              }}
              onClick={navigate}
            />
       
        </Link>
      </div>
    </div>
  );
};
const { Paragraph } = Typography;

const Metaa = ({ title, desc }) => {
  return (
    <div className="p-3">
      <div className="font-bold font-raleway text-base">{title}</div>
      <div className="text-[15px] font-inter font-normal my-3">{desc}</div>
    </div>
  );
};

// const Zoho = () => {
//   return(
//     <div>
//  <Row>
//                 <Col span={24}>
//                    <div className="my-5">
//                   <Row gutter={16}>
//                    <Col xs={24} lg={12}>
//                     <Input type="text" placeholder="Enter your name" className="py-3" />
//                     </Col>
//                     <Col xs={24} lg={12} className="mt-5 lg:mt-0">
//                     <Input type="email" placeholder="Enter your email address" className="py-3" />
//                     </Col>
//                   </Row>
//                    </div>
                  
                  
//                 </Col>
                
               

//                 <Col span={24}>
//                   <div className="mt-10">

//                   <Button
//                     shape="round"
//                     size="large"
//                     text="send message"
//                     className="mybtn highlighted_btn rounded-xl uppercase"
//                     style={{borderRadius: '2rem'}}
//                     onClick={()=>setDone(!done)}
//                     />
//                     </div>
//                 </Col>
//               </Row>
//     </div>
//   )
// }
export default function Home() {
  const [isOpenHome, setIsOpenHome] = useState(false);

  useEffect(() => {
    setIsOpenHome(true);
  }, []);
 
  return (
    <div>
      <Head>
        <title>Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Rekit Financial Advisors An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta name="google-siteverification" content="3ENe10NVQGctLCfN2hBiVwwpDyrRCFCjtkKo2XQHvz8" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta
          property="og:description"
          content="Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta property="og:title" content="Rekit Financial Advisors Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        {/* <meta name="author" content="John Doe" /> */}
        {/* Setting the Viewport */}
        {/* Refresh document every 30 seconds: */}
        {/* <meta http-equiv="refresh" content="30" /> */}

        {/* <meta name="description" content="Rekit Web app Wealth Generator" />
        <link rel="icon" href="/favicon.ico" />
        
        <meta property="og:title" content="Colby Fayock - A UX Designer &amp; Front-end Developer Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/static/website-social-card-44070c4a901df708aa1563ac4bbe595a.jpg" />
        <meta property="og:url" content="https://www.colbyfayock.com" />

        <meta property="og:site_name" content="Colby Fayock" />
        <meta property="og:title" content="Anyone Can Map! Inspiration and an introduction to the world of mapping - Colby Fayock" />
        <meta property="og:description" content="Chef Gusteau was a visionary who created food experiences for the world to enjoy. How can we take his lessons and apply them to the world of…" />
        <meta property="og:url" content="https://www.colbyfayock.com/2020/03/anyone-can-map-inspiration-and-an-introduction-to-the-world-of-mapping/" />
        <meta property="og:type" content="article" />
        <meta property="article:publisher" content="https://www.colbyfayock.com" />
        <meta property="article:section" content="Coding" />
        <meta property="article:tag" content="Coding" />
        <meta property="og:image" content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1" />
        <meta property="og:image:secure_url" content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1" />
        <meta property="twitter:site" content="@colbyfayock" /> */}

        {/* <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="assets/images/favicon/apple-icon-114x114.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="assets/images/favicon/apple-icon-120x120.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="assets/images/favicon/apple-icon-144x144.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="assets/images/favicon/apple-icon-152x152.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="assets/images/favicon/apple-icon-180x180.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="assets/images/favicon/android-icon-192x192.png"
        />
        <link rel="shortcut icon" href="assets/images/favicon/android-icon-192x192.png" />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="assets/images/favicon/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="assets/images/favicon/favicon-96x96.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={process.env.REACT_APP_SOFTLINK_FAVICON || 'assets/images/favicon/favicon-16x16.png'}
        /> */}
      </Head>

      <AppLayout>

    
        <Carousel
          autoplay
          dotsClass={{
            width: "5px",
            height: "5px",
            borderRadius: "100%",
            background: "white",
          }}
        >
          <div className="h-[343px] lg:h-[543px] text-white text-center flex relative z-10">
            {/* <div className="image-container">
              <Image
                className="image"
                src={rekitadvisory}
                layout="fill"
                alt="Get the support you need to build a diversified investment portfolio and meet your financial goals"
              />
              </div> */}
            <div className="pt-2 h-[96.66vw] lg:h-[36.66vw] w-full relative">
              <Image
                // src="/assets/images/unsplash-1.jpeg"
                src={homeCarouselOne}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <SliderBox
              title="Rekit Financial Advisors"
              btnText="GET STARTED"
              desc="Get the support you need to build a diversified investment portfolio and meet your financial goals"
            />
          </div>
          <div className="h-[343px] lg:h-[543px] text-white text-center flex relative z-10">
            {/* <div className="image-container">
              <Image
                className="image"
                src={investmentgoals}
                layout="fill"
                alt="Understand Global and Domestic Financial Markets through the help of our trusted financial advisors"
              />
              </div> */}
            <div className="pt-2 h-[96.66vw] lg:h-[36.66vw] w-full relative">
              <Image
                // src="/assets/images/unsplash-1.jpeg"
                src={homeCarouselFour}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <SliderBox
              title="Working to meet your investment goals"
              btnText="GET STARTED"
              desc="Understand global and domestic financial markets through the help of our trusted financial advisors"
            />
          </div>
          <div className="h-[343px] lg:h-[543px] text-white text-center flex relative z-10">
            {/* <div className="image-container">
              <Image
                className="image"
                src={experience}
                layout="fill"
                alt="Our client-centric approach provides you with the best-fit solutions and environment to achieve your financial goals"
              />
              </div> */}
            <div className="pt-2 h-[96.66vw] lg:h-[36.66vw] w-full relative">
              <Image
                // src="/assets/images/unsplash-1.jpeg"
                src={homeCarouselSix}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <SliderBox
              title="Wealth of experience"
              btnText="GET STARTED"
              desc="Our client-centric approach provides you with the best-fit solutions and environment to achieve your financial goals"
            />
          </div>
        </Carousel>
        
        <div style={{ width: "95%", margin: "1.5rem auto" }}>
          <Space direction="vertical" size="large" style={{ display: "flex" }}>
            <Row>
              <Col span={24}>
                <Paragraph
                  style={{ color: "#161616", fontFamily: "Inter" }}
                  className="text-xs leading-6 lg:text-[15px]"
                >
                  REKIT is a leading financial and investment advisory firm in
                  Nigeria that provides customised investment support for
                  individuals and corporate bodies through wealth planning,
                  specialised investment solutions, and goal-based investing.
                  With a proficient blend of experienced financial advisors, we
                  provide our clients with sound and objective solutions to
                  ensure consistent long-term investment growth.
                </Paragraph>
              </Col>
            </Row>
          </Space>
        </div>
        {/* <div className="w-full shadow-lg">
            <div className="card-image-container">
              <Image alt="example" src={lifestyle} />
            </div>
          <div>Lifestyle Financial Planning</div>
          <div>Detailed understanding of our Clients values, needs, choices and experience.</div>
          </div> */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-5 w-[95%] mx-auto mb-16">
          <div className="bg-white shadow-lg">
            <div className="image-wrapper">
              <Image
                alt="..."
                src={babe}
                width={800}
                height={700}
                quality={70}
                layout="responsive"
              />
            </div>
            <Metaa
              title="Personal Financial Planning"
              desc="With a thorough understanding of our clients investment objectives, risk apetites and time horizon, we provide a unique and comprehensive financial plan to enable them meet their major life goals"
            />
          </div>
          <div className="bg-white shadow-lg">
            <div className="image-wrapper">
              <Image
                alt="..."
                src={babe2}
                width={800}
                height={700}
                quality={70}
                className="image"
              />
            </div>
            <Metaa
              title="Wealth Management"
              desc="We partner with our clients through innovative solutions that support wealth accumulation, enhancement, consolidation and protection."
            />
          </div>
          <div className="bg-white shadow-lg">
            <div className="image-wrapper">
              <Image
                alt="..."
                src={babe3}
                width={800}
                height={700}
                quality={70}
              />
            </div>
            <Metaa
              title="Goal-Based Investing"
              desc="Our unparalleled goal-based investing solutions that address specific goals such as: home acquisition, car purchase, education, etc."
            />
          </div>
          <div className="bg-white shadow-lg">
            <div className="image-wrapper">
              <Image
                alt="..."
                src={babe4}
                width={800}
                height={700}
                quality={70}
              />
            </div>
            <Metaa
              title="Sucession Planning"
              desc="We co-create with our clients to develop bespoke generational wealth protection and transfer solutions through wills, trusts, endownment funds and foundations."
            />
          </div>
          <div className="bg-white shadow-lg">
            <div className="image-wrapper">
              <Image
                alt="..."
                src={babe5}
                width={800}
                height={700}
                quality={70}
                className="image"
              />
            </div>
            <Metaa
              title="Tax and Insurance Planning"
              desc="Through our premium insurance and tax solutions, our clients are assured of asset protection and timely compliance with tax expectations."
            />
          </div>
        </div>

        <ServiceWrapperContainer />

        <NextStep
          title="Take the next step toward your personal and professional goals"
          btnText="create a plan"
          onClick={() => {}}
        />
      </AppLayout>
    </div>
  );
}
