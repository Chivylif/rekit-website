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
import clipOne from "../assets/retirement-planning.jpeg"
import clipThree from "../assets/retirement-planning-2.jpg"

import { blogPosts } from "../../../constants";


// export async function getServerSideProps(context) {
//   // Disable caching for this page
//   context.res.setHeader('Cache-Control', 'no-store');

//   return {
//     props: {},
//   };
// }

const RetirementPlanning = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "retirementPlaning".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | How to Retire Rich</title>
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
          content="This is the blog page for Retirement Planning"
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
          content="Blog | Retirement Planning | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <AppLayout>
        <div className="flex-col justify-center content-center mx-50 lg:flex-col bg-white md:flex-col pb-10">
        <h1 className="flex justify-center content-center pt-5 text-[#F08420] font-raleway font-bold text-[1.5rem] lg:mx-10 lg:text-[2.5rem] uppercase">
          Retirement Planning
        </h1>

        <div className="lg:w-4/5 px-[0.2rem] pt-5 lg:pt-5 mx-auto pb-5 border-r-3"> 
                <div className="mx-auto px-[1rem]">
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                    HOW TO RETIRE RICH: 7 STEPS TO RETIRE LIKE A BOSS. 
                    </h1>
                    <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                    Author:  Samuel Apanisile
                    </h3>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    One of my favourite personal wise sayings which I often share with those who care to listen is:  "People who refuse to learn from the rich may find themselves forever locked in the cycle of financial ignorance and poverty, by missing out on valuable lessons that could pave the way to prosperity." Today, I will show you 7 solid ways to achieve your goal of retiring rich through the story of Bosede Lorie.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    As they say, seven is the perfect number so let’s jump right into it. 
                    </p>   

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    Case Study: Bosede Lorie
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    Background. 
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Bosede Lorie, a marketing executive, started her career at the age of 25. Throughout her career, she was diligent in managing her finances and planning for retirement. Bosede's goal was to retire comfortably at 60 while maintaining her current lifestyle.  
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
                    Bosede's goal was to retire comfortably at 60.   
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    Key Elements of Her Success:  
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    1. Early Start and Consistent Savings:
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     • Bosede began saving for retirement in her late 20s, taking advantage of her company's Contributory Pension Scheme (CPS) plan.  
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     • She consistently contributed a significant portion of her salary, increasing her contributions with each raise.   
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    2. Diversified Investments:
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    • Bosede diversified her investment portfolio by allocating funds across stocks, bonds, and real estate.  
                    </p>

                     <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    • Regularly reviewing her portfolio helped Bosede make informed decisions based on market conditions and her risk tolerance. 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    3. Strategic Career Moves:
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     • Throughout her career, Bosede strategically navigated job opportunities, choosing positions that offered both career growth and competitive benefits.  
                    </p>

                     <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     • She negotiated salary increases and bonuses, directing a portion of these earnings toward her retirement savings. 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    4. Real Estate Investments: 
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     • Bosede invested in real estate assets early in her career, leveraging the power of property appreciation and rental income. 
                    </p>

                     <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     • As the real estate market flourished over the years, her property investments became a significant source of passive income and capital gains. 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    5. Financial Advisor Consultation:
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    • Bosede engaged and consulted a professional financial advisor who conducted a fresh risk profiling for her. This led to recommendations that required adjusting her portfolio to better combat increasing inflation.
                    </p>

                     <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     • She approved the advisor's customized recommendation and replaced bonds with two asset classes suggested by the advisor, leading to above-market-performance of her portfolio during the 2008 global financial crisis. Bosede’s portfolio flourished while the market bled.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    6. Continuous Learning and Adaptation:
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    • With the guidance of her financial advisor, Bosede stayed informed about changes in tax laws, investment strategies, investment opportunities and comprehensive retirement planning. 
                    </p>

                     <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     • Based on her financial advisor's counsel, she adapted her financial plan based on economic conditions, ensuring her investments were aligned with her long-term goals. 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    7. Health-Conscious Lifestyle:
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    • Recognizing the impact of health on retirement expenses, Bosede maintained a healthy lifestyle. 
                    </p>

                     <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     • Regular exercise and a focus on preventive healthcare helped minimize potential future medical costs. 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    Retirement Outcome:  
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    At the age of 60, Bosede decided to retire comfortably. 
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Bosede Lorie's case demonstrates the importance of early and consistent financial planning, diversification of investments, strategic career decisions, and adaptability to market changes. Her trust in a knowledgeable financial advisor and the decision to adjust her portfolio based on economic conditions played a crucial role in securing her financial future.  
                    </p>  
                    
                    <div className="flex justify-center content-center pb-1 ">
                    <Image
                    src={clipThree}
                    className="mx-auto"
                    alt="percentage-allocation-of-income"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    </div>

                    <p className="leading-[1.2rem] text-center font-normal font-inter text-[#212020] text-[0.9rem] font-style: italic pb-5">       
                    Retiring comfortably relies on your financial decisions.  
                    </p> 
                    

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Are you interested in learning more about the asset classes that contributed to Bosede's success? Please contact REKIT Financial Advisors for retirement formulas customized to help you overcome the globally increasing uncertainties. Email: info@rekitadvisory.com  
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

export default RetirementPlanning;
