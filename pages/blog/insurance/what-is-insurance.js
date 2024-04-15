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
import clipOne from "../assets/insurance1.jpeg"
import clipTwo from "../assets/insurance2.jpeg"

import { blogPosts } from "../../../constants";


// export async function getServerSideProps(context) {
//   // Disable caching for this page
//   context.res.setHeader('Cache-Control', 'no-store');

//   return {
//     props: {},
//   };
// }

const Insurance = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "insurance".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | Insurance</title>
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
          content="This is the blog page for Insurance Posts"
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
          content="Blog | Insurance | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <AppLayout>
        <div className="flex-col justify-center content-center mx-50 lg:flex-col bg-white md:flex-col pb-10">
        <h1 className="flex justify-center content-center pt-5 text-[#F08420] font-raleway font-bold text-[1.5rem] lg:mx-10 lg:text-[2.5rem] uppercase">
            Insurance
        </h1>

        <div className="lg:w-4/5 px-[0.2rem] pt-5 lg:pt-5 mx-auto pb-5 border-r-3"> 
                <div className="mx-auto px-[1rem]">
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                    Insurance: A Beginner's Guide to Understanding the Basics
                    </h1>
                    {/* <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                    Author:  Samuel Apanisile
                    </h3> */}

                    <div className="flex justify-center content-center pb-1 ">
                    <Image
                    src={clipOne}
                    className=""
                    alt="what is Insurance"
                    style={{
                        borderRadius: "10px"
                     
                        }}
                    />                   
                    </div>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                     Insurance is a financial product designed to protect individuals or organizations from financial loss or uncertainty by transferring the risk of loss to an insurance company in exchange for payment of a premium. It serves as a safety net, providing coverage for various risks such as property damage, medical expenses, liability, or loss of income.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Here are the basics of insurance and how to get started:
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    1.	Types of Insurance
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    It’s important to understand that there are various types of insurance available to cover different aspects of life and business. These include:
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[0.9rem]">       
                    1.	Life Insurance: Provides financial support to beneficiaries in the event of the insured's death.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[0.9rem]">       
                    2.	Health Insurance: Covers medical expenses such as doctor visits, hospitalization, and prescriptions.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[0.9rem]">       
                    3.	Property Insurance: Protects against damage to property, including homes, vehicles, and businesses.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[0.9rem]">       
                    4.	Liability Insurance: Covers legal liabilities arising from injuries or damages caused to other people or property.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[0.9rem]">       
                    5.	Disability Insurance: Provides income replacement if the insured becomes unable to work due to a disability.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[0.9rem]">       
                    6.	Business Insurance: Protects businesses from financial losses due to property damage, liability claims, or interruption of operations.
                    </p> 


                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    2.	Assess Your Needs
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Before purchasing insurance, the next step is to assess your needs and determine the type and amount of coverage required. Consider factors such as your health, assets, liabilities, income, and financial goals.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    3.	Research Insurance Providers
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Research insurance companies to find reputable ones with strong financial ratings and a good track record of customer service. You can use online resources, such as insurance company websites, consumer reviews, and ratings agencies to evaluate insurers.
                    </p> 

                    <div className="flex justify-center content-center pb-1 ">
                    <Image
                    src={clipTwo}
                    className=""
                    alt="list-of-insurance-companies"
                    style={{
                        borderRadius: "10px"
                     
                        }}
                    />                   
                    </div>

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    4.	Compare Quotes
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Obtain quotes from multiple insurance companies to compare coverage options, premiums, deductibles, and limits. This will help you find the most suitable policy at a competitive price.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    5.	Understand Policy Terms
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Read and understand the terms and conditions of the insurance policy before purchasing. Pay attention to coverage exclusions, limitations, conditions, and any additional riders or endorsements that may be available.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    6.	Purchase Insurance
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Once you've chosen a suitable insurance policy, complete the application process, provide any necessary information or documentation, and pay the initial premium to initiate coverage.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-extrabold font-inter text-[#212020] text-[0.9rem]">       
                    7.	Review and Update
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Regularly review your insurance coverage to ensure it still meets your needs and adjust it as necessary due to changes in your life circumstances, such as marriage, birth of a child, purchase of a new property, or change in employment status.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Getting started with insurance involves understanding your risks, researching options, comparing quotes, and selecting the right coverage for your needs. It's essential to make informed decisions and regularly review your insurance coverage to ensure adequate protection. If you're unsure about any aspect of insurance, consider consulting with a licensed financial advisor for guidance. Contact an advisor by sending an email to info@rekitadvisory.com.
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

export default Insurance;
