import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import AppLayout from "../../../layouts/AppLayout";
import Image from "next/image";
import Link from "next/link";
import clipTwo from "../assets/how-to-build-wealth.png"
import clipOne from "../assets/which-one-is-right-1.png"

import { blogPosts } from "../../../constants";



const FinancialEducation = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "financialEducation".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | How to Build Wealth in Nigeria</title>
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
          content="How to Build Wealth in Nigeria: The Role of Emotional Intelligence and Direct Debit"
        />
        <meta
          property="og:title"
          content="Blog | Personal Finance | Rekit Financial Advisors Limited"
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
                    How to Build Wealth in Nigeria: The Role of Emotional Intelligence and Direct Debit
                    </h1>                  

                  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    As we move through the dynamic landscape of Nigeria's financial market, from January 2025 to February 2025 as seen in Figure 1 below, which implies stable GDP growth at 3.84%, inflation significantly declined from 34.8% in December 2024 to 24.5% which is still high, exchange rate stabilization at ₦1,520/$, high interest rates at 27.5%, stock market NGX ASI is up 6.1% YTD, real estate and commodities remains a long-term hedge against inflation and strong foreign reserves is at $40B; One thing remains constant: <span className="font-extrabold">the importance of income in wealth creation. </span> Our income is the chief source of wealth creation, and how we manage it determines our financial future.
                    </p> 

                    <div className="flex justify-center content-center pb-1 ">
                    <Image
                    src={clipTwo}
                    className=""
                    alt="dangote-musk-otedola"
                    style={{
                        borderRadius: "10px"
                     
                        }}
                    />
                    
                    </div>

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    Why Should Investors Pay Attention?
                    </h2>  

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	<span className="font-bold">For local investors:</span> The combination of high bond yields, rising stocks, and improving economic stability means this is an excellent time to diversify between equities, bonds, and real assets to hedge against inflation and earn strong returns.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	<span className="font-bold">For global investors: </span> Nigeria presents a <span className="font-bold">rare mix of high growth and high yields </span> in emerging markets. The stock market is still undervalued, bonds offer superior real returns, and currency stability reduces risks.
                    </p> 

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     However, having knowledge about personal finance, investing, and wealth creation is only half the battle. Turning that knowledge into practical action requires 	<span className="font-bold"> emotional intelligence (EQ) </span> . EQ is the key to unlocking wealth creation, as it enables individuals to make informed, rational decisions about their finances.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Unfortunately, 	<span className="font-bold"> low Emotional Intelligence (EQ) is a significant barrier to wealth creation </span>. Despite having knowledge about how to grow wealth and become rich through gathering financial assets, many people struggle to take action. Low EQ leads to impulsive decisions, emotional spending, and a lack of discipline, ultimately keeping individuals stuck in poverty.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Low EQ is the enemy of wealth creation. It is the reason why people fail to achieve their financial goals, despite their best intentions. No one achieves success accidentally; it requires careful planning, discipline, and emotional intelligence.
                    </p> 
                    
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    So, how can individuals break free from the shackles of low EQ and unlock their wealth creation potential? 	<span className="font-bold">  The secret key is Direct Debit on income </span>. By automating savings and investments, individuals can:
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Cultivate discipline and consistency
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Reduce impulse spending and emotional decision-making
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Increase self-awareness and understanding of their financial habits
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Detach emotionally from their money, making rational financial decisions easier
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-bold"> Direct Debit </span> is a powerful tool for wealth creation. It forces individuals to prioritize their financial goals, ensuring consistent progress towards wealth creation.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-bold"> At REKIT Financial Advisors, we understand the importance of Emotional Intelligence (EQ) and Direct Debit in wealth creation. </span> Our team of expert financial advisors is dedicated to guiding individuals, from retail investors to high-net-worth individuals, on how to smartly structure their income and recommend viable, high-yield savings and investments that align with their risk profile. 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-bold"> It takes less than 3mins to assess your risk profile here: </span>
                     <a href="https://forms.zohopublic.com/rekitfinancialadvisorslimited/form/TestAssessment/formperma/dgIHFm7FxYkRPvOTo7zdJIGL-Ifpbk5XK7NTdxww7Zs"> https://forms.zohopublic.com/rekitfinancialadvisorslimited/form/TestAssessment/formperma/dgIHFm7FxYkRPvOTo7zdJIGL-Ifpbk5XK7NTdxww7Zs  </a> 
                    </p> 
                    
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Do not let low EQ hold you back from achieving your financial goals. Take control of your wealth creation journey with REKIT Financial Advisors. Contact us today to schedule a consultation and start building the financial future you deserve.
                    </p> 


                    <p className="leading-[1.2rem] pt-4 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Email: info@rekitadvisory.com
                    </p> 

                    <p className="leading-[1.2rem] pt-4 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Phone: 09011959063
                    </p>
                </div>

                </div>
                <div className="flex justify-center content-center pb-1 ">
                <h1 className="font-extrabold pt-1 pb-8 text-3xl font-raleway"> Related Posts </h1>
                </div>

            <div className="grid lg:w-4/5 sm:grid-cols-2 lg:grid-cols-4 mx-auto mb-1 lg:mb-1 justify-items-center lg:justify-items-center px-[4rem] ">
            
                {relatedPosts.map(({ title, author, category, slug }, idx) => {
                    return (
                      <Link
                        href={{
                          pathname: `/${category}/[slug]`,
                          query: { slug: slug },
                        }}
                        key={idx}
                        legacyBehavior>
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
                    );
                })}
            </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default FinancialEducation;
