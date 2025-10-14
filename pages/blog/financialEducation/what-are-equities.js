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
import clipOne from "../../../public/assets/what-are-equities-1.jpeg"
import clipTwo from "../assets/what-are-equities-2.jpeg"

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
      <title>Rekit | REKIT Blog | What Are Equities?</title>
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
        content="This is the blog page for Financial Education"
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
        Financial Education
      </h1>

      <div className="lg:w-4/5 px-[0.2rem] pt-5 lg:pt-5 mx-auto pb-5 border-r-3"> 
              <div className="mx-auto px-[1rem]">
                  <h1 className="pb-2 font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                  
                  What are Equities? How to Get Started on Equities
                  </h1>
                  {/* <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                  Author:  Samuel Apanisile
                  </h3> */}

                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                  In today's quest for financial stability and growth, equities shine as beacons of opportunity. But what exactly are equities, and why should you invest in them? Let us delve into the fundamentals, explore their allure, and chart a path for your investment journey.
                  </p> 

                  <div className="flex justify-center content-center pb-1 ">
                  <Image
                  src={clipOne}
                  className=""
                  alt="equities-graph-1"
                  style={{
                      borderRadius: "10px"
                   
                      }}
                  />
                  
                  </div>


                  <h1 className="pb-2 font-extrabold pt-2 text-xl font-raleway">
                  Understanding Equities
                  </h1>
                   <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   Equities, or stocks, signify ownership in a company. Owning shares means a stake in profits and potential capital gains as the company grows. Traded on stock exchanges like the Nigerian Exchange Group (NGX), equities offer liquidity for buying and selling.
                  </p> 

                   <h1 className="pb-2 font-extrabold pt-2 text-xl font-raleway">
                  Why Invest in Equities?
                  </h1>
                   <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   Equities historically outperform other assets, providing superior returns and a hedge against inflation. They offer diversification, spreading risk across sectors, and participation in economic growth. As of April 15th, 2024, the ASI (All Share Index) of the NGX stood at 36.31% (despite the bearish sentiment in the market), outpacing the current inflation rate of 33.20%. This positive real rate of return demonstrates resilience amid bearish sentiment in the market. In stock markets, bearish sentiment prompts selling and price declines, while bullish sentiment fuels optimism and price appreciation.
                  </p> 

                  <div className="flex justify-center content-center pb-1 ">
                  <Image
                  src={clipTwo}
                  className=""
                  alt="pen-graph"
                  style={{
                      borderRadius: "10px"
                   
                      }}
                  />
                  
                  </div>

                   <h1 className="pb-2 font-extrabold pt-2 text-xl font-raleway">
                  Getting Started
                  </h1>
                   <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   i. Educate Yourself: Learn investment strategies and market dynamics.
                   </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                  ii. Set Clear Goals: Define objectives and risk tolerance.
                  </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                  iii. Open a Brokerage Account: Choose a reliable and SEC licensed brokerage company for trading.
                  </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                  iv. Start Small: Begin with manageable investment amount as low as N5,000.00
                  </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                  v. Diversify: Spread investments across sectors.
                  </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                  vi. Research: Analyze financials, competitive advantages, and industry trends.
                  </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                                      
                  vii. Consider Resilience: Prioritize companies resilient to market shifts.
                  </p> 

                   <h1 className="pb-2 font-extrabold pt-2 text-xl font-raleway">
                  Not utilizing a financial advisor when venturing into equities can lead to several consequences: 
                  </h1>
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   <span className="px-5"> i. </span>Market Volatility: Fluctuations driven by economic and geopolitical factors.
                   </p> 
                   <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   <span className="px-5"> ii. </span>Suboptimal Strategies: Absence of customized strategies tailored to your financial goals and risk tolerance may result in suboptimal investment decisions.
                   </p> 
                   <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   <span className="px-5"> iii. </span>Increased Risk: Without proper risk management and diversification, your portfolio may be exposed to higher levels of risk, leading to potential losses during market downturns. 
                   </p> 
                   <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   <span className="px-5"> iv. </span>Limited Resources: You may miss out on access to valuable research, analysis, and financial tools that advisors utilize to identify quality investments and make informed decisions. 
                   </p> 
                   <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   <span className="px-5"> v. </span>Emotional Decision-Making: Without behavioral coaching, you may succumb to emotional biases during market volatility, leading to impulsive decisions and undermining long-term investment success. 
                   </p> 
                   <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   <span className="px-5"> vi. </span>Lack of Monitoring: Failure to regularly monitor and adjust your portfolio based on changing market conditions may result in missed opportunities or exposure to undue risks. 
                   </p> 
                   <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   <span className="px-5"> vii. </span>Incomplete Financial Planning: Without comprehensive financial planning services, you may overlook critical aspects such as retirement planning, tax optimization, and estate planning, jeopardizing your long-term financial well-being.
                   </p> 
                   

                   <h1 className="pb-2 font-extrabold pt-2 text-xl font-raleway">
                  Challenges of Equity Investing
                  </h1>
                   <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   i. Market Volatility: Fluctuations driven by economic and geopolitical factors.
                   </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                  ii. Risk of Loss: Investments may decline in value.
                  </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                  iii. Information Overload: Navigating vast data requires analytical skills.
                  </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                  iv. Emotional Bias: Fear and greed can influence decisions.
                  </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                  v. Lack of Diversification: Concentrated investments increase risk.
                  </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                            
                  vi. Complex Research: Identifying quality equities demands expertise.
                  </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                                      
                  vii. Regulatory Risks: Changes in regulations can impact markets.
                  </p> 


                   <h1 className="pb-2 font-extrabold pt-2 text-xl font-raleway">
                  Embracing Quality Equities
                  </h1>
                   <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   Traditional metrics offer insights, but resilience to risk is paramount. REKIT Financial Advisors' expert testing methodology unveils hidden dimensions, empowering investors with unparalleled insights.
                  </p> 


                   <h1 className="pb-2 font-extrabold pt-2 text-xl font-raleway">
                  Crafting a Resilient Portfolio
                  </h1>
                   <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   Combining traditional metrics with REKIT's resilience testing, investors can construct portfolios fortified against uncertainty. From financial robustness to enduring resilience, these portfolios thrive amidst challenges.
                  </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                  In conclusion, equities offer a pathway to financial growth, but success requires diligence. By understanding the fundamentals, setting clear goals, and leveraging tools like REKIT's resilience-to-risk testing, investors can navigate markets with quality equities and secure a brighter financial future.
                  </p> 
                  <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                  Contact us: For list of quality stocks and to PROPERLY get started: info@rekitadvisory.com
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
