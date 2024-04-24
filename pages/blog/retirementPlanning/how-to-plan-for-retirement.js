import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import AppLayout from "../../../layouts/AppLayout";
import Image from "next/image";
import Link from "next/link";
import clipOne from "../assets/plan-for-retirement-1.jpeg"
import clipThree from "../assets/plan-for-retirement-2.jpeg"

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
        <title>Rekit | REKIT Blog | How to Plan for retirement: Exploring the Benefits of Annuities for Retirement Planning </title>
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
                    How to Plan for retirement: Exploring the Benefits of Annuities for Retirement Planning
                    </h1>
                    {/* <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                    Author:  Adachi Obi
                    </h3> */}

                    <div className="flex justify-center content-center pb-4 ">
                    <Image
                    src={clipOne}
                    className="mx-auto"
                    alt="Old couple hugging"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    </div>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Why do so many hardworking and intelligent individuals find themselves struggling financially after retirement as if they never earned an income before? 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                      Are you looking for a smart way to ensure a comfortable retirement? Let us talk about annuities. Annuities are like a financial house that you build, and once constructed, they start paying you rent or interest for the rest of your life. Think of it as your own personal pension plan, even if you have an ongoing employer-sponsored pension plan. In today's deeply uncertain world, two pension plans are better than one.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                          
                      Saving and investing are crucial for your future. If you do not save or invest, you may find yourself struggling later on. Annuities provide a reliable source of income during retirement, making them a valuable strategy for anyone looking to enjoy their golden years without financial worries.
                    </p>

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                      Let us consider two scenarios for Nigerian investors: a High Net Worth Individual (HNI) and a mass affluent working-class professional.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                      A. High Net Worth Individual (HNI): Mr. Disu, a successful entrepreneur, at the age of 60 years decides to invest a lump sum of ₦200,000,000 in an annuity at that makes instant monthly payout. The annuity offers an annual payout of 10% for the rest of his life, assuming a life expectancy of 20 years.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                      Using a financial calculator for Annuity: Mr. Disu can expect an instant monthly payout of approximately ₦1,651,344.16 from his annuity investment for as long as he lives. With annuities, Mr. Disu can enjoy the peace of mind that comes with knowing his financial future is secure.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                      B. Mass Affluent Working-Class Professional: Now, let us consider Mrs. Abita Shaker, a hardworking professional with a stable income. While Mrs. Shaker may not have the same level of wealth as Mr. Disu, she understands the value of planning for retirement.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                      
                      See: Mrs. Shaker, a working professional, decides to invest ₦100,000 every month for 10 years in an annuity solution recommended by her financial advisor where she would start receiving payment at the end of the 10th year contribution. The annuity offers an annual payout of 8% for the rest of her life assuming she has a remaining life expectancy of 25 years.
                    </p>   

                    <div className="flex justify-center content-center pb-4 ">
                    <Image
                    src={clipThree}
                    className="mx-auto"
                    alt="Old woman smiling"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    </div>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                      
                      Using Financial Calculator, Mrs. Shaker would receive approximately ₦176,988.46 per month for the rest of her life. Mrs. Shaker can supplement her retirement savings and ensure she has enough income to support herself in her later years.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                      
                      Please note that the calculations in the two scenarios assume constant interest rates and life expectancy. Actual results may vary based on market conditions and individual circumstances.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                      
                      Regardless of your financial status, annuities can be a valuable tool for securing your retirement. However, navigating the world of annuities can be complex, which is why it is essential to seek guidance from a financial advisor.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                      
                      A financial advisor can help you understand your options, assess your financial goals, and create a customized retirement plan that includes annuities. REKIT Financial Advisors offers an annuity opportunity with better rates that provide instant payment for the rest of your life, making it an attractive option for intentional and meaningful investors. With this opportunity you can start building your simple financial house with as little as 50,000 Naira monthly contribution. 
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                      
                      In Nigeria's tough macroeconomic conditions, where the future may seem uncertain, annuities offer a beacon of hope. With the right guidance and the support of a trusted financial advisor, you can build a secure financial future and enjoy your retirement with confidence.
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
