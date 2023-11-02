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
import clipOne from "../assets/personalFinance.png"
import clipTwo from "../assets/personalFinance-1.png"
import clipThree from "../assets/personalFinance-2.png"

import { blogPosts } from "../../../constants";


// export async function getServerSideProps(context) {
//   // Disable caching for this page
//   context.res.setHeader('Cache-Control', 'no-store');

//   return {
//     props: {},
//   };
// }

const PersonalFinance = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "personalFinance".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | Secrets of Billionaires</title>
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
          content="Blog | Personal Finance | Rekit Financial Advisors Limited"
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
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                    Unlock the Wealth-Building Secrets of Billionaires: A Financial Planning Roadmap for Aspiring Young Adults
                    </h1>
                    <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                    Author:  Samuel Apanisile
                    </h3>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Many young adults aspire to be as wealthy as Dangote, Otedola, Elon Musk, and other successful entrepreneurs. While there is no single formula for success, research has shown that billionaires have certain traits that help them build and sustain their wealth. These traits include an appetite for smart risk-taking, long-term focus on their business, and sheer determination. However, it is important to note that these traits are not the only factors that contribute to success.
                    </p>  

                    <div className="flex justify-center content-center pb-4 ">
                    <Image
                    src={clipOne}
                    className="mx-auto"
                    alt="dangote-musk-otedola"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    </div>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Good personal finance management plays a crucial role in building wealth. Personal finance refers to the management of the financial resources of an individual. It involves making informed decisions about budgeting, earning, investing, saving, and spending money to achieve financial goals in order to achieve a financially secure future. 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    For young adults globally, managing personal finances can be challenging due to the current economic situation, high inflation rates, and relatively lower income levels. Nevertheless, by following a few simple steps, you can take control of your finances and work towards achieving your financial goals. Here is a framework that can be effective for young adults:  
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    1. Create a budget: A budget is a plan that helps you track your income and expenses. It can help you identify areas where you can cut back on spending and save more money. Start by listing all your sources of money or revenue (your income) and the things you spend money on – (your expenses). Then, categorise your expense under headers such as rent, food, transportation, entertainment, etc. You should then allocate your income to these different categories. Make sure to also set aside some money for investment savings and emergencies.   
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    2. Save for emergencies: Emergencies can happen at any time, and having an emergency fund can help you deal with unexpected expenses without going into debt. You should aim to save at least three months' worth of living expenses in an emergency fund.   
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    3. Pay off high-interest debt: With a good budget and an emergency fund, you should not be in debt. However, for those who already have high-interest debt, such as credit card debt and debts from loan apps, it can be a significant drain on your finances. Paying off these debts as soon as possible can help you save money on interest payments.   
                    </p> 

                    <div className="flex justify-center content-center pb-4 ">
                    <Image
                    src={clipTwo}
                    className="mx-auto"
                    alt="5-steps-of-financial-planning"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    </div>

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    4. Invest for the future: Investing your money can help you grow your wealth over time. There are numerous investment options available, including stocks, bonds, and mutual funds. Nevertheless, it is essential to conduct thorough research and choose investments that align with your risk tolerance.  When people hear of investment, they usually think it’s for the very wealthy.  Nothing could be further from the truth. Investment means putting money aside either into a scheme, fund or project that helps to ensure that the money you invest (your capital) grows and you can also earn income from the investment.  In general, investments come with risk and as a rule of the thumb, the higher the risk, the higher the return. Always best to get information and in some cases, professional advice before investing.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    5. Stay informed: Keep up-to-date with the latest financial news and trends. This can help you make informed decisions about your finances.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    At REKIT Financial Advisors, we always advice our clients to " Pay Themselves First". Over time, we have discovered that it is a smarter personal finance strategy that involves setting aside a portion of your income for savings or investment before paying for other expenses. Do you have a working personal finance plan like this?   
                    </p>

                    <p className="leading-[1.2rem]  pb-1 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Category Percentage of Income 
                    </p>

                    <p className="leading-[1.2rem] px-[2rem] pb-1 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Savings 30% 
                   </p>
                   <p className="leading-[1.2rem] px-[2rem] pb-1 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                   Housing 25% 
                   </p>
                   <p className="leading-[1.2rem] px-[2rem] pb-1 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                   Transportation 10% 
                   </p>
                   <p className="leading-[1.2rem] px-[2rem] pb-1 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                   Food 10% 
                   </p>
                   <p className="leading-[1.2rem] px-[2rem] pb-1 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                   Utilities 5%  
                    </p>
                    <p className="leading-[1.2rem] px-[2rem] pb-1 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                   Entertainment 10% 
                   </p>
                   <p className="leading-[1.2rem] px-[2rem] pb-1 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                   Miscellaneous 5% 
                   </p>
                   <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">        
                   Emergency fund 5%
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

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[0.9rem] font-style: italic">       
                     * Please note that this is a general plan and may be customized to your specific financial situation. It is always best to consult with a financial advisor to customize and operationalize this plan for you. Again, it must be a dynamic plan, well that is another story for another day 😃  
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    However, an intriguing question that often arises is whether personal finance, which begins with budgeting, is accessible primarily to those with a source of income.  
                    Well, this is a valid question that personal finance management can be challenging for people who are unemployed or do not have a steady income. However, whether or not you have regular or steady income, it is still possible to manage your finances effectively by following some simple steps: 
                    </p>  

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	Look for alternative sources of income: If you are unemployed, consider looking for alternative sources of income such as freelance work or part-time jobs. You can also consider starting a small business with the skills you have.    
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	Take advantage of government programs: In Nigeria for example, the government has several programs aimed at helping unemployed people and small business owners. Look for programs that you may be eligible for and take advantage of them.   
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	Consulting with a licensed financial advisor can greatly benefit individuals seeking informed decisions about their personal finances. A financial advisor can offer guidance on investment strategies, recommend suitable savings and investment solutions for volatile environments, suggest resilient fund managers, assist with tax and retirement planning, provide valuable financial education and career advancement training, among other services. They can also help you navigate the complexities of financial markets and avoid common pitfalls.   
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    In economies, where uncertainties are prevalent, it is vital to be cautious when making investment decisions. Nevertheless, consulting a financial advisor is not always mandatory. With the right knowledge and resources, individuals can effectively manage their personal finances independently. However, it is crucial to ask yourself: Do I truly understand the intricacies of dealing with uncertainty, and can I identify my own biases and blind spots regarding personal finances? Your answers to these questions would ignite the need to engage a professional and licensed financial advisor. 
                    </p>  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    That being said, it is crucial to recognize that financial advisors are skilled professionals with expertise in finance. They offer valuable insights and assist you in making informed decisions about your finances and investments. However, selecting a reputable advisor is vital; they should have relevant experience in advising on customized investment decisions that benefit from uncertainty and be licensed by the appropriate regulatory body, such as REKIT Financial Advisors
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Remember, managing personal finances demands discipline and consistency. Engaging REKIT Financial Advisors to guide you through the framework described above can empower you to take control of your finances and work toward your financial goals. Why not follow the example of Dangote, Otedola, and Elon Musk, who surround themselves with expert financial advisors?   
                    </p> 
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]"> 
                    Contact us right now at: info@rekitadvisory.com 
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
