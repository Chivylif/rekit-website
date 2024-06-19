import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import AppLayout from "../../../layouts/AppLayout";
import Image from "next/image";
import Link from "next/link";
import clipOne from "../assets/children-financial-future-1.jpg"
import clipThree from "../assets/retirement-planning-2.jpg"

import { blogPosts } from "../../../constants";


const PersonalFinance = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "personalFinance".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | How can parents guarantee their children's financial future?</title>
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
          Personal Finance
        </h1>

        <div className="lg:w-4/5 px-[0.2rem] pt-5 lg:pt-5 mx-auto pb-5 border-r-3"> 
                <div className="mx-auto px-[1rem]">
                    <h1 className="flex justify-center content-center font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway pb-4">
                    How can parents guarantee their children's financial future?
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
                    This question is very important because as parents, you want the best for your children. We are sure you dream of them having a secure, prosperous future where they can pursue their passions without financial worries. Achieving this requires strategic planning and wise investments. Here’s a comprehensive guide on steps parents can take to guarantee their children’s financial future:
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    1. Start Early
                    </p>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     Time is your greatest ally when it comes to investing. The earlier you start, the more time your investments have to grow. Compounding interest, where the interest earned on an investment itself earns interest, can significantly increase the value of your investments over time. Starting early allows you to take advantage of this powerful financial principle.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Action Steps:
                    </p>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     - Open a savings account or an investment account for your child as soon as possible. It’s never too early to start an education plan or trust for your child or even unborn children. Our vetted third-party asset managers offer various savings and investment accounts tailored for children.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    - Also, consider long-term investments like stocks, bonds, or mutual funds that benefit from compounding interest. 
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    2. Set Clear Financial Goals
                    </p>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     Define what you want to achieve for your child's future. Whether it’s funding their education, helping them start a business, or providing a financial cushion, having clear goals will guide your investment decisions.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Action Steps:
                    </p>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     - Write down your financial goals and the estimated costs associated with them.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    - Create a timeline for when you’ll need the funds (e.g., university tuition in 18 years).
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    3. Create a Diversified Investment Portfolio
                    </p>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     Diversification involves spreading your investments across various asset classes (stocks, bonds, real estate) to minimize risk. A well-diversified portfolio can weather market volatility better and provides more stable returns.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                       
                    Action Steps:
                    </p>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     - Invest in a mix of stocks, bonds, real estate, and other assets. Consulting a financial advisor can help you create a well-structured diversified portfolio
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    - Regularly review and adjust your portfolio to maintain diversification and alignment with your goals.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    4. Invest in Education
                    </p>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     One of the best investments you can make is in your child's education. An excellent education can provide your child with the skills and knowledge needed to succeed financially.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                       
                    Action Steps:
                    </p>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    - Save for your child’s education using dedicated <Link  href={{pathname:`/goal-based-investing`}}><span className="text-[#46a2da] text-decoration-line: underline">savings plans</span></Link> offered by a financial advisor.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    - Encourage your child to excel academically and support their educational pursuits.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    5. Teach Financial Literacy
                    </p>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     Equipping your child with financial knowledge is crucial. Teach them about budgeting, saving, investing, and responsible spending. Financial literacy will empower them to make wise financial decisions in the future.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                       
                    Action Steps:
                    </p>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     - Start teaching basic financial concepts at a young age. You can get materials <Link href={{pathname:`/blog`}}><span className="text-[#46a2da] text-decoration-line: underline">here</span></Link> to also educate yourself while also imparting into your child’s life
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    - Use tools like allowance, savings jars, and educational games to make learning about money fun and engaging.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    6. Get Professional Advice
                    </p>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     This is the most important step which is often overlooked. Consider consulting with a financial advisor who can help create and manage your investment plan. Professional advice can provide personalized strategies based on your unique financial situation and goals.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                       
                    Action Steps:
                    </p>  

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     - Schedule a consultation with a <Link href={{pathname:`/contact-us`}}><span className="text-[#46a2da] text-decoration-line: underline">certified financial advisor</span></Link>.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    - Regularly review your investment plan with the advisor to ensure it remains aligned with your goals.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Investing in your child’s financial future is one of the most important steps you can take as a parent. Remember, the goal is not just to accumulate wealth, but to provide your children with the opportunities and security they need to thrive.
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Secure your child’s financial future today. Contact <Link href={{pathname:`/`}}><span className="text-[#46a2da] text-decoration-line: underline">REKIT Financial Advisors</span></Link>  for expert advice and personalized financial planning. Together, we can turn your dreams for your children into reality.
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

export default PersonalFinance;
