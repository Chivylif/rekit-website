import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import AppLayout from "../../layouts/AppLayout";
import Image from "next/image";
import clipThree from "./assets/how-to-build-wealth.jpg"
import Link from "next/link";
import { indexBlogs } from "../../constants";

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
                        query: { slug: 'how-to-build-wealth-in-nigeria' },
                      }}
                      
                    >
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway cursor-pointer">
                    How to Build Wealth in Nigeria: The Role of Emotional Intelligence and Direct Debit
                    </h1>
                    </Link>
                    <p className="leading-[1.2rem] font-normal font-inter text-[#212020] text-[1rem]">       
                    As we move through the dynamic landscape of Nigeria's financial market, from January 2025 to February 2025 as seen in Figure 1 below, which implies stable GDP growth at 3.84%, inflation significantly declined from 34.8% in December 2024 to 24.5% which is still high, exchange rate stabilization at ₦1,520/$, high interest rates at 27.5%, stock market NGX ASI is up 6.1% YTD, real estate and commodities remains a long-term hedge against inflation and strong foreign reserves is at $40B; One thing remains constant: the importance of income in wealth creation. Our income is the chief source of wealth creation, and how we manage it determines our financial future.
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
            <div className="grid lg:grid-cols-4 mb-1 lg:mb-1 justify-items-center px-[3rem] pt-[1rem]">
                {indexBlogs.map(({ slug, category, description, title, avatar }, idx) => {
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
                        <Image
                        src={avatar}
                        alt="img"
                        width={"200px"}
                        height={"150px"}
                        style={{
                            borderRadius: "10px",
                            
                            }}
                        />  
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
            <div className="flex justify-center content-center pb-1">
            <Link href={{pathname: `/blog/view-more`}}>
                <h2 className="font-extrabold pt-1 pb-1 text-xl font-raleway cursor-pointer"> View More </h2>
             </Link>
            </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default BlogPV;
