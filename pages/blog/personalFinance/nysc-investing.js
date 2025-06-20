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

import clipTwo from "../assets/nysc.png"
import clipThree from "../assets/personalFinance-2.png"

import { blogPosts } from "../../../constants";


// export async function getServerSideProps(context) {
//   // Disable caching for this page
//   context.res.setHeader('Cache-Control', 'no-store');

//   return {
//     props: {},
//   };
// }

const PersonalFinance = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "personalFinance".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | Secrets of Billionaires</title>
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
          content="Blog | Personal Finance | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <AppLayout>
        <div className="flex-col justify-center content-center mx-50 lg:flex-col bg-white md:flex-col pb-10">
        <h1 className="flex justify-center content-center pt-5 text-[#F08420] font-raleway font-bold text-[1.5rem] lg:mx-10 lg:text-[2.5rem] uppercase">
          Personal Finance
        </h1>

        <div className="lg:w-4/5 px-[0.2rem] pt-5 lg:pt-5 mx-auto pb-5 border-r-3"> 
                <div className="mx-auto px-[1rem]">
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                    How to Start Investing as an NYSC Corper in Nigeria
                    </h1>
                    {/* <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                    Author:  Samuel Apanisile
                    </h3> */}

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Serving your country is honorable but preparing for your financial future is more important.
                    </p>  

                    <div className="flex justify-center content-center pb-4 ">
                    <Image
                    src={clipTwo}
                    className="mx-auto"
                    alt="nysc member"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    </div>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    As a youth corper, you might think investing is only for people with big salaries and decades of experience. <span className="font-bold"> The truth? The best time to start investing is now, no matter how small. </span> 

                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Here’s how you can get started:
                    </p> 

                    <h1 className="font-bold pt-0.5 text-[#F08420] text-l font-raleway">
                    1. Understand What investing Means
                    </h1>

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Investing simply means putting your money to work so it grows over time. Unlike saving (which just stores money), investing allows you to earn returns by putting your money into assets like mutual funds, agriculture, real estate, or even the stock market.   
                    </p> 

                    <h1 className="font-bold pt-0.5 text-[#F08420] text-l font-raleway">
                    2. Start wuth what you have
                    </h1>

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Your allawee may not feel like much, but consistency matters more than amount.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    📌 Example: Saving ₦5,000 each month during your service year gives you ₦60,000 by the end. With investing, this can grow even further, especially with compound interest. (Compound interest is the money you earn on both your initial savings and the interest it has already earned)
                    </p> 

                    <h1 className="font-bold pt-0.5 text-[#F08420] text-l font-raleway">
                    3. Choose the right investment platform
                    </h1>

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Look for platforms that are:
                    </p> 

                    <p className="leading-[1.2rem] px-[4rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	Trusted and licensed by the SEC or CBN
                    </p> 

                    <p className="leading-[1.2rem] px-[4rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	Offer low entry amounts (₦1,000–₦5,000)
                    </p> 

                     <p className="leading-[1.2rem] px-[4rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	Let you invest in beginner-friendly options like:
                    </p> 

                     <p className="leading-[1.2rem] px-[6rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    o	Mutual funds
                    </p> 

                    <p className="leading-[1.2rem] px-[6rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    o	Fixed-income investments
                    </p> 
                    <p className="leading-[1.2rem] px-[6rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    o	Dollar Savings
                    </p> 
                    <p className="leading-[1.2rem] px-[6rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    o	Shares of companies
                    </p> 

                     <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    It's important to <a href="https://api.whatsapp.com/message/EFK665OD6EOML1">speak with a financial advisor </a>  before making any investment, so you can understand your risk level and choose the investments that best suit you.
                    </p> 

                    <h1 className="font-bold pt-0.5 text-[#F08420] text-l font-raleway">
                    4. Diversify, Don't Gamble
                    </h1>

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Don’t put all your money into just one place especially not into “quick money” schemes. Instead, diversify by spreading your money across different low- to medium-risk investments.
                    </p> 

                    <h1 className="font-bold pt-0.5 text-[#F08420] text-l font-raleway">
                    5. Learn as You Grow
                    </h1>

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                   Even while you’re investing, keep learning. Follow financial pages, listen to investment podcasts, or sign up for short courses on platforms like Coursera or YouTube.
                  <span className="font-bold" >Financial knowledge = Financial power.</span>
                    </p> 

                     <h1 className="font-bold pt-0.5 text-[#F08420] text-l font-raleway">
                    6. Set Clear Goals
                    </h1>

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Ask yourself:
                    </p> 

                    <p className="leading-[1.2rem] px-[4rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	Am I investing to start a business after NYSC?
                    </p> 

                    <p className="leading-[1.2rem] px-[4rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	Do I want to save for relocation, further studies, or a big move?
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Knowing why you're investing helps you choose the right kind of investment — short-term, medium-term, or long-term.
                    </p> 

                    <h1 className="font-bold pt-0.5 text-[#F08420] text-l font-raleway">
                    7. Be Patient
                    </h1>

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Investing is not a get-rich-quick scheme. Some returns take months or years to mature. Stay consistent, stay calm — and don’t panic over small fluctuations.
                    </p> 

                    <h1 className="font-bold pt-0.5 text-[#F08420] text-l font-raleway">
                    Bonus Tip:
                    </h1>

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Find a financial advisor or join a community of young investors. You’ll learn faster and make fewer mistakes.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                      Ready to begin your investment journey? Reach out to us via email at info@rekitadvisory.com or on whatsapp at <a href="https://api.whatsapp.com/message/EFK665OD6EOML1">  +234 706 210 6633 </a>
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

export default PersonalFinance;
