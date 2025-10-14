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
//import clipOne from "../../../public/assets/cbn.jpeg"
import clipTwo from "../assets/yemi-cardoso.jpeg"

import { blogPosts } from "../../../constants";


// export async function getServerSideProps(context) {
//   // Disable caching for this page
//   context.res.setHeader('Cache-Control', 'no-store');

//   return {
//     props: {},
//   };
// }

const FinancialNewsAndUpdates = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "financialNewsAndUpdates".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | Financial News 12 - 02 - 2024</title>
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
          content="This is the blog page for Financial News And Updates"
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
          content="Blog | Financial News And Updates | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <div className="flex-col justify-center content-center mx-50 lg:flex-col bg-white md:flex-col pb-10">
        <h1 className="flex justify-center content-center pt-5 text-[#F08420] font-raleway font-bold text-[1.5rem] lg:mx-10 lg:text-[2.5rem] uppercase">
            Financial News And Updates
        </h1>

        <div className="lg:w-4/5 px-[0.2rem] pt-5 lg:pt-5 mx-auto pb-5 border-r-3"> 
                <div className="mx-auto px-[1rem]">
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                    Macro-Economic Report (NIGERIA) as at 12th February, 2024
                    </h1>
                    {/* <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                    Author:  Samuel Apanisile
                    </h3> */}

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[0.9rem]">       
                    (1) Banks grow total assets by 50% N107.3trn 
                    </p> 


                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     During a retreat organized by the NDIC in Lagos, Senator Adetokunbo Abiru, Chairman of the Senate Committee on Banking, Insurance & other Financial Institutions, disclosed significant growth in the banking industry. Total assets surged by 50 percent year-on-year to N107.3 trillion in November 2023, while customers' deposits grew by 45 percent to N64.48 trillion during the same period. Abiru highlighted key financial indicators, including a Capital Adequacy Ratio of 12.3 percent, Liquidity ratio of 41.6 percent, and Non-Performing Loans ratio of 4.2 percent, all meeting regulatory requirements. He noted the importance of considering these figures in light of naira depreciation and welcomed the Central Bank of Nigeria's plan to recapitalize banks. Abiru also emphasized the crucial role of the NDIC in maintaining confidence in the banking system. Additionally, the Managing Director/Chief Executive of NDIC stressed the significance of collaboration between the Senate and the Corporation for effective oversight and the benefit of the banking system and the broader economy.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[0.9rem]">       
                    (2) CBN policies to stabilize foreign exchange rates are working – Cardoso 
                    </p> 

                    <div className="flex justify-center content-center pb-1 ">
                    <Image
                    src={clipTwo}
                    className=""
                    alt="cbn"
                    style={{
                        borderRadius: "10px"
                     
                        }}
                    />                   
                    </div>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Governor Yemi Cardoso of the Central Bank presented to the Joint Senate Committee on Finance, Banking, Insurance, and Financial Institutions in Abuja, highlighting the positive impact of the bank's efforts to stabilize foreign exchange rates. He emphasized the effectiveness of these measures in addressing the interconnected issues of exchange rate stability and inflation control. Cardoso noted a significant influx of $1 billion into the Nigerian market due to the bank's interventions, signaling early progress. He emphasized the responsiveness of the market to these policies and stressed the importance of moderating Nigeria's demand for foreign exchange for long-term sustainability. Additionally, Cardoso expressed confidence in inflation reduction under the inflation targeting framework, projecting a moderation to 21.1 percent for the year.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[0.9rem]">       
                    (3) CBN gov declares end to Ways and Means
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Governor Olayemi Cardoso of the Central Bank of Nigeria announced the cessation of Ways and Means loans to the President until outstanding debts are repaid, as part of efforts to tackle the current economic challenges. Ways and Means are temporary loans provided by the Central Bank to the Federal Government to support spending until revenue is generated. This decision follows allegations that former CBN governor Godwin Emefiele printed N22.7 trillion for former President Muhammadu Buhari without National Assembly approval.
                    </p> 

                    <div className="flex justify-center content-center pb-1 ">
                    <Image
                    src={clipTwo}
                    className=""
                    alt="yemi-cardoso"
                    style={{
                        borderRadius: "10px"
                     
                        }}
                    />                   
                    </div>

                  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Cardoso, accompanied by the economic team, discussed economic issues with Senate Committees, focusing on the depreciation of the naira and increasing food prices. He highlighted CBN's monetary policy tightening to address inflation, commending the government's move to discontinue Ways and Means in accordance with the CBN Act. Cardoso also noted the end of quasi-fiscal measures contributing to excess naira liquidity and inflation. He expressed optimism that these actions would foster a more market-oriented exchange rate mechanism, leading to improved foreign exchange inflows, exchange rate stability, and inflation control.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[0.9rem]">        
                    (4) Bank recapitalisation: Senator asks CBN to engage National Assembly, others
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                        
                    Senator Tokunbo Abiru, Chairman of the Senate Committee on Banking, Insurance, and other Financial Institutions, urged the Central Bank of Nigeria (CBN) to involve the National Assembly and key stakeholders in its proposed bank recapitalization plan. Speaking during the committee's retreat with the Nigeria Deposit Insurance Corporation (NDIC) in Lagos State, Senator Abiru emphasized the importance of strengthening the financial sector to effectively fulfill its role in the economy. He stressed the need for the CBN to engage all critical stakeholders, including the National Assembly, in the recapitalization process to ensure transparency and accountability.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                         
                    Senator Abiru highlighted the significance of the retreat in enhancing understanding and deepening the role of deposit insurance led by the NDIC. He acknowledged the resilience of Nigerian banks despite global and national economic challenges, including currency depreciation. Senator Abiru underscored the importance of effective regulation and oversight by both regulators and the National Assembly to maintain the resilience and public trust in the financial sector. Additionally, he emphasized the legislators' responsibility to comprehend the role of regulators, especially in light of the upcoming bank recapitalization initiative by the CBN.
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

export default FinancialNewsAndUpdates;
