import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import axios from "axios";
import AppLayout from "../../../layouts/AppLayout";
import Banner from "../../../components/Banner";
import BlogRefresh from "../../../components/BlogRefresh";
import SmallWrapper from "../../../components/SmallWrapper";
import Image from "next/image";
import Link from "next/link";
import clipOne from "../../../public/assets/commercialPapers-1.jpeg"


import { blogPosts } from "../../../constants";


// export async function getServerSideProps(context) {
//   // Disable caching for this page
//   context.res.setHeader('Cache-Control', 'no-store');

//   return {
//     props: {},
//   };
// }

const FinancialEducation = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "financialEducation".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | How Does Commercial Paper Investment Work in Nigeria? A beginner’s guide</title>
        <meta
          name="description"
          content="International reach of Specialist expertise in family wealth management, protection, personalised solutions for the preservation of family wealth"
        />
        <meta
          name="keywords"
          content="International reach, Personalised solutions, "
        />
        <link rel="icon" href="/favicon.ico" />

        <title>REKIT Blog | Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="This is the blog page for Personal Finance"
        />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta
          property="og:description"
          content="Insights Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta
          property="og:title"
          content="Blog | Financial Education | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <AppLayout>
        <div className="flex-col justify-center content-center mx-50 lg:flex-col bg-white md:flex-col pb-10">
        <h1 className="flex justify-center content-center pt-5 text-[#F08420] font-raleway font-bold text-[1.5rem] lg:mx-10 lg:text-[2.5rem] uppercase">
          Financial Education
        </h1>

        <div className="lg:w-4/5 px-[0.2rem] pt-5 lg:pt-5 mx-auto pb-5 border-r-3"> 
                <div className="mx-auto px-[1rem]">
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                    How Does Commercial Paper Investment Work in Nigeria? A beginner’s guide
                    </h1>

                    <div className="flex justify-center content-center pb-1 ">
                    <Image
                    src={clipOne}
                    className=""
                    alt="dangote-musk-otedola"
                    style={{
                        borderRadius: "10px"
                     
                        }}
                    />
                    
                    </div>

                    <p className="leading-[1.2rem] text-center font-normal font-inter text-[#212020] text-[0.9rem] font-style: italic pb-5">       
                    
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    In the rapidly evolving world of finance, Commercial Paper (CP) stands out for its simplicity and efficiency. Widely utilized by corporations, financial institutions, and governments, CPs serve as a vital tool for addressing short-term financial needs. For investors seeking to navigate Nigeria's financial markets, understanding the ins and outs of CP investment is key. In this guide, we will delve into the fundamentals of CP investments in Nigeria, demystifying its workings, risks, and rewards.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    1. What is Commercial Paper?   
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    At its core, Commercial Paper is a straightforward financial instrument, akin to a short-term loan. Issued primarily by large corporations, banks, and occasionally governmental bodies, CP allows entities to quickly raise funds for immediate operational needs. Unlike traditional loans, a CP is unsecured and typically boasts of maturities ranging from 15 days to 270 days.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    2.	How Does CP Investment Work in Nigeria? 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Investing in CPs in Nigeria mirrors participation in the broader financial market. Investors can acquire CPs directly from issuing entities or through the secondary market, facilitated by registered stockbrokers or dealers. Establishing a brokerage account with a reputable firm that is better recommended by an independent unbiased licensed financial advisor is the first step towards properly engaging in CP investments.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    3.	The Issuers and Maturity Periods:
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    In Nigeria, CPs are predominantly issued by established entities such as banks, large corporations, and financial institutions. The Central Bank of Nigeria also plays a role in issuing CPs to regulate liquidity within the banking system. Maturity periods typically range from 15days to 270 days although exceptions exist based on issuer requirements.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    4.	Assessing Risks Associated with CP Investments:
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    While CPs are generally considered low-risk investments, they are not without their challenges. Investors must be vigilant of potential risks, including credit risk (the issuer's ability to repay), interest rate risk (fluctuations in market rates), and liquidity risk (ease of selling CPs before maturity).
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    5.	Regulatory Environment and Foreign Investment:
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Nigeria's CP market operates within a regulated framework overseen by the Securities and Exchange Commission (SEC) and the Central Bank of Nigeria (CBN). These regulatory bodies ensure adherence to guidelines and safeguard investor interests. Moreover, foreign investors are welcomed participants, supported by provisions outlined by the Central Bank of Nigeria.
                    </p> 


                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Conclusion
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Commercial Paper investments offer a straightforward avenue for individuals to participate in Nigeria's financial markets. With proper understanding and proactive risk management, CP investments can serve as valuable components of a well-rounded investment strategy, catering to both short-term financial goals and long-term wealth accumulation aspirations. For individuals considering CP investments in Nigeria, careful consideration of various factors is paramount. Conducting thorough due diligence on issuers, understanding one's risk tolerance, investment goals and seeking guidance from financial experts are essential steps. Including CPs in an investment programme or portfolio can serve as a diversification strategy for mitigating risks and stabilising returns.
                    </p> 

                </div>

                </div>
                <div className="flex justify-center content-center pb-1 ">
                <h1 className="font-extrabold pt-1 pb-8 text-3xl font-raleway"> Related Posts </h1>
                </div>

            <div className="grid lg:w-4/5 sm:grid-cols-2 lg:grid-cols-4 mx-auto mb-1 lg:mb-1 justify-items-center lg:justify-items-center px-[4rem] ">
            
                {relatedPosts.map(({ title, author, category, slug }, idx) => {
                    return(
                      <Link
                      href={{
                        pathname: `/${category}/[slug]`,
                        query: { slug: slug },
                      }}
                      key={idx} 
                    >
                        <div 
                        className="mx-auto px-[1rem] w-full pb-[3rem] cursor-pointer"
                         >
                        <h1 className="font-extrabold pt-0.5 text-[#F08420] text-l font-raleway">
                        {author}
                        </h1>
                        <p className="leading-[1.2rem] font-normal font-inter text-[#212020] text-[1rem]">       
                        {title}
                        </p>  
                    </div>
                    </Link>
                    )
                })}
            </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default FinancialEducation;
