import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import AppLayout from "../../../layouts/AppLayout";
import Image from "next/image";
import Link from "next/link";
import clipOne from "../../../public/assets/plan-for-retirement-1.jpeg"
import clipThree from "../assets/retirement-in-Lagos.jpg"

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
        <title>Rekit | REKIT Blog | Retirement Planning in Lagos </title>
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
                    Retirement Planning in Lagos
                    </h1>
                   

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Retirement planning in Lagos is more important than ever. With Nigeria's fast-paced lifestyle, rising cost of living, and limited social security structures, having a solid retirement plan is not just a luxury, it’s a necessity. Whether you’re in your 20s, 30s, or approaching 60, the decisions you make today will shape the quality of life you’ll enjoy in your retirement years.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Today, we are going to explore how Lagos residents can plan for retirement effectively, what tools and strategies to use, and the key steps to take to achieve financial independence in your later years. Let's go! 😁
                    </p> 

                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    Why Retirement Planning Matters in Lagos
                    </h1>       
                    <div className="flex justify-center content-center pb-4 ">
                    <Image
                    src={clipThree}
                    className="mx-auto"
                    alt="Old couple hugging"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    </div>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                    As we all know, Lagos is Nigeria’s commercial hub, home to millions of workers, entrepreneurs, and retirees. However, many residents underestimate the financial demands of retirement. Factors like healthcare costs, inflation, housing, and daily expenses can quickly drain your savings if you’re not properly prepared.
                    </p>



                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    Here’s why you must plan for retirement early:
                    </h1>   
                  
                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - No guaranteed pension or social welfare unless you’re a government worker.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Life expectancy is increasing, meaning more years to fund.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Healthcare costs are rising, especially in private hospitals.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Your ability to earn may decrease with age.
                    </p> 


                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    When Should You Start Retirement Planning?
                    </h1>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                    The short answer: as soon as you start earning. The earlier you begin, the more you can take advantage of compound interest, investment growth, and peace of mind.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                    Age Bracket | Focus Area 
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                    | 20s-30s | Build emergency fund, start saving, learn investing
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                    | 30s-40s | Maximize savings, buy assets, start a pension plan
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                    | 40s-50s | Reduce debt, protect investments, plan healthcare
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                    | 50s-60s | Finalize retirement budget, secure housing, estate planning
                    </p>


                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    Steps to Plan a Successful Retirement in Lagos
                    </h1>
                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    1. Set Clear Retirement Goals
                    </h1>


                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - When do you want to retire?
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - What kind of lifestyle do you envision—urban Lagos, town, or village life?
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - How much will you need monthly?
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Will you rely on family, savings, or investments?
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Knowing the kind of retirement you want helps you estimate how much you’ll need.
                    </p>  

                   <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    2. Calculate Your Retirement Needs
                    </h1>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Use the "80% Rule"—you’ll likely need 70–80% of your current income during retirement. Factor in:
                    </p>  

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Housing (rent or owning property)
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Utilities and food
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Healthcare and insurance
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Transportation
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Leisure or travel
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Use online retirement calculators or speak to a <a href="www.rekitonline.com"> financial advisor </a>  in Lagos to get accurate figures.
                    </p>  

                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    3. Create a Retirement Budget
                    </h1>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    A realistic monthly budget is the backbone of a secure retirement plan. Estimate your future expenses based on your desired lifestyle. Allocate funds for:
                    </p>  

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Fixed costs (e.g., rent, bills)
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Healthcare (private insurance, routine checkups)
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Contingencies and inflation
                    </p> 

                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    4. Open a Pension Account (RSA)
                    </h1>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Under the Nigerian Contributory Pension Scheme (CPS), both employees and employers contribute a percentage of monthly earnings into a Retirement Savings Account (RSA) managed by a Pension Fund Administrator (PFA).
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    For self-employed or informal workers in Lagos, the Micro Pension Plan (MPP) allows flexible contributions and long-term security.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    ✅ Tip: Choose a reliable PFA and monitor your statement regularly.
                    </p>  

                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    5. Diversify Your Investment Portfolio
                    </h1>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Don’t rely solely on pension contributions. Diversify your income sources with:
                    </p>  

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Real Estate: Buy property in growing areas like Ibeju-Lekki or Ikorodu.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Mutual Funds and Bonds: Low-risk options for consistent returns.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Stocks and ETFs: For long-term capital growth.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    ⚠️ Always research and consult a <a href="www.rekitonline.com"> licensed investment advisor </a> in Lagos before investing.
                    </p>  

                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    6. Eliminate Debt Before Retirement
                    </h1>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Carrying loans, or mortgage payments into retirement can ruin your financial freedom.
                    </p>  

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Clear personal loans early.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Consider downsizing or refinancing to reduce housing costs.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Avoid new debt in your 50s and 60s.
                    </p> 

                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    7. Consider Healthcare and Insurance
                    </h1>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Healthcare costs in Nigeria can be overwhelming. Plan ahead with:
                    </p>  

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Health Insurance: Choose a private HMO with extensive coverage.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Life Insurance: For family protection and peace of mind.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Emergency Fund: Always keep 6–12 months of living expenses aside.
                    </p> 

                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    8. Secure Your Living Situation
                    </h1>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    If you don’t own a home, consider acquiring property before retirement. Options include:
                    </p>  

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Buying land and building gradually
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Cooperative housing schemes in Lagos
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Retiring outside the city for cheaper cost of living (e.g., Ogun, Oyo)
                    </p> 


                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    9. Plan for Passive Income
                    </h1>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Develop income streams that don’t require daily work:
                    </p>  

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Rental properties
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Royalties from intellectual property or books
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Online courses, e-commerce, or consultancy
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Dividend-paying investments
                    </p> 


                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    10. Estate Planning and Wills
                    </h1>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Ensure your assets are passed on smoothly with:
                    </p>  

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - A legally drafted Will
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - A named Next of Kin on all accounts
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Power of Attorney or Trusts, especially if you own multiple properties or businesses
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    ✅ Tip: Consult a Lagos-based estate lawyer or a financial advisor for guidance.
                    </p>  


                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    Top Retirement Mistakes to Avoid 
                    </h1>
 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Delaying savings until your 40s
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Assuming your children will support you
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Not accounting for inflation and healthcare
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Relying only on one source of income
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Failing to track your expenses and investments
                    </p> 

 
                    <h1 className="font-extrabold pt-0.5 text-[#000] text-xl font-raleway">
                    Get Professional Help
                    </h1>
 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Several licensed financial advisors and pension consultants in Lagos such as REKIT Financial Advisors, can guide you through a personalized retirement plan. Look for advisors who have:
                    </p>   

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Registered with the Securities and Exchange Commission (SEC)
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Transparent fee structure
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    - Proven track record
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                      
                    Email info@rekitadvisory.com for more info or send us a message via whatsapp on 09011959063 and we'd be happy to help.
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

export default RetirementPlanning;
