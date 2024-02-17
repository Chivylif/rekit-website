import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import axios from "axios";
import AppLayout from "../../layouts/AppLayout";
import Image from "next/image";
import clipThree from "./assets/money-question-two.png"
import Link from "next/link";
import { blogPosts } from "../../constants";

const BlogPV = () => {

  const router = useRouter();
 
  
  const ref = useRef(null);
  const postRef = useRef(null);


  const blogCategories = {
    investmentInsights: "Investment Insights",
    personalFinance: "Personal Finance",
    retirementPlanning: "Retirement Planning",
    taxation: "Taxation",
    financialMarketAnalysis: "Financial Market Analysis",
    realEstate: "Real Estate",
    financialEducation: "Financial Education",
    businessFinance: "Business Finance",
    financialNewsAndUpdates: "Financial News and Updates",
    insurance: "Insurance"
  }

  


  

  
  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog</title>
        <meta
          name="description"
          content="Our Blog. This is the landing page where insightful posts are shared about money habits and investment opportunities from our in-house professionals."
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
          content="Our Blog. This is the landing page where insightful posts are shared about money habits and investment opportunities from our in-house professionals."
        />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta
          property="og:description"
          content="Our Blog. This is the landing page where insightful posts are shared about money habits and investment opportunities from our in-house professionals."
        />
        <meta
          property="og:title"
          content="Blogs | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <AppLayout>
        <div className="flex-col justify-center content-center mx-50 lg:flex-col bg-white md:flex-col pb-10">
            <div className="lg:flex">
              
                <div className="lg:w-3/5 px-[0.2rem] pt-10 lg:pt-20 mx-auto pb-5 border-r-3"> 
                <div className="mx-auto px-[1rem]">
                    <Image
                    src={clipThree}
                    alt="img"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                     <Link
                      href={{
                        pathname: `/blog/financialEducation/[slug]`,
                        query: { slug: '5-money-question-to-ask-your-partner-before-marriage' },
                      }}
                      
                    >
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway cursor-pointer">
                    5 Money Question To Ask Your Partner Before Marriage
                    </h1>
                    </Link>
                    <p className="leading-[1.2rem] font-normal font-inter text-[#212020] text-[1rem]">       
                    Love is all around during this romantic season, and with it comes the anticipation of proposals. While it's a dream for many to be proposed to now, it's important to pause and consider some questions. Have you delved into his spending habits? This step, often overlooked, is crucial before saying "Yes," and we don't want you to overlook it.
                    </p>  
                </div>

                </div>
                <div className="lg:w-1/5 px-[1rem] lg:ml-[-2rem] pt-10 lg:pt-20 mx-auto  pb-5">
                <h1 className="font-extrabold pt-1 pb-8 text-3xl font-raleway">
                               Category
                                </h1>
                    {Object.entries(blogCategories).map(([category, name], index)=> {
                        return (
                            <div
                            className="pt-1 lg:pt-2 pb-2 lg:pb-2 cursor-pointer"
                            key={index}
                          >
                           <Link
                            href={{
                              pathname: '/blog/[slug]',
                              query: { slug: category },
                            }}
                          >
                             <div
                              className="grid lg:grid-cols-1 mb-1 lg:mb-1"
                            >
                             <h1 className="font-extrabold pt-0.5 text-[#F08420] text-l font-raleway">
                               {name}
                                </h1>
                                </div>
                          </Link>
                               
                           
                          </div>
                        )
                    })}
                </div>
               
            </div>
            <div className="lg:w-full flex justify-center content-center px-[0.2rem] pt-1 lg:pt-3 mx-auto"> 
                <h1 className="font-extrabold pt-1 pb-8 text-3xl font-raleway"> Recent Posts </h1>
                </div>
            <div className="grid lg:grid-cols-4 mb-1 lg:mb-1 justify-items-center px-[3rem] pt-[1rem] pb-[3rem]">
                {blogPosts.map(({ slug, category, description, title }, idx) => {
                    return(
                      <Link
                      href={{
                        pathname: `/blog/${category}/[slug]`,
                        query: { slug: slug },
                      }}
                      key={idx} 
                    >
                        <div
                        ref={postRef} 
                        className="mx-auto px-[1rem] w-5/6 pb-[3rem] cursor-pointer" 
                        
                        data-index={idx}
                        data-category={slug}
                                               
                        >   
                          <h1 id={idx}  className="font-extrabold pt-0.5 text-[#F08420] text-l font-raleway">
                          {description}
                          </h1>
                          <p id={idx}  className="leading-[1.0rem] font-normal font-inter text-[#212020] text-[0.8rem]">       
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

export default BlogPV;
