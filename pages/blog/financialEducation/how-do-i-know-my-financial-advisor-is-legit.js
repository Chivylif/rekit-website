import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import AppLayout from "../../../layouts/AppLayout";
import Image from "next/image";
import Link from "next/link";
import clipOne from "../assets/legit-financial-advisor-1.jpg"
import clipTwo from "../assets/sec.png"


import { blogPosts } from "../../../constants";


const FinancialEducation = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "financialEducation".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | How Do I Know If My Financial Advisor Is Legitimate?</title>
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
          content="Blog | Financial Education | Rekit Financial Advisors Limited"
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
                    How Do I Know If My Financial Advisor Is Legitimate?
                    </h1>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    It’s gotten to a point in your life when you need to take better financial decision and you reckon the first step is talking to a financial advisor but with so many so-called experts out there and countless stories of people being misled, you’re probably wondering:
                    </p> 
                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    How do I know if my financial advisor is actually legitimate?
                    </h2> 


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

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    In this blog, we’ll walk you through the key signs to look for, the red flags to avoid, and how to confidently choose an advisor you can trust with your finances.
                    </p> 

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    1. Check Their Registration and Licenses
                    </h2> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    In Nigeria, all legitimate financial advisors must be registered with the Securities and Exchange Commission (SEC). You can easily verify this by visiting the<a href="https://sec.gov.ng/cmos/" target="_blank">SEC Nigeria Capital Market Operators Portal</a>  and searching their name or company.
                    </p> 

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
                    <span className="font-extrabold"> Tip: </span> Ask for their SEC registration number and confirm it through the portal. If they’re not listed, that’s a serious red flag.
                    </p> 

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    2. Review Their Qualifications and Certifications
                    </h2> 

                    <p className="leading-[1.2rem] px-2 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Trustworthy financial advisors hold professional certifications such as:
                    </p> 

                    <p className="leading-[1.2rem] px-2 pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    •	Certified Financial Planner (CFP)
                    </p> 
                    <p className="leading-[1.2rem] px-2 pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    •	Chartered Financial Analyst (CFA)
                    </p> 
                    <p className="leading-[1.2rem] px-2 pb-4 font-extrabold font-inter text-[#212020] text-[1rem]">       
                    •	Chartered Wealth Manager (CWM)
                    </p> 
                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    These designations show they’ve met rigorous education, ethics, and experience requirements.
                    </p> 

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    3. Ask About Their Fiduciary Duty
                    </h2> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    A Fiduciary duty is a legal and ethical obligation that requires a person or organization to act in the best interest of another party. In the context of financial advisors, fiduciary duty means the advisor is bound to prioritize your financial interests above their own. So, always ask:
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    "Do you operate under a fiduciary standard?"
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    If the answer is no, or they avoid the question, it’s a red flag. Legitimate advisors are transparent about their responsibilities.
                    </p>

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    4. Research Their Online Presence and Reviews
                    </h2> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Look up your advisor’s:
                    </p> 

                    <p className="leading-[1.2rem] px-2 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    •	Company website
                    </p> 
                    <p className="leading-[1.2rem] px-2 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    •	Google reviews
                    </p> 
                    <p className="leading-[1.2rem] px-2 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    •	LinkedIn profile
                    </p> 
                    <p className="leading-[1.2rem] px-2 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    •	Social media activity
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    A professional online presence with consistent messaging and satisfied client feedback helps build trust. Be wary of advisors with no trace online or only vague information.
                    </p>

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    5. Get a Written Agreement
                    </h2> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Before committing, ask for a written contract outlining:
                    </p> 

                    <p className="leading-[1.2rem] px-2 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    •	Services offered
                    </p> 
                    <p className="leading-[1.2rem] px-2 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    •	Fee structure (flat fee, commission, etc.)
                    </p> 
                    <p className="leading-[1.2rem] px-2 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    •	Any potential conflicts of interest
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    A legitimate financial advisor will provide clear documentation and won’t pressure you into signing quickly.
                    </p>

                    <h2 className="font-extrabold pt-0.5 text-[#212020] text-l font-raleway">
                    6. Beware of These Red Flags
                    </h2> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    If you notice any of these, walk away:
                    </p> 

                    <p className="leading-[1.2rem] px-2 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    •	Promises of guaranteed high returns
                    </p> 
                    <p className="leading-[1.2rem] px-2 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    •	Lack of transparency about fees
                    </p> 
                    <p className="leading-[1.2rem] px-2 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    •	Pressure to invest quickly
                    </p> 
                    <p className="leading-[1.2rem] px-2 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    •	No registration or license info
                    </p> 
                    <p className="leading-[1.2rem] px-2 pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    •	Unwillingness to answer your questions
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold"> Verifying your financial advisor’s legitimacy </span>is a crucial step in securing your financial well-being. Don’t hesitate to ask tough questions, do your research, and trust your instincts. A trustworthy advisor will welcome your due diligence.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold"> Need a trusted financial advisor? </span> At REKIT Financial Advisors, we’re licensed, transparent, and committed to your success.<a href="https://sec.gov.ng/cmos/" target="_blank"> Contact us today</a> for a free consultation.
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
