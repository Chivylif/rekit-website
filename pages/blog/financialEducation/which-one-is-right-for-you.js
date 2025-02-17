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
import clipTwo from "../assets/which-one-is-right-1.jpg"
import clipOne from "../assets/which-one-is-right-1.png"

import { blogPosts } from "../../../constants";



const FinancialEducation = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "financialEducation".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | What They Do</title>
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
          content="Treasury Bills, Commercial Papers, or High-Yield Savings: Which One Is Right for You?"
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
                    Treasury Bills, Commercial Papers, or High-Yield Savings: Which One Is Right for You?
                    </h1>                  

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

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Choosing where to put your money can be confusing with so many options available. Let's break down three common choices: Treasury Bills, Commercial Papers, and Savings Accounts, to help you understand which might be the best fit for you.
                    </p> 

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    Treasury Bills (T-Bills):
                    </h2>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     T-Bills are short-term loans you give to the government, usually lasting from a few days up to a year. You buy them at a price lower than their face value, and when they mature, you receive the full amount. The difference between what you paid and what you get back is your profit. Since they're backed by the government, they're considered very safe investments.
                    </p> 

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    Commercial Papers:
                    </h2>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     These are short-term loans to companies, typically for periods up to 270 days. Companies use this money for immediate needs like managing inventory or payroll. Commercial Papers usually offer higher returns than T-Bills because there's a slightly higher risk involved, as companies might be less stable than governments.
                    </p> 

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    Savings Accounts:
                    </h2>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     A Savings Account/High-Yield Savings is an account where you can deposit money and earn interest over time. Your money is easily accessible, making it great for emergency funds or short-term savings. However, the interest rates are often lower compared to T-Bills and Commercial Papers.
                    </p> 

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    Which Should You Choose?
                    </h2>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     The optimal choice depends on a whole lot of factors like your individual financial profile, risk tolerance, and investment objectives.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Do you want learn how to get the most of your money and make the best investment decisions that suit you? We have something for you. We’ll be organizing a webinar where you’ll get to have an interactive session with a financial advisor/expert.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Our experts will provide comprehensive insights into each investment type, guide you through assessing your risk profile, and offer strategies to approach investing effectively.
                    </p> 

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    Webinar Details:
                    </h2> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	Date: February 22, 2025  
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	Time: 12:30pm
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-italics font-inter text-[#212020] text-justify text-[1rem]">       
                    <a href="https://meet.zoho.com/LsVkwMClHB ">•	Registration Link: https://meet.zoho.com/LsVkwMClHB    </a>
                    </p> 

                    <div className="flex justify-center content-center px-[3rem] ">
                    <Image
                    src={clipOne}
                    className=""
                    alt="dangote-musk-otedola"
                    style={{
                        borderRadius: "10px"
                     
                        }}
                    />
                    
                    </div>

                    <p className="leading-[1.2rem] pt-4 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Don't miss this opportunity to enhance your financial literacy and to make the best investment decisions for you. Register today and take the first step towards achieving your financial goals.
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
