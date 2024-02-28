import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import AppLayout from "../../layouts/AppLayout";
import Image from "next/image";
import clipThree from "./assets/naira-notes.png"
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
                        pathname: `/blog/financialNewsAndUpdates/[slug]`,
                        query: { slug: 'financial-news-26-02-2024' },
                      }}
                      
                    >
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway cursor-pointer">
                    World Macro-economic report as of 26th February, 2024
                    </h1>
                    </Link>
                    <p className="leading-[1.2rem] font-normal font-inter text-[#212020] text-[1rem]">       
                    The IMF warns of a potential 35% depreciation in Nigeria's official exchange rate this year, possibly leading to a peak inflation rate of 44%. The current rate stands at N1,542.58 per dollar, but could reach N2,081 per dollar. Nigeria's monetary policy lacks tightening to curb inflation below 20%, exacerbated by factors like limited local production and recent import liberalization. Adverse climate events have further weakened the economy, prompting the IMF to recommend collaborative efforts with development partners for a comprehensive economic strategy. Domestic demand is declining, and growth could stagnate in 2024, gradually recovering to 2% by 2028. Concerns over Nigeria's international reserves and potential shocks impacting stability and poverty are raised, with a projected rise in the fiscal deficit driven by social unrest and fuel subsidies. Despite efforts to address expenditure, the debt-to-GDP ratio may still rise, and inflation spikes could restrict access to external financing, potentially leading to reserves declining to $17 billion by 2025, posing challenges for debt repayment and humanitarian needs.
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
