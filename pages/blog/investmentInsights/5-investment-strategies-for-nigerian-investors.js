import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import AppLayout from "../../../layouts/AppLayout";
import Image from "next/image";
import Link from "next/link";
import clipOne from "../../../public/assets/inflation2.jpg"

import { blogPosts } from "../../../constants";


const InvestmentInsights = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "investmentInsights".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | 5 Investment Strategies for Nigerian Investors to beat inflation</title>
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
          content="This is the blog page for Investment Insights"
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
          content="Blog | Investment Insights | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <AppLayout>
        <div className="flex-col justify-center content-center mx-50 lg:flex-col bg-white md:flex-col pb-10">
        <h1 className="flex justify-center content-center pt-5 text-[#F08420] font-raleway font-bold text-[1.5rem] lg:mx-10 lg:text-[2.5rem] uppercase">
          Investment Insights
        </h1>

        <div className="lg:w-4/5 px-[0.2rem] pt-5 lg:pt-5 mx-auto pb-5 border-r-3"> 
                <div className="mx-auto px-[1rem]">
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                    5 Investment Strategies for Nigerian Investors to beat inflation
                    </h1>
                   
                    <div className="flex justify-center content-center pb-4 ">
                    <Image
                    src={clipOne}
                    className="mx-auto"
                    alt="Inflation"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    </div>
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Inflation is a significant concern for Nigerian investors as it erodes purchasing power and diminishes the real returns on investments. Over the past year, Nigeria has experienced rising inflation rates driven by factors such as fluctuating oil prices, supply chain disruptions, and currency depreciation. These economic challenges have made it increasingly difficult for investors to achieve meaningful returns, as the purchasing power of their money declines.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    In such an environment, traditional savings and low-yield investments may not suffice to protect one's financial future. As the cost of living continues to rise, it becomes imperative for investors to seek out strategies that can safeguard and potentially enhance their wealth. Inflation-hedging assets offer a viable solution, providing a way to counteract the negative effects of inflation and maintain the real value of investments.
                    </p>   

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    In this blog post, we explore various inflation-hedging assets that can protect your investments and ensure financial stability in these uncertain economic times. By understanding and utilizing these strategies, Nigerian investors can better navigate the challenges posed by persistent inflation and work towards securing their financial goals. Some of these strategies include:
                    </p>   

 
                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    1.	Real Estate
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Real estate is a tangible asset that tends to appreciate over time, especially during inflationary periods. Investing in property can provide a reliable hedge against inflation, as the value of real estate often increases with the cost of living. Additionally, rental income from real estate investments can also rise with inflation, providing a steady cash flow that keeps pace with the economy.
                    </p>   

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    2.	Fixed Deposits
                    </p> 
 
                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Fixed deposits offer a secure investment option with guaranteed returns. Although the interest rates on fixed deposits may not always outpace inflation, they provide a stable and predictable income stream. This can be particularly valuable during volatile economic times, helping to preserve capital and provide a sense of financial security.
                    </p>  

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    3.	Commodities
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Commodities, such as gold and oil, are traditional hedges against inflation. As the prices of goods and services rise, the value of commodities typically increases. Investing in commodities can diversify your portfolio and reduce the overall risk. Gold, in particular, has been a reliable store of value for centuries, maintaining its purchasing power even in the face of economic instability.
                    </p>  

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    4.	Inflation-Linked Securities
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Inflation-linked securities are designed to protect investors from the adverse effects of inflation. These securities adjust their interest payouts based on inflation rates, ensuring that returns keep pace with rising prices. This can provide a steady income that preserves your purchasing power over time, making them a valuable addition to an investment portfolio.
                    </p>  

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    5.	Quality Stocks
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Investing in quality stocks from companies that provide essential goods and services can be a strategic move during inflation. Companies in sectors such as food, healthcare, and utilities often experience stable or increased demand, regardless of economic conditions. As their revenues grow, the value of their shares typically appreciates, providing investors with capital gains and dividends that can outpace inflation.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    High inflation poses challenges for Nigerian investors, but with the right strategies, it's possible to protect and grow your wealth. By diversifying your investments across real estate, fixed deposits, commodities, inflation-linked securities, and quality stocks, you can hedge against inflation and ensure financial stability. 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Interested in exploring these investment options further? We're here to assist you in making informed decisions to secure your financial future. Reach out to speak with an advisor today.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Email: info@rekitadvisory.com or reach us on +234 (706) 210 6633. 
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

export default InvestmentInsights;
