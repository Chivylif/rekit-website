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
import clipOne from "../../../public/assets/skills-entrepreneur-1.jpeg"
import clipTwo from "../assets/skills-entrepreneur-2.jpeg"

import { blogPosts } from "../../../constants";


// export async function getServerSideProps(context) {
//   // Disable caching for this page
//   context.res.setHeader('Cache-Control', 'no-store');

//   return {
//     props: {},
//   };
// }

const BusinessFinance = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "businessFinance".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | Must Have Skills of An Entrepreneur</title>
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
          Business Finance
        </h1>

        <div className="lg:w-4/5 px-[0.2rem] pt-5 lg:pt-5 mx-auto pb-5 border-r-3"> 
                <div className="mx-auto px-[1rem]">
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                    The Six Must-Have Skills for Thriving as an Entrepreneur.
                    </h1>
                    {/* <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                    Author:  Samuel Apanisile
                    </h3> */}

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Hey there, friends! Today, we are diving into the world of your hidden superpowers, and no, we are not talking about flying or disappearing. We are talking about the six must-have skills that all budding entrepreneurs must have to thrive in today’s economy. The interesting thing is these super skills are linked to managing money and investments.
                    </p> 

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     So, get ready to put on your invisible financial cape and unlock your inner financial superhero as we reveal the secrets to becoming a money-saving, investment-generating entrepreneur.
                    </p> 

                    <div className="flex justify-center content-center pb-1 ">
                    <Image
                    src={clipOne}
                    className=""
                    alt="dangote-musk-otedola"
                    style={{
                        borderRadius: "10px"
                     
                        }}
                    />
                    
                    </div>

                    <p className="leading-[1.2rem] text-center font-normal font-inter text-[#212020] text-[0.9rem] font-style: italic pb-5">       
                    Unlock your inner financial superhero!
                    </p> 

                  

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Here are the six superpowers you need to succeed in the business world:  
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    i. Superpower of Budgeting: In the business world, it is important to take budgeting seriously. By allocating your resources wisely, you minimize waste and maximize profits.   
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    Do you sometimes make profit in your business and then wonder where it all went? Budgeting is your solution.    
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    You need to allocate your earnings wisely: some for essential business needs, some for savings as an emergency fund, some for business investments, and the rest for miscellaneous expenses.   
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    When earnings roll in, knowing exactly where they're headed minimizes financial headaches. That's the beauty of budgeting—it keeps your business finances organized and hassle-free.    
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    ii. Superpower of Resilience: Like a superhero who bounces back from challenges, entrepreneurs need to have the power of resilience. Instead of a protective suit, it’s this skill that helps you recover from financial setbacks.  
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    In business, you might face unexpected problems, but your resilience allows you to learn from mistakes, adapt, and become stronger while keeping your finances on track. 
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    iii. Superpower of Adaptive Learning:  In the business world, with the skill of adaptive learning, you’ll be unbeatable. Learning never stops for an entrepreneur, whether it’s staying updated on market trends or learning business risk, the power of knowledge is important.  
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    That's why getting advice from qualified financial experts is crucial. They can help you understand business risks, not just to handle the ups and downs but to benefit from them. Learning from them helps you adjust to new money situations and stay ahead in your business.    
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    iv. Superpower of Patience: Entrepreneurs need to have the power of patience. You have to resist the urge to cash in on investments too quickly because you know that patience can turn a small investment into a big one.   
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    In business, you understand that success takes time. You wait for the right moment to make your move, ensuring your investments reach their full potential.   
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    v. Superpower of Compound Interest: Imagine having the ability to see into the future when it comes to your money. This power allows you to understand how your savings and investments can grow over time. It is like a crystal ball that shows you how your money can multiply.   
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    In business, this power helps you spot opportunities, understand financial trends, and make your money work for you over the long run.   
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-4 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    vi. Superpower of Diversification: Diversification is like your shield against financial risks. It is like Batman using various gadgets to protect himself. In the financial world, it is important to spread your investments to reduce risks and so, in business, you spread your investments across different assets to make sure one bad move will not hurt your entire financial plan.    
                    </p> 

                    <div className="flex justify-center content-center pb-1">
                    <Image
                    src={clipTwo}
                    className="mx-auto"
                    alt="5-steps-of-financial-planning"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    
                    </div>

                    <p className="leading-[1.2rem] text-center font-normal font-inter text-[#212020] text-[0.9rem] font-style: italic pb-5">       
                    You are the true superhero of your financial journey!   
                    </p> 

                   

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    So, there you have it, aspiring entrepreneurs: your six secret superpowers to thrive in an uncertain world. You may not be able to leap tall buildings or fly like superman, but armed with these financial superpowers, you are ready to conquer the business world. Put on your entrepreneurial cape and go forth, making sound financial decisions that will turn you into the hero of your own financial story.    
                    </p>

                   

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Need some of that financial knowledge we talked about earlier? Our experts are a phone call or email away. Talk to an advisor on our hotline <strong> 07062106633 </strong> or via email <strong> info@rekitadvisory.com </strong>.     
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

export default BusinessFinance;
