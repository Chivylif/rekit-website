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
import clipOne from "../../../public/assets/money-question-one.jpeg"
import clipTwo from "../assets/financialEducation2.jpg"

import { blogPosts } from "../../../constants";


// export async function getServerSideProps(context) {
//   // Disable caching for this page
//   context.res.setHeader('Cache-Control', 'no-store');

//   return {
//     props: {},
//   };
// }

const FinancialEducation = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "financialEducation".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | e Money Question To Ask Your Partner</title>
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
          content="This is the blog page for Financial Education"
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
          Financial Education
        </h1>

        <div className="lg:w-4/5 px-[0.2rem] pt-5 lg:pt-5 mx-auto pb-5 border-r-3"> 
                <div className="mx-auto px-[1rem]">
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                    5 Money Question To Ask Your Partner Before Marriage
                    </h1>
                    {/* <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                    Author:  Samuel Apanisile
                    </h3> */}

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Love is all around during this romantic season, and with it comes the anticipation of proposals. While it's a dream for many to be proposed to now, it's important to pause and consider some questions. Have you delved into his spending habits? This step, often overlooked, is crucial before saying "Yes," and we don't want you to overlook it.
                    </p> 

                     <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     Let’s drive home to this point with the story of Lily.
                    </p> 

                    <div className="flex justify-center content-center pb-1 ">
                    <Image
                    src={clipOne}
                    className=""
                    alt="couple-proposal"
                    style={{
                        borderRadius: "10px"
                     
                        }}
                    />
                    
                    </div>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Once upon a time, there was a young woman named Lily who met a charming man named Alex. They hit it off immediately, sharing laughs, dreams, and adventures. As their relationship blossomed, Lily found herself falling deeply in love with Alex, and she believed he felt the same. 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Months passed, and they talked about everything under the sun—except for one crucial topic: money. It wasn't that they avoided it intentionally; it just never seemed to come up naturally in their conversations. 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    As time went on, Lily began to notice small red flags that hinted at Alex's financial habits. He seemed to spend lavishly on nights out, frequently treating them to fancy dinners and expensive outings. At first, Lily was swept up in the excitement of their romance, but as their relationship grew more serious, she started to feel uneasy about their differing attitudes towards money.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    One day, Alex surprised Lily with tickets to a luxurious weekend getaway at a posh resort. While she appreciated the gesture, she couldn't shake the nagging feeling that their financial compatibility—or lack thereof—was becoming a serious issue. The weekend was filled with lavish meals, spa treatments, and extravagant activities, but underneath the surface, Lily felt a growing sense of discomfort.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Upon returning home, Lily decided it was time to have a heart-to-heart conversation with Alex about their financial future. But before she could broach the subject, Alex dropped a bombshell: he had accumulated a significant amount of debt from his reckless spending habits, and he was struggling to keep up with payments.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Shocked and disheartened, Lily realized that she and Alex were on completely different pages when it came to money management. Despite their deep emotional connection, their financial incompatibility cast a shadow over their relationship. Lily knew that she couldn't ignore this fundamental issue any longer.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    With a heavy heart, Lily made the difficult decision to end her relationship with Alex. It wasn't easy, but she knew that staying with him would only lead to resentment and financial strife in the long run. As she walked away, Lily vowed to herself that she would never again enter into a serious relationship without first having open and honest conversations about money.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                           
                    From that experience, Lily learned a valuable lesson: love is essential, but financial compatibility is just as important. Asking the right questions and understanding your partner's financial values and habits can save you from heartache and turmoil down the road. Lily knew that she deserved a partner who shared her vision for a stable and secure future, and she was determined not to settle for anything less. 
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Now, what are these finance questions to ask your partner while dating?
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">1. Boosting Early Revenue: The Role of Withholding Tax (WHT): </span> One of the key mechanisms in enhancing early revenue and widening the tax net is the Withholding Tax (WHT) system. This mechanism involves deducting income tax in advance from specific transactions such as rent, dividends, interest income, and professional fees. For instance, tenants can expect a 5% WHT deduction on monthly rent payments, while shareholders receiving dividends may encounter a 10% deduction. Understanding and navigating WHT implications is crucial for taxpayers aiming to stay compliant and financially savvy.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">2.	How do you typically manage your finances, and what are your views on saving and investing?: </span> Understanding your partner's approach to money management, saving habits, and investment philosophy allows for a clearer picture of their financial responsibility, discipline, and compatibility with your own financial values.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">3.	Are there any significant debts or financial obligations I should be aware of?: </span> Asking about debts or financial obligations ensures transparency and helps both partners understand the financial commitments and challenges they may face together, fostering open communication and trust in the relationship.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">4.	How do you envision handling finances in a potential long-term relationship or marriage?: </span> This question explores expectations and attitudes towards joint finances, budgeting, decision-making, and financial responsibilities, enabling couples to discuss and align their financial strategies for the future.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">5.	Have you had any significant financial experiences or challenges in the past, and how have they shaped your approach to money today?:  </span> By learning about your partner's past financial experiences and how they have influenced their current financial mindset and behavior, you gain valuable insight into their attitudes towards money, risk-taking, and resilience, facilitating a deeper understanding and empathy within the relationship 
                    </p>            

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Have you learnt a thing or two? 
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Learn from Lily and Alex's mistake. Never underestimate the importance of financial compatibility. It's crucial to have open conversations about money with your partner. Take the initiative and ask your partner about their financial goals, habits, and values. This transparency will help ensure a stronger and more stable relationship in the long run.    
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">                           
                    Happy Valentine’s week!   
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

export default FinancialEducation;
