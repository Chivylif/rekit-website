import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import axios from "axios";
import AppLayout from "../layouts/AppLayout";
import Banner from "../components/Banner";
import BlogRefresh from "../components/BlogRefresh";
import SmallWrapper from "../components/SmallWrapper";
import Image from "next/image";
import Spending from "../assets/images/SPENDING.jpg"
import Button from "../components/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import bannerfive from "../assets/images/bannerfive.png";
import InsightCard from "../components/investInsightCard";
import InsightPost from "../components/InsightsPost";
import Link from "next/link";
import { blogPosts } from "../constants";

const BlogPV = () => {

  const router = useRouter();
 
  
  const ref = useRef(null);
  const postRef = useRef(null);

  const handleNavigate = (e) => {
    e.preventDefault()
      const {index, category} = e.target.closest("[data-category]").dataset
       router.push({
      pathname: `/blog/${encodeURIComponent(category)}`,
      query: { param1: index }
    });

   
  };

  const obj = {
    lifestyle: "Lifestyle",
    stories: "Stories",
    investmentInsights: "Investment Insights",
    research: "Research"
  }

  


  


  const setRelatedPostMethod = (description) => {
    if (description === "Investment Insights")
      return sliceToTen(sortedPosts.investmentInsights);
    else return sliceToTen(sortedPosts.description);
  };

  // const postHandler = (event) => {
  //   event.preventDefault();
  //   let { postid } = event.target.closest("[data-postid]").dataset;
  //   let { description } = event.target.closest("[data-description]").dataset;
  //   for (let i = 0; i < categoryArr.length; i++) {
  //     let category = categoryArr[i];
  //     if (categoryArr[i] === "Investment Insights") {
  //       const categorisedArr = insightsFetch.filter(
  //         ({ description }) => description === category
  //       );
  //       setSortedPosts({
  //         ...sortedPosts,
  //         [sortedPosts.investmentInsights]: categorisedArr,
  //       });
  //     } else {
  //       const categorisedArr = insightsFetch.filter(
  //         ({ description }) => description === category
  //       );
  //       setSortedPosts({
  //         ...sortedPosts,
  //         [sortedPosts[`${category}`]]: categorisedArr,
  //       });
  //     }
  //   }
  //   setRelatedPosts(
  //     sliceToTen(
  //       insightsFetch.filter((post) => post.description === description)
  //     )
  //   );

  //   setPost(insightsFetch.find((blogs, index) => index === +postid));
  //   setNextPage(false);
  //   setPrevPage(false);
  //   setRevealPost(true);
  //   setEffectLoad(false);
  //   setColumnTwoWidth("0");
  //   setColumnOneWidth("4/5");
  //   setSeperateBorder("2");
  //   setPaddingTop("10");
  //   setBackgroundPost("white");
  // };

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog</title>
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
          content="Our Edge Members Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
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
          content="Insights | Rekit Financial Advisors Limited"
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
                    src={Spending}
                    alt="img"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                    Spending Habits
                    </h1>
                    <p className="leading-[1.2rem] font-normal font-inter text-[#212020] text-[1rem]">       
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Libero enim sed faucibus turpis in eu mi bibendum neque. Ut ornare lectus sit amet est placerat in egestas.
                    </p>  
                </div>

                </div>
                <div className="lg:w-1/5 px-[1rem] lg:ml-[-2rem] pt-10 lg:pt-20 mx-auto  pb-5">
                <h1 className="font-extrabold pt-1 pb-8 text-3xl font-raleway">
                               Category
                                </h1>
                    {Object.entries(obj).map(([category, name], index)=> {
                        return (
                            <div
                            className="pt-1 lg:pt-2 pb-8 lg:pb-8"
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
                                <p className="leading-[1.0rem] font-normal font-inter text-[#212020] text-[0.9rem]">       
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </p>
                                </div>
                          </Link>
                               
                           
                          </div>
                        )
                    })}
                </div>
            </div>
            <div className="grid lg:grid-cols-4 mb-1 lg:mb-1 justify-items-center px-[3rem] pt-[3rem] pb-[3rem] ">
                {blogPosts.map(({ images, slug, description, title }, idx) => {
                    return(
                   
                        <div
                        ref={postRef} 
                        className="mx-auto px-[1rem] w-5/6 pb-[3rem]" 
                        key={idx} 
                        data-index={idx}
                        data-category={slug}
                        onClick={handleNavigate}                        
                        >   
                               
                          <Image
                          id={idx} 
                          src={images[0]}
                          alt="img"
                          width="250px"
                          height="200px"
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
                    
                    )
                })}
            </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default BlogPV;
