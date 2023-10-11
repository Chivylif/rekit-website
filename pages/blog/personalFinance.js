import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import axios from "axios";
import AppLayout from "../../layouts/AppLayout";
import Banner from "../../components/Banner";
import BlogRefresh from "../../components/BlogRefresh";
import SmallWrapper from "../../components/SmallWrapper";
import Image from "next/image";
import Spending from "../../assets/images/SPENDING.jpg"
import PostBanner from "../../components/PostBanner";

import { blogPosts } from "../../constants";


// export async function getServerSideProps(context) {
//   // Disable caching for this page
//   context.res.setHeader('Cache-Control', 'no-store');

//   return {
//     props: {},
//   };
// }

const PersonalFinance = () => {
  const relatedPosts = blogPosts.filter(p=> p.slug.toLowerCase() == "personalFinance".toLowerCase());
  const [post, setPost] = useState(false);
  const [blogPost, setBlogPost] = useState(null)
  const router = useRouter()
  
  useEffect(() => {
    console.log(router.query.param1);
    if(router.query?.param1) {
      setBlogPost(blogPosts[+router.query?.param1]);
      setPost(!post)}
  }, []);

  const clickHandler = (e) => {
    e.preventDefault()
    const {index} = e.target.closest("[data-index]").dataset
    setBlogPost(relatedPosts[+index]);
    setPost(true);
  }
  



  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | Personal Finance</title>
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
            <div className="lg:flex">
                <div className="lg:w-4/5 px-[2rem] pt-5 lg:pt-5 mx-auto pb-5 border-r-3"> 
                {post && <div className="mx-auto px-[1rem]">
               <PostBanner 
               image={blogPost.images[0]}
               headline={blogPost.title}
               desc={`${blogPost.author} - ${blogPost.updatedDate}`}
               /> 
               <p className="leading-[1.4rem] pt-10 font-normal font-inter text-[#212020] text-[0.8rem] lg:text-[1rem]">       
          {blogPost.content}
              </p>  
                   
                </div>}

                </div>
               
            </div>
            <div className="grid lg:w-4/5 sm:grid-cols-2 lg:grid-cols-4 mx-auto mb-1 lg:mb-1 justify-items-center lg:justify-items-center px-[4rem] ">
                {relatedPosts.map(({ author, title, updatedDate, images, description, content }, idx) => {
                    return(
                        <div 
                        className="mx-auto px-[1rem] w-5/6 pb-[3rem]" 
                        key={idx}
                        data-index={idx}
                        onClick={clickHandler} >

                        <Image
                        src={images[0]}
                        alt="img"
                        width="200px"
                        height="150px"
                        style={{
                            borderRadius: "10px",
                            }}
                        />
                        <h1 className="font-extrabold pt-0.5 text-[#F08420] text-l font-raleway">
                        {description}
                        </h1>
                        <p className="leading-[1.0rem] font-normal font-inter text-[#212020] text-[0.8rem]">       
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

export default PersonalFinance;
