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
import clipOne from "../../../public/assets/naira-notes.png"
import clipTwo from "../assets/inflation.jpg"

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
        <title>Rekit | REKIT Blog | Financial News 26 - 02 - 2024</title>
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
                    World Macro-economic report as of 26th February, 2024
                    </h1>
                    {/* <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                    Author:  Samuel Apanisile
                    </h3> */}

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[0.9rem]">       
                    NIGERIA 
                    </p> 

                    <div className="flex justify-center content-center pb-1 ">
                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    IMF sees Naira depreciating by 35% to N2,081/$1 in official market.
                    </p>
                    </div>


                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     The IMF warns of a potential 35% depreciation in Nigeria's official exchange rate this year, possibly leading to a peak inflation rate of 44%. The current rate stands at N1,542.58 per dollar, but could reach N2,081 per dollar. Nigeria's monetary policy lacks tightening to curb inflation below 20%, exacerbated by factors like limited local production and recent import liberalization. Adverse climate events have further weakened the economy, prompting the IMF to recommend collaborative efforts with development partners for a comprehensive economic strategy. Domestic demand is declining, and growth could stagnate in 2024, gradually recovering to 2% by 2028. Concerns over Nigeria's international reserves and potential shocks impacting stability and poverty are raised, with a projected rise in the fiscal deficit driven by social unrest and fuel subsidies. Despite efforts to address expenditure, the debt-to-GDP ratio may still rise, and inflation spikes could restrict access to external financing, potentially leading to reserves declining to $17 billion by 2025, posing challenges for debt repayment and humanitarian needs.
                    </p> 

                    <div className="flex justify-center content-center pb-1 ">
                    <Image
                    src={clipOne}
                    className=""
                    alt="cbn"
                    style={{
                        borderRadius: "10px"
                     
                        }}
                    />                   
                    </div>

                    <div className="flex justify-center content-center pb-1 ">
                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    FX: CBN advises customs on rate to adopt for import duty assessment.
                    </p>
                    </div>

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     On 23rd, the Central Bank of Nigeria (CBN) instructed the Nigeria Customs Service (NCS) and other stakeholders to use the closing Foreign Exchange (FX) rate on the date of opening Form M for importations as the FX rate for Import Duty Assessment, starting February 26, 2024. This measure, conveyed via a circular signed by Dr. Hassan Mahmud, Director of the Trade and Exchange Department, addresses concerns raised by importers regarding erratic changes in Import Duty Assessment levies by the NCS. These fluctuations have created pricing uncertainties and abnormal price hikes for goods and services, impacting near-term inflation trends. The CBN underscores that this FX rate will remain applicable until the completion of importation and clearance of goods. This directive supersedes the requirements outlined in the Central Bank of Nigeria Foreign Exchange Manual (Revised Edition, 2018). Despite acknowledging initial market volatility post-FX market liberalization, the CBN expresses confidence that these reforms will stabilize the market, foster market confidence, and attract investment capital, thereby promoting Nigerian economic growth and development.
                    </p> 

                    <div className="flex justify-center content-center pb-1 ">
                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    CBN sells another N1.58 trillion in Treasury Bills, interest rate at 19% for 364-day bill.
                    </p>
                    </div>
                    
                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     The Central Bank of Nigeria (CBN) has sold an impressive N1.58 trillion in its latest Treasury Bills auction as the apex bank continues its ongoing effort to manage liquidity in the financial system. The auction, held on the 21st of February, attracted substantial interest from investors, with the CBN setting stop rates as high as 19%. The auction was broken down into three categories based on tenors: 91-day, 182-day, and 364-day bills. The apex bank offered N11.96 trillion in 91-day bills, with a stop rate of 17.00%, which was a significant attraction for short-term investors. The 182-day bills saw N10.21 trillion on offer at a 17.50% stop rate, while the 364-day bills had the highest rate at 19.00% on a N243.32 trillion offer.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Subscription levels were robust across all tenors, reflecting heightened investor appetite amidst the current economic landscape.
                    </p>

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	The 91-day bills received a subscription of N368.03 billion, far exceeding the offer amount, which resulted in an allotment ratio of 27.7x with N331 billion allotted.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	This indicates that for every unit offered, there were almost 28 units requested – a clear sign of the high demand for short-term government securities.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	The 182-day bills had a subscription of N98.69 billion, with an allotment ratio of 6.5x, while the 364-day bills witnessed a whopping N1.77 trillion subscription, leading to an allotment ratio of 4.9x.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	A total of N66.2 billion and N1.19 billion were allotted for the 182-day and 364-day bills respectively.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">Bids ranged from:  </span> 11.4400% to 21.0000% for the 91-day bills, 13.0000% to 20.3399% for the 182-day bills, and 15.0000% to 26.0000% for the 364-day bills. These ranges show the variability of investor expectations regarding yield, with some investors willing to accept lower rates, while others aimed for the higher end of the spectrum.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    TOTAL OF N2.5 TRILLION SOLD IN TWO WEEKS
                    </p>
                    
                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     This recent Treasury Bills auction mirrors the outcomes of the last auction where a total of N1 trillion was on offer but was oversubscribed as investors staked a whopping N2.3 trillion. The one-year bill also attracted a 19% interest rate.
                    </p>

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	The CBN has now sold about N2.5 trillion in the last two weeks sucking out over N2.1 trillion in 364-day auctions likely to cost the apex bank around N398 billion in interest payments.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	The CBN’s strategy to tighten liquidity through these auctions is consistent with its monetary policy stance aimed at curbing inflation and stabilizing the currency.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	The increased interest rates on Treasury Bills are likely to influence borrowing costs across the economy.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    The CBN’s moves are critical amidst the current global economic uncertainties, and their implications are sure to be a point of discussion in financial circles in the coming weeks.
                    </p>

                    <div className="flex justify-center content-center pb-1 ">
                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    Naira fluctuations.
                    </p>
                    </div>


                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     On the 21st, the Daily Post reported the Naira's second notable appreciation against the US Dollar for the week in the foreign exchange market. The Naira strengthened to N1,542.58 per US dollar on Wednesday from N1,551.24 on Tuesday, attributed to a 76.62 percent surge in US dollar supply on Tuesday. Consequently, since Monday, the Naira appreciated by N36.66, starting from N1,574.62 per US dollar. However, in the parallel market, the Naira declined to N1,860 per US dollar on Wednesday from N1,740.00 on Tuesday, widening the gap between official and parallel market rates. On the 23rd, despite EFCC raids on Bureau De Change operators, the Naira reversed its appreciation trend, depreciating to N1571.31 per US dollar on Thursday from N1,542.58 on Wednesday. This decline is attributed to increased demand for foreign exchange amidst the crackdown on Bureau De Change. Nonetheless, the parallel market saw the Naira strengthen to an average of N1,680.00 per US dollar on Thursday from N1,860 per US dollar on Wednesday.
                    </p>

                    <div className="flex justify-center content-center pb-1 ">
                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[1.1rem]">       
                    Top 4 things to watch in markets in the week ahead
                    </p>
                    </div>



                    <div className="flex justify-center content-center pb-1 ">
                    <Image
                    src={clipTwo}
                    className=""
                    alt="inflation"
                    style={{
                        borderRadius: "10px"
                     
                        }}
                    />                   
                    </div>

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    1. US inflation
                    </p>
                    
                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     The focus on inflation is expected to intensify this week with the release of January's personal consumption expenditures (PCE) price data on Thursday.
                    </p>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Recent economic indicators, including reports on consumer prices, producer prices, and employment, have signaled ongoing strength in the U.S. economy despite enduring elevated interest rates. This trend has led investors to postpone expectations for Federal Reserve rate cuts until later in the year.
                    </p>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Economists anticipate a 0.3% increase for January, following a 0.2% rise in the previous month. A higher-than-expected reading could lead the Fed to further postpone rate cuts. Additionally, the economic calendar includes data on durable goods orders, the ISM manufacturing PMI, as well as reports on new and pending home sales, along with consumer confidence surveys from the Conference Board and the University of Michigan.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    2. Eurozone inflation
                    </p>
                    
                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     The Eurozone is poised to unveil highly anticipated inflation figures on Friday, marking the final release before the upcoming European Central Bank meeting on March 7.
                    </p>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    In January, consumer price inflation dipped to 2.8% from 2.9% in December, indicating a return towards the ECB's targeted 2% after reaching double digits in 2022. Economists are forecasting a February annual inflation rate of 2.5%.
                    </p>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Since last September, the ECB has maintained record-high interest rates, citing persistently high wage growth as a reason to refrain from easing its tight monetary policy. Bundesbank President Joachim Nagel cautioned against premature interest rate cuts, particularly before crucial wage data becomes available in the second quarter.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    3. China Purchasing Managers' Index (PMIs)
                    </p>
                    
                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     Chinese authorities have intensified their efforts to support a delicate economic rebound by implementing the largest-ever reduction in the benchmark mortgage rate and increasing regulatory pressure to revitalize a struggling stock market. The upcoming PMI data on Friday will offer insights into the effectiveness of these measures. Economists anticipate that official PMI data will indicate continued contraction in the manufacturing sector, while the Caixin manufacturing index is predicted to remain stable.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    4. Oil prices
                    </p>
                    
                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     Oil prices experienced a nearly 3% decline on Friday and recorded a weekly decrease following remarks from a U.S. central bank policymaker suggesting that interest rate cuts might be postponed for at least two additional months.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Brent saw a decrease of around 2% for the week, while WTI futures dropped by over 3%. Nevertheless, signs of robust fuel demand and concerns over supply disruptions could potentially rejuvenate prices in the coming days.
                    </p>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Federal Reserve Governor Christopher Waller proposed on Thursday that U.S. interest rate cuts should be delayed for at least a couple more months, a move that could impede economic expansion and dampen oil consumption.
                    </p>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Tim Snyder, an economist at Matador Economics, explained to Reuters, "The entire energy sector is reacting because the resurgence of inflation could dampen the demand for energy products. This is an unsettling prospect for the market, particularly as it seeks to ascertain its direction."
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    REPORT FROM UAE
                    </p>
                    
                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     The largest export of the United Arab Emirates (UAE) in 2022 was mineral fuels, including oil, which constituted a substantial 68.6% of total exports, amounting to US$213.4 billion.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    For those considering investment opportunities in the UAE, diverse options are available, depending on factors such as risk tolerance, investment capabilities, and timelines. Here are some of the top investment options:
                    </p>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    1. Real Estate: The UAE, particularly Dubai, boasts a flourishing real estate market with property values on the rise, and this trend is expected to continue.
                    </p>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    2. Stocks: Investing in multinational companies with proven business models and a history of growth can be a sound option.
                    </p>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    3. Bonds and Mutual Funds: Considered safer than stocks, these options can provide stable returns.
                    </p>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    4. Endowment Plans and Pension Plans: Long-term investment options designed to secure financial futures.
                    </p>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    5. Cryptocurrency: While riskier, investing in cryptocurrencies has the potential for high returns.
                    </p>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    6. Gold or Precious Metals: Traditionally viewed as safe investments, especially during economic uncertainties.
                    </p>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    It is crucial to note that each investment option carries its own set of risks and potential returns. Thorough research and, when necessary, seeking advice from a financial advisor are essential steps before making any investment decisions.
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

export default FinancialNewsAndUpdates;
