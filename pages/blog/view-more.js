import * as React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import AppLayout from "../../layouts/AppLayout";
import Image from "next/image";
import Link from "next/link";

const InvestmentInsights = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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
        <title>Rekit | REKIT Blog | REKIT BLOG</title>
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
          content="This is the blog page for Rekit Blog Preview Page"
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
          content="Blog | Investment Insights | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <div className="flex-col justify-center content-center mx-50 lg:flex-col bg-white md:flex-col pb-10">
        <h1 className="flex justify-center content-center pt-5 text-[#F08420] font-raleway font-bold text-[1.5rem] lg:mx-10 lg:text-[2.5rem] uppercase pb-3">
          REKIT BLOG
        </h1>
            <div className="grid lg:w-4/5 sm:grid-cols-2 lg:grid-cols-4 mx-auto mb-1 lg:mb-1 justify-items-center lg:justify-items-center px-[4rem] ">
                {loading ? (
                    <p className="text-center w-full col-span-4 py-10">Loading blogs...</p>
                ) : blogs.length === 0 ? (
                    <p className="text-center w-full col-span-4 py-10">No posts available.</p>
                ) : (
                  blogs.map(({ id, title, category, coverImage, images }, idx) => {
                    const avatar = coverImage || (images && images.length > 0 ? images[0] : "/assets/images/rekitdesktoplogo.png");
                    return (
                      <Link
                        href={{
                          pathname: `/blog/post/[id]`,
                          query: { id: id },
                        }}
                        key={idx}
                        >
                        <div 
                        className="mx-auto px-[1rem] w-5/6 pb-[3rem] cursor-pointer"
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
                        {/* <h1 className="font-extrabold pt-0.5 text-[#F08420] text-l font-raleway">
                        {category}
                        </h1> */}
                        <p className="leading-[1.0rem] font-normal font-inter text-[#212020] text-[0.8rem] line-clamp-2 mt-2">       
                        {title}
                        </p>  
                    </div>
                      </Link>
                    );
                })
                )}
            </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default InvestmentInsights;
