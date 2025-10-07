import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import AppLayout from "../../../layouts/AppLayout";
import Image from "next/image";
import Link from "next/link";
import clipTwo from "../assets/young-nigerian-investing.png"

import { blogPosts } from "../../../constants";



const FinancialEducation = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "financialEducation".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | Investing for the Next Generation: How Young Nigerians Can Build Wealth Early</title>
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
                    Investing for the Next Generation: How Young Nigerians Can Build Wealth Early
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
                   Recently, in Nigeria, everyone seems to have become financially aware. Graduates and undergraduates are searching daily for new ways to make money; even secondary school students want to get jobs during the holidays. Young Nigerians are becoming more interested in social media discussions about money; how to make it and more importantly, how to make it increase. Thanks to fintech apps that make saving easier.
                    </p> 

                      <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   This new curiosity is mainly about establishing long-term financial stability rather than just chasing quick profits, which is why it is important to start investing early in your 20s or early 30s to give your money the opportunity of time to grow. With the magic of compound interest, a small amount today can increase into a substantial amount tomorrow.
                    </p> 

                  

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    Why Young Nigerians Must Start Investing Early
                    </h2>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   Time is the most powerful financial tool a young Nigerian can utilize. As mentioned earlier, compound interest can help your money multiply if you start early. Compound interest is like a silent wealth builder, working overtime for you. Let’s run a quick comparison between investing now and investing later, say in 10 years. Picture this, you invest ₦100,000 today in a long-term fund that has an average of 10% return yearly. In 20 years, that increases to over ₦670,000. However, if you wait 10 years in the same timeframe before starting, you will only have about ₦260,000. The difference is not just the numbers, it's the cost of waiting.
                    </p> 

                      <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   Inflation is another crucial reason to get started early. Hike in prices in Nigeria is affecting everyone and people are looking for more ways to get different streams of income or how to grow what they already have. You may think to keep some money aside in a savings account for rainy days, but if you leave your money idle, it will actually lose value every year. The reason is inflation. For instance, the ₦100,000 you stash away today won’t be enough to buy the same basket of items in 5 years. By investing wisely, you guarantee that your money will increase faster than inflation and maintain your purchasing power.
                    </p> 

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    Smart Investment Options for Young Nigerians.
                    </h2>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   There are many opportunities in the Nigerian investment setting. However, it can prove difficult knowing where and how to start. The good news? You don’t need millions to start. You can start small and gradually increase with the right financial advisor by your side and a strategy that fits your goals. Here are some options for you:
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	<span className="font-bold">Stocks and Bonds:</span> Purchasing government bonds or stocks on the Nigerian Stock Exchange not only offers consistent interest payouts and capital growth, it also allows you to participate in the economic development of the nation. A government savings bond can be purchased for as little as, say ₦5,000 and still yield steady profits.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	<span className="font-bold">Exchange Traded Funds (ETFs) and Mutual Funds: </span> These are alternatives to stocks and bonds. They work by pooling money from various investors and sharing them among many assets, thereby lowering your risk. Even if it's a monthly investment of ₦20,000 in a mutual fund, it can increase into a reasonable substantial amount over time. 
                    </p> 

                     <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	<span className="font-bold">Insurance and Pension Plans:</span> Agriculture has always been the backbone of Nigeria’s economy and it is a wise choice to invest in it. It's all about food and everybody needs food to survive. Henceforth, contributing to agriculture promotes national food security while diversifying your portfolio. You can choose to invest in these commodities now and share in the profits.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	<span className="font-bold">Agricultural Investment Platforms: </span> These are alternatives to stocks and bonds. They work by pooling money from various investors and sharing them among many assets, thereby lowering your risk. Even if it's a monthly investment of ₦20,000 in a mutual fund, it can increase into a reasonable substantial amount over time. 
                    </p> 

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     The best course of action is to spread wealth across different options rather than relying solely on one of these. This is where financial advisories such as REKIT Financial Advisors prove its expertise by helping young people in choosing the appropriate investment mix while managing risk, and remaining dedicated to long-term investing.
                    </p> 

                     <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    Passing Wealth to the Next Generation
                    </h2>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   To build wealth may be enough, but it's just halfway down the line, completing it and creating actual generational wealth involves preserving and transferring it. To avoid losing wealth within a generation, young investors must set up proper structures early for handing over.
                    </p> 

                      <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                  A key technique is succession planning. To guarantee a seamless transfer of assets entails creating trusts and writing a will. A young person who invests in mutual funds, for example, can create a trust that ensures investment income will sustain their dependents and/or children even in the case of an unexpected catastrophe.
                    </p> 

                      <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                  Additionally, leveraging life insurance is a smart move. Life insurance policies can be put in place to act as a method of wealth transfer even beyond offering emergency financial protection, ensuring that your loved ones receive a direct benefit from your investments.
                    </p> 

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    Practical Tips to Get Started
                    </h2>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   Here are some practical investment tips in Nigeria:
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	<span className="font-bold">Start Small and Stay Consistent:</span> Starting small is crucial since accumulating wealth takes time and commitment. Even ₦10,000 or ₦20,000 a month might add up to a respectable amount over time if invested in a mutual fund or savings plan.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	<span className="font-bold">Reinvest Returns: </span> Another tip is reinvesting profits. Instead of spending or withdrawing profits immediately, reinvest them back into your portfolio for faster growth of your money. It adds up and even grows faster.
                    </p> 

                     <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	<span className="font-bold">Avoid Ponzi Schemes:</span>Stay vigilant to notice any “investment“ that promises unrealistic profits, especially when there is no risk or very little one. These kinds of offers are likely scams as true wealth comes from patience, dedication and long-term investing, not shortcuts to getting rich quick
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	<span className="font-bold">Seek Professional Advice: </span> Always ask for advice when you are about to invest. It can prove difficult to create a proper investment portfolio that aligns with your objectives. This is why there are financial experts.
                    </p> 

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                   Remember you don't have to do it alone if you have access to the correct financial advisors. REKIT Financial Advisors Limited is to assist you sort through the complexities, diversify wealth, and create a long-lasting plan to safeguard your future
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
