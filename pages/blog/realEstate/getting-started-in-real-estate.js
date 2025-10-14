import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import AppLayout from "../../../layouts/AppLayout";
import Image from "next/image";
import Link from "next/link";
import clipOne from "../../../public/assets/realEstate1.jpeg"
import clipThree from "../assets/realEstate2.jpeg"

import { blogPosts } from "../../../constants";


// export async function getServerSideProps(context) {
//   // Disable caching for this page
//   context.res.setHeader('Cache-Control', 'no-store');

//   return {
//     props: {},
//   };
// }

const RealEstate = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "realEstate".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | Getting Started in Real Estate</title>
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
          content="This is the blog page for Real Estate"
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
          content="Blog | Real Estate | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <div className="flex-col justify-center content-center mx-50 lg:flex-col bg-white md:flex-col pb-10">
        <h1 className="flex justify-center content-center pt-5 text-[#F08420] font-raleway font-bold text-[1.5rem] lg:mx-10 lg:text-[2.5rem] uppercase">
          Real Estate
        </h1>

        <div className="lg:w-4/5 px-[0.2rem] pt-5 lg:pt-5 mx-auto pb-5 border-r-3"> 
                <div className="mx-auto px-[1rem]">
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                    Real Estate: Getting Started in Real Estate Investments: A Beginner's Guide
                    </h1>
                    {/* <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                    Author:  Samuel Apanisile
                    </h3> */}

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Investing in real estate can be a rewarding journey, offering financial growth and portfolio diversification.
                    </p> 

                    <div className="flex justify-center content-center pb-4 ">
                    <Image
                    src={clipOne}
                    className="mx-auto"
                    alt="Bosede Lorie"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    </div>

                    <p className="leading-[1.2rem] text-center font-normal font-inter text-[#212020] text-[0.9rem] font-style: italic pb-5">       
                    Investing in real estate can be a rewarding journey  
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Investing in real estate involves the acquisition and ownership of property with the expectation of generating income, achieving capital appreciation, or both. Real estate investments can take various forms, ranging from residential properties such as single-family homes and multi-family units to commercial properties like office buildings, retail spaces, and industrial complexes.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    There are also Real Estate Investment Trusts (REITs) which are investment vehicles that allow individuals to invest in real estate portfolios without directly owning physical properties. Investors can buy shares in a REIT, which owns and manages income-generating real estate assets.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    For those new to the world of real estate investments, here's a brief guide to help you take those first steps:
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    1. Educate Yourself
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Before diving into the real estate market, it's crucial to understand the basics. Familiarize yourself with different property types (residential, commercial, industrial) and learn common real estate terminologies. Research local markets, property values, and financing options. A solid foundation of knowledge will empower you to make informed decisions.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    2. Set Clear Investment Goals
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Define your objectives for entering the real estate market. Are you looking for short-term gains through property flipping or long-term returns through rental income and appreciation? Clarify your risk tolerance and establish a budget that aligns with your investment goals.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    3. Choose the Right Investment Strategy
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Real estate offers various investment strategies, and choosing the right one depends on your goals. Consider options like rental properties, fix-and-flip projects, or Real Estate Investment Trusts (REITs). Each strategy comes with its own set of risks and potential rewards.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    4. Build a Strong Network
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Connect with real estate professionals, including agents, property managers, and contractors. Attend networking events, seminars, and join local investment clubs. Building a network can provide valuable insights, opportunities, and support throughout your investment journey.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    5. Property Selection and Due Diligence
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Carefully choose properties based on location, market trends, and your investment goals. Conduct thorough due diligence, including property inspections, legal considerations, and a review of neighborhood amenities. Understanding the property's potential and risks is crucial.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    6. Secure Financing
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-3 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Explore financing options, including mortgages, loans, and creative financing methods. Understand the financial implications of your investment and work with lenders to secure the best terms. Build a contingency fund to handle unexpected costs.
                    </p> 
                    
                    <div className="flex justify-center content-center pb-1 ">
                    <Image
                    src={clipThree}
                    className="mx-auto"
                    alt="secure-funding"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    </div>

                    <p className="leading-[1.2rem] text-center font-normal font-inter text-[#212020] text-[0.9rem] font-style: italic pb-5">       
                    Secure Financing.  
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    7. Execute Your Investment Plan
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Once you've done your research and secured financing, it's time to make your first purchase. Navigate the buying process, negotiate deals, and close transactions. Effective property management is key, from finding reliable tenants to maintaining positive landlord-tenant relationships.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    8. Long-Term Wealth Building
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Focus on building equity over time. Explore opportunities for portfolio diversification and consider various real estate investments to balance risk. Plan exit strategies, such as selling properties for profit or using accumulated equity for future investments.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    9. Celebrate Successes and Continue Learning
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Reflect on your achievements, no matter how small, and set new goals for the future. Real estate is an evolving market, so continued learning is essential. Stay informed about market trends, explore new opportunities, and consider ongoing real estate education.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Embarking on a real estate investment journey requires careful planning, education, and strategic decision-making. By following these steps, you'll be better equipped to navigate the complexities of the real estate market and build a successful investment portfolio.
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

export default RealEstate
