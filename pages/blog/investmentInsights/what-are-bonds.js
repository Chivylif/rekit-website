import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import AppLayout from "../../../layouts/AppLayout";
import Image from "next/image";
import Link from "next/link";
import clipOne from "../assets/bonds-one.jpeg"
import clipThree from "../assets/retirement-planning-2.jpg"

import { blogPosts } from "../../../constants";


// export async function getServerSideProps(context) {
//   // Disable caching for this page
//   context.res.setHeader('Cache-Control', 'no-store');

//   return {
//     props: {},
//   };
// }

const InvestmentInsights = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "investmentInsights".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | What are bonds? Let's discuss bonds.</title>
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
                    What are bonds? Let's discuss bonds.
                    </h1>
                    {/* <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                    Author:  Samuel Apanisile
                    </h3> */}

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Welcome dear readers, to the fascinating world of bonds. Whether you are a seasoned investor or just dipping your toes into the financial waters, understanding bonds is the key to unlocking a world of opportunities.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    If you’ve been thinking of investing in bonds but do not really understand how to navigate its complexities, you have come to the right place!
                    </p>   

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    What are Bonds?
                    </p> 

                    <div className="flex justify-center content-center pb-4 ">
                    <Image
                    src={clipOne}
                    className="mx-auto"
                    alt="What are Bonds"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    </div>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">If I were to use an analogy, I would say </span> imagine bonds as the sturdy pillars supporting our vast economic structure.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    In essence, bonds are debt securities issued by corporations or governments to raise capital. When you invest in a bond, you basically become a lender, receiving periodic interest payments called coupons and, upon maturity, the principal amount is also paid back. It is like having a golden ticket to a stable, income-generating journey. 
                    </p>
                   

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold"> What’s even better news is that in </span> the vast sea of investments, bonds stand tall as the unwavering anchor. Their value does not swing wildly like equities, offering a predictable income stream.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    In Nigeria, as in many other countries, various types of bonds are available to investors. 
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Understanding the different types of bonds allows investors to diversify their portfolios based on their risk tolerance, investment horizon, and financial goals.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Here are some common types of bonds, including those that are popular in Nigeria:
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Bonds including the Savings Bond, Sukuk, and Eurobonds issued by the Federal Government of Nigeria (FGN) are generally considered liquid and low-risk investments. 
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Conversely, Sukuk bonds, Naira Bonds and Eurobonds issued by Corporates may carry moderate risks and be less liquid. 
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Green Bonds and Development Bonds might be considered higher risk due to their specific project focus.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    In today’s post, we would be discussing Eurobonds.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Some features of Eurobond include:
                    </p>

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                      <span className="font-extrabold">•	Returns: </span> Access to returns above average USD- denominated money market investments and of course better value for your money than can be offered by a domiciliary account. 
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     <span className="font-extrabold">•	Naira's Shield: </span> Provides resilience against Naira storms and hedges against value erosion of investment capital. 
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    <span className="font-extrabold">•	Quick Redemption Timelines (FGN Bonds): </span> In the rhythm of life, your investments should move as cash with you. Enjoy the luxury of quick conversion of your FGN bond investments to cash when needed.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    <span className="font-extrabold">•	Short Holding Period: </span> Your bond investment takes just 30 days to dry. This means that you can hold the bond investment for a minimum period of 30days, after which you may savour the fruits of your investment.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    <span className="font-extrabold">•	Unit Harmony: </span> Start small with a minimum subscription of 10 units and multiples of 5 units thereafter. The minimum entry amount? With just $1,000, you can access a door to a world of financial creativity while similar high yields as much larger investments.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    <span className="font-extrabold">•	Wealth Growth Realities: </span> Experience the beauty of capital appreciation, with projected annual returns of at least 7.5% over a 4-year period.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    <span className="font-extrabold"> •	Dividend Delight: </span> Enjoy the sweet sound of dividends, collected as cash or reinvested to compose a flourishing future. And here is another interesting aspect: dividends are net of withholding tax, ensuring you receive your fair share.
                    </p> 

                    <p className="leading-[1.2rem] pt-2 font-normal font-inter text-[#212020] text-[0.9rem] font-style:italic pb-5">       
                    It is essential to conduct thorough research and consult with a financial advisor before making investment decisions. Contact REKIT Financial Advisors for personalized recommendations! 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    As a Nigerian navigating the unpredictable currents of a harsh macroeconomic environment and as foreign investors seeking a haven, the Euro Bond Fund beckons. It is not just an investment; it is a means of financial empowerment, and offers stability, which is an essential cloth for your financial masterpiece. <span className="font-extrabold">Please note that you can also access high volume direct investments in Eurobonds with a minimum of $100,000. </span> 
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    It is time to let your investments dance to the rhythm of stability and growth. Act now and let the Eurobond Fund be your passport to a world of financial creativity.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">Engage REKIT Financial Advisors </span>  to receive consistently contextualized savings and investment risk insights. This will enable you to start investing wisely and boldly.
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
