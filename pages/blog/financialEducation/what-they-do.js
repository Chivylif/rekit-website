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
import clipOne from "../assets/financialEducation1.jpg"
import clipTwo from "../assets/financialEducation2.jpg"

import { blogPosts } from "../../../constants";


// export async function getServerSideProps(context) {
//   // Disable caching for this page
//   context.res.setHeader('Cache-Control', 'no-store');

//   return {
//     props: {},
//   };
// }

const FinancialEducation = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "personalFinance".toLowerCase());
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
                    Financial Advisor: What They Do and Why You Need One.
                    </h1>
                    <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                    Author:  Samuel Apanisile
                    </h3>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Ever wondered why you should engage the services of a financial advisor?
                    </p> 

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     Well, let me drive this home with the story of a friend named John.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    John is a self-directed and cerebral gentleman who was convinced that he could navigate the complicated world of investments without support from the experts. Initially, he appeared to do well on his investment decisions and activities. He invested his hard-earned money in a flashy new tech stock, certain that he had it all figured out. However, the tech stock took a nosedive, and so did John's investment capital. John was undaunted still, expecting a market recovery that will help him recover invested capital and achieve projected return through capital gains and dividends. Regrettably, John was blinded by his bias and never realized his expectations as he lost money daily on the investment.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    You guessed right! Sleepless nights and financial stress followed. John’s supposed financial plan was a mere statement of expectations that was devoid of SMART (Specific, Measurable, Achievable, Relevant, and Time-bound) and depth. He bet so hard and put all his eggs in one fragile basket. Eventually, he fell back on his emergency fund to cover significant investment losses and meet due financial obligations, leaving him feeling insecure. Suddenly, it dawned on John that he needed help, such that his financial knowledge was inadequate to render him.
                    </p> 

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
                    Investing without a financial advisor makes us make avoidable mistakes. 
                    </p> 

                  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    John learned a valuable lesson the hard way – that bias and blind spots can cost not only your invested capital but also your entire finances and peace of mind. John could have averted the pitfalls by simply engaging a professional financial advisor. A financial advisor could have helped him create a SMART, and well-diversified investment plan and portfolio to help him navigate the intricate waters of the investment world.  
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    So, this leads me to ask you a question. Do you know that you should engage the services of a Professional Financial Advisor before making those investment decisions? 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    In a world where predicting the future is impossible and DIY (Do It Yourself) investing can be risky, a financial advisor is your trusted guide. Investment Advisors use facts, not crystal balls, to make informed decisions, prevent emotional investment blunders, and help you achieve your financial goals. So, leave the guesswork behind, and let the professionals steer your financial ship.  
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Put in simple terms, a financial advisor is a trained and experienced professional who provides guidance, advice, and support to individuals, families, or businesses in managing their finances and achieving their financial goals. They are experts in various aspects of financial planning and investment, and their role is to help clients make informed decisions.   
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    That is why it is strongly recommended to have an expert financial advisor by your side before making investment decisions. Here is why:  
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    1. No Crystal Ball Magic: Without an advisor, you might try to predict the future of investments including the stock and commodity markets. But let us face it, those crystal balls are just for show. A real financial advisor uses facts and data.   
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    2. Feelings vs. Facts: Investments can make your emotions go crazy - you might feel scared, greedy, or anxious. A financial advisor acts like a calm friend, stopping you from making rash decisions.   
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    3. Rules and Regulations: Financial advisors follow strict rules and do what's right for you. They are like financial superheroes, ensuring your money is safe and well-managed.    
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    4. Diversification: You might be a scared investor and want to put all your money into one safe basket. thing. A financial advisor helps you spread your money around wisely.   
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    5. Planning for the Future: Advisors help you prepare for future goals like retirement or buying a house. They make sure you are not stuck in the past with not enough savings.    
                    </p> 

                    <div className="flex justify-center content-center pb-1">
                    <Image
                    src={clipTwo}
                    className="mx-auto"
                    alt="5-steps-of-financial-planning"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    
                    </div>

                    <p className="leading-[1.2rem] text-center font-normal font-inter text-[#212020] text-[0.9rem] font-style: italic pb-5">       
                    Having a trusted and licensed financial advisor is like having a helpful guide.  
                    </p> 

                   

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    So, in a world where it is challenging to always predict the weather accurately, having a trusted and licensed financial advisor is like having a helpful guide. They bring their knowledge and experience to make sure your money doesn't end up in a circus act. That is who a financial advisor is. So, leave the crystal ball alone, and let the professionals guide you.   
                    </p>

                   

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    The moral of the story is clear: You may be an expert in your field of practice, but you must seek the guidance of a financial advisor when considering a comprehensive financial plan including retirement planning, education funding, insurance planning, tax planning, wills, trust, and business advisory. A professional Financial Advisor can help you make more informed and secure financial decisions, that will mitigate losses and stress.     
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    But that was John, WHAT WOULD BE YOUR OWN STORY?  
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]"> 
                    REKIT Financial Advisors is an email near: info@rekitadvisory.com
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
