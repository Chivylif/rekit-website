import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import AppLayout from "../../layouts/AppLayout";
import Image from "next/image";
import clipThree from "./assets/young-nigerian-investing.png"
import Link from "next/link";

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

  

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.myinvest.africa/rekit/api/v2/blogs/search")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.data && data.data.content) {
          setBlogs(data.data.content);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);
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
                        borderRadius: "10px"
                        }}
                    />
                     <Link
                       href={{
                         pathname: `/blog/financialEducation/[slug]`,
                         query: { slug: 'how-can-young-Nigerians-build-wealth-early' },
                       }}>
                       {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                       }
                       <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway cursor-pointer">
                       Investing for the Next Generation: How Young Nigerians Can Build Wealth Early
                       </h1>
                     </Link>
                    <p className="leading-[1.2rem] font-normal font-inter text-[#212020] text-[1rem]">       
                   Recently, in Nigeria, everyone seems to have become financially aware. Graduates and undergraduates are searching daily for new ways to make money; even secondary school students want to get jobs during the holidays. Young Nigerians are becoming more interested in social media discussions about money; how to make it and more importantly, how to make it increase. Thanks to fintech apps that make saving easier.
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
                              }}>
                              {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                              }
                              <div
                               className="grid lg:grid-cols-1 mb-1 lg:mb-1"
                             >
                              <h1 className="font-extrabold pt-0.5 text-[#F08420] text-l font-raleway">
                                {name}
                                 </h1>
                                 </div>
                            </Link>
                          </div>
                        );
                    })}
                </div>
               
            </div>
            <div className="lg:w-full flex justify-center content-center px-[0.2rem] pt-1 lg:pt-3 mx-auto"> 
                <h1 className="font-extrabold pt-1 pb-8 text-3xl font-raleway"> Recent Posts </h1>
            </div>
            <div className="grid lg:grid-cols-4 mb-1 lg:mb-1 justify-items-center px-[3rem] pt-[1rem]">
                {loading ? (
                    <p className="text-center w-full col-span-4 py-10">Loading blogs...</p>
                ) : blogs.length === 0 ? (
                    <p className="text-center w-full col-span-4 py-10">No recent posts available.</p>
                ) : (
                  blogs.slice(0, 4).map(({ id, category, title, coverImage, images }, idx) => {
                    const avatar = coverImage || (images && images.length > 0 ? images[0] : "/assets/images/rekitdesktoplogo.png");
                    return (
                      <Link
                        href={{
                          pathname: `/blog/post/[id]`,
                          query: { id: id },
                        }}
                        key={idx}>
                        {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                        }
                        <div
                        ref={postRef} 
                        className="mx-auto px-[1rem] w-5/6 pb-[3rem] cursor-pointer" 
                        data-index={idx}
                        data-category={category}                               
                        >  
                        <Image
                        src={avatar}
                        alt="img"
                        width={200}
                        height={150}
                        style={{
                            borderRadius: "10px",
                            objectFit: "cover", // Add this line
                            width: "200px",     // Ensure width is fixed
                            height: "150px",    // Ensure height is fixed
                            overflow: "hidden", 
                            
                            }}
                        />  
                          <h1 id={`title-${idx}`}  className="font-extrabold pt-0.5 text-[#F08420] text-l font-raleway line-clamp-2">
                          {title}
                          </h1>
                          <p id={`cat-${idx}`}  className="leading-[1.0rem] font-normal font-inter text-[#212020] text-[0.8rem] mt-2">       
                          {category}
                          </p> 
                    </div>
                      </Link>
                    );
                })
                )}
            </div>
            <div className="flex justify-center content-center pb-1">
            <Link href={{pathname: `/blog/view-more`}}>
              {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
              }
              <h2 className="font-extrabold pt-1 pb-1 text-xl font-raleway cursor-pointer"> View More </h2>
            </Link>
            </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default BlogPV;
